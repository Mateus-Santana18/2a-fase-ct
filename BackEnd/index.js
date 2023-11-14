import  Express  from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./database.js";
import User from "./models/User.js"


const server = Express();
server.listen(3000, console.log("Servidor rodando na porta 3000..."));

try {
    await Connection.authenticate();
    console.log("Conexão com o BD estabelecida com sucesso!!!");
} catch (error) {
    console.error(error)
}

const newUser =  new User({
    name: 'Eduardo',
    email: 'eduardo@gmail.com',
    senha: '123456'
})

const salvar = async () => {
    const savedUser = await newUser.save()
    console.log(savedUser)
}

salvar()

server.use(cors());
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())