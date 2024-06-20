export default function cliente(req, res) {
    if (req.method === "GET") {
        handlerGet(req, res);
    } else {
        res.status(405).send();
    }
}

function handlerGet(req, res) {
    res.status(200).json({
        id: 3,
        nome: "Maria",
        idade: 33
    });
}