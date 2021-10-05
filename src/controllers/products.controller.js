import Product from '../models/Product';

export const createProduct = async (req, res) => {
   
   const { name, category, price, imgURL } = req.body;
   
   try {
      const newProduct = new Product({ name, category, price, imgURL });
      const productSaved = await newProduct.save();
      res.status(201).json(productSaved);
   } catch (error) {
      res.status(500).json(error)
   }
};

export const getProducts = async (req, res) => {
   try {
      const products = await Product.find();
      res.status(200).json(products);
   } catch (error) {
      res.status(500).json(error)
   }
};

export const getProductById = async (req, res) => {
   try {
      const productFinded = await Product.findById(req.params.productId);
      res.status(200).json(productFinded);
   } catch (error) {
      res.status(500).json(error)
   }
};

export const updateProductById = async (req, res) => {
   try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
         new: true
      });
      res.status(200).json(updatedProduct);
   } catch (error) {
      res.status(500).json(error);
   }
};

export const deleteProductById = async (req, res) => {
   const { productId } = req.params;
   try {   
      await Product.findByIdAndDelete(productId);
      res.status(200).json("Product has been deleted");
   } catch (error) {
      res.status(500).json(error);
   }
};