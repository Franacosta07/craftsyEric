const path = require('path')

const data = [
    { id : 1,
        title: "product-01",
        description: "loren ipsun que se yo",
        photo: "img/img-phone-01.jpg"
    }
]

module.exports = {
    index : (req,res) => {
        return res.render('home')
        return res.sendFile(path.join(__dirname,'..','views','home.ejs'))
    },
    admin : (req,res) => {
        return res.render('admin')
        return res.sendFile(path.join(__dirname,'..','views','admin.html'))

    }
}