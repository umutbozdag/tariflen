import express from 'express'
const router = express.Router()
import getSearchResults from '../../parser/index.js'

// define the home page route
router.get('/', async function (req, res) {
  try {
    let searchResults = await getSearchResults('Carrefour', req.query.q)

    res.status(200).json({
      result: searchResults
    })
  }
  catch (error) {
    res.status(418).send(error);
  }

})

export default router