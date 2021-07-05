const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const cells = $$('td');
const inputTitleForm = $('.form-control');
const dayElement = $('#day');
const datePicker = $('#datepicker');
const bodyRect = document.body.getBoundingClientRect();
const titleForm = $('#title-form');
const titleInput = $('#title-input');
const roomNameCreate = $('#room-name-create');
const autoInputDate = $('#title-form span');
const saveBtn = $('.btn-save');
const closeBtn = $('.btn-close');
const tableHeadItem = $$('[scope]');
const dateRow = $('#date_cells');
const timeRoom = $('#time-room');
const dateDefaultSetting = $('#date-setting');
const roomHeadingTitle = $('#title');
const previousDay = $('#previous-day');
const nextDay = $('#next-day');
const modal_closeBtn = $$('.modal_buttonclose');
const modal_input = $('#modal-event-input');
const detail = $('.btn-detail');
const alreadyForm = $('#already-form');
const closeSpan = $('#close');
const spanTitle = $('#span-title');
const alreadyFormHeader = $('.already-form-header');
const editBtn = $('#edit');
const roomNameSaved = $('#room-name-saved');
const removeFormBtn = $('#remove');
const closeAlreadyFormBtn = $('#close');
const btnDelete = $('.btn-delete')
const save1 = $('#save1')
const summary = $('#summary');
const place = $('#place');
const commentsValue = $('#comments-value');

const commentsArea = $('#comments-area');
const locationInput = $('#location-input'); 
const roomInput = $('#room-type');

