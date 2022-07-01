import {navbar,randomReceipe,append} from "./navbar.js";
console.log(navbar())
document.querySelector("#mainDiv").innerHTML=navbar();
const query="chic"
randomReceipe(query).then((data)=>{
    console.log(data)
    append(data)
})
