const SERVER_PORT = 8020;

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const Validation = require('./validation');
const UtilsModule = require('./utils');
const ModelUser = require('./model/User');
const app = express();
const db = require('./db');

db.connect(); 

app.use(bodyParser.json({ limit: '1000kb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '1000kb' }));

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

app.get('/users', async (req, res) => { 
  try {
    const users = await ModelUser.find();
    
    res.json({
      result: 'OK',
      data: users
    });
  } catch (err) {
    res.json({
      result: 'ERROR',
      message: err.message
    })
  }
});

app.get('/users/:username?', async (req, res) => {
  try {
    const username = req.params.username;

    const validation = Validation.executeValidations([
      [Validation.isUserNameCorrect, username]
    ]);

    if (!validation.correct) {
      return res.json({
        result: 'INVALID',
        message: validation.message
      });
    }

    const user = await ModelUser.findOne({ username: username }, { _id: 0, __v: 0 });

    if (user === null || typeof user === 'undefined') {
      return res.json({
        result: 'NOT_OK',
        message: 'User does not exist.'
      });
    }

    res.json({
      result: 'OK',
      data: user
    });
  } catch (err) {
    res.json({
      result: 'ERROR',
      message: err.message
    });
  }
});

app.delete('/users/:username', async (req, res) => {
  try {
    const username = req.params.username;

    const validation = Validation.executeValidations([
      [Validation.isUserNameCorrect, username]
    ]);

    if (!validation.correct) {
      return res.json({
        result: 'INVALID',
        message: validation.message
      });
    }

    const whereClause = { username: username }; 

    if (!(await ModelUser.exists(whereClause))) {
      return res.json({
        result: 'NOT_OK',
        message: 'User does not exist.'
      });
    }

    await ModelUser.deleteOne(whereClause);

    res.json({
      result: 'OK',
      message: `User "${username}" deleted.`
    });
  } catch (err) {
    res.json({
      result: 'ERROR',
      message: err.message
    });
  }
});

app.post('/user/add', async (req, res) => {
  try {
    const bodyData = req.body;
    const username = bodyData.username;
    const name = UtilsModule.getTrimmedString(bodyData.name);

    const validation = Validation.executeValidations([
      [Validation.isUserNameCorrect, username],
      [Validation.isNameCorrect, name]
    ]);

    if (!validation.correct) {
      return res.json({
        result: 'INVALID',
        message: validation.message
      });
    }

    const whereClause = { username: username }; 

    if (await ModelUser.exists(whereClause)) {
      throw new Error(`User with username "${username}" already exists.`);
    }

    await (new ModelUser({
      username: username,
      name: name
    })).save();

    res.json({
      result: 'OK',
      message: `User "${username}" added.`
    });
  } catch (err) {
    res.json({
      result: 'ERROR',
      message: err.message
    });
  }
});

app.put('/user/:username', async (req, res) => {
  try {
    const bodyData = req.body;
    const username = req.params.username;
    const name = UtilsModule.getTrimmedString(bodyData.name);

    const validation = Validation.executeValidations([
      [Validation.isUserNameCorrect, username],
      [Validation.isNameCorrect, name]
    ]);

    if (!validation.correct) {
      return res.json({
        result: 'INVALID',
        message: validation.message
      });
    }

    const whereClause = { username: username }; 

    if (!(await ModelUser.exists(whereClause))) {
      throw new Error(`User with username "${username}" does not exist.`);
    }

    await ModelUser.updateOne(whereClause, {
      $set: {
        username: username,
        name: name
      }
    });

    res.json({
      result: 'OK',
      message: `User "${username}" updated.`
    });
  } catch (err) {
    res.json({
      result: 'ERROR',
      message: err.message
    });
  } 
});

app.listen(SERVER_PORT, () => {
  console.log(`App listening on localhost:${SERVER_PORT}`);
});
