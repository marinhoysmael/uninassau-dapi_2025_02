import express from "express";
const PORT = 3000;
const app = express();

app.use(express.json());
let usuarios = new Map();;

app.get("/", (req, res) => {
  res.json("{'message': 'Hello, World GET Method!'}");
});

app.post("/", (req, res) => {
  res.json("{'message': 'Hello, World POST Method!'}");
});



app.get("/users", (req, res) => {
    res.json(Array.from(usuarios.values()));
});

app.post("/users", (request, response) => {
    const novoUsuario = request.body;

    for(const usuario of usuarios.values()){
        if(usuario.email === novoUsuario.email){
            response.status(400).send({error: "Usuário já cadastrado!"});
            return;
        }
    }

    novoUsuario.id = usuarios.size + 1;

    usuarios.set(novoUsuario.id, novoUsuario);

    response.send(novoUsuario.id);
});

app.put("/users", (request, response) => {

    const usuarioAtualizado = request.body;

    if(!usuarios.get(usuarioAtualizado.id)){
        return response.status(404).send({error: "Usuário não encontrado!"});
    }

    //VALIDAR SE O EMAIL JÁ ESTÁ SENDO USADO POR OUTRO USUÁRIO

    usuarios.set(usuarioAtualizado.id, usuarioAtualizado);

    return response.status(204).send();
});


app.delete("/users", (req, res) => {
    usuarios = new Map();
    res.status(204).send();
});

app.delete("/users/:id", (request, response) => {
    
    const id = parseInt(request.params.id);


    if(usuarios.get(id)){
        usuarios.delete(id);
        return response.status(204).send();
    }
    

    return response.status(404).send({error: "Usuário não encontrado!"});
});

app.get("/users/:id", (request, response) => {
    
    const id = parseInt(request.params.id);


    if(usuarios.get(id)){
        return response.json(usuarios.get(id));
    }

    return response.status(404).send({error: "Usuário não encontrado!"});
     
});


app.listen(PORT, () => {
  console.log("Servidor executando na porta ", PORT);
});