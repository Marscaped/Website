//for menu
var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

var loggedUser = "";

function loginuser(){
  var passwordinput = document.getElementById("password").value;
  var usernameinput = document.getElementById("username").value;
// for login
const login = 'http://localhost:4567/authorizeUser?username=' + usernameinput + "&password=" + passwordinput;
fetch(login)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    } 
  })
  .then((data) => {
    console.log(data);
    if(data == "true"){
      window.location.href = "Home.html";
    } else{
      window.alert("Username or password incorrect");
    }
  })
  .catch(error => {
    console.error('Error:', error);
    window.alert("not connected to the server");
  });
}

//heating mate on
function heatingmateon(){
  document.getElementById("Auto").checked = false;
  var device = "Heatmat";
  var state = "On";
  const data = 'http://localhost:4567/changeDeviceState?device=' + device + "&state=" + state + "&user=" + usernameinput;
  fetch(data)
  .then(response => {
    if(!response.ok) {
      throw new Error('Network response was not ok');
    }
    response.text;
    if(response.text == "true"){
      document.getElementById("heating").checked = true;
    } else{
      document.getElementById("heating").checked = false;
      window.alert("There is a problem, please try again later")
    }
  })
  .catch(error => {
    console.error('Error:', error);
    window.alert("not connected to the server");
  });
}
//heating mate off
function heatingmateoff(){
  var device = "Heatmat";
  var state = "Off";
  const data = 'http://localhost:4567/changeDeviceState?device=' + device + "&state=" + state + "&user=" + usernameinput;
  fetch(data)
  .then(response => {
    if(!response.ok) {
      throw new Error('Network response was not ok');
    }
    response.text;
    if(response.text == "true"){
      document.getElementById("heating").checked = false;
    } else{
      document.getElementById("heating").checked = true;
      window.alert("There is a problem, please try again later")
    }
  })
  .catch(error => {
    console.error('Error:', error);
    window.alert("not connected to the server");
  });
}
//fan on
function fanon(){
  document.getElementById("Auto").checked = false;
  var device = "Fan";
  var state = "On";
  const data = 'http://localhost:4567/changeDeviceState?device=' + device + "&state=" + state + "&user=" + usernameinput;
  fetch(data)
  .then(response => {
    if(!response.ok) {
      throw new Error('Network response was not ok');
    }
    response.text;
    if(response.text == "true"){
      document.getElementById("fan").checked = true;
    } else{
      document.getElementById("fan").checked = false;
      window.alert("There is a problem, please try again later")
    }
  })
  .catch(error => {
    console.error('Error:', error);
    window.alert("not connected to the server");
  });
}
//fan off
function fanoff(){
  var device = "Fan";
  var state = "Off";
  const data = 'http://localhost:4567/changeDeviceState?device=' + device + "&state=" + state + "&user=" + usernameinput;
  fetch(data)
  .then(response => {
    if(!response.ok) {
      throw new Error('Network response was not ok');
    }
    response.text;
    if(response.text == "true"){
      document.getElementById("fan").checked = false;
    } else{
      document.getElementById("fan").checked = true;
      window.alert("There is a problem, please try again later")
    }
  })
  .catch(error => {
    console.error('Error:', error);
    window.alert("not connected to the server");
  });
}
//water on
function wateron(){
  document.getElementById("Auto").checked = false;
  var device = "Pump";
  var state = "On";
  const data = 'http://localhost:4567/changeDeviceState?device=' + device + "&state=" + state + "&user=" + usernameinput;
  fetch(data)
  .then(response => {
    if(!response.ok) {
      throw new Error('Network response was not ok');
    }
    response.text;
    if(response.text == "true"){
      document.getElementById("water").checked = true;
    } else{
      document.getElementById("water").checked = false;
      window.alert("There is a problem, please try again later")
    }
  })
  .catch(error => {
    console.error('Error:', error);
    window.alert("not connected to the server");
  });
}
//water off
function wateroff(){
  var device = "Pump";
  var state = "Off";
  const data = 'http://localhost:4567/changeDeviceState?device=' + device + "&state=" + state + "&user=" + usernameinput;
  fetch(data)
  .then(response => {
    if(!response.ok) {
      throw new Error('Network response was not ok');
    }
    response.text;
    if(response.text == "true"){
      document.getElementById("water").checked = false;
    } else{
      document.getElementById("water").checked = true;
      window.alert("There is a problem, please try again later")
    }
  })
  .catch(error => {
    console.error('Error:', error);
    window.alert("not connected to the server");
  });
}
//light on
function lighton(){
  document.getElementById("Auto").checked = false;
  var device = "Light";
  var state = "On";
  const data = 'http://localhost:4567/changeDeviceState?device=' + device + "&state=" + state + "&user=" + usernameinput;
  fetch(data)
  .then(response => {
    if(!response.ok) {
      throw new Error('Network response was not ok');
    }
    response.text;
    if(response.text == "true"){
      document.getElementById("light").checked = true;
    } else{
      document.getElementById("light").checked = false;
      window.alert("There is a problem, please try again later")
    }
  })
  .catch(error => {
    console.error('Error:', error);
    window.alert("not connected to the server");
  });
}
//light off
function lightoff(){
  var device = "Light";
  var state = "Off";
  const data = 'http://localhost:4567/changeDeviceState?device=' + device + "&state=" + state + "&user=" + usernameinput;
  fetch(data)
  .then(response => {
    if(!response.ok) {
      throw new Error('Network response was not ok');
    }
    response.text;
    if(response.text == "true"){
      document.getElementById("light").checked = false;
    } else{
      document.getElementById("light").checked = true;
      window.alert("There is a problem, please try again later")
    }
  })
  .catch(error => {
    console.error('Error:', error);
    window.alert("not connected to the server");
  });
}
//Auto on
function autoon(){
  document.getElementById("heating").checked = false;
  document.getElementById("fan").checked = false;
  document.getElementById("water").checked = false;
  document.getElementById("light").checked = false;
  var device = "Auto";
  var state = "On";
  const data = 'http://localhost:4567/changeDeviceState?device=' + device + "&state=" + state + "&user=" + usernameinput;
  fetch(data)
  .then(response => {
    if(!response.ok) {
      throw new Error('Network response was not ok');
    }
    response.text;
    if(response.text == "true"){
      document.getElementById("Auto").checked = true;
    } else{
      document.getElementById("Auto").checked = false;
      window.alert("There is a problem, please try again later")
    }
  })
  .catch(error => {
    console.error('Error:', error);
    window.alert("not connected to the server");
  });
}
//Auto off
function autooff(){
  var device = "Auto";
  var state = "Off";
  const data = 'http://localhost:4567/changeDeviceState?device=' + device + "&state=" + state + "&user=" + usernameinput;
  fetch(data)
  .then(response => {
    if(!response.ok) {
      throw new Error('Network response was not ok');
    }
    response.text;
    if(response.text == "true"){
      document.getElementById("Auto").checked = false;
    } else{
      document.getElementById("Auto").checked = true;
      window.alert("There is a problem, please try again later")
    }
  })
  .catch(error => {
    console.error('Error:', error);
    window.alert("not connected to the server");
  });
}
function refresh(){
const sensor = 'http://localhost:4567/getLatestSensorData';
fetch(sensor, {})
.then(response => {
  if(!response.ok){
    throw new Error('Network response was not ok');
  }
})
.then((data) => {
  console.log(data);

  const text = data.split(";");
  document.getElementById("temp").innerHTML = text[1];
  document.getElementById("humid").innerHTML = text[2];
  document.getElementById("mois").innerHTML = text[3];
  document.getElementById("brigh").innerHTML = text[4];
  
})
.catch(error => {
  console.error('Error: ', error);
  window.alert("not connected to the server");
});
}

function changeDeviceState(device, inputid) {
  var newState = "";
  var oldCheckedState = !document.getElementById(inputid).checked;
  //console.log(oldCheckedState);
  if (oldCheckedState == true) {
    newState = "Off";
  } else {
    newState = "On";
  }

  const url = 'http://localhost:4567/changeDeviceState?device=' + device + "&state=" + newState + "&user=" + loggedUser;
  console.log(url);
  fetch(url, {})
  .then(response => {
    if(!response.ok){
      throw new Error('Network response was not ok');
    }
  })
  .then((data) => {
    if (data == "true") {
      if (oldCheckedState == true) {
        document.getElementById(inputid).checked = false;
      } else {
        document.getElementById(inputid).checked = true;
      }
    } else {
      throw new Error('Could not reach Device' + device);
    }
  })
  .catch(error => {
    console.error('Error: ', error);
    window.alert("not connected to the server");
    document.getElementById(inputid).checked = oldCheckedState;
});
}