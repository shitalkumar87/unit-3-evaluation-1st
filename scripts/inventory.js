
var database=JSON.parse(localStorage.getItem("products"));

console.log(database)
displaydata(database)

function displaydata(data){
    
     data.forEach(function(elem,index){
     
        var box=document.createElement("div")
          

        var img=document.createElement("img")
        img.setAttribute("src",img)
        img.src=elem.image;

        var type=document.createElement("h3")
          type.innerText=elem.type;

        var desc=document.createElement("h3")
           desc.innerText=elem.desc;
        var price=document.createElement("h3")
        price.innerText=elem.price;

        var btn=document.createElement("button")

        btn.addEventListener("click",function(){
            deleteproduct(elem,index)
        })


        btn.innerText="Remove Products"

        box.append(img,type,desc,price,btn)

        document.querySelector("#all_products").append(box)
     });
     function   deleteproduct(elem,index){
         database.splice(index,1)
         localStorage.setItem("products",JSON.stringify(database))
         window.location.reload()
     }
}