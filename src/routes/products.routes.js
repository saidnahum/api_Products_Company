import { Router } from 'express';
const router = Router();

// Importando todos los métodos del products.controller
import * as productsController from '../controllers/products.controller';

// Importando middlewares
import { verifyToken } from '../middlewares';

router.get('/', productsController.getProducts);
router.post('/', verifyToken, productsController.createProduct);
router.get('/:productId', productsController.getProductById);
router.put('/:productId', verifyToken, productsController.updateProductById);
router.delete('/:productId', verifyToken, productsController.deleteProductById);

export default router;