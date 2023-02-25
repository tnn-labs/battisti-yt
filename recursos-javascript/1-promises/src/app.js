// 1 - promises
// promise based => then e catch`s
import loadSomeData from "./loadSomeData.js";

loadSomeData()
  .then(function (data) {
    console.log(`Dados carregados com sucesso: `, data);
    return data;
  })
  .catch(function (error) {
    console.log(`Erro ao carregar dados: ${error}`);
  });