const express = require('express')

const { getCategory, getSubCategory, getDua } = require('./controllers')

const router = express.Router()

// GET: Category
router.get('/category', getCategory)

// GET: Sub Category
router.get('/sub_category', getSubCategory)

// GET: Dua
router.get('/dua', getDua)

module.exports = router
