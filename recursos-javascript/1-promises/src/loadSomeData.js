import data from "./data.js";

function loadSomeData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      resolve(data);
    }, 1000);
  });
};

export default loadSomeData;