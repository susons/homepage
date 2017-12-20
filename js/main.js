              function initMap() {
                var uluru = {lat: 56.951057, lng: 24.100637};
                var map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 15,
                  center: uluru
                });
                var marker = new google.maps.Marker({
                  position: uluru,
                  map: map
                });
              }

              function checkPass()
              {
                  //Store the password field objects into variables ...
                  var pass1 = document.getElementById('pass1');
                  var pass2 = document.getElementById('pass2');
                  //Store the Confimation Message Object ...
                  var message = document.getElementById('confirmMessage');
                  //Set the colors we will be using ...
                  var goodColor = "#66cc66";
                  var badColor = "#ff6666";
                  //Compare the values in the password field 
                  //and the confirmation field
                  if(pass1.value == pass2.value){
                      //The passwords match. 
                      //Set the color to the good color and inform
                      //the user that they have entered the correct password 
                      pass2.style.backgroundColor = goodColor;
                      message.style.color = goodColor;
                      message.innerHTML = "Passwords Match"
                  }else{
                      //The passwords do not match.
                      //Set the color to the bad color and
                      //notify the user.
                      pass2.style.backgroundColor = badColor;
                      message.style.color = badColor;
                      message.innerHTML = "Passwords Do Not Match!"
                  }
              } 

              // validates text only
              function Validate(txt) {
                  txt.value = txt.value.replace(/[^a-zA-Z0-9-'\n\r.]+/g, '');
              }
              // validate email
              function email_validate(email)
              {
              var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;
              
                  if(regMail.test(email) == false)
                  {
                  document.getElementById("status").innerHTML    = "<span class='warning'>Email address is not valid yet.</span>";
                  }
                  else
                  {
                  document.getElementById("status").innerHTML	= "<span class='valid'>Thanks, you have entered a valid Email address!</span>";	
                  }
              }

              function validate_country()
              {
               var ddl = document.getElementById("countries");
               var selectedValue = ddl.options[ddl.selectedIndex].value;
                  if (selectedValue == "selectCountry")
                 {
                  document.getElementById("status").innerHTML	= "<span class='valid'>Please, select a country!</span>";
                  return false;
                 }
              }

              function setup()
              {
              var text1 = document.getElementById("comment").value;
              var username = document.getElementById("username").value;
              document.getElementById("output").innerHTML +=username+": "+"<br>" +"<p>"+text1 +"</p>";
              }
            
    