import Controller from '../controllers/Controller.ts';
import { oak } from '../deps.ts';
const router = new oak.Router();
router.get('/about', Controller.index)
router.get('/', Controller.index)
 export default router;