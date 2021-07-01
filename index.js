const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// var today = new Date().toDateString()
// today.slice(0,3)
// lengthToday = today.length
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

const cells = $$('td');
const inputTitleForm = $('.form-control');
const dayElement = $('#day');
const datePicker = $('#datepicker');
const bodyRect = document.body.getBoundingClientRect();
const titleForm = $('#title-form');
const autoInputDate = $('#title-form span');
const titleInput = $('#title-input');
const saveBtn = $('.btn-save');
const closeBtn = $('.btn-close');
const tableHeadItem = $$('[scope]');
const dateRow = $('#date_cells');
const timeRoom = $('#time-room');
const dateDefaultSetting = $('#date-setting');
const roomName = $('#room-name');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
/* const today = new Date(); */
let roomDetails = {
    room1: {
        name: 'Budweiser Room VN',
        location: '10th Floor, VCN ...',
        capacity: 8,
        description: 'Room',
        email: 'meetingroom2@infodation.vn'
    },
    room2: {
        name: 'Heineken Room VN',
        location: '10th Floor, VCN ...',
        capacity: 8,
        description: 'Room',
        email: 'meetingroom5@infodation.vn'
    },
    room3: {
        name: 'Saigon Room VN',
        location: '10th Floor, VCN ...',
        capacity: 12,
        description: 'Room',
        email: 'meetingroom3@infodation.vn'
    },
    room4: {
        name: 'Strongbow Room VN',
        location: '10th Floor, VCN ...',
        capacity: 8,
        description: 'Room',
        email: 'meetingroom1@infodation.vn'
    },
    room5: {
        name: 'Think Tank Room 1 VN',
        location: '10th Floor, VCN ...',
        capacity: 4,
        description: 'Room',
        email: 'thinktankroom1@infodation.vn'
    },
    room6: {
        name: 'Think Tank Room 2 VN',
        location: '10th Floor, VCN ...',
        capacity: 6,
        description: 'Room',
        email: 'thinktankroom2@infodation.vn'
    },
    room7: {
        name: 'Think Tank Room 3 VN',
        location: '10th Floor, VCN ...',
        capacity: 4,
        description: 'Room',
        email: 'thinktankroom3@infodation.vn'
    },
    room8: {
        name: 'Think Tank Room 4 VN',
        location: '10th Floor, VCN ...',
        capacity: 6,
        description: 'Room',
        email: 'thinktankroom4@infodation.vn'
    },
    room9: {
        name: 'Think Tank Room 5 VN',
        location: '10th Floor, VCN ...',
        capacity: 6,
        description: 'Room',
        email: 'thinktankroom5@infodation.vn'
    },
    room10: {
        name: 'Tiger Room VN',
        location: '10th Floor, VCN ...',
        capacity: 8,
        description: 'Room',
        email: 'meetingroom4@infodation.vn'
    },

}
let dataIn = [
    {
        id: '01',
        name: 'Board Meeting',
        time: '9:00 AM',
        location: 'Office'
    },
    {
        id: '02',
        name: 'Sprint Planning with Team members',
        time: '9:00 AM',
        location: 'Office'
    },
    {
        id: '03',
        name: 'Board Meeting',
        time: '12:00 AM',
        location: 'Office'
    },
    {
        id: '04',
        name: 'Board Meeting',
        time: '9:00 AM',
        location: 'Office'
    },
]
let calenderApp = {
    handleDefault: function() {
        /* Title default */
        inputTitleForm.value = 'Add Title';

        /* Day header default */
        dayElement.innerHTML = new Date().toDateString();
        datePicker.valueAsDate = new Date();
        
    },
    handleUpdateDay: function() {
        let changeday = datePicker.value;
        dayElement.innerHTML = new Date(changeday).toDateString();
    },
    handleDatePickerSetting: function() {
        let datePickerArrValue =  datePicker.value.split('-');
        dateDefaultSetting.innerHTML = months[Number(datePickerArrValue[1] - 1)] + ' ' + datePickerArrValue[2] + ', ' + datePickerArrValue[0];
    },
    handleEvent: function() {
        /* Event clicking any cell in table */
        cells.forEach((cell, i) => {
            if (!(cell.textContent === 'Lunch Break')) {
                cell.onclick = () => {
                    
                    titleForm.setAttribute('style', 'display: block !important')
                    const cellRec =  cell.getBoundingClientRect()
                    let y = Math.round(cellRec.top - bodyRect.top);
                    let x = Math.round(cellRec.left - bodyRect.left);
                    const lastNum = Number(i.toString().split('').splice(1, 2).join(''));
                    if (i > 10 && (lastNum === 9 ||  lastNum === 8)) {
                        titleForm.style.left = (x - cell.offsetWidth*1.8) + 'px';
                    } else if (i === 9 || i === 8) {
                        titleForm.style.left = (x - cell.offsetWidth*1.8) + 'px';
                    } else {
                        titleForm.style.left = x  + 'px';
                    }
                    if (i >= 80) {
                        titleForm.style.top = (y - cell.offsetHeight*3.2) + 'px';
                    } else {
                        titleForm.style.top = y + 'px';
                    }
                  
                    if (cell.textContent) {
                        inputTitleForm.value = cell.textContent;
                    } else {
                        inputTitleForm.value = 'Add Title';
                    }

                    /* Save data when click savebtn */
                    saveBtn.onclick = (e) => {
                        e.preventDefault();
                        
                        titleForm.setAttribute('style', 'display: none')
                        cell.textContent = titleInput.value;
                        inputTitleForm.value = 'Add Title';
                    }

                    /* Close form when click closebtn */
                    closeBtn.onclick= ()=>{
                        titleForm.setAttribute('style', 'display: none !important');
                        inputTitleForm.value = 'Add Title';
                    }

                    /* Focus input form when click any cells */
                    titleInput.focus();

                    /* Time title input default */
                    const timeInDay = Array.from(tableHeadItem).filter(time => time.scope === "row");
                    if (i >= 10 && i < 100) {
                        const firstNum = Number(i.toString().split('').splice(0, 1).join(''));
                        timeRoom.innerText = timeInDay[firstNum].textContent;
                    } else if (i >= 100) {
                        const firstNum = Number(i.toString().split('').splice(0, 2).join(''));
                        timeRoom.innerText = timeInDay[firstNum].textContent;
                    } else if (i < 10) {
                        timeRoom.innerText = timeInDay[0].textContent;
                    }

                    /* Room title input default */
                    const roomTypes = Array.from(tableHeadItem).filter((roomType, i) => roomType.scope === "col" && i !== 0);
                    if (i >= 10 && i < 100) {
                        const firstNum = Number(i.toString().split('').splice(1, 1).join(''));
                        roomName.innerText = roomTypes[firstNum].textContent;
                    } else if (i >= 100) {
                        const firstNum = Number(i.toString().split('').splice(1, 2).join(''));
                        roomName.innerText = roomTypes[firstNum].textContent;
                    } else if (i < 10) {
                        roomName.innerText = roomTypes[i].textContent;
                    }
                    
                    /* Date title input default */
                    this.handleDatePickerSetting();
                };
            }
        })

        datePicker.onchange = () => this.handleDatePickerSetting();
    },
    start: function() {
        this.handleDefault();
        this.handleEvent();
        this.handleUpdateDay();
    }
};
 

calenderApp.start()
