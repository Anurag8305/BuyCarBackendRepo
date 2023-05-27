const express = require("express");
const { connetion } = require("./Config/db");
const { userRouter } = require("./Routes/UserRoutes");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Homepage");
});
app.use("/users", userRouter);
app.get("/about", (req, res) => {
	res.send("About");
});
app.get("/profile", (req, res) => {
	res.send("Profile");
});

app.listen(3000, async () => {
	try {
		await connetion;
		console.log("Connected To DB");
	} catch (error) {
		console.log(error);
	}
	console.log("Server in running at port 3000");
});
