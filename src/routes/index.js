const {RESPONSE,queryPromise}  = require ('../utils/responses')
const { Router } = require('express');
const router = Router();
const { ORDER_NAME_ASC, ORDER_NAME_DESC, ORDER_PRICE_DESC, ORDER_PRICE_ASC} = require('../utils/constants')
router.get('/products', (req, res) => {
    req.getConnection( async (err, connection) => {
        if(err) return res.status(500).json({error: 'There was an error'});
       
        let query = 'SELECT * FROM product';
        let subquery = 'SELECT COUNT(id) as total_items FROM product'; 
        if(req.query.search){
            query += ' WHERE name LIKE "%'+req.query.search+'%"'
            subquery += ' WHERE name LIKE "%'+req.query.search+'%"'
        }
        if(req.query.category > 0)
        {
            query += ' WHERE category = ' + req.query.category;
            subquery += ' WHERE category = ' + req.query.category;
        }
        if(req.query.order == ORDER_NAME_ASC)
        {
            query += ' ORDER BY name ASC';
            subquery += ' ORDER BY name ASC';
        }
        if(req.query.order == ORDER_NAME_DESC)
        {
            query += ' ORDER BY name DESC';
            subquery += ' ORDER BY name DESC';
        }
        if(req.query.order == ORDER_PRICE_DESC)
        {
            query += ' ORDER BY price DESC';
            subquery += ' ORDER BY price DESC';
        }
        if(req.query.order == ORDER_PRICE_ASC)
        {
            query += ' ORDER BY price ASC';
            subquery += ' ORDER BY price ASC';
        }
        query += ' LIMIT 9 OFFSET ' + (req.query.page ? req.query.page:0);
        let results = await queryPromise(connection,query)
        let totalItems = await queryPromise(connection,subquery)
        RESPONSE.products.code = '200'
        RESPONSE.products.message = 'success'
        RESPONSE.products.items = results
        RESPONSE.products.page = req.query.page
        RESPONSE.products.total_items = totalItems[0].total_items
        res.status(200).json(RESPONSE.products);  
    });
});

router.get('/categories', (req, res) => {
    req.getConnection( async (err, connection) => {
        if(err) return res.status(500).json({error: 'There was an error'});
        let query = 'SELECT * FROM category';
        let results = await queryPromise(connection,query)
        RESPONSE.categories.code = '200'
        RESPONSE.categories.message = 'success'
        RESPONSE.categories.items = results;
        res.status(200).json(RESPONSE.categories);
    });
});

module.exports = router;