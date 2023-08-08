const BASE_URL ="https://dummyjson.com";

async function addNewProduct(requestObj){
    try{
        let res = await fetch(BASE_URL+"/products/add", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestObj)
        });
        let data = await res.json();
        if(data){
            alert(`Product added Successfully...`)
        }
        window.location.href="index.html";
    }
    catch(err){
        alert(err.message);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const myForm = document.getElementById('productForm');
    const formData = new FormData(myForm);
    addNewProduct(formData);
    console.log('Form data:',formData);
}

const form = document.getElementById("productForm");
form.addEventListener("submit", handleFormSubmit);