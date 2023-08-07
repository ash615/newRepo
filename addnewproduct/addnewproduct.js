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
    }
    catch(err){
        console.log("Error is:-", err);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const myForm = document.getElementById('productForm');
    const formData = new FormData(myForm);

    addNewProduct(formData);
    window.location.href="../home/index.html"
    // formData.forEach((value, key) => {
    //   formDataObject[key] = value;
    // });
  
    // Perform actions with form data (e.g., send to server, process data)
    console.log('Form data:',formData);
  }

const form = document.getElementById("productForm");
form.addEventListener("submit", handleFormSubmit);