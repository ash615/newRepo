const BASE_URL ="https://dummyjson.com";

async function getAllProducts(){
    try{
        const res = await fetch(BASE_URL+"/products");
        const data = await res.json();
        const allProducts = await data.products;
        return allProducts;
    }
    catch(err){
        console.log("Error is:-", err);
    }
}

async function onDocumentLoaded(){
    const allProducts = await getAllProducts();
        allProducts.map((product)=>{
            const productID= product.id;
        
            var newDiv=document.createElement("div");
            newDiv.className="productOuter"
            newDiv.innerHTML=
            `
            <div class="imgOuterDiv">
                <img src=${product.thumbnail} class="card-image"/>
            </div>
            <div class="productBasicInfo">
                <p>${product.title}</p>  
                <b>Rs. ${product.price}</b>
            </div>
                <b>${product.category}</b>
            <div class="desc">
                <p id="description">${product.description}</p>
            </div>`
            document.getElementById("productContainer").appendChild(newDiv);


            newDiv.addEventListener("click", function(){
                localStorage.setItem('productId', productID);
                window.location.href='../productdetails/productdetails.html'
            })
        })
}

document.addEventListener("DOMContentLoaded", onDocumentLoaded);