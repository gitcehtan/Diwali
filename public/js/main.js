document.addEventListener("DOMContentLoaded", async function() {

    const params = new URLSearchParams(window.location.search);
    let Name = params.get('name');
    let Type = params.get('type');
    Name = Name.toLocaleUpperCase();

    let data = await fetch("http://localhost:3000/quotes");

    let quotes = await data.json();
    
    let quote = quotes[Type];
    let n = Math.floor(Math.random() * 19) + 1;

    document.getElementById('name').innerHTML = `
    From ${Name} 
    <br/>
    ${quote[n]}
    `;
    

    console.log(n);
    
    const backBtn = document.getElementById("backBtn");
    backBtn.addEventListener('click',()=>{
        let originalUrl = (window.location.origin)
        // console.log(originalUrl);

        
        window.location = `${originalUrl}`;
    })


});


