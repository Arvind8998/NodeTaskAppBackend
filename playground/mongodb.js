const { MongoClient, ObjectID } = require('mongodb');

const id = new ObjectID();
// console.log("dsds",id.getTimestamp())
console.log(id.id, id.id.length)
console.log(id.toHexString().length)

const connectionUrl = 'mongodb://127.0.0.1:27017'
const database = 'task-app'

MongoClient.connect(connectionUrl,{useNewUrlParser: true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to db')
    }

    const db = client.db(database)
    // db.collection('users').insertOne({
    //     name: 'Arvind',
    //     age: '27'
    // })

    // db.collection('users').insertMany([
    //     {
    //         'name': 'Arvind',
    //         'age': 22
    //     },
    //     {
    //         'name': 'Caussius',
    //         'age': 38
    //     }
    // ], (error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert')
    //     }
    //     console.log(result.ops)

    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description : 'My Passion',
    //         completed : true
    //     },
    //     {
    //         description : 'Current Year goal',
    //         completed : false
    //     },
    //     {
    //         description : 'Dream place',
    //         completed : 'false'
    //     }
    // ],(err,result)=>{
    //     console.log(result.ops)
    // })

    // db.collection('users').find({'name': 'Arvind'}, (error,user)=>{
    //     if(error){
    //         return console.log('Unable to fetch documents')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').findOne({_id : new ObjectID("5fdf54346e9e7958f805600f")}, (error,user)=>{
    //     if(error){
    //         return console.log('Unable to fetch documents')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({'name': 'Arvind'}).toArray((error,users)=>{
    //     console.log(users)
    // })

    // db.collection('users').find({'name': 'Arvind'}).count((error,count)=>{
    //     console.log(count)
    // })
    
    // db.collection('tasks').find({'completed':false}).toArray((error,tasks)=>{
    //     console.log(tasks)
    // })

    // db.collection('users').updateOne({_id: new ObjectID("5fdf54346e9e7958f805600f")},{$set: {
    //     name: 'John Wick'
    // }})
    // .then((result)=>{
    //     console.log(result,result.matchedCount,result.modifiedCount)
    // })
    // .catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').updateOne({_id: new ObjectID("5fdf75888431ab1658868a51")},{$inc: {
    //     age: 1
    // }})
    // .then((result)=>{
    //     console.log(result,result.matchedCount,result.modifiedCount)
    // })
    // .catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({completed: (false || 'false')},{$set: {
    //     completed: true
    // }})
    // .then((result)=>{
    //     console.log(result,result.matchedCount,result.modifiedCount)
    // })
    // .catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('tasks').deleteMany({completed: "In progress"})
    // .then((result)=>{
    //     console.log(result)
    // })
    // .catch((error)=>{
    //     console.log(error)
    // }) 

    db.collection('tasks').deleteOne({description: "Dream Company"})
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })
})

