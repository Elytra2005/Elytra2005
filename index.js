
// sign in vars 


let username = document.querySelector(".input-one");
let password = document.querySelector(".input-two");


function validate(event){
  
  event.preventDefault();
  //Rest of the code

  if(username.value === "admin" && password.value === "password" ){
      alert(`Welcome ${username.value}`);
  }
  else{
    alert(`${username.value} not In database! `);
  }
}
