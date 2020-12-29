require('../mongoose')
const Task = require('../src/Models/Task')

// Task.findByIdAndDelete('5fe365e2766bec2adcf2980e').then(task=>{
//     console.log(task)
//     return Task.countDocuments({completed: false})
// })
// .then(count=>{
//     console.log(count)
// })
// .catch(e=>{
//     console.log(e)
// })

const updateTaskandDelete = async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

updateTaskandDelete('5fe4396f72c0431f2c406673').then(count=>{
    console.log(count)
})
.catch(e=>{
    console.log(e)
})