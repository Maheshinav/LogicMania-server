import express from "express";
import path from "path";

const app = express();

app.use(
	express.static(
		path.join(__dirname, "logic-calculator", "logic-mania", "dist")
	)
);

app.get("*", (req, res) => {
	res.sendFile(
		path.join(
			__dirname,
			"logic-calculator",
			"logic-mania",
			"dist",
			"index.html"
		)
	);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
