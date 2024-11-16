import express from "express";
import ejs from "ejs";
import language from "./language.js";

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("home.ejs", { languages: Object.keys(language) });
});

app.get("/hello", (req, res) => {
	const lang = req.query.language;
	const randomId = "A" + Math.floor(Math.random() * 10000000000);
	if (language[lang]) {
		res.render("hello-lang.ejs", {
			message: {
				ID: randomId,
				msgText: language[lang],
			},
			error_message: null,
		});
	} else {
		res.render("hello-lang.ejs", {
			message: null,
			error_message: "The requested language is not supported",
		});
	}
});

app.listen(5000, () => {
	console.log("Server started on port 5000");
});