const timeRoomSaved = $('#time-room-saved');
const dateSettingSaved = $('#date-setting-saved');


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
            color: 'rgb(156, 108, 15)'
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
            email: 'thinktankroom1@infodation.vn',
            color: 'rgb(52, 163, 209)'
        },
        {
            name: 'Think Tank 2',
            location: '10th Floor, VCN ...',
            capacity: 6,
            description: 'Room',
            email: 'thinktankroom2@infodation.vn',
            color: 'rgb(255, 106, 66)'
        },
        {
            name: 'Think Tank 3',
            location: '10th Floor, VCN ...',
            capacity: 4,
            description: 'Room',
            email: 'thinktankroom3@infodation.vn',
            color: 'rgb(234, 63, 142)'
        },
        {
            name: 'Think Tank 4',
            location: '10th Floor, VCN ...',
            capacity: 6,
            description: 'Room',
            email: 'thinktankroom4@infodation.vn',
            color: 'rgb(200, 0, 34)'
        },
        {
            name: 'Think Tank 5',
            location: '10th Floor, VCN ...',
            capacity: 6,
            description: 'Room',
            email: 'thinktankroom5@infodation.vn',
            color: 'rgb(21, 49, 112)'
        },
    ],
    dateRegex: /^(0?[1-9]|[1][012]):([0-5][0-9])\s(AM|PM)$/,
    dataIn: JSON.parse(localStorage.getItem('dataIn')) || [],
    setDataIn: function() {
        localStorage.setItem('dataIn', JSON.stringify(this.dataIn))
    },
    render: function() {    
        roomHeadingTitle.innerHTML = this.roomDetails.map(room => {
            return `
                <th scope="col" class="room-title" style="user-select: none">
                    <span>${room.name}</span>
                    <div class="capacity-room">${room.capacity}</div>
                </th>
            `
        }).join('');
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
<<<<<<< HEAD
    createNewData: function(name, time, index, place,comments,datePickerVal) {
=======
    createNewData: function(index, name, time, datePickerVal, comments = '', place = '', room = '') {
>>>>>>> 594edd22fae88f109bb7178e653501a50672c0ef
        let data = {};
        data.index = index;
        data.name = name;
        data.time = time;
<<<<<<< HEAD
        data.index = index;
        data.place = place;
        data.comments = comments;
=======
        data.comments = comments;
        data.place = place;
>>>>>>> 594edd22fae88f109bb7178e653501a50672c0ef
        data.datePickerVal = datePickerVal;
        data.room = room;
        return data;
    },
    mergeDataIn: function(index, name, time, datePickerVal, comments, place, room, flagIndex) {
        this.dataIn[flagIndex].name = name;
        this.dataIn[flagIndex].time = time;
        this.dataIn[flagIndex].index = index;
        this.dataIn[flagIndex].datePickerVal = datePickerVal;
        this.dataIn[flagIndex].comments = comments;
        this.dataIn[flagIndex].place = place;
        this.dataIn[flagIndex].place = place;
    },
    cleanCell: function() {
        cells.forEach(cell => {
            this.dataIn.map(obj => {
                if (cell.textContent !== 'Lunch Break') {
                    cell.textContent = '';
                } 
            })
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
    toNextDay:function() {
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
    handleNothingUserSelect: function() {
        Array
            .from(tableHeadItem)
            .filter(x => x.scope === "row")
            .map(x => x.style.userSelect = "none");
    },
    handleUpdateTimeOfInput: function(i) {
        let timeOfData;
        const timeInDay = Array.from(tableHeadItem).filter(time => time.scope === "row");
        if (i >= 10 && i < 100) {
            const firstNum = Number(i.toString().split('').splice(0, 1).join(''));
            if (timeInDay[firstNum + 1].textContent === '11.30 AM - 1.30 PM') {
                timeRoom.textContent = timeInDay[firstNum].textContent + ' - 11.30 AM';
            } else {
                timeRoom.textContent = timeInDay[firstNum].textContent + ' - ' + timeInDay[firstNum + 1].textContent;
            }
            timeOfData = timeInDay[firstNum].textContent;
        } else if (i >= 100) {
            const firstNum = Number(i.toString().split('').splice(0, 2).join(''));
            timeRoom.textContent = timeInDay[firstNum].textContent + ' - 7.00 PM';
            timeOfData = timeInDay[firstNum].textContent;
        } else if (i < 10) {
            timeRoom.textContent = timeInDay[0].textContent + ' - ' + timeInDay[1].textContent;
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
    setToLocalStorage: function(cell, i, room = '', comments = '', place = '') {
        let timeOfData = this.handleUpdateTimeOfInput(i);
<<<<<<< HEAD
        let objData = this.createNewData(cell.textContent, timeOfData, i,place.textContent,commentsValue.textContent, datePicker.value);
        this.dataIn.push(objData);
=======
        
        let objData = this.createNewData(i, cell.textContent, timeOfData, datePicker.value, comments, place, room);
        let flag = true;
        let index;
        for (let i = 0; i < this.dataIn.length; i++) {
            if (this.dataIn[i].index === objData.index) {
                flag = false;
                index = i;
                break;
            }
        }
        if (flag === false) {
            this.mergeDataIn(objData.index, objData.name, objData.time, objData.datePickerVal, objData.comments, objData.place, objData.room,index);
        } else {
            this.dataIn.push(objData);
        }
>>>>>>> 594edd22fae88f109bb7178e653501a50672c0ef

        this.setDataIn();
    },
    removeFromLocalStorage: function(i) {
        this.dataIn = this.dataIn.filter(obj => obj.index !== i || obj.datePickerVal !== datePicker.value);

        this.setDataIn();
    },
    resetAnimation: function(element) {
        element.style.animation = 'none';
        element.offsetHeight;
        element.style.animation = null;
    },
    handleEvent: function() {
        /* Event clicking any cell in table */
        cells.forEach((cell, i) => {
            if (!(cell.textContent === 'Lunch Break')) {
                cell.onclick = () => {
                   
                    const cellRec =  cell.getBoundingClientRect()
                    let y = Math.round(cellRec.top - bodyRect.top);
                    let x = Math.round(cellRec.left - bodyRect.left);
                    const lastNum = Number(i.toString().split('').splice(1, 2).join(''));
                    if(cell.textContent === '') {
                        alreadyForm.setAttribute('style', 'display: none !important')
                        titleForm.setAttribute('style', 'display: block !important')
                        if ((i > 10 && (lastNum === 9 ||  lastNum === 8))||(i === 9 || i === 8)) {
                            titleForm.style.left = (x - cell.offsetWidth*2) + 'px';
                            this.resetAnimation(titleForm);
                        } else {
                            titleForm.style.left = x  + 'px';
                            this.resetAnimation(titleForm);
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
                    } else {
                        alreadyForm.setAttribute('style', 'display: block !important')
                        titleForm.setAttribute('style', 'display: none !important')
                        if ((i > 10 && (lastNum === 9 ||  lastNum === 8))||(i === 9 || i === 8)) {
                            titleForm.style.left = (x - cell.offsetWidth*2) + 'px';
                            this.resetAnimation(titleForm);
                        } else {
                            alreadyForm.style.left = x  + 'px';
                            this.resetAnimation(alreadyForm);
                        }
                        if (i >= 80) {
                            alreadyForm.style.top = (y - cell.offsetHeight*3.2) + 'px';
                        } else {
                            alreadyForm.style.top = y + 'px';
                        }
                        if (cell.textContent) {
                            spanTitle.innerHTML = cell.textContent;
                        } else {
                            spanTitle.innerHTML = '';
                        }
                    }

                    /* Close form when click closebtn */
                    closeBtn.onclick= () => {
                        titleForm.setAttribute('style', 'display: none !important');
                        inputTitleForm.value = 'Add Title';
                    }
                    closeSpan.onclick= (e) =>{
                        e.preventDefault();
                        alreadyForm.setAttribute('style', 'display:none !important');
                    }

                    /* Save data when click savebtn */ 
                    saveBtn.onclick = (e) => {
                        e.preventDefault();
                        
                        titleForm.setAttribute('style', 'display: none')
                        cell.textContent = titleInput.value;
                        this.setToLocalStorage(cell, i);
                        inputTitleForm.value = '';
                    }
                    /* Remove data when click removeFormBtn*/
                    removeFormBtn.onclick = (e) => {
                        e.preventDefault();
                        alreadyForm.setAttribute('style', 'display: none')
                        cell.textContent = '';
                        this.removeFromLocalStorage(i);
                        inputTitleForm.value = 'Add Title';
                    }

                    btnDelete.onclick = (e) => {
                        e.preventDefault();
                        modal_input.setAttribute('style', 'display: none')
                        cell.textContent = '';
                        this.removeFromLocalStorage(i);
                        inputTitleForm.value = 'Add Title';
                    }
                    save1.onclick = (e) => {
                        e.preventDefault();
                        
                        modal_input.setAttribute('style', 'display: none')
                        cell.textContent = summary.value;
<<<<<<< HEAD
                        place.textContent = locationInput.value;
                        commentsValue.textContent = commentsArea.value;

                        this.setToLocalStorage(cell, i,locationInput,commentsArea);
                        summary.value = '';
                        locationInput.value ='';
                        commentsArea.value ='';
=======
                        this.setToLocalStorage(cell, i, roomInput.options[roomInput.selectedIndex].text, commentsArea.value, locationInput.value);
>>>>>>> 594edd22fae88f109bb7178e653501a50672c0ef
                    }
                    
                    /* Focus input form when click any cells */
                    titleInput.focus();
                    editBtn.focus();

                    /* Time title input default */
                    this.handleUpdateTimeOfInput(i);

                    /* Room title input default */
                    if (i >= 10 && i < 100) {
                        const firstNum = Number(i.toString().split('').splice(1, 1).join(''));
                        roomNameCreate.innerText = this.roomDetails[firstNum + 1].name;
                        
                        alreadyFormHeader.style.background = this.roomDetails[firstNum + 1].color;
                    } else if (i >= 100) {
                        const firstNum = Number(i.toString().split('').splice(1, 2).join(''));
                        roomNameCreate.innerText = this.roomDetails[firstNum + 1].name;
                        alreadyFormHeader.style.background = this.roomDetails[firstNum + 1].color;
                    } else if (i < 10) {
                        roomNameCreate.innerText = this.roomDetails[i + 1].name;
                        alreadyFormHeader.style.background = this.roomDetails[i + 1].color;
                    }
                    roomNameSaved.innerText = roomNameCreate.innerText;

                    
                    Array.from(modal_closeBtn).map((closeBtn) => {
                        closeBtn.onclick = (e) => {
                            e.preventDefault();
                            modal_input.setAttribute('style','display: none !important');
                        }
                    })
                    detail.onclick = (e) => {
                        e.preventDefault()
                       titleForm.setAttribute('style', 'display: none !important');
                        modal_input.setAttribute('style', 'display: flex !important');
                    }

                    editBtn.onclick = (e) => {
                        e.preventDefault();
                        modal_input.setAttribute('style', 'display: flex !important');
                        alreadyForm.setAttribute('style', 'display: none');
                    }
                    
                    /* Date title input default */
                    this.handleDatePickerSetting();

                    this.dataIn.map(obj => {
                        if (obj.index === i && obj.datePickerVal === datePicker.value) {
                            summary.value = cell.textContent;
                            if (obj.comments) {
                                $('#comment-show').style.display = 'block';
                                commentsValue.textContent = obj.comments;
                                commentsArea.value = obj.comments;
                            } else {
                                $('#comment-show').style.display = 'none';
                                commentsValue.textContent = '';
                                commentsArea.value = '';
                            }
                            if (obj.place) {
                                $('#place-show').style.display = 'block';
                                place.textContent = obj.place;
                                locationInput.value = obj.place;
                            } else {
                                $('#place-show').style.display = 'none';
                                place.textContent = '';
                                locationInput.value = '';
                            }
                            if (obj.room) {
                                roomNameSaved.innerText = obj.room;
                                roomInput.options[roomInput.selectedIndex].text = obj.room;
                            } else {
                                roomNameSaved.innerText = roomNameCreate.innerText;
                                roomInput.options[roomInput.selectedIndex].text = roomNameCreate.innerText;
                            }
                        }   
                    })


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
        this.handleNothingUserSelect();
    }
};
 

calenderApp.start()



