//store the products array in localstorage as "products"
document.querySelector("#form").addEventListener("submit",productdata)

var product=JSON.parse(localStorage.getItem("products"))||[];

function productdata(){
    event.preventDefault();


    var dataobj={
        type:form.type.value,
        desc:form.desc.value,
        price:form.price.value,
        image:form.image.value,
    };

    product.push(dataobj);
    console.log(product);

    localStorage.setItem("products",JSON.stringify(product));
    window.location.href="inventory.html"
}
