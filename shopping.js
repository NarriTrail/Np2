let search=document.getElementById("scope");
let inputValue=document.getElementById("input")
//let display= document.querySelector(".watches")

const watchesList=()=>{

     let http=new XMLHttpRequest();
     http.open("get","watches.json",true)
     http.send();
    http.onload= function(){
        if (this.readyState==4&& this.status==200) {
            let result=JSON.parse(this.responseText)
    
            let output="";
            for (const item of result) {
                // console.log(result.title);
                output=output+`<div class="localContainer">
          <img src=" ${item.image}" class="localImage">
            <div class="localDetails">
                <h2 class="localTitle">${item.title}</h2>
                <h4 class="localPrice">${item.price}</h4>
                <p class="loclaDesc">${item.desc}<p/>
                <div class="buy" id="buybtn">Add to Cart</div>
            </div>
           
            </div>`
            // let buybtn=document.getElementById("buybtn")
            // buybtn.addEventListener("click",()=>{
            //     document.getElementById("buy-container").style.display="block"
            // })
           // console.log(item.title);   
            }
          let watches=document.querySelector(".products")
         watches.innerHTML=output
        }
    }
}

const bluetoothList=()=>{
    let http=new XMLHttpRequest();
     http.open("get","bluetooth.json",true)
     http.send();
    http.onload= function(){
        if (this.readyState==4&& this.status==200) {
            let result=JSON.parse(this.responseText)
    
            let output="";
            for (const item of result) {
                // console.log(result.title);
                output=output+`<div class="localContainer">
          <img src=" ${item.image}" class="localImage">
            <div class="localDetails">
                <h2 class="localTitle">${item.title}</h2>
                <h4 class="localPrice">${item.price}</h4>
                <p class="loclaDesc">${item.desc}<p/>
                <div class="buy">Add to Cart</div>
            </div>
           
            </div>`
           // console.log(item.title);   
            }
          let bluetooths=document.querySelector(".products")
         bluetooths.innerHTML=output
        }
    }
}

const laptopList=()=>{
    let http=new XMLHttpRequest();
        http.open("get","laptops.json",true)
        http.send();
        http.onload= function(){
            if (this.readyState==4&& this.status==200) {
                let result=JSON.parse(this.responseText)
        
                let output="";
                for (const item of result) {
                    // console.log(result.title);
                    output=output+`<div class="localContainer">
              <img src=" ${item.image}" class="localImage">
                <div class="localDetails">
                    <h2 class="localTitle">${item.title}</h2>
                    <h4 class="localPrice">${item.price}</h4>
                    <p class="loclaDesc">${item.desc}<p/>
                    <div class="buy">Add to Cart</div>
                </div>
                </div>`
               // console.log(item.title);   
                }
              let laptops=document.querySelector(".products")
             laptops.innerHTML=output
            }
        }
}
const earBuds=()=>{


    let http=new XMLHttpRequest();
        http.open("get","buds.json",true)
        http.send();
        http.onload= function(){
            if (this.readyState==4&& this.status==200) {
                let result=JSON.parse(this.responseText)
        
                let output="";
                for (const item of result) {
                    // console.log(result.title);
                    output=output+`<div class="localContainer">
              <img src=" ${item.image}" class="localImage">
                <div class="localDetails">
                    <h2 class="localTitle">${item.title}</h2>
                    <h4 class="localPrice">${item.price}</h4>
                    <p class="loclaDesc">${item.desc}<p/>
                    <div class="buy">Add to Cart</div>
                </div>
                </div>`
               // console.log(item.title);   
                }
              let earbuds=document.querySelector(".products")
             earbuds.innerHTML=output
            }
        }
}


