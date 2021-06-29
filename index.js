
document.getElementById('day').innerHTML = new Date().toDateString();
document.getElementById('datepicker').value = new Date("yyyy-MM-dd");

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

