
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert('You have signed out !!!')
    location.assign("/index.html")
    });
  }
const nameData = document.querySelector('#name--data');
const image = document.querySelector('#img--data');
const job = document.querySelector('#job--data');
const place = document.querySelector('#location--data');
const DoB = document.querySelector('#birthday--data');
const phone = document.querySelector('#phone--data');
const fb = document.querySelector('#facebook--data');
const skype = document.querySelector('#skype--data');
const about = document.querySelector('#about--data');
const gender = document.querySelector('#gender--data');


const male = document.querySelector('#gender-male')
const female = document.querySelector('#gender-female')
const other = document.querySelector('#gender-other')

function CheckGender()
{
  if(male.checked==true)
  gender.value = 'Male'
  else if (female.checked==true)
  gender.value ='Female'
  else
  gender.value ='';
  return gender.value;
}

function createNewData(id='',place='',DoB='',fb='',skype='',job='',phone='',about='',gender=''){
    let data = {};
    data.id = id;
    data.place = place
    data.DoB = DoB
    data.fb = fb
    data.skype = skype
    data.job = job
    data.phone = phone
    data.about =about
    data.gender = gender
    return data;
}

function setToLocalStorage(){
  var Key = localStorage.getItem('key');
    var dataIn = createNewData(nameData.value,place.value,DoB.value,fb.value,skype.value,job.value,phone.value,about.value,CheckGender())
    
    localStorage.setItem(Key, JSON.stringify(dataIn))

}
