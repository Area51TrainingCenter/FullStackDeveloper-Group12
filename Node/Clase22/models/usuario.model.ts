const mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		size: 100,
		unique: true,
		email: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true
	},
	rol: {
		type: mongoose.Schema.ObjectId,
		ref: "Roles"
	}
})

function AutoPopulate(next) {
	this.populate("rol")
	next()
}

esquema.pre("find", AutoPopulate)
esquema.pre("findOne", AutoPopulate)

const Usuario = mongoose.model("Usuario", esquema)

export default Usuario