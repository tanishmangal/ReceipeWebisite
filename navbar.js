function navbar(){
return `<div class="topnav">
<a class="active" href="index.html">Home</a>
<a href="receipe.html">Receipe Of the Day</a>
<a href="search.html">Search Receipes</a>
<div class="log-in">
<a href="login.html">Log-In</a>
<a href="signup.html">Sign-Up</a>
</div>
</div>`
}

 async function randomReceipe(query){
    document.querySelector("#randomReceipe").innerHTML=null;
    console.log("tanish")
    try{
     const res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
     const data=await res.json();
     return data.meals
    }catch(err){  
        console.log(err)
    }

 }

   function append(data){
        data.forEach(ele => {
     let div1=document.createElement("div")
     div1.setAttribute("id","dishDiv")
     let image=document.createElement("img");
     image.src=ele.strMealThumb
     image.style.width="100%"
     let name=document.createElement("h3");
     name.innerText=ele.strMeal
     let btn=document.createElement("button")
     btn.setAttribute("id","btn")
     btn.innerText="See Receipe"
     btn.addEventListener("click",function(){
        localStorage.setItem("seeReceipe",JSON.stringify(ele))
        window.open("seeReceipe.html","_blank")
   })
   //   let a1=document.createElement("a")
   //   a1.innerText="Watch Receipe"
   //   a1.href=ele.strYoutube;
   //   a1.target="_blank" 
   //   a1.style.color="white"
   //   a1.style.textDecoration="none"
   //   btn.append(a1)

     div1.append(image,name,btn)
     document.querySelector("#randomReceipe").append(div1)
    })
   } 

   

export {navbar,randomReceipe,append}
