export default function handler(req, res) {
    const codigo = req.query.codigo;
    res.status(200).json({
        id: codigo,
        nome: `Ana ${codigo}`,
        email: `anajulia${codigo}@teste.com`
    })
}