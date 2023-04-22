//------AGE CALCULATOR APP------


//---CALCULATE AGE---
function calcAge() {
    const selectedDate = document.querySelector("#dateInput");

    // Target users input value and get Birth Date Details (Yrs, Months, Days)
    const date = new Date(selectedDate.value);
    let convertBYear = date.getFullYear();
    let convertBMonth = date.getMonth() + 1;
    let convertBDay = date.getDate();
    // Get current year 
    const $date = new Date();
    let updateCurrentYr = $date.getFullYear();
    // Get current day
    let updateCurrentDay = $date.getDate();
    //Get current month 
    let updateCurrentMonth = $date.getMonth() + 1;

    //Initialize expected date, month and year result
    let $D = 0;
    let $M = 0;
    let $Y = 0;

    //---TEST CASES---

    //Error prompt
    if (convertBDay > updateCurrentDay && convertBMonth >= updateCurrentMonth && convertBYear >= updateCurrentYr) {
        const text = document.querySelector("#text");
        text.innerText = "Relax, you're not a time traveller";
        openModal();
    }
    // Checks if currentday value is higher  
    else if ((updateCurrentDay >= convertBDay) && (updateCurrentMonth >= convertBMonth) && (updateCurrentYr >= convertBYear)) {
        $D = updateCurrentDay - convertBDay;
        $M = updateCurrentMonth - convertBMonth;
        $Y = updateCurrentYr - convertBYear;
    }
    else if ((updateCurrentDay >= convertBDay) && (updateCurrentMonth < convertBMonth) && (updateCurrentYr >= convertBYear)) {
        $D = updateCurrentDay - convertBDay;
        $M = (updateCurrentMonth + 12) - convertBMonth;
        $Y = (updateCurrentYr - 1) - convertBYear;
    }
    //Months with 31 days checker
    else if ((updateCurrentDay < convertBDay) && (updateCurrentMonth != 2 || 4 || 6 || 9 || 11) && (updateCurrentMonth >= convertBMonth) && (updateCurrentYr >= convertBYear)) {
        $D = (updateCurrentDay + 31) - convertBDay;
        $M = (updateCurrentMonth - 1) - convertBMonth;
        $Y = updateCurrentYr - convertBYear;
    }
    else if ((updateCurrentDay < convertBDay) && (updateCurrentMonth != 2 || 4 || 6 || 9 || 11) && (updateCurrentMonth < convertBMonth) && (updateCurrentYr >= convertBYear)) {
        $D = (updateCurrentDay + 31) - convertBDay;
        $M = ((updateCurrentMonth + 12) - 1) - convertBMonth;
        $Y = (updateCurrentYr - 1) - convertBYear;
    }
    //Months with 30 days checker
    else if ((updateCurrentDay < convertBDay) && (updateCurrentMonth == 4 || 6 || 9 || 11) && (updateCurrentMonth >= convertBMonth) && (updateCurrentYr >= convertBYear)) {
        $D = (updateCurrentDay + 30) - convertBDay;
        $M = (updateCurrentMonth - 1) - convertBMonth;
        $Y = updateCurrentYr - convertBYear;
    }
    else if ((updateCurrentDay < convertBDay) && (updateCurrentMonth == 4 || 6 || 9 || 11) && (updateCurrentMonth < convertBMonth) && (updateCurrentYr >= convertBYear)) {
        $D = (updateCurrentDay + 30) - convertBDay;
        $M = ((updateCurrentMonth + 12) - 1) - convertBMonth;
        $Y = (updateCurrentYr - 1) - convertBYear;
    }
    //Leap year checker
    else if ((updateCurrentDay < convertBDay) && ((updateCurrentMonth == 2) && (updateCurrentMonth >= convertBMonth) && (updateCurrentYr % 4 != 0))) {
        $D = (updateCurrentDay + 28) - convertBDay;
        $M = (updateCurrentMonth - 1) - convertBMonth;
        $Y = updateCurrentYr - convertBYear;
    }
    else if ((updateCurrentDay < convertBDay) && ((updateCurrentMonth == 2) && (updateCurrentMonth >= convertBMonth) && (updateCurrentYr % 4 == 0))) {
        $D = (updateCurrentDay + 29) - convertBDay;
        $M = (updateCurrentMonth - 1) - convertBMonth;
        $Y = updateCurrentYr - convertBYear;
    }
    else if ((updateCurrentDay < convertBDay) && ((updateCurrentMonth == 2) && (updateCurrentMonth < convertBMonth) && (updateCurrentYr % 4 == 0))) {
        $D = (updateCurrentDay + 29) - convertBDay;
        $M = ((updateCurrentMonth + 12) - 1) - convertBMonth;
        $Y = (updateCurrentYr - 1) - convertBYear;
    }
    displayAgeResult($Y, $M, $D);
    if ($Y > 27) {
        const text = document.querySelector("#text");
        text.innerText = "Unfortunately you aren't qualified to apply for this role";
        openModal();
    }
}

//---DISPLAY AGE---
function displayAgeResult($printY, $printM, $printD) {
    displayYear = document.querySelector("#year");
    displayYear.innerText = $printY + " YEAR(S)";
    displayMonth = document.querySelector("#month");
    displayMonth.innerText = $printM + " MONTH(S)";
    displayDay = document.querySelector("#day");
    displayDay.innerText = $printD + " DAY(S)";
}

//---MODAL POPUP--- 
function closeModal() {
    const modal = document.querySelector(".modal");
    modal.classList.remove("show-modal");
}

function openModal() {
    const modal = document.querySelector(".modal");
    modal.classList.add("show-modal");
}