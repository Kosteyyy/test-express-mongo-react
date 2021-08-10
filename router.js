import Router from 'express';
import ContactController from "./ContactController.js";

const router = new Router();

router.post('/contacts', ContactController.create);
router.get('/contacts', ContactController.getAll);
router.get('/contacts/:id', ContactController.getOne);
router.put('/contacts', ContactController.update);
router.delete('/contacts/:id', ContactController.delete);

export default router;