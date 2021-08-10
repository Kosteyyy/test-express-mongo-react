import Contact from "./Contact.js";

class ContactController {
	async create(req, res) {
			try {
				const {name, position, photo} = req.body;
				const contact = await Contact.create({name, position, photo});
			  res.json(contact);
			} catch (e) {
				res.status(500).json(e.message);
		}
	}

	async getAll(req, res) {
		try {
				const contacts = await Contact.find();
			  return res.json(contacts);
			} catch (e) {
				res.status(500).json(e.message);
		}
	}

	async getOne(req, res) {
		try {
				const { id } = req.params;
				if (!id) {
					res.status(400).json({message: "id не указан"});
				}
				const contact = await Contact.findById(id);
			  return res.json(contact);
			} catch (e) {
				res.status(500).json(e.message);
		}
	}

	async update(req, res) {
		try {
				const contact = req.body;
				if (!contact._id) {
					res.status(400).json({message: "id не указан"});
				}
				const updatedContact = await Contact.findByIdAndUpdate(contact._id, contact, {new: true});
			  return res.json(updatedContact);
			} catch (e) {
				res.status(500).json(e.message);
		}

	}

	async delete(req, res) {
		try {
				const { id } = req.params;
				if (!id) {
					res.status(400).json({message: "id не указан"});
				}
				const contact = await Contact.findByIdAndDelete(id);
			  return res.json(contact);
			} catch (e) {
				res.status(500).json(e.message);
		}
	}
}

export default new ContactController();