var nameArray = [];
var spokenArray = [];

var output = document.getElementById('para');
document.addEventListener("keydown",storeName);

function storeName(e) {

var selector=document.querySelector("#input");

  if(e.keyCode==13){

    var name = selector.value;

    if(name.length>0){
      nameArray.push(name);

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
  randomName = nameArray[Math.floor(Math.random() * nameArray.length)];

  var nameIndex = nameArray.indexOf(randomName);

  var count = 0;

  var startTime = new Date().getTime();


  if(nameArray.length==1){
      output.innerHTML = nameArray[0];
      listDisplay(spokenArray,"spoken");
  }
  else if(nameArray.length>0){

        var interval  = setInterval(function () {
        if(new Date().getTime()-startTime > 3000){
          clearInterval(interval);
          output.innerHTML = randomName;
          nameArray.splice(nameIndex,1);
          listDisplay(nameArray,"toSpeak");
          if(spokenArray.length>0){
            listDisplay(spokenArray,"spoken");
          }
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
  }

}

function listDisplay(arr,id){
  var list = document.getElementById(id);
  list.innerHTML = "";
  for(i of arr){
    var name = document.createTextNode(i);
    list.appendChild(name);
    var br = document.createElement("br");
    list.appendChild(br);
  }
}
