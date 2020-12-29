// const doWorkPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve([7,4,1])
//         // reject('Something went wrong !')
//     }, 2000)
// })

// doWorkPromise((result)=>{
//     console.log('Success', result)
// }).catch(error=>{
//     console.log('error')
// })


//Promise chaining

const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        },2000)
    })
}

// add(3,4).then((sum)=>{
//     add(sum,4).then(sum2=>{
//         console.log('Sum is', sum2)

//     })
//     .catch(e=>console.log(e))
// })
// .catch(e=>{
//     console.log(e)
// })

add(3,4).then(sum=>{
    return add(sum,5)
})
.then(sum2=>{
    console.log(sum2)
})
.catch(e=>{
    console.log('Something went wrong')
})
