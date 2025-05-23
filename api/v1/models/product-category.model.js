const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");

mongoose.plugin(slug);

const productCategorySchema = new mongoose.Schema({
  title: String,
  parent_id: {
    type: String,
    default: ""
  },
  description: String,
  position: Number,
  slug: {
    type: String,
    slug: "title",
    unique: true//check slug không bị trùng
  },
  deleted: {
    type: Boolean,
    default: false
  },
  deletedAt: Date
},{
  timestamps: true
});

const ProductCategory = mongoose.model("ProductCategory", productCategorySchema, "products-catgeory");

module.exports = ProductCategory;