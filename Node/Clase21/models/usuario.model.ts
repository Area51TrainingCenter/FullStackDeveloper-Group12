import mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		size: 100,
		unique: true,
		email: true,
		lowercase: true
	}
})

const Usuario = mongoose.model("Usuario", esquema)

export default Usuario