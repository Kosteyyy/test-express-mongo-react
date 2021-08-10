import mongoose from 'mongoose';
//Здесь схема для монгуста

const Contact = new mongoose.Schema({
	name: {type: String, required: true},
	position: {type: String, required: true},
	photo: {type: String}
})

export default mongoose.model('Contact', Contact);

