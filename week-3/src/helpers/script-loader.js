let injected = {};

export default function scriptLoader(arrOfScripts) {
  const handler = function (script) {
    if (!injected[script.src]) {
      var ns = document.createElement('script');
      
      if (typeof script.onload == 'function') {
        ns.onload = script.onload;
      }

      injected[script.src] = true;
      ns.src = script.src;
      ns.async = true;

      document.body.appendChild(ns);
    }
  };

  if (Array.isArray(arrOfScripts)) {
    arrOfScripts.forEach(script => {
      handler(script);
    });
  } else {
    handler(arrOfScripts);
  }
}

export function scriptLoaderSync(arrOfScriptsSrc) {  console.log('exec!')
  function next(index) {
    var currSrc = arrOfScriptsSrc[index];

    if (typeof currSrc == 'string') {
      var ns = document.createElement('script');
      
      ns.onload = function () {
        next(index + 1);
      };
      ns.src = currSrc;
      ns.async = true;
      injected[currSrc] = true;

      document.body.appendChild(ns);
    }
  }

  next(0);
}