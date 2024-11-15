import express from "express";

const app = express();

app.get("/events", (req, res) => {
	console.log(`Start connection by ${req.ip}`);

	// SSE Headers
	res.setHeader("Content-Type", "text/event-stream"); // Tipo de conteúdo devolvido.
	res.setHeader("Cache-Control", "no-cache"); // Desabilita o controle de cache.
	res.setHeader("Connection", "keep-alive"); // Seta a conexão para sempre conectado.
	res.setHeader("Access-Control-Allow-Origin", "*")

	// Envio de eventos.
	let count = 0;
	const interval = setInterval(() => {
		count++;
		res.write(`data: ${count}\n\n`); // Deve seguir este formato "data: ...\n\n"

	}, 1000)

	// Limpa o intervalo quando a conexão é fechada pelo cliente.
	req.on("close", () => {
		console.log(`Close connection by ${req.ip}`);
		clearInterval(interval);
	})
})

app.listen(3000, () => {
	console.log("Server running on port 3000")
})