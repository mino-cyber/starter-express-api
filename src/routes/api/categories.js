const { Router } = require('express')
const Categories = require('../../controllers/categories')

const router = Router()

router.get('/', Categories.AllCategories)
router.get('/:id', Categories.getCategory)
router.post('/', Categories.CreateCategory)
router.put('/:id', Categories.UpdateCategory)
router.delete('/:id', Categories.DeleteCategory)

module.exports = router