const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.raxkb.mongodb.net/database?retryWrites=true&w=majority`, // Template String
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar com o banco de dados: ",
          error
        );
      }

      return console.log("Conexão ao banco de dados realizada com sucesso!");
    }
  );
};

module.exports = connectToDatabase;
