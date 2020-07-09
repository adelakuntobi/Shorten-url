

var input = document.getElementById("input");
var container = document.getElementById("tall");

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
   sendData()
  document.getElementById("provide").style.display = "none";
  document.getElementById("loader").style.display = "inline-block"
  setTimeout(() => {
    document.getElementById("loader").style.display = "none"
  }, 5000);
 }
}
}


function sendData() {
  (async () => {
    const rawResponse = await fetch('https://rel.ink/api/links/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"url": input.value})
    });
    const content = await rawResponse.json();
    console.log(input.value);
    console.log(content);
  

  
    display = `
    <section>
      <span class="float-left">${content.url}</span>
      <hr class="displayNone the-hr">
      <a href="${"https://rel.ink/"+content.hashid}" target="_blank" class="green">${"https://rel.ink/"+content.hashid}</a>
      <button onclick="myFunction()" class="copy-btn btn tooltip" id="copy" onmouseout="outFunc()" >
        <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>Copy</button>
    </section>
    `
    document.getElementById('tall').innerHTML += display;
    input.value =""
  })();
}

document.querySelector(".copy-btn").addEventListener("click", function () {
  document.querySelector(".copy-btn").innerHTML = "Copied!";
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

function createNode(element) {
  //Creates a new element
  return document.createElement(element);
}

function appendChildFunction(parent,element){
//Appends child to parent function
  return parent.appendChild(element)
}
