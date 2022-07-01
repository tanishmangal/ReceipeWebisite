import { navbar } from "./navbar.js";
// console.log(navbar());
document.querySelector("#navbar").innerHTML = navbar();

let registers = async(e) => {
  e.preventDefault();

  let form_data = {
    name: document.getElementById("fullname").value,
    emai: document.getElementById("email").value,
    password: document.getElementById("pass").value,
    username: document.getElementById("username").value,
    mobile: document.getElementById("no").value,
    description: document.getElementById("disc").value,
  };
  console.log(form_data)

  let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
    method: "POST",
    body: form_data,
    mode:"no-cors",

    headers: {
      "Content-Type": "application/json",
    },
  });
  let data=await res.json();
  console.log(data)
};

document.querySelector(".btnn").addEventListener("click",registers);
