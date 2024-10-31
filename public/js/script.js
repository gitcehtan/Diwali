let wishBtn = document.getElementById("wishBtn");
let nameInput = document.getElementById("name-input");
let quoteType = document.getElementById("quote-type");



 function addName() {
    wishBtn.addEventListener("click", async (e)=>{
        e.preventDefault();
      
        
        console.log(nameInput.value);
        
        // fetch("http://localhost:3000/", {
        //     method: "POST",
        //     body: JSON.stringify({name: nameInput.value}),
        //     headers:{
        //         "Content-Type":"application/json"
        //     }
        // })http://localhost:3000/quotes

        
        
        let type = quoteType.value; // setting the type of quote here


        
        if(nameInput.value !== ""){
            window.location += `main?name=${nameInput.value}&type=${type}`
        }
        nameInput.value="";
    })
}

addName();