var Seller = require('../controllers/sellerController')

module.exports = (router) => {
    router.get('/api/getSeller', Seller.getSeller);
    router.get('/api/loginSeller/:username/:password', Seller.loginSeller);
    // router.post('/api/addSeller', Seller.addSeller);
}
