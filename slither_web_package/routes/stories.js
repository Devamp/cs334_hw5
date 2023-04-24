var express = require('express');
var router = express.Router();


let users = [
    {
        name : "Anand Gogoi",
        story: "This is an example post"
    },

    {
        name : "Daniel Burko",
        story: "Yessir🙏🔥"
    }

];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

router.post('/',function(req,res,next){
    res.send(users);
});

module.exports = router;