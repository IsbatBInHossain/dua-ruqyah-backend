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
router.get('/categories/:categoryId/sub-categories', getSubCategories)

// GET: Duas by Category, Subcategory, id
router.get('/categories/:categoryId/duas', getDuasByCategory)
router.get(
  '/categories/:categoryId/sub-categories/:subcategoryId/duas',
  getDuasBySubCategory
)
router.get('/dua/:duaId', getDuaById)

module.exports = router
