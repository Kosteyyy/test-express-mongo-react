import Contact from "./Contact.js";

class ContactService {
	async create(contact) {
		const createdContact = await Contact.create(contact);
	  return createdContact;
	}

	async getAll() {
		const contacts = await Contact.find();
		return contacts;
	}

	async getOne(id) {
		if (!id) {
			throw new Error('Не указан ID');
		}
		const contact = await Contact.findById(id);
		return contact;
			
	}


	async update(contact) {
		if (!contact._id) {
			throw new Error('Не указан ID');
		}
		const updatedContact = await Contact.findByIdAndUpdate(contact._id, contact, {new: true});
	  return updatedContact;
	}

	async delete(id) {
		if (!id) {
			throw new Error('Не указан ID');
		}
				const contact = await Contact.findByIdAndDelete(id);
			  return contact;
	}
}

export default new ContactService();