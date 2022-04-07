const fs = require("fs");
const path = require("path");

// Criar uma pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }

  console.log("Pasta criada com sucesso");
});

// Criar um arquivo, ou sobrescever um arquivo já existente
fs.writeFile( // É assincrono não acontece de uma vez
  path.join(__dirname, "/test", "test.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro", error);
    }

    console.log("Arquivo criado com sucesso!");
    // Adicionar conteúdo a um arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      ", hello world!",
      (error) => {
        if (error) {
          return console.log("Error: ", error);
        }
        console.log("Arquivo modificado com sucesso");
    //Ler Arquivo
    fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) => {
        if (error) {
        console.log('Erro: ', error)
        }
        console.log(data)
        })
      }
    );
  }
);


