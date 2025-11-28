import express from "express";
const PORT = 3000;
const app = express();

app.use(express.json());
let usuarios = [];

app.get("/", (req, res) => {
  res.json("{'message': 'Hello, World GET Method!'}");
});

app.post("/", (req, res) => {
  res.json("{'message': 'Hello, World POST Method!'}");
});



app.get("/users", (req, res) => {
    res.json(usuarios);
});

app.post("/users", (request, response) => {
    const novoUsuario = request.body;

    for(const usuario of usuarios){
        if(usuario.email === novoUsuario.email){
            response.status(400).send({error: "Usuário já cadastrado!"});
            return;
        }
    }

    novoUsuario.id = usuarios.length + 1;

    usuarios.push(novoUsuario);

    response.send(novoUsuario.id);
});


app.delete("/users", (req, res) => {
    usuarios = [];
    res.status(204).send();
});

app.delete("/users/:id", (request, response) => {
    
    const id = parseInt(request.params.id);

    for(const usuario of usuarios){
        if(usuario.id === id){
            usuarios.splice(usuarios.indexOf(usuario), 1);
            return response.status(204).send();
        }
    }

    return response.status(404).send({error: "Usuário não encontrado!"});
});

app.get("/users/:id", (request, response) => {
    
    const id = parseInt(request.params.id);

    for(const usuario of usuarios){
        if(usuario.id === id){
            return response.json(usuario);
        }
    }

    return response.status(404).send({error: "Usuário não encontrado!"});
     
});


app.listen(PORT, () => {
  console.log("Servidor executando na porta ", PORT);
});