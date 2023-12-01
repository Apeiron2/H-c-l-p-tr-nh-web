// document.getElementById("test").innerHTML="Vũ Đức Tài"
// document.getElementById("fix").style.width="1000px"
// const a=document.getElementsByClassName("hi")
// console.log(a[0]) // Lệnh để in ra 1 đối tượng: biến, object, class, element,...

// // [] -> mảng   {} -> object
//css selector
const input=document.querySelector("form input");
const box=document.querySelector(".box")
console.log([input]);
input.addEventListener("input",(e)=>{
    box.style.backgroundColor=e.target.value  
})

