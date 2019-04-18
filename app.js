const express= require ('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postRouters = require ('./routes/post')



const app = express();

// // подключаемся к базе данных // имя произвольное
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/base_express_mb', {
    useNewUrlParser: true
})
 .then (() => console.log ('MongoDB запущен'))
 .catch (e => console.log (e))

 // подключаем  bodyParser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());





//====== Models ====

const { Post } = require ('./models/post');


//POST
///////////////////////
app.post('/api/post',(req,res)=> {
    const post = new Post (req.body);
  
    post.save((err,doc) => {
        if (err) return res.json({success: false, err})
        res.status(200).json({
          success: true,
          post: doc
  
        })
    })
  })
// ///////////////////////////////////
//GET
app.use('/api/', postRouters)



//  объект глобальной переменной  
//  const port = process.env.PORT || 3002 ;
const port = 3002 ;
// Обработка поступающих к серверу запросов.
app.get('/', (req, res) => res.send('Работает!'))

//Прослушка сервера на заданном номере порта.
app.listen (port, () => {
    console.log (`Сервер запущен на ${port}`)

} )