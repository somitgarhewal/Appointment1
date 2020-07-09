var Seller = require('../controllers/sellerController')

module.exports = (router) => {
    router.get('/api/getSeller', Seller.getSeller);
    router.post('/api/loginSeller', Seller.loginSeller);
    // router.post('/api/addSeller', Seller.addSeller);
}
