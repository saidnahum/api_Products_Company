import { Router } from 'express';
const router = Router();

// Importando authJwt de index.js de middlewares
import { authJwt } from '../middlewares';

// Importando todos los métodos del products.controller
import * as productsController from '../controllers/products.controller';

router.get('/', productsController.getProducts);
router.post('/', [authJwt.verifyToken, authJwt.isModerator, authJwt.isAdmin], productsController.createProduct);
router.get('/:productId', productsController.getProductById);
router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productsController.updateProductById);
router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productsController.deleteProductById);

export default router;