// promise -> call
// either promise is fulfilled, resolved, rejected
// promise -> if fulfilled -> then show responese 
//         -> if rejected -> catch error

//callback HELL 

fetch('https://api.github.com/users/Normi333').then((res)=>{
    res.json().then((res)=>{
        console.log(res);
    }).catch((err)=>console.log(err));
}).catch((err)=>{
    console.log(err);
})

