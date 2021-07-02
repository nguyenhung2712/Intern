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
const tableHeadItem = $$('[scope]');
const dateRow = $('#date_cells');
const timeRoom = $('#time-room');
const dateDefaultSetting = $('#date-setting');
const roomName = $('#room-name');
const roomHeadingTitle = $('#title');
const previousDay = $('#previous-day');
const nextDay = $('#next-day');
const modal_closeBtn = $$('.modal_buttonclose')
const modal_input = $('#modal-event-input')
const detail = $('.btn-detail')

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
/* const today = new Date(); */
let calenderApp = {
    roomDetails: [
        {
            name: '',
            location: '',
            capacity: '',
            description: '',
            email: ''
        },
        {
            name: 'Budweiser',
            location: '10th Floor, VCN ...',
            capacity: 8,
            description: 'Room',
            email: 'meetingroom2@infodation.vn',
            color: 'rgb(200, 33, 43)'
        },
        {
            name: 'Heineken',
            location: '10th Floor, VCN ...',
            capacity: 8,
            description: 'Room',
            email: 'meetingroom5@infodation.vn',
            color: 'rgb(34, 67, 29)'
        },
        {
            name: 'Saigon',
            location: '10th Floor, VCN ...',
            capacity: 12,
            description: 'Room',
            email: 'meetingroom3@infodation.vn',
            color: 'rgb(254, 161, 0)'
        },
        {
            name: 'Strongbow',
            location: '10th Floor, VCN ...',
            capacity: 8,
            description: 'Room',
            email: 'meetingroom1@infodation.vn',
            color: 'rgb(78, 14, 28)'
        },
        {
            name: 'Tiger',
            location: '10th Floor, VCN ...',
            capacity: 8,
            description: 'Room',
            email: 'meetingroom4@infodation.vn',
            color: 'rgb(30, 55, 132)'
        },
        {
            name: 'Think Tank 1',
            location: '10th Floor, VCN ...',
            capacity: 4,
            description: 'Room',
            email: 'thinktankroom1@infodation.vn'
        },
        {
            name: 'Think Tank 2',
            location: '10th Floor, VCN ...',
            capacity: 6,
            description: 'Room',
            email: 'thinktankroom2@infodation.vn'
        },
        {
            name: 'Think Tank 3',
            location: '10th Floor, VCN ...',
            capacity: 4,
            description: 'Room',
            email: 'thinktankroom3@infodation.vn'
        },
        {
            name: 'Think Tank 4',
            location: '10th Floor, VCN ...',
            capacity: 6,
            description: 'Room',
            email: 'thinktankroom4@infodation.vn'
        },
        {
            name: 'Think Tank 5',
            location: '10th Floor, VCN ...',
            capacity: 6,
            description: 'Room',
            email: 'thinktankroom5@infodation.vn'
        },
    ],
    dataIn: JSON.parse(localStorage.getItem('dataIn')) || [],
    setDataIn: function() {
        localStorage.setItem('dataIn', JSON.stringify(this.dataIn))
    },
    loadDataIn: function() {
        cells.forEach((cell, i) => {
            this.dataIn.map(obj => {
                if (obj.index === i && obj.datePickerVal === datePicker.value) {
                    cell.textContent = obj.name;
                }
            })
        })
    },
    createNewData: function(name, time, index, datePickerVal) {
        let data = {};
        data.name = name;
        data.time = time;
        data.index = index;
        data.datePickerVal = datePickerVal;
        return data;
    },
    render: function() {    
        roomHeadingTitle.innerHTML = this.roomDetails.map(room => {
            return `
                <th scope="col" class="room-title">
                    <span>${room.name}</span>
                    <div class="capacity-room">${room.capacity}</div>
                </th>
            `
        }).join('');
    },
    cleanCell: function() {
        cells.forEach(cell => {
            if (cell.textContent !== 'Lunch Break') {
                cell.textContent = '';
            } 
        })
        this.loadDataIn();
    },
    toPreviousDay: function() {
        let inputValue = datePicker.valueAsDate;
        this.addOrSubtractDays(inputValue,-1);
        datePicker.valueAsDate = inputValue; 
        dayElement.innerHTML = inputValue.toDateString();

        this.cleanCell();
    },
    toNextDay: function() {
        let inputValue = datePicker.valueAsDate;
        this.addOrSubtractDays(inputValue,1);
        datePicker.valueAsDate = inputValue; 
        dayElement.innerHTML = inputValue.toDateString();

        this.cleanCell();
    },
    addOrSubtractDays: function(dateObj, numDays) {
        dateObj.setDate(dateObj.getDate() + numDays);
        return dateObj;
    },
    handleDefault: function() {
        /* Title default */
        inputTitleForm.value = 'Add Title';

        /* Day header default */
        dayElement.innerHTML = new Date().toDateString();
        datePicker.valueAsDate = new Date();

    },
    handleUpdateTimeOfInput: function(i) {
        let timeOfData;
        const timeInDay = Array.from(tableHeadItem).filter(time => time.scope === "row");
        if (i >= 10 && i < 100) {
            const firstNum = Number(i.toString().split('').splice(0, 1).join(''));
            timeOfData = timeInDay[firstNum].textContent;
        } else if (i >= 100) {
            const firstNum = Number(i.toString().split('').splice(0, 2).join(''));
            timeOfData = timeInDay[firstNum].textContent;
        } else if (i < 10) {
            timeOfData = timeInDay[0].textContent;
        }
        return timeOfData;
    },
    handleUpdateDay: function() {
        let changeday = datePicker.value;
        dayElement.innerHTML = new Date(changeday).toDateString();
    },
    handleDatePickerSetting: function() {
        let datePickerArrValue =  datePicker.value.split('-');
        dateDefaultSetting.innerHTML = months[Number(datePickerArrValue[1] - 1)] + ' ' + datePickerArrValue[2] + ', ' + datePickerArrValue[0];
    },
    setToLocalStorage: function(cell, i) {
        let timeOfData = this.handleUpdateTimeOfInput(i);
        let objData = this.createNewData(cell.textContent, timeOfData, i, datePicker.value);
        this.dataIn.push(objData);

        this.setDataIn();
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
                        titleForm.style.left = (x - cell.offsetWidth*2) + 'px';
                    } else if (i === 9 || i === 8) {
                        titleForm.style.left = (x - cell.offsetWidth*2) + 'px';
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

                    

                    /* Close form when click closebtn */
                    closeBtn.onclick= () => {
                        titleForm.setAttribute('style', 'display: none !important');
                        inputTitleForm.value = 'Add Title';
                    }

                    /* Save data when click savebtn */ 
                    saveBtn.onclick = (e) => {
                        e.preventDefault();
                        
                        titleForm.setAttribute('style', 'display: none')
                        cell.textContent = titleInput.value;
                        this.setToLocalStorage(cell, i);
        
                        inputTitleForm.value = 'Add Title';
                    }

                    /* Focus input form when click any cells */
                    titleInput.focus();

                    /* Time title input default */
                    this.handleUpdateTimeOfInput(i);

                    /* Room title input default */
                    if (i >= 10 && i < 100) {
                        const firstNum = Number(i.toString().split('').splice(1, 1).join(''));
                        roomName.innerText = this.roomDetails[firstNum + 1].name;
                    } else if (i >= 100) {
                        const firstNum = Number(i.toString().split('').splice(1, 2).join(''));
                        roomName.innerText = this.roomDetails[firstNum + 1].name;
                    } else if (i < 10) {
                        roomName.innerText = this.roomDetails[i + 1].name;
                    }

                    Array.from(modal_closeBtn).map((closeBtn) => {
                        closeBtn.onclick = () => {
                            modal_input.setAttribute('style','display: none !important');
                        }
                    })
                    detail.onclick = (e) => {
                        e.preventDefault()
                        modal_input.setAttribute('style', 'display: flex !important');
                    }
                    
                    /* Date title input default */
                    this.handleDatePickerSetting();

                };
            }
        })


        previousDay.onclick = () => this.toPreviousDay();
        nextDay.onclick = () => this.toNextDay();

        datePicker.onchange = () => {
            this.handleDatePickerSetting();
            this.handleUpdateDay();
        }
    },
    start: function() {
        this.handleDefault();
        this.handleEvent();
        this.handleUpdateDay();
        this.render();
        this.loadDataIn();
    }
};
 
calenderApp.start()

