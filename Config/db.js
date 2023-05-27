const mongoose = require("mongoose");
const connetion = mongoose.connect(
	"mongodb+srv://anurag:anurag@cluster0.yegk2.mongodb.net/BUYCAR"
);
module.exports = { connetion };
