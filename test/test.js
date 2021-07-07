var name_email = document.getElementById("name_email");
var email = document.getElementById("email")
var photo = document.getElementById("image")
var data_email = document.querySelector(".data")
var signinbtn = document.querySelector('.g-signin2');
console.log(data_email)

function onSignIn(googleUser) {
var profile = googleUser.getBasicProfile();
name_email.innerHTML = profile.getName();
photo.setAttribute('src',profile.getImageUrl());
name_email.innerHTML = profile.getName();
email.innerHTML = profile.getEmail();
 // This is null if the 'email' scope is not present.
}
