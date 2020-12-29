require('../mongoose')
const User = require('../src/Models/User')

// User.findByIdAndUpdate('5fe363ce0a64e0268fc5ede1',{age:24}).then(user=>{
//     console.log(user)
//     return User.countDocuments({age:24})
// })
// .then(count=>{
//     console.log(count)
// })
// .catch(e=>{
//     console.log(e)
// })

const updateAgeandCount = async (id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeandCount('5fe363ce0a64e0268fc5ede1',25).then(count=>{
    console.log(count)
})
.catch(e=>{
    console.log(e)
})