import Contact from "./Contact.js";
import ContactService from "./ContactService.js";

class ContactController {
	async create(req, res) {
			try {
				const contact = await ContactService.create(req.body);
			  res.json(contact);
			} catch (e) {
				res.status(500).json(e.message);
		}
	}

	async getAll(req, res) {
		try {
				const contacts = await ContactService.getAll();
			  return res.json(contacts);
			} catch (e) {
				res.status(500).json(e.message);
		}
	}

	async getOne(req, res) {
		try {
				const contact = await ContactService.getOne(req.params.id);
			  return res.json(contact);
			} catch (e) {
				res.status(500).json(e.message);
		}
	}

	async update(req, res) {
		try {
				const updatedContact = await ContactService.update(req.body);
			  return res.json(updatedContact);
			} catch (e) {
				res.status(500).json(e.message);
		}

	}

	async delete(req, res) {
		try {
				const contact = await ContactService.delete(req.params.id);
			  return res.json(contact);
			} catch (e) {
				res.status(500).json(e.message);
		}
	}
}

export default new ContactController();