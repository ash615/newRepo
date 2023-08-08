const BASE_URL ="https://dummyjson.com";

async function handleSearchSubmit(){
    let allProductsToShow =[]
    const searchText = document.getElementById("searchText").value;
    console.log(searchText)
    if(searchText.length>3){
        try{
            let res = await fetch(BASE_URL+`/products/category/${searchText}`)
            let data = await res.json();
            let products = data.products;
            console.log(products)
                console.log("NotEmpty");

    products.forEach((product) => {
        const productID= product.id;
    
        var newDiv=document.createElement("div");
        newDiv.className="productOuter"
        newDiv.innerHTML=
        `
        <div class="imgOuterDiv">
            <img src=${product.thumbnail} class="card-image"/>
        </div>
        <div class="productCoreDetails">
        <div class="productBasicInfo">
            <p>${product.title}</p>  
            <b>Rs. ${product.price}</b>
        </div>
            <b>${product.category}</b>
        <div class="desc">
            <p id="description">${product.description}</p>
        </div>
        </div>
        <span><img src="./deleteicon.png" width="30" height="20" id="deleteIcon${product.id}" />
        &nbsp;
        <img src="./updateicon.jpg" width="30" height="20" id="updateIcon${product.id}" /></span>
        `;
        
        document.getElementById("productContainer").appendChild(newDiv);
        newDiv.addEventListener("click", function(e){
            console.log(e)
            localStorage.setItem('productId', productID);
            window.location.href='productdetails.html'
        })

        const deleteIcon = document.getElementById(`deleteIcon${product.id}`);
        deleteIcon.addEventListener('click', deleteIconClickHandler);

        const updateIcon = document.getElementById(`updateIcon${product.id}`);
        updateIcon.addEventListener('click', updateIconClickHandler);

          });
           // console.log(products);
           
        }catch(err){
            alert(err.message);
        }
    }else{
        alert("Please either enter something or enter more than 3 characters...");
    }
}

function handleIfSearch(){
    var searchButton = document.getElementById("searchBtn");
    searchButton.addEventListener("click", handleSearchSubmit)
}

var updateProdID;

function updateIconClickHandler(e){
    e.stopPropagation();
    let res = e.target;
    updateProdID= res.id.substr(10);
    
    const modal = document.getElementById('myModal');
    modal.style.display="block";
    // Get the close button element
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Close the modal when the close button is clicked
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });

    const form = document.getElementById("productForm");
    form.addEventListener("submit", handleFormSubmit);
}

async function updateTheProduct(requestObj){
    try{
        console.log(requestObj)
        console.log(updateProdID)
        let res = await fetch(BASE_URL+`/products/${updateProdID}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestObj)
        });
        let data = await res.json();
        console.log(data);
        alert(`Product with id ${updateProdID} updated successfully...`)
    }catch(err){
        alert("Might be some isssue with sample api");
    }
}

function deleteIconClickHandler(e){
    e.stopPropagation();
    let res = e.target;
    var toDeleteProductId= res.id.substr(10);
    deleteTheProduct(toDeleteProductId)
}

async function deleteTheProduct(id){ 
    try{            
        const res = await fetch(BASE_URL+`/products/${id}`, {
                        method: 'DELETE',
                        headers: {
                        'Content-Type': 'application/json',
                    },
                 });
        const data = await res.json();
        console.log(data.id);
        alert(`Product with id ${data.id} deleted successfully...`)
    }catch(err){
        alert(err.message);
    }
}
      
handleIfSearch();