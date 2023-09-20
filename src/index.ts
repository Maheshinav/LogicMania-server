import express from 'express';
import mongoose from 'mongoose';


const app = express();
const PORT = 8000;

mongoose
	.connect("mongodb://localhost/logicmania")
	.then(() => {
		console.log("Connected to the database");

	
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.error("Can't connect to the database - ERROR:", err);
	});

app.get('/', (req, res) => {
  res.send('Finally I am up');
});
