// to ease the problem of promise we introduce the concept of async-await
//async works only inside function
//await works same as then and catch

// async function getDetails(){
//     const response = await fetch('https://api.github.com/users/Normi333');
//     const res = await response.json();
//     console.log(res.location);
// }

// getDetails();


// getting user name and location using async_await
// const getData = async (name) => {
//     try{    //try -> throwing error
//         const response = await fetch(`https://api.github.com/users/${name}`);
//         const res = await response.json();
//         console.log(`username: ${res.name}\nlocation: ${res.location}`);
//     }catch(err){
//         console.log(err);
//     }
// }
// const username = prompt('Give Username');
// getData(username);

//doing with randomly generated person 
// async function muse(){
//     try{
//         const muu = await fetch('https://randomuser.me/api/');
//         const res = await muu.json();
//         const data = res.results[0];
//         const name = data.name;
//         const location = data.location;
//         const email = data.email;
//         console.log(`Name: ${name.title}. ${name.first} ${name.last}`);
//         console.log(`Location: ${location.street.name}, ${location.city}, ${location.country}`);
//         console.log(`Email: ${email}`);
//     }catch(err){
//         console.log(err);
//     }
// }
// muse();

//Task: create account in weatherapi.com and extract
// api for weather : https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=LOCATION.
// api for github : https://api.github.com/users/USERNAME

// 6ee64e16c484462485e123753242306

// const data = async (name) =>{
//     try{
//         const jimu = await fetch(`https://api.github.com/users/${name}`);
//         const res = await jimu.json();
//         console.log(`username: ${res.name}\nlocation: ${res.location}`);
//         const mu = await fetch(`https://api.weatherapi.com/v1/current.json?key=6ee64e16c484462485e123753242306&q=${res.location}`)
//         const response = await mu.json();
//         const temp = response.current.temp_c;
//         console.log(`Temperature: ${temp}`);
//     }catch(err){
//         console.log(err);
//     }
// }

// const username = prompt("Give me Name..")
// data(username);

