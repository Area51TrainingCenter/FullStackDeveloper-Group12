import mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	rol: {
		type: String,
		required: true,
		unique: true
	}
})

const Roles = mongoose.model("Roles", esquema)

export default Roles