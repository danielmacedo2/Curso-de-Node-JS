const path = require("path");

// Basename
// Apenas o nome do arquivo artual
console.log(path.basename(__filename));

// Nome do Diretório atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivo
// console.log(path.join(__dirname))
console.log(
  path.join(__dirname, "test", "test.html"),
  "hello node",
  (error) => {
    if (error) {
        return console.log("Erro: ", error);      
    }
    console.log("Arquivo criado com sucesso");
  }
);
