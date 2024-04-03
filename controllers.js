const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('dua_main.sqlite')

const getCategories = (req, res) => {
  db.all('SELECT * FROM category', (err, rows) => {
    if (err) {
      res.status(500).send(err.message)
    } else {
      res.status(200).json(rows)
    }
  })
}

const getSubCategories = (req, res) => {
  const categoryId = req.params.categoryId
  if (!categoryId) {
    return res.status(400).send('categoryId parameter is required')
  }

  db.all(
    'SELECT * FROM sub_category WHERE cat_id = ?',
    [categoryId],
    (err, rows) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.status(200).json(rows)
      }
    }
  )
}

const getDuaById = (req, res) => {
  const { categoryId, subcategoryId, duaId } = req.params

  if (!categoryId || !subcategoryId) {
    return res
      .status(400)
      .send('categoryId and subcategoryId parameter is required')
  }

  db.get('SELECT * FROM dua WHERE id = ?', [duaId], (err, rows) => {
    if (err) {
      res.status(500).send(err.message)
    } else {
      res.status(200).json(rows)
    }
  })
}
const getDuasByCategory = (req, res) => {
  const { categoryId } = req.params
  db.all('SELECT * FROM dua WHERE cat_id = ?', [categoryId], (err, rows) => {
    if (err) {
      res.status(500).send(err.message)
    } else {
      res.status(200).json(rows)
    }
  })
}
const getDuasBySubCategory = (req, res) => {
  const { categoryId, subcategoryId } = req.params

  if (!categoryId || !subcategoryId) {
    return res
      .status(400)
      .send('categoryId and subcategoryId parameter is required')
  }

  db.all(
    'SELECT * FROM dua WHERE cat_id = ? AND subcat_id = ?',
    [categoryId, subcategoryId],
    (err, rows) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.status(200).json(rows)
      }
    }
  )
}

module.exports = {
  getCategories,
  getSubCategories,
  getDuasByCategory,
  getDuasBySubCategory,
  getDuaById,
}
