import mongoose from "mongoose";

mongoose
	.connect("mongodb://localhost/logicmania")
	.then(() => {
		console.log("Connected to the database");
	})
	.catch((err) => {
		console.error("Can't connect to the database - ERROR:", err);
	});
