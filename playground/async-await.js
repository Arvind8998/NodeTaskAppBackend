const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a< 0 || b<0){
                return reject('Numbers must be positive')
            }
            resolve(a+b)
        },1000)
    })
}

const doWork = async ()=>{
    const sum = await add(2,-5)
    const sum2 = await add(sum,2)
    const sum3 = await add(sum2,-1)
    return sum3
}

doWork().then(sum=>{
    console.log(sum)
})
.catch(e=>{
    console.log(e)
})