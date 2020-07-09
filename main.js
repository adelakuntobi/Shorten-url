

var input = document.getElementById("input");
var container = document.getElementById("tall");

var inputArray = new Array;
showData();

input.addEventListener("click",function(){
  document.getElementById("provide").style.display = "none";
})

document.getElementById("short-btn").addEventListener("click", function () {
  if (!input.checkValidity()) {
    document.getElementById("provide").style.display = "block";
  }
  else{
    document.getElementById("provide").style.display = "none";
    document.getElementById("loader").style.display = "inline-block"
    setTimeout(() => {
      document.getElementById("loader").style.display = "none"
    }, 3000);
    sendData()
  }
})


function sendData() {
  console.log(input.value);
  fetch('https://rel.ink/api/links/',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({'url': input.value})
  })
  .then(res => res.json())
  .then(content =>{    
  
    display = `
    <section>
      <span class="float-left">${content.url}</span>
      <hr class="displayNone the-hr">
      <a href="${"https://rel.ink/"+content.hashid}" target="_blank" class="green">${"https://rel.ink/"+content.hashid}</a>`
    //   <button onclick="myFunction()" class="copy-btn btn tooltip" id="copy" onmouseout="outFunc()" >
    //     <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>Copy</button>
    // </section>
    // `
    document.getElementById('tall').innerHTML += display;
    input.value = "";

    var linkUrl = content.url;
    var linkId = content.hashid;
    const theDetails = new Link(linkUrl, linkId);
    saveData(theDetails)
  })
};

function saveData (details){
  // console.log(details)
  let inputArray = JSON.parse(localStorage.getItem('noteData'));
  if(inputArray == null){
    inputArray = new Array();
    inputArray.push(details);
  }
  else{
    inputArray.push(details);
  }
  localStorage.setItem('noteData', JSON.stringify(inputArray));
  console.log(inputArray)
}

function showData() {
  let inputArray = JSON.parse(localStorage.getItem('noteData'));//where all the notes will be stored "noteData"
  let show = "";
  
  if(inputArray != null && inputArray != ""){
    inputArray = JSON.parse(localStorage.getItem('noteData'));
    
    for(let i = 0; i < inputArray.length; i++){
      inputArray.forEach(element => {
        console.log(element.id)
        show = `
        <section>
        <span class="float-left">${element.url}</span>
        <hr class="displayNone the-hr">
        <a href="${"https://rel.ink/"+element.id}" target="_blank" class="green">${"https://rel.ink/"+element.id}</a>`
        // <button onclick="myFunction()" class="copy-btn btn tooltip" id="copy" onmouseout="outFunc()" >
        // <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>Copy</button>
        // </section>
        
      })
      document.getElementById('tall').innerHTML += show;
    }
  }
}


document.querySelector(".copy-btn").addEventListener("click", function () {
  document.querySelector(".copy-btn").innerHTML = "Copied!";
  document.querySelector(".copy-btn").style.backgroundColor = "#3a3053";
  var copyText = document.getElementById("green");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
})
function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}


function openNav() {
  document.getElementById("navbar").style.transition = "all 5s ease-in-out"
  if(document.getElementById("navbar").style.display === "block"){
    document.getElementById("navbar").style.display = "none";
  }
  else{
    document.getElementById("navbar").style.display = "block";
  }
}
