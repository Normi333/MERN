const form = document.querySelector('form');

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = document.querySelector("input").value;
    console.log(name);
})