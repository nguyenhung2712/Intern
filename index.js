
document.getElementById('day').innerHTML = new Date().toDateString();
document.getElementById('datepicker').valueAsDate = new Date();

var cells = document.getElementsByTagName('td');
for(var i = 0; i <= cells.length; i++){
    if(cells[i])
   { cells[i].addEventListener('click', function(){
        this.textContent ='test';
    });}
}

function UpdateDay()
{
   
    let changeday = document.getElementById('datepicker').value;
    
    document.getElementById('day').innerHTML = new Date(changeday).toDateString();
    
}

