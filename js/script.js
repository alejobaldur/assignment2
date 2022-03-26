
let arrayItem = document.querySelectorAll('input[name=art]');
let arrayCheck = document.querySelectorAll('input[name=sale]');
let fieldCount = document.querySelectorAll('input[name=count]');
var click = 0;

// for (let checkBox of arrayCheck) {
//     console.log({checkBox});
// }

for (let i = 0; i <= 6; i++) {
    arrayCheck[i].addEventListener("click", function (event) {
        if (arrayCheck[i].checked) {
            arrayItem[i].disabled = false;
            fieldCount[i].disabled = false;
        }
        if (!arrayCheck[i].checked) {
            arrayItem[i].disabled = true;
            fieldCount[i].disabled = true;
            arrayItem[i].value = '';
        }
    }, false);
}

// function decrease() {
//     let btnDown = document.getElementsByClassName('down')
//     if (fieldCount[0].value > 0) {
//         click = fieldCount[0].value;
//         click --;
//         console.log({btnDown});
//     }
//     document.getElementById("count1").value = click;
//     console.log(click);  
// }

// function increase() {
//     // let fieldCount = document.querySelectorAll('input[name=count]');

//     if (fieldCount[0].value >= 0) {
//         click = fieldCount[0].value;
//         click ++;
//     }
//     document.getElementById("count1").value = click;
//     console.log(click);  
// }

function formSubmit() {

    let formName = document.querySelector('#name').value;
    let formEmail = document.querySelector('#email').value;
    let formCname = document.querySelector('#cname').value;
    let formCcnum = document.querySelector('#ccnum').value;
    let formCvv = document.querySelector('#cvv').value;
    let formExpMonth = document.querySelector('select[name=expmonth]').value;
    let formExpYear = document.querySelector('select[name=expyear]').value;
    let formRadio = document.querySelectorAll('input[name=donate]');


    for (let checkBox of arrayCheck) {
        if (checkBox.checked) {
            console.log(checkBox.value)
        }
    }

    for (let checkRadio of formRadio ) {
        if (checkRadio.checked) {
            console.log(checkRadio.value)
        }
    }


    // let formCheck1 = document.querySelector('#check1');

    // console.log(formExpMonth.options[formExpMonth.selectedIndex].value);

    // console.log(formExpMonth); // log out the selected value
    // console.log(formExpYear); // log out the selected value
    valueItem = '';

    // for (let itemInput of arrayItem) {
    //     console.log({itemInput})
    // }

    // for (let itemInput of arrayItem) {
    //    if (itemInput.value) {
    //        valueItem = itemInput.value
    //        console.log(valueItem)
    //    } 
    //    else {
    //    console.log('No value on: ', itemInput.id)
    //     }
    // }







    return false;
}