const shoesList=()=>{
    let http=new XMLHttpRequest();
        http.open("get","shoes.json",true)
        http.send();
        http.onload= function(){
            if (this.readyState==4&& this.status==200) {
                let result=JSON.parse(this.responseText)
        
                let output="";
                for (const item of result) {
                    // console.log(result.title);
                    output=output+`<div class="localContainer">
              <img src=" ${item.image}" class="localImage">
                <div class="localDetails">
                    <h2 class="localTitle">${item.title}</h2>
                    <h4 class="localPrice">${item.price}</h4>
                    <p class="loclaDesc">${item.desc}<p/>
                    <div class="buy">Add to Cart</div>
                </div>
                </div>`
               // console.log(item.title);   
                }
              let earbuds=document.querySelector(".products")
             earbuds.innerHTML=output
            }
        
}
}


const mobileList=()=>{

    let http=new XMLHttpRequest();
    http.open("get","mobiles.json",true)
    http.send();
    http.onload= function(){
        if (this.readyState==4&& this.status==200) {
            let result=JSON.parse(this.responseText)
    
            let output="";
            for (const item of result) {
                // console.log(result.title);
                output=output+`<div class="localContainer">
          <img src=" ${item.image}" class="localImage">
            <div class="localDetails">
                <h2 class="localTitle">${item.title}</h2>
                <h4 class="localPrice">${item.price}</h4>
                <p class="loclaDesc">${item.desc}<p/>
                <div class="buy">Add to Cart</div>
            </div>
            </div>`
           // console.log(item.title);   
            }
          let mobiles=document.querySelector(".products")
         mobiles.innerHTML=output
        }
    }
}



search.addEventListener("click",()=>{
    //console.log(inputValue.value);
    if (inputValue.value==="Watches") {

        watchesList();
    } else if(inputValue.value==="Laptops"){
        
        laptopList();
        
    }

    else if (inputValue.value==="Earbuds") {

        earBuds();
        
        
    } else if (inputValue.value==="Mobiles") {

        mobileList();

       
        
    } else if(inputValue.value==="Bluetooths"){
        bluetoothList();

    }else if(inputValue.value==="Shoes"){
        shoesList();
    }
    else {

        let elseMessage= document.getElementById("else")
        elseMessage.innerText="Out of stock 😭"
        
    } 



})


// slider section starts....................
let images=['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img7.jpg',]
let imageIndex=4;
let leftbtn=document.getElementById("left-btn")
let rightbtn=document.getElementById("right-btn")
let img=document.getElementById("img")
let slidetext=document.getElementById("slidetext")

leftbtn.addEventListener("click",()=>{
    if (imageIndex<0) {
       slidetext.innerText="slide right"
    }
    else{
        slidetext.innerText=""
        imageIndex-=1;
    img.setAttribute('src','images/'+images[imageIndex])
    
    }
})

rightbtn.addEventListener("click",()=>{
    if (imageIndex>6) {
        slidetext.innerText="slide left"
    }else{
    slidetext.innerText="";
    imageIndex+=1;
    img.setAttribute('src','images/'+images[imageIndex] )
    }
})



document.getElementById("seewatch").addEventListener("click",()=>{
    watchesList();
})

document.getElementById("seelaptop").addEventListener("click",()=>{
    laptopList();
})
document.getElementById("see-earbuds").addEventListener("click",()=>{
    earBuds();
})
document.getElementById("seemobile").addEventListener("click",()=>{
    mobileList();
})
document.getElementById("seebluetooth").addEventListener("click",()=>{
    bluetoothList();
})
document.getElementById("seeshoes").addEventListener("click",()=>{
    shoesList();
})





    // document.querySelectorAll(".buy").onclick=function () {
    //     document.getElementById("buy-container").style.display="block"
    //     }

    let buyButtons = document.querySelectorAll(".buy");
    for (let index = 0; index < buyButtons.length; index++) {
        buyButtons[i].addEventListener("click",()=>{
            alert("clicked")
        })
        
    }

//    var document.querySelector('.buy').click= addCart();

//    function 

// showBuy.addEventListener("click",()=>{

//     console.log("asdfhjkl");
// });



    







