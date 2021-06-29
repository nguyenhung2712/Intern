
var today = new Date().toDateString()
today.slice(0,3)
lengthToday = today.length
document.getElementById('day').innerHTML = today.slice(3,lengthToday) ;
document.getElementById('datepicker').valueAsDate = new Date();

// var today = new Date()
// var datenow = today.toDateString()
// document.getElementById("datepicker").value = datenow


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

