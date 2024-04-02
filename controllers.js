const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('dua_main.sqlite')

const getCategory = (req, res) => {
  db.all('SELECT * FROM category', (err, rows) => {
    if (err) {
      res.status(500).send(err.message)
    } else {
      res.status(200).json(rows)
    }
  })
}

const getSubCategory = (req, res) => {
  const cat_id = req.query.cat_id
  if (!cat_id) {
    return res.status(400).send('cat_id parameter is required')
  }

  db.all(
    'SELECT * FROM sub_category WHERE cat_id = ?',
    [cat_id],
    (err, rows) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.status(200).json(rows)
      }
    }
  )
}

const getDua = (req, res) => {
  const { cat_id, subcat_id } = req.query

  if (cat_id && subcat_id) {
    db.all(
      'SELECT * FROM dua WHERE cat_id = ? AND subcat_id = ?',
      [cat_id, subcat_id],
      (err, rows) => {
        if (err) {
          res.status(500).send(err.message)
        } else {
          res.status(200).json(rows)
        }
      }
    )
  } else {
    db.all(
      'SELECT * FROM dua WHERE subcat_id = ?',
      [subcat_id],
      (err, rows) => {
        if (err) {
          res.status(500).send(err.message)
        } else {
          res.status(200).json(rows)
        }
      }
    )
  }
}

module.exports = {
  getCategory,
  getSubCategory,
  getDua,
}
