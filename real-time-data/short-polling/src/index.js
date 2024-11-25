import express from "express";

const app = express();

app.use(express.json());


let counter = 0;

app.get("/check-updates", (req, res) => {
	counter++;

	if (counter >= 5) {
		res.json({ data: counter })
	} else {
		res.json({ message: "Not have updates!" });
	}
})

app.use(express.static("public"));

app.listen(3000, () => console.log("Server running on http://localhost:3000"))