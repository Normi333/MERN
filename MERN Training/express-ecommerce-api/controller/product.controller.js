const Product = require("../model/Product");

const createProduct = async (req, res) => {
  await Product.create({
    name: req.body.name,
    image: req.file.filename,
    price: req.body.price,
    description: req.body.description,
    user: req.authUser.id,
    featured: req.body.featured,
  });
  res.json({
    message: "Product created successfully.",
  });
};

const getProducts = async (req, res) => {
  // page = 1, limit= 5 => skip(0),
  // page =2, skip(5) => 2-1 * 5 = 5
  // page = 3, skip(10) 3 - 1 * 5 = 10
  // page  4 , skip (15), 4 -1 * 5 = 15
  const { page, limit } = req.query;
  const products = await Product.find()
    .skip((page - 1) * limit)
    .limit(limit);
  res.json({
    data: products,
  });
};

const getFeaturedProducts = async (req, res) => {
  const featuredProducts = await Product.find({ featured: true }).limit(4);
  res.json({
    data: featuredProducts,
  });
};

const getLatestProducts = async (req, res) => {
  const latestProducts = await Product.find()
    .sort({ createdAt: "desc" })
    .limit(4);
  res.json({
    data: latestProducts,
  });
};

const deleteProduct = async (req, res) => {
  await Product.deleteOne({ _id: req.params.id });
  res.json({
    message: "Product deleted successfully.",
  });
};

const updateProduct = async (req, res) => {
  await Product.updateOne({ _id: req.params.id }, req.body);
  res.json({
    message: "Product updated successfully.",
  });
};

module.exports = {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  getLatestProducts,
  getFeaturedProducts,
};
// localhost:3000/api/product
