// categories.js
import { PRODUCTS } from "../../products";

export function getCategories() {
  const categories = ['All', ...new Set(PRODUCTS.map(item => item.cat))];
  return categories;
}

export function getSubcategories(cat) {
    const subcategories = ['All', ...new Set(PRODUCTS.filter(item => item.cat === cat).map(item => item.subcat))];
    return subcategories;
  }
