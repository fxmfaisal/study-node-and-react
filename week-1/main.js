const SERVER_PORT = 8020;

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const Validation = require('./validation');
const UtilsModule = require('./utils');
const app = express();
const usersFilePath = path.resolve(__dirname, 'users.json');

app.use(bodyParser.json({ limit: '1000kb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '1000kb' }));

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

app.get('/users', (req, res) => {
  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
      res.json({
        result: 'ERROR',
        message: err.message
      });
    }

    const users = JSON.parse(data);

    res.json({
      result: 'OK',
      totalCount: Object.keys(users).length,
      data: users
    });
  });
});

app.get('/users/:userId', (req, res) => {
  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
      res.json({
        result: 'ERROR',
        message: err.message
      });
    }

    const paramUserId = req.params.userId;
    const users = JSON.parse(data);
    const selectedUser = users[paramUserId]

    if (selectedUser) {
      res.json({
        result: 'OK',
        data: selectedUser
      });
    } else {
      res.json({
        result: 'ERROR',
        message: `User with ID ${paramUserId} does not exist.`
      });
    }
  });
});

app.delete('/users/:userId', (req, res) => {
  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
      res.json({
        result: 'ERROR',
        data: err.message
      });
    }

    const paramUserId = req.params.userId;
    const users = JSON.parse(data);
    const selectedUser = users[paramUserId];

    if (selectedUser) {
      delete users[paramUserId];

      res.json({
        result: 'OK',
        message: `User with ID ${paramUserId} deleted.`,
        data: users
      });
    } else {
      res.json({
        result: 'ERROR',
        message: `User with ID ${paramUserId} does not exist.`
      });
    }
  });
});

app.post('/user/add', (req, res) => {
  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
      res.json({
        result: 'ERROR',
        data: err.message
      });
    }

    const users = JSON.parse(data);
    const bodyData = req.body;
    const id = bodyData.id;
    const name = UtilsModule.getTrimmedString(bodyData.name);
    const validation = Validation.executeValidations([
      [Validation.isNameCorrect, name]
    ]);

    if (!validation.correct) {
      return res.json({
        result: 'INVALID',
        message: validation.message
      });
    }
    
    if (users[id]) {
      res.json({
        result: 'ERROR',
        message: `User with ID ${id} already exist. Please use different ID.`
      });
    } else {
      users[id] = { name };
      
      res.json({
        result: 'OK',
        message: `User (${name}) added.`,
        data: users
      });
    }
  });
});

app.put('/user/:userId', (req, res) => {
  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
      res.json({
        result: 'ERROR',
        data: err.message
      });
    }

    const paramUserId = req.params.userId;
    const users = JSON.parse(data);
    const selectedUser = users[paramUserId];
    const bodyData = req.body;
    const beforeUpdate = JSON.stringify(selectedUser);
    const updated = {
      name: UtilsModule.getTrimmedString(bodyData.name)
    };

    const validation = Validation.executeValidations([
      [Validation.isNameCorrect, updated.name]
    ]);

    if (!validation.correct) {
      return res.json({
        result: 'INVALID',
        message: validation.message
      });
    }

    if (selectedUser) {
      Object.assign(selectedUser, updated);

      const afterUpdate = JSON.stringify(selectedUser);

      res.json({
        result: 'OK',
        message: `User with ID ${paramUserId} updated.`,
        before: beforeUpdate,
        after: afterUpdate,
        data: users
      });
    } else {
      res.json({
        result: 'ERROR',
        message: `User with ID ${paramUserId} does not exist.`
      });
    }
  });
});

app.listen(SERVER_PORT, () => {
  console.log(`App listening on localhost:${SERVER_PORT}`);
});
