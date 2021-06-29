function RealTime()
{
    const x = new Date();
    const days = ["Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7","Chủ Nhật"]
    const months = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
    document.getElementById('day').innerHTML = days[x.getDay() -1 ] +" ,"+" Ngày " +x.getDate()+ " "+ months[x.getMonth()] +" " + " năm "+ x.getFullYear();
}
RealTime();


var cells = document.getElementsByTagName('td');
for(var i = 0; i <= cells.length; i++){
    if(cells[i])
   { cells[i].addEventListener('click', function(){
        alert(this.textContent);
    });}
}

function UpdateDay()
{
    const x = new Date();
    const days = ["Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7","Chủ Nhật"]
    const months = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
    let changeday = document.getElementById('datepicker').value;
    console.log(changeday);
}

