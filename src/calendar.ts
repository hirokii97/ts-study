"use strict";

class Calendar {
    year:number
    month:number

    constructor(){
        let today = new Date()
        this.year = today.getFullYear()
        this.month = today.getMonth() + 1
    }

    // 前月
    prevMonth(){
        if(this.month === 1){
            this.month = 12
            this.year += -1
        } else {
            this.month += -1 
        }
    }
    // 次月
    nextMonth(){
        if(this.month === 12){
            this.month = 1
            this.year += 1
        } else {
            this.month += 1 
        }
    }
}

const date = new Calendar();

// 表示要素
const Month = document.getElementsByClassName('calendar__container --js')[0]
const nextMonthButton = document.getElementsByClassName('calendar__next --js')[0]
const prevMonthButton = document.getElementsByClassName('calendar__prev --js')[0]

const displayMonth = ()  =>  {
    Month.textContent = `${date.year}年 ${date.month}月`
}

const init = () => {
    displayMonth()
}

init()

nextMonthButton.addEventListener('click', () => {
    date.nextMonth()
    displayMonth()
}) 
prevMonthButton.addEventListener('click', () => {
    date.prevMonth()
    displayMonth()
}) 