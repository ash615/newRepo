const BASE_URL ="https://dummyjson.com";

async function getProductDetails(id){
    var allDetails;
    try{
        const res = await fetch(BASE_URL+`/products/${id}`);
        const data = await res.json();
        allDetails=data;
        console.log(data);
    }catch(err){
        console.log("Error is:-", err);
    }
    showProductDetails(allDetails);
}

function showProductDetails(product){
    var elem=document.getElementsByTagName("img");
    elem[0].src=product.thumbnail;
    document.getElementById("title").textContent+=product.title;
    document.getElementById("price").textContent+=product.price;
    document.getElementById("category").textContent+=product.category;
    document.getElementById("rating").textContent+=product.rating;
    document.getElementById("discount").textContent+=product.discountPercentage;
    document.getElementById("description").textContent+=product.description;
}


function getProductID(){
    const prodID = localStorage.getItem("productId");
    return prodID;
}

const proID = getProductID();

document.addEventListener("DOMContentLoaded", getProductDetails(proID));