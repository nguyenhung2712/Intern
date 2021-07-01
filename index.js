
// var today = new Date().toDateString()
// today.slice(0,3)
// lengthToday = today.length

document.getElementById('day').innerHTML = new Date().toDateString() ;
document.getElementById('datepicker').valueAsDate = new Date()


function addOrSubtractDays(dateObj, numDays) {
   dateObj.setDate(dateObj.getDate() + numDays);
   return dateObj;
}

//The next day button
function NextDay() {
    let inputValue = document.getElementById('datepicker').valueAsDate;
    addOrSubtractDays(inputValue,1);
    document.getElementById('datepicker').valueAsDate = inputValue; 
    document.getElementById('day').innerHTML = inputValue.toDateString(); 
}

//The previous day button
function PreviousDay() {
    let inputValue = document.getElementById('datepicker').valueAsDate;
    addOrSubtractDays(inputValue,-1);
    document.getElementById('datepicker').valueAsDate = inputValue; 
    document.getElementById('day').innerHTML = inputValue.toDateString();
}

var cells = document.getElementsByTagName('td');
for(var i = 0; i <= cells.length; i++){
    if(cells[i])
   { cells[i].addEventListener('click', function(){
        alert(this.textContent);
    });}
}


function UpdateDay()
{
    let changeday = document.getElementById('datepicker').value;
    document.getElementById('day').innerHTML = new Date(changeday).toDateString();
    
}

