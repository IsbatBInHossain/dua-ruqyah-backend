const express = require('express')
const {
  getCategories,
  getSubCategories,
  getDuasByCategory,
  getDuasBySubCategory,
  getDuaById,
  getDuas,
} = require('./controllers')

const router = express.Router()

// GET: Categories and Subcategories
router.get('/categories', getCategories)
router.get('/categories/:categoryId/subcategories', getSubCategories)

// GET: Duas by Category, Subcategory, id
router.get('/categories/:categoryId/duas', getDuasByCategory)
router.get(
  '/categories/:categoryId/subcategories/:subcategoryId/duas',
  getDuasBySubCategory
)
router.get(
  '/categories/:categoryId/subcategories/:subcategoryId/duas/:duaId',
  getDuaById
)

module.exports = router
