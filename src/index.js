const express = require('express');
const User = require('./Models/User');
const Task = require('./Models/Task')
require('../mongoose')
const userRouter = require('./Router/UserRouter')
const taskRouter = require('./Router/TaskRouter')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const multer = require('multer')


const app = express();
const port = process.env.port || 8080;

// app.use((req,res,next)=>{
//     if(req.method === 'GET'){
//         res.send('Get requests are disabled')
//     }
//     else{
//         next()
//     }
// })

// app.use((req,res,next)=>{
//     res.status(500).send('Site is under maintenance')
// })

//  const upload = new multer(
//     {dest:'images', fileSize: 1000000, fileFilter(req,file,cb){
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a word document'))
//         }
//         cb(undefined,true)
//     } })

// app.post('/upload', upload.single('upload'),(req,res)=>{
//     res.send()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log('listening on port',port)
})

/* JWT- 1st BASE 64 encoded Json string known as header, contains meta info ,type of token
base 64 encoded Json String - >Payload /Body - Contains data provided by us , eg: _id
Signature- To verify the token
*/
const myfunction = async ()=>{
    // With encryprion we can convert encypted value to original value while hasing algorithm are one way algo and are not reversible i.e we cannot get original value form hashed value
    // const token = jwt.sign({_id: 'abc123'},'mySecretToken', {expiresIn: '7 days'})
    // console.log(token)
    // const data = jwt.verify(token,'mySecretToken')
    // console.log(data)

    // const task = await Task.findById('5fe874e79dc24170b004e586')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    // const user = await User.findById('5fe8726dce37bb67f156dea3')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)
}

// myfunction()