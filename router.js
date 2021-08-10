import Router from 'express';
import Contact from './Contact.js'

const router = new Router();

router.post('/contacts', async function (req, res) {
	try {
		const {name, position, photo} = req.body;
		const contact = await Contact.create({name, position, photo});
	  res.json(contact);
	} catch (e) {
		res.status(500).json(e.message);
}});
router.get('/contacts');
router.get('/contacts/:id');
router.put('/contacts');
router.delete('/contacts:id');

export default router;