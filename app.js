



var inputValue = document.getElementById("input").value

var input = document.getElementById("input");
input.addEventListener("click",function(){
  document.getElementById("provide").style.display = "none";
})
function myFunction() {
  if (input.value === "") {
   document.getElementById("provide").style.display = "block";
  }
else{
if (!input.checkValidity()) {
   document.getElementById("provide").style.display = "block";
 }
 else{
  document.getElementById("provide").style.display = "none";
  // sendData()
 }
}
}


// function sendData() {
//   (async () => {
//     const rawResponse = await fetch('https://rel.ink/api/links/', {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({"url": theUrl})
//     });
//     const content = await rawResponse.json();
//     console.log(content);
//   })();
// }

document.querySelector(".copy-btn").addEventListener("click", function () {
  document.querySelector(".copy-btn").innerHTML = "Copied!😁";
  document.querySelector(".copy-btn").style.backgroundColor = "#3a3053";
  var copyText = document.getElementById("green").innerHTML;
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
    
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied link👏";
})
function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard😉";
}


function openNav() {
  document.getElementById("mySidenav").style.transition = "all 5s ease-in-out"
  if(document.getElementById("mySidenav").style.display === "block"){
    document.getElementById("mySidenav").style.display = "none";
  }
  else{
    document.getElementById("mySidenav").style.display = "block";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
}