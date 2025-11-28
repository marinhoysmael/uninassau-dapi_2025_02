import express from "express";

const router = express.Router();

let messages = new Map();

router.get("", (req, res) => {
    res.json(Array.from(messages.values()));
});

router.post("", (request, response) => {
    const newMessage = request.body;

    newMessage.id = messages.size + 1;

    messages.set(newMessage.id, newMessage);

    response.send(newMessage.id);
});

router.put("/:id", (request, response) => {

    const updatedMessage = request.body;

    if(!messages.get(updatedMessage.id)){
        return response.status(404).send({error: "Message not found!"});
    }

    messages.set(updatedMessage.id, updatedMessage);

    return response.status(204).send();
}); 


export { router as messageController };