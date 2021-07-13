
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const cells = $$('td');
const inputTitleForm = $('.form-control');
const dayElement = $('#day');
const datePicker = $('#datepicker');
const bodyRect = document.body.getBoundingClientRect();
const titleForm = $('#title-form');
const titleInput = $('#title-input');
const titlePage = $('title')
const roomType = $('#room-type')
const deleteBtn  = $('#btn-delete')
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
const timefrom = $('#from');
const timeto = $('#to');
const timefromvalue = $('#timefrom-value');
const timetovalue = $('#timeto-value')

const timeRoomSaved = $('#time-room-saved');
const dateSettingSaved = $('#date-setting-saved');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const email_form = $('#email--form');
const email_input = document.querySelector('#email--input')
const email_area = document.querySelector('#email--area')
const btn_saveEmail = document.querySelector('#btn--add');
const btn_addEmail = document.querySelector('#addmember')
const email_close = $('#email-close')
const btn_removeEmail = document.querySelector('#btn--remove')
/* const today = new Date(); */

let calenderApp = {
    roomDetails: [
        {
            name: '',
            location: '',
            capacity: '',
            description: '',
            email: '',
            pathImg: '',
            isImgShow: false,
        },
        {
            name: 'Budweiser',
            location: '10th Floor, VCN ...',
            capacity: 8,
            description: 'Room',
            email: 'meetingroom2@infodation.vn',
            color: 'rgb(200, 33, 43)',
            pathImg: 'image/img-1.jpg',
            isImgShow: false,
        },
        {
            name: 'Heineken',
            location: '10th Floor, VCN ...',
            capacity: 8,
            description: 'Room',
            email: 'meetingroom5@infodation.vn',
            color: 'rgb(34, 67, 29)',
            pathImg: 'image/img-2.jpg',
            isImgShow: false,
        },
        {
            name: 'Saigon',
            location: '10th Floor, VCN ...',
            capacity: 12,
            description: 'Room',
            email: 'meetingroom3@infodation.vn',
            color: 'rgb(254, 161, 0)',
            pathImg: 'image/img-3.jpg',
            isImgShow: false,
        },
        {
            name: 'Strongbow',
            location: '10th Floor, VCN ...',
            capacity: 8,
            description: 'Room',
            email: 'meetingroom1@infodation.vn',
            color: 'rgb(156, 108, 15)',
            pathImg: 'image/img-4.jpg',
            isImgShow: false,
        },
        {
            name: 'Tiger',
            location: '10th Floor, VCN ...',
            capacity: 8,
            description: 'Room',
            email: 'meetingroom4@infodation.vn',
            color: 'rgb(30, 55, 132)',
            pathImg: 'image/img-5.jpg',
            isImgShow: false,
        },
        {
            name: 'Think Tank 1',
            location: '10th Floor, VCN ...',
            capacity: 4,
            description: 'Room',
            email: 'thinktankroom1@infodation.vn',
            color: 'rgb(52, 163, 209)',
            pathImg: 'image/img-6.jpg',
            isImgShow: false,
        },
        {
            name: 'Think Tank 2',
            location: '10th Floor, VCN ...',
            capacity: 6,
            description: 'Room',
            email: 'thinktankroom2@infodation.vn',
            color: 'rgb(255, 106, 66)',
            pathImg: 'image/img-7.jpg',
            isImgShow: false,
        },
        {
            name: 'Think Tank 3',
            location: '10th Floor, VCN ...',
            capacity: 4,
            description: 'Room',
            email: 'thinktankroom3@infodation.vn',
            color: 'rgb(234, 63, 142)',
            pathImg: 'image/img-8.jpg',
            isImgShow: false,
        },
        {
            name: 'Think Tank 4',
            location: '10th Floor, VCN ...',
            capacity: 6,
            description: 'Room',
            email: 'thinktankroom4@infodation.vn',
            color: 'rgb(200, 0, 34)',
            pathImg: 'image/img-9.jpg',
            isImgShow: false,
        },
        {
            name: 'Think Tank 5',
            location: '10th Floor, VCN ...',
            capacity: 6,
            description: 'Room',
            email: 'thinktankroom5@infodation.vn',
            color: 'rgb(21, 49, 112)',
            pathImg: 'image/img-10.jpg',
            isImgShow: false,
        },
    ],
    dataIn: JSON.parse(localStorage.getItem('dataIn')) || [],
    setDataIn: function() {
        localStorage.setItem('dataIn', JSON.stringify(this.dataIn))
    },
    dataOfCells: [],
    timeFromStorage: '',
    timeToStorage: '',
    render: function() {    
        roomHeadingTitle.innerHTML = this.roomDetails.map((room) => {
            return `
                <th scope="col" class="room-title" style="user-select: none">
                    <span>${room.name}</span>
                    <div class="capacity-room">${room.capacity}</div>
                    <div class="room-image" style="background-image: url('${room.pathImg}');"></div>
                </th>
            `
        }).join('');

    },
    handleEventTitleRoom: function() {
        let titleRoomArr = Array.from(roomHeadingTitle.childNodes).filter(room => room.scope === "col");
        titleRoomArr.map((element, index) => {
            element.childNodes[1].onmouseover = () => {
                if (!this.roomDetails[index].isImgShow) {
                    this.roomDetails[index].isImgShow = true;
                    element.childNodes[5].style.display = 'block';
                    if (index === 10) {
                        element.childNodes[5].style.right = '10px';
                    }
                }
            }
            element.childNodes[1].onmouseout = () => {
                if (this.roomDetails[index].isImgShow) {
                    this.roomDetails[index].isImgShow = false;
                    element.childNodes[5].style.display = 'none';
                    if (index === 10) {
                        element.childNodes[5].style.right = '10px';
                    }
                }
            }
            element.ondblclick = () => {
               
                setTimeout(location.assign(`RoomImageDetail/ImgShowPage-${index}/imgShow-${index}.html`),10000);
            }
        })
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
    createDataOfRoom: function(cell, roomName, tFrom, tTo,members) {
        let data = {};
        data.cell = cell;
        data.roomName = roomName;
        data.tFrom = tFrom;
        data.tTo = tTo;
        data.members = members;
        return data;
    },
    createNewData: function(index, name, datePickerVal, room = '', comments = '', place = '', timefrom = '', timeto = '',members =[]) {
        let data = {};
        data.index = index;
        data.name = name;
        data.room = room;
        data.timefrom = timefrom;
        data.timeto = timeto;
        data.comments = comments;
        data.place = place;
        data.datePickerVal = datePickerVal;
        data.members = members
        return data;
    },
    mergeDataIn: function(index, name, timefrom, timeto, datePickerVal, room, comments, place, flagIndex,members) {
        this.dataIn[flagIndex].name = name;
        this.dataIn[flagIndex].room = room;
        this.dataIn[flagIndex].timefrom = timefrom;
        this.dataIn[flagIndex].timeto = timeto;
        this.dataIn[flagIndex].index = index;
        this.dataIn[flagIndex].datePickerVal = datePickerVal;
        this.dataIn[flagIndex].comments = comments;
        this.dataIn[flagIndex].place = place;
        this.dataIn[flagIndex].members = members;
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
        cells.clearContent();
        this.cleanCell();
    },
    addOrSubtractDays: function(dateObj, numDays) {
        dateObj.setDate(dateObj.getDate() + numDays);
        return dateObj;
    },
    handleDefault: function() {
        /* Title default */
        inputTitleForm.value = '';

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
        const timeInDay = Array.from(tableHeadItem).filter(time => time.scope === "row");
        if (i >= 10 && i < 100) {
            const firstNum = Number(i.toString().split('').splice(0, 1).join(''));
            if (timeInDay[firstNum + 1].textContent === '11.30 AM - 1.30 PM') {
                timeRoom.textContent = timeInDay[firstNum].textContent + ' - 11.30 AM';
                this.timeFromStorage = timeInDay[firstNum].textContent;
                this.timeToStorage = '11.30 AM';
            } else {
                timeRoom.textContent = timeInDay[firstNum].textContent + ' - ' + timeInDay[firstNum + 1].textContent;
                this.timeFromStorage = timeInDay[firstNum].textContent;
                this.timeToStorage = timeInDay[firstNum + 1].textContent;
            }
        } else if (i >= 170) {
            const firstNum = Number(i.toString().split('').splice(0, 2).join(''));
            timeRoom.textContent = timeInDay[firstNum].textContent + ' - 7.00 PM';
            this.timeFromStorage = timeInDay[firstNum].textContent;
            this.timeToStorage = '7.00 PM';
        } else if (i >= 100 && i < 170) {
            const firstNum = Number(i.toString().split('').splice(0, 2).join(''));
            timeRoom.textContent = timeInDay[firstNum].textContent + ' - ' + timeInDay[firstNum + 1].textContent;
            this.timeFromStorage = timeInDay[firstNum].textContent;
            this.timeToStorage = timeInDay[firstNum + 1].textContent;
        } else if (i < 10) {
            timeRoom.textContent = timeInDay[0].textContent + ' - ' + timeInDay[1].textContent;
            this.timeFromStorage = timeInDay[0].textContent;
            this.timeToStorage = timeInDay[1].textContent;
        }
    },
    handleUpdateDay: function() {
        let changeday = datePicker.value;
        dayElement.innerHTML = new Date(changeday).toDateString();
    },
    handleDatePickerSetting: function() {
        let datePickerArrValue =  datePicker.value.split('-');
        dateDefaultSetting.innerHTML = months[Number(datePickerArrValue[1] - 1)] + ' ' + datePickerArrValue[2] + ', ' + datePickerArrValue[0];
        return months[Number(datePickerArrValue[1] - 1)] + ' ' + datePickerArrValue[2] + ', ' + datePickerArrValue[0];
    },
    setToLocalStorage: function(cell, i, room = '', comments = '', place = '', tfrom='', tto='',members=[]) {
        let objData = this.createNewData(i, cell.textContent, datePicker.value, room, comments, place, tfrom, tto,members);
        let flag = true;
        let indexCheck;
        for (let i = 0; i < this.dataIn.length; i++) {
            if (this.dataIn[i].index === objData.index && this.dataIn[i].datePickerVal === datePicker.value) {
                flag = false;
                indexCheck = i;
                break;
            }
        }

        if (flag === false && objData.datePickerVal !== datePicker.value) {
            this.mergeDataIn(objData.index, objData.name, objData.tfrom, objData.tto, objData.datePickerVal, objData.room, objData.comments, objData.place, indexCheck,obj.members);
        } else {
            this.dataIn.push(objData);
        }

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
    changeToAMPM: function(date) {
        let part;
        let dateArr = date.split(':');
        if (dateArr[0] > 12) {
            dateArr[0] -= 12;
            part = 'PM';
        } else {
            part = 'AM';
        }
        return dateArr[0] + '.' + dateArr[1] + ' ' + part;
    },
    changeToTime: function(date) {
        let partArr = date.split('');
        let partTimeArr = partArr[0].split('.');
        if (partArr[1] == 'PM') {
            partTimeArr[0] = parseInt(partTimeArr[0]) + 12;
        }
        return partTimeArr[0] + ':' + partTimeArr[1];
    },
    changeSelectBox: function(obj) {
        let options = obj.children ;
        for(let key in options){
            if (options[key].selected){
                titlePage.innerHTML = titlePage.innerHTML.slice(0, 21)
                titlePage.innerHTML = titlePage.innerHTML + ' - ' + options[key].innerHTML
            }
        }
    },
    handleFilterRoomType: function() {
        let titleRoomArr = Array.from(roomHeadingTitle.childNodes).filter(room => room.scope === "col");
        roomType.onchange = () => {
            this.dataOfCells.map(cell => {
                if (roomType.value === 'Think Tank') {
                    if (cell.roomName.split(' ').length === 1) {
                        cell.cell.classList.add('hide-cell');
                    } else if (cell.roomName.split(' ').length !== 1) {
                        cell.cell.classList.remove('hide-cell');
                    }
                    titleRoomArr.map((element, index) => {
                        if (index >= 1 && index <= 5) {
                            element.style.display = 'none';
                        } else {
                            element.style.display = 'table-cell';
                        }
                    })
                } else if (roomType.value === 'Meeting Room') {
                    if (cell.roomName.split(' ').length !== 1) {
                        cell.cell.classList.add('hide-cell');
                    } else if (cell.roomName.split(' ').length === 1) {
                        cell.cell.classList.remove('hide-cell');
                    }
                    titleRoomArr.map((element, index) => {
                        if (index >= 0 && index <= 5) {
                            element.style.display = 'table-cell';
                        } else {
                            element.style.display = 'none';
                        }
                    })
                } else {
                    if (cell.roomName.split(' ').length !== 1 || cell.roomName.split(' ').length === 1) {
                        cell.cell.classList.remove('hide-cell');
                    }
                    titleRoomArr.map((element) => {
                        element.style.display = 'table-cell';
                    })
                }
            })
            this.changeSelectBox(roomType);
        }
        
    },
    findFirstIndexAndAmount: function(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i + 1]) {
                newArr.push({index: i, name: arr[i]});
            }
            if (arr[i] !== arr[i + 1] && arr[i] === arr[i - 1]) {
                newArr.push({index: i, name: arr[i]});
            }
            if ((arr[i] === 'Lunch Break' || arr[i] === '') || (arr[i] !== arr[i + 1])) {
                newArr.push({index: i, name: ''});
            }
        }

        /* Find length of cells and first index to merge */
        let tempObj = [];
        let resultObj = [];
        newArr.map((obj, index) => {
            if (obj.name !== '') {
                tempObj.push(obj);
            } else {
                resultObj.push(tempObj);
                tempObj = [];
            }
        })

        let firstIndex = [];
        let remainingIndex = [];
        let amountNum = [];
        let lastIndex = [];
        let totalIndex = [];
        resultObj.map(arr => {
            if (arr.length !== 0) {
                amountNum.push(arr.length)
            }
            return arr.map((obj, i) => {
                totalIndex.push(obj.index)
                if (i === 0) {
                    firstIndex.push(obj.index);
                } else {
                    remainingIndex.push(obj.index)
                }
                if (i === arr.length - 1) {
                    lastIndex.push(obj.index);
                }
            })
        })
        return [firstIndex, remainingIndex, amountNum, lastIndex];
    },
    handleMergeOneCollumn: function(room, color) {
        let text = room.map(obj => {
            return obj.cell.textContent
        })
        let indexOfFirst = this.findFirstIndexAndAmount(text)[0];
        let remainingIndex = this.findFirstIndexAndAmount(text)[1];
        let amountNum = this.findFirstIndexAndAmount(text)[2]; 
        let indexOfLast = this.findFirstIndexAndAmount(text)[3];
        let timeToArr = [];
        let timeFromArr = [];
        room.map((obj, index) => {
            indexOfFirst.map(first => {
                indexOfLast.map(last => {
                    if (last === index) {
                        timeToArr.push(obj.tTo);
                    }
                    if (first === index) {
                        timeFromArr.push(obj.tFrom);
                    }
                })
            })
            timeToArr = [...new Set(timeToArr)];
            timeFromArr = [...new Set(timeFromArr)];
        })

        /* room.map((obj, index) => {
            indexOfFirst.map((first, indexF) => {
                timeToArr.map((timeTo, indexT) => {
                    if (index === first && indexT === indexF) {
                        obj.cell.dataset.timeTo = timeTo;
                    }
                })
                timeFromArr.map((timeFrom, indexFrom) => {
                    if (index === first && indexFrom === indexF) {
                        obj.cell.dataset.timeFrom = timeFrom;
                    }
                })
            })
        }) */
        
        room.map((obj, index) => {
            amountNum.map((amount, indexA) => {
                indexOfFirst.map((first, indexF) => {
                    remainingIndex.map(remaining => {
                        if (indexF === indexA && index === first) {
                            obj.cell.setAttribute('rowspan', `${amount}`);
                            obj.cell.style.backgroundColor = `${color} `;
                            obj.cell.style.fontWeight = 'bold'
                            obj.cell.style.color = '#f6fff3';
                            obj.cell.dataset.isMerged = true;
                        } 
                        if (remaining === index) {
                            obj.cell.style.display = 'none';
                            obj.cell.textContent = '';
                        }
                    })
                    timeToArr.map((timeTo, indexT) => {
                        if (index === first && indexT === indexF) {
                            obj.cell.dataset.timeTo = timeTo;
                        }
                    })
                    timeFromArr.map((timeFrom, indexFrom) => {
                        if (index === first && indexFrom === indexF) {
                            obj.cell.dataset.timeFrom = timeFrom;
                        }
                    })
                })
            })
        })  

        let _this = this;
        room.map((obj) => {
            obj.cell.addEventListener('click', function (event) {
                if (event.target === obj.cell && event.target.getAttribute('data-is-merged')) {
                    timetovalue.textContent = event.target.getAttribute('data-time-to');
                    timeto.value = _this.changeToTime(timetovalue.textContent);
                }
            })
        })

    },
    handleMergeCell: function() {

        let budweiserRoom = this.dataOfCells.filter(obj => obj.roomName === 'Budweiser');
        let heinekenRoom = this.dataOfCells.filter(obj => obj.roomName === 'Heineken');
        let saigonRoom = this.dataOfCells.filter(obj => obj.roomName === 'Saigon');
        let strongbowRoom = this.dataOfCells.filter(obj => obj.roomName === 'Strongbow');
        let tigerRoom = this.dataOfCells.filter(obj => obj.roomName === 'Tiger');
        let thinkTank1Room = this.dataOfCells.filter(obj => obj.roomName === 'Think Tank 1');
        let thinkTank2Room = this.dataOfCells.filter(obj => obj.roomName === 'Think Tank 2');
        let thinkTank3Room = this.dataOfCells.filter(obj => obj.roomName === 'Think Tank 3');
        let thinkTank4Room = this.dataOfCells.filter(obj => obj.roomName === 'Think Tank 4');
        let thinkTank5Room = this.dataOfCells.filter(obj => obj.roomName === 'Think Tank 5');
        
        this.handleMergeOneCollumn(budweiserRoom, this.roomDetails[1].color)
        this.handleMergeOneCollumn(heinekenRoom, this.roomDetails[2].color);
        this.handleMergeOneCollumn(saigonRoom, this.roomDetails[3].color);
        this.handleMergeOneCollumn(strongbowRoom, this.roomDetails[4].color);
        this.handleMergeOneCollumn(tigerRoom, this.roomDetails[5].color);
        this.handleMergeOneCollumn(thinkTank1Room, this.roomDetails[6].color);
        this.handleMergeOneCollumn(thinkTank2Room, this.roomDetails[7].color);
        this.handleMergeOneCollumn(thinkTank3Room, this.roomDetails[8].color);
        this.handleMergeOneCollumn(thinkTank4Room, this.roomDetails[9].color);
        this.handleMergeOneCollumn(thinkTank5Room, this.roomDetails[10].color);
    },
    handleEvent: function() {
        /* Event clicking any cell in table */
        cells.forEach((cell, i) => {
            if (!(cell.textContent === 'Lunch Break')) {
                cell.addEventListener('click', () => {
                    const cellRec =  cell.getBoundingClientRect()
                    let y = Math.round(cellRec.top - bodyRect.top);
                    let x = Math.round(cellRec.left - bodyRect.left);
                    const lastNum = Number(i.toString().split('').pop());
                    if(cell.textContent === '') {
                        alreadyForm.setAttribute('style', 'display: none !important');
                        titleForm.setAttribute('style', 'display: block !important');
                        if ((i > 10 && (lastNum === 9 || lastNum === 8))||(i === 9 || i === 8)) {
                            titleForm.style.left = (x - cell.offsetWidth*2) + 'px';
                            this.resetAnimation(titleForm);
                        } else if (document.documentElement.scrollTop > 10 && (i >= 100 && (lastNum === 9 || lastNum === 8))) {
                            titleForm.style.left = (x - cell.offsetWidth*2)  + 'px';
                            this.resetAnimation(titleForm);
                        } else {
                            titleForm.style.left = x  + 'px';
                            this.resetAnimation(titleForm);
                        }

                        if (i >= 150) {
                            titleForm.style.top = (y + cell.offsetHeight*2.8) + 'px';
                        } else if (i < 150 && document.documentElement.scrollTop > 10) {
                            titleForm.style.top = (y + cell.offsetHeight*3) + 'px';
                        } else if (i < 150) {
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
                        if ((i > 10 && (lastNum === 9 || lastNum === 8))||(i === 9 || i === 8)) {
                            alreadyForm.style.left = (x - cell.offsetWidth*2) + 'px';
                            this.resetAnimation(alreadyForm);
                        } else if (document.documentElement.scrollTop > 10 && (i >= 100 && (lastNum === 9 || lastNum === 8))) {
                            alreadyForm.style.left = (x - cell.offsetWidth*2)  + 'px';
                            this.resetAnimation(alreadyForm);
                        } else {
                            alreadyForm.style.left = x  + 'px';
                            this.resetAnimation(alreadyForm);
                        }
                        
                        if (i >= 150) {
                            alreadyForm.style.top = (y + cell.offsetWidth) + 'px';
                        } else if (i < 150 && document.documentElement.scrollTop > 10) {
                            alreadyForm.style.top = (y + cell.offsetWidth) + 'px';
                        } else if (i < 150) {
                            alreadyForm.style.top = y  + cell.offsetWidth/2 + 'px';
                        }

                        if (cell.textContent) {
                            spanTitle.innerHTML = cell.textContent;
                        } else {
                            spanTitle.innerHTML = '';
                        }
                    }

                    /* Time title input default */
                    this.handleUpdateTimeOfInput(i);

                    /* Room title input default */
                    if (i >= 10 && i < 100) {
                        const firstNum = Number(i.toString().split('').splice(1, 1).join(''));
                        roomNameCreate.innerText = this.roomDetails[firstNum + 1].name;
                        alreadyFormHeader.style.background = this.roomDetails[firstNum + 1].color;
                    } else if (i >= 100) {
                        const firstNum = Number(i.toString().split('').splice(2, 2).join(''));
                        roomNameCreate.innerText = this.roomDetails[firstNum + 1].name;
                        alreadyFormHeader.style.background = this.roomDetails[firstNum + 1].color;
                    } else if (i < 10) {
                        roomNameCreate.innerText = this.roomDetails[i + 1].name;
                        alreadyFormHeader.style.background = this.roomDetails[i + 1].color;
                    }
                    roomNameSaved.innerText = roomNameCreate.innerText;

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
                        if(isLogin == true)
                       { e.preventDefault();
                        titleForm.setAttribute('style', 'display: none')
                        cell.textContent = titleInput.value;
                        this.setToLocalStorage(cell, i, roomNameSaved.innerText);
                        inputTitleForm.value = '';}
                        else
                        return false;
                    }
                    /* Remove data when click removeFormBtn*/
                    removeFormBtn.onclick = (e) => {
                        if(isLogin == true)
                       { e.preventDefault();
                        alreadyForm.setAttribute('style', 'display: none')
                        cell.textContent = '';
                        this.removeFromLocalStorage(i);
                        inputTitleForm.value = 'Add Title';
                        email_area.textContent ='';
                    }
                        else
                        return false;
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
                        var old_data
                        this.dataIn.map(obj => {
                            old_data = obj.members
                        })
                        this.setToLocalStorage(cell, i, roomNameSaved.innerText, commentsArea.value, locationInput.value, timefrom.value, timeto.value,old_data);
                    }
                    email_close.onclick =(e) => {
                        e.preventDefault();
                        email_form.setAttribute('style', 'display: none !important');
                    }
                    resetdata = () => {
                        summary.value = '';
                        locationInput.value = '';
                        commentsArea.value = '';
                        timefrom.value = '';
                        timeto.value = '';
                    }
                    /* Focus input form when click any cells */
                    titleInput.focus();
                    editBtn.focus();

                    Array.from(modal_closeBtn).map((closeBtn) => {
                        closeBtn.onclick = (e) => {
                            e.preventDefault();
                            modal_input.setAttribute('style','display: none !important');
                        }
                    })
                    detail.onclick = (e) => {
                        if(isLogin == true)
                        {e.preventDefault()
                        titleForm.setAttribute('style', 'display: none !important');
                        modal_input.setAttribute('style', 'display: flex !important');
                        resetdata();}
                        else
                        return false;

                    }

                    editBtn.onclick = (e) => {
                        if(isLogin == true)
                      {  e.preventDefault();
                        modal_input.setAttribute('style', 'display: flex !important');
                        alreadyForm.setAttribute('style', 'display: none');}
                        else
                        return false;
                        
                    }
                    btn_addEmail.onclick = (e) =>{
                        if(isLogin == true)
                        { e.preventDefault();
                         email_form.setAttribute('style', 'display: block !important')
                         alreadyForm.setAttribute('style', 'display:none')
                         }
                         else
                         return false;
                    }
                    btn_saveEmail.onclick = () =>{
                        if(isLogin == true)
                        {email_area.textContent += email_input.value + '\n';
                        email_input.focus();
                        if(email_input.value ==='')
                        {
                            alert('Please enter a valid email!')
                        }
                        else
                        {
                            var old_data
                        this.dataIn.map(obj => {
                            old_data = obj.members
                        })
                        old_data.push(email_input.value + '\t')
                        this.setToLocalStorage(cell, i, roomNameSaved.innerText, commentsArea.value, locationInput.value, timefrom.value, timeto.value,old_data);}
                        email_input.value ='';}
                        else
                        return false;
                    }
                    btn_removeEmail.onclick = () =>{
                        var old_data
                            this.dataIn.map(obj => {
                                old_data = obj.members
                            })
                        old_data.splice(old_data.length-1,1)
                        this.setToLocalStorage(cell, i, roomNameSaved.innerText, commentsArea.value, locationInput.value, timefrom.value, timeto.value,old_data);
                        email_area.textContent = old_data;
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
                            } else {
                                roomNameSaved.innerText = roomNameCreate.innerText;
                            }
                            if (obj.timefrom) {
                                timefromvalue.textContent = this.handleDatePickerSetting() +' / '+ this.changeToAMPM(obj.timefrom);
                                timefrom.value = obj.timefrom;
                            } else {
                                this.handleUpdateTimeOfInput(i);
                                timefromvalue.textContent = this.handleDatePickerSetting() +' / '+ this.timeFromStorage;
                                timefrom.value = (this.timeFromStorage);
                            }


                            if (obj.timeto) {
                                timetovalue.textContent =  this.changeToAMPM(obj.timeto);
                                timeto.value = obj.timeto;
                            } else {
                                this.handleUpdateTimeOfInput(i);
                                timetovalue.textContent = this.timeToStorage;
                                timeto.value = (this.timeToStorage);
                            }
                            if (obj.members) {
                                email_area.textContent = obj.members;
                              
                            } else {
                               email_area.textContent = '';
                            }
                        }
                    })
                })
            }

            if (i >= 10 && i < 100) {
                this.handleUpdateTimeOfInput(i);
                const firstNum = Number(i.toString().split('').splice(1, 1).join(''));
                let objDataRoom = this.createDataOfRoom(cell, this.roomDetails[firstNum + 1].name, this.timeFromStorage, this.timeToStorage);
                this.dataOfCells.push(objDataRoom);
            } else if (i >= 100) {
                this.handleUpdateTimeOfInput(i);
                const firstNum = Number(i.toString().split('').splice(2, 2).join(''));
                let objDataRoom = this.createDataOfRoom(cell, this.roomDetails[firstNum + 1].name, this.timeFromStorage, this.timeToStorage);
                this.dataOfCells.push(objDataRoom);
            } else if (i < 10) {
                this.handleUpdateTimeOfInput(i);
                let objDataRoom = this.createDataOfRoom(cell, this.roomDetails[i + 1].name, this.timeFromStorage, this.timeToStorage);
                this.dataOfCells.push(objDataRoom);
            }
        })

        /* Check object isempty ? */


        previousDay.onclick = () => this.toPreviousDay();
        nextDay.onclick = () => this.toNextDay();

        datePicker.onchange = () => {
            this.handleDatePickerSetting();
            this.handleUpdateDay();
        }

      


        let objDetailsTimeMerged = this.handleMergeCell();
    },
    start: function() {
        this.handleDefault();
        this.handleUpdateDay();
        this.render();
        this.handleNothingUserSelect();
        this.handleEventTitleRoom();
        this.handleFilterRoomType();
        this.loadDataIn();
        this.handleEvent();


    }
};


calenderApp.start()

var isLogin = false;
const name_email = $("#name_email");
const data_email = $(".data")
const signinbtn = $('.g-signin2');

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    data_email.setAttribute('style', 'display: block')
    signinbtn.setAttribute('style', 'display: none')
    name_email.innerHTML = profile.getName(); // This is null if the 'email' scope is not present.
    isLogin = true;
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    alert('You have signed out !!!')
    signinbtn.setAttribute('style', 'display: block')
    data_email.setAttribute('style', 'display: none')
    isLogin = false;
  });
}




