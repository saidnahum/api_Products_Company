import { Router } from 'express';
const router = Router();

// Importando todos los métodos del products.controller
import * as productsController from '../controllers/products.controller';

router.get('/', productsController.getProducts);
router.post('/', productsController.createProduct);
router.get('/:productId', productsController.getProductById);
router.put('/:productId', productsController.updateProductById);
router.delete('/:productId', productsController.deleteProductById);

export default router;