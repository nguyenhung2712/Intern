const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

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
var dateRow = $('#date_cells');

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
        inputTitleForm.value = 'Add Title';
        dayElement.innerHTML = new Date().toDateString();
        datePicker.valueAsDate = new Date();
    },
    handleUpdateDay: function() {
        let changeday = datePicker.value;
        dayElement.innerHTML = new Date(changeday).toDateString();
    },
    handleEvent: function() {
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
                    if (i >= 90) {
                        titleForm.style.top = (y - cell.offsetHeight*1.8) + 'px';
                    } else {
                        titleForm.style.top = y + 'px';
                    }
                  
                    if (cell.textContent) {
                        inputTitleForm.value = cell.textContent;
                   
                    }

                    saveBtn.onclick = (e) => {
                        e.preventDefault();
        
                        titleForm.setAttribute('style', 'display: none')
                        cell.textContent = titleInput.value;
                        inputTitleForm.value = 'Add Title';
                    }
                    closeBtn.onclick= ()=>{
                        titleForm.setAttribute('style', 'display: none !important')
                    }
                   
                };
            }
        })
    },
    start: function() {
        this.handleDefault();
        this.handleEvent();
        this.handleUpdateDay();
       
    }
};

calenderApp.start();

