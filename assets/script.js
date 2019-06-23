
if(localStorage.getItem('names')){
  var nameArray = Array.from(JSON.parse(localStorage.getItem('names')));
  var storedNames = Array.from(JSON.parse(localStorage.getItem('names')));
}else{
 var nameArray=[]
 var storedNames=[]
}

var removedNames = [];

var spokenArray = [];

var output = document.getElementById('para');
document.addEventListener("keydown",storeName);



function storeName(e) {

var selector=document.querySelector("#input");

  if(e.keyCode==13){

    var name = selector.value;

    if(name.length>0){
      if(localStorage.getItem("names") && Array.from(JSON.parse(localStorage.getItem('names'))).includes(name)){
        alert("this name already exists, try a different name")
      }

      if(!localStorage.getItem("names")){

        storedNames.push(name);

        var stringNames = JSON.stringify(storedNames);

        localStorage.setItem('names',stringNames);
      }

      if(!Array.from(JSON.parse(localStorage.getItem('names'))).includes(name)
      ){
        storedNames.push(name);

        var stringNames = JSON.stringify(storedNames);

        localStorage.setItem('names',stringNames);
      }
      
      storedNames.forEach(name => {
        if(!(spokenArray.includes(name)) && !nameArray.includes(name) && !removedNames.includes(name)){
          nameArray.push(name);
        }
      })

      selector.value = "";

      selector.focus();

      if(nameArray.length>0){
         listDisplay(nameArray,"toSpeak");
      }
    }else{
      alert("Say hi to the man with no name. If he's not there, enter a proper name, you garbage");
    }
  }
}

var randomName;


function displayName(){

  document.querySelector("#primaryBtn").innerText = "pick again";

  randomName = nameArray[Math.floor(Math.random() * nameArray.length)];

  var nameIndex = nameArray.indexOf(randomName);

  var count = 0;

  var startTime = new Date().getTime();
  

  if(nameArray.length==1){
      output.innerHTML = nameArray[0];
      listDisplay(spokenArray,"spoken");
      spokenArray.push(nameArray[0]);      
      nameArray = [];
      listDisplay(nameArray,"toSpeak");
      
     
  }
  else if(nameArray.length>0){
    if(spokenArray.length>0){
      listDisplay(spokenArray,"spoken");
    }
        var interval  = setInterval(function () {
        if(new Date().getTime()-startTime > 2000){
          clearInterval(interval);
          output.innerHTML = randomName;
          nameArray.splice(nameIndex,1);
  
          listDisplay(nameArray,"toSpeak");
          
          spokenArray.push(randomName);          
          
          return;
        }

        output.innerHTML = nameArray[count];
         if(count<nameArray.length-1){
         count++;
         }else{
         count=0;
         }
    } , 200);
  }else{
    output.innerHTML = "no names here";
    listDisplay(spokenArray,"spoken");
  }


}

function listDisplay(arr,id){
  var list = document.getElementById(id);
  list.innerHTML = "";
  for(i of arr){
    var div = document.createElement("div");
    div.className = "details-div";
    var name = document.createTextNode(i);
    div.appendChild(name);

    var btn = document.createElement("button");
   
    var removeBtn = document.createTextNode("x");
    btn.appendChild(removeBtn);
    btn.id = i;

    btn.className = "removeBtn"

    btn.onclick = removeUser;

    div.appendChild(btn);

    list.appendChild(div);
    // var br = document.createElement("br");
    // l.appendChild(br);
  }
}


function removeUser(e){
  id = e.target.id;
  removedNames.push(id);
  nameArray.splice(nameArray.indexOf(id),1);
  listDisplay(nameArray,"toSpeak");
}

function prepopulate() {
  if (localStorage.getItem('names')){
    var storedNames = Array.from(JSON.parse(localStorage.getItem('names')));
    listDisplay(storedNames,"toSpeak");
  }
 
}


// random teams

function randomTeams(){

  var nameArray=[{name:"bhatia",batch:8},{name:"amit",batch:7},{name:"shashank",batch:7},{name:"rafi",batch:7},
      {name:"aman",batch:7},{name:"sunny",batch:8},{name:"tejas",batch:9},{name:"yash",batch:9},
      {name:"akbar",batch:8},{name:"dhoni",batch:7},{name:"rajesh",batch:7}];
  
  
  
  nameArray=(nameArray.sort((a,b) => 0.5 - Math.random()).sort((a,b) => a.batch-b.batch));
  
      var teamArr = []
      
      var emptyArr1 = [];
      var emptyArr2 = [];
      var emptyArr3 = [];
      var emptyArr4 = [];
      var emptyArr5 = [];
      var emptyArr6 = [];
      var emptyArr7 = [];
      var emptyArr8 = [];
      var emptyArr9 = [];
      var emptyArr10 = [];
  
      
  
      var emptyArrays = [emptyArr1,emptyArr2,emptyArr3,emptyArr4,emptyArr5,emptyArr6,emptyArr7,emptyArr8,emptyArr9,emptyArr10]
  
      var noOfTeams = 4;
  
     for(var i=0;i<noOfTeams;i++){
         teamArr.push(emptyArrays[i])
     }
  
  
      while(nameArray.length>0){
          teamArr.forEach(team => {
              if(nameArray[0]!==undefined){
                  team.push(nameArray[0]);
                  nameArray.splice(0,1)
              }
              
          })
      }
   return teamArr;  
  }
  