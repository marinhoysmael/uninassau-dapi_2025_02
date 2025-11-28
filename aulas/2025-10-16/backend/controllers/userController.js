import express from "express";

const router = express.Router();

let usuarios = new Map();

router.get("", (req, res) => {
    res.json(Array.from(usuarios.values()));
});

router.post("", (request, response) => {
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

router.put("", (request, response) => {

    const usuarioAtualizado = request.body;

    if(!usuarios.get(usuarioAtualizado.id)){
        return response.status(404).send({error: "Usuário não encontrado!"});
    }

    //VALIDAR SE O EMAIL JÁ ESTÁ SENDO USADO POR OUTRO USUÁRIO

    usuarios.set(usuarioAtualizado.id, usuarioAtualizado);

    return response.status(204).send();
});


router.delete("", (req, res) => {
    usuarios = new Map();
    res.status(204).send();
});

router.delete("/:id", (request, response) => {
    
    const id = parseInt(request.params.id);


    if(usuarios.get(id)){
        usuarios.delete(id);
        return response.status(204).send();
    }
    

    return response.status(404).send({error: "Usuário não encontrado!"});
});

router.get("/:id", (request, response) => {
    
    const id = parseInt(request.params.id);


    if(usuarios.get(id)){
        return response.json(usuarios.get(id));
    }

    return response.status(404).send({error: "Usuário não encontrado!"});
     
});

// Exportando usando ES6 modules
export { router as userController };