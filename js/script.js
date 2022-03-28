
let arrayCheck = document.querySelectorAll('input[name=sale]');
let fieldItemCount = document.querySelectorAll('input[name=count]');
var priceCheckBox = [33, 400, 10, 70, 60, 20]
var click = 0;
let sumProd = 0;
let sumItem = [];
let selectedItem = [];
let donation;

for (let i = 0; i < 6; i++) {
    arrayCheck[i].addEventListener("click", function (event) {
        if (arrayCheck[i].checked) {
            fieldItemCount[i].disabled = false;
        }
        else if (!arrayCheck[i].checked) {
            fieldItemCount[i].disabled = true;
            fieldItemCount[i].value = 1;
        }
    }, false);
}

function formSubmit() {
    var error = '';
    let formName = document.querySelector('#name').value;
    let formEmail = document.querySelector('#email').value;
    let formCname = document.querySelector('#cname').value;
    let formCcnum = document.querySelector('#ccnum').value;
    let formCvv = document.querySelector('#cvv').value;
    let formExpMonth = document.querySelector('select[name=expmonth]').value;
    let formExpYear = document.querySelector('select[name=expyear]').value;
    let arrayLabelItem = document.querySelectorAll('label[for=check]');

    const errors = {
        err1: 'Enter a Name <br>',
        err2: 'Enter an Email <br>',
        err3: 'Select one product <br>',
        err5: 'Enter a CC Name <br>',
        err6: 'Enter a CC Number <br>',
        err7: 'Enter the CC CVV <br>',
        err8: 'Enter the Exp. Month <br>',
        err9: 'Enter the Exp. Year <br>'
    };

    // Validate Errors
    if (!formName) {
        error += errors.err1;
    }
    if (!formEmail) {
        error += errors.err2;
    }
    let totalItem = [];
    let count = [];
    for (let i = 0; i < 6; i++) {
        if (arrayCheck[i].checked) {
            selectedItem[i] = arrayLabelItem[i].firstChild.data;
            count[i] = parseInt(fieldItemCount[i].value);
            totalItem[i] = (fieldItemCount[i].value) * (priceCheckBox[i]);
        }
    }

    
    if (!count.length) {
        error += errors.err3;
    }

    if (!formCname) {
        error += errors.err5;
    }
    let regexCC = /^4[0-9\-]{18}$/
    if (!regexCC.test(formCcnum)) {
        error += errors.err6;
    }
    if (!formCvv) {
        error += errors.err7;
    }
    if (!formExpMonth) {
        error += errors.err8;
    }
    if (!formExpYear) {
        error += errors.err9;
    }

    // Display the error(s) if any
    if (error) {
        // show the errors
        document.getElementById('error').innerHTML = error;
        // clear the output 
        document.getElementById('receiptDetails').innerHTML = '';
        // Clean table of products
        document.getElementById('table-products').innerHTML = '';
    }
    else {
        // calculations
        let tax = 0;
        let total = 0;
        let totalTax = 0;
        let totalTaxDonation = 0;
        for (var i in totalItem) {
            total += totalItem[i];
        }

        if (total > 100) {
            tax = (13 * total) / 100;
            totalTax = (total + tax);
            totalTaxDonation = totalTax*1.10;
            donation = totalTax*0.1
        }
        else {
            donation = 10
            tax = (13 * total) / 100;
            totalTax = (total + tax);
            totalTaxDonation = totalTax + 10;
        }

        // Extract Last Digits CCNumber
        let ccnumLast = 'xxxx-xxxx-xxxx-' + formCcnum.substr(15, 18);

        // Display Error on validation
        document.getElementById('error').innerHTML = '';

        let printDetailsVar = '';

        printDetailsVar += `
        Name        : ${formName} <br>
        Email       : ${formEmail} <br>
        CC Name     : ${formCname} <br>
        CC Number   : ${ccnumLast} <br>
        CC Expiration   : ${formExpMonth} / ${formExpYear} <br>
        Items       :  <br>
        
        `;

        document.getElementById('receiptDetails').innerHTML = printDetailsVar;
        let tablePrint = '';
        tablePrint += `
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            </tr>
            <tr>
            <td id="product"></td>
            <td id="quantity"></td>
            <td id="price"></td>
            </tr>`;
        document.getElementById('table-products').innerHTML = tablePrint;

        // Sketch table
        // document.getElementById('receipDetails').innerHTML = '<td>';
        for (let i = 0; i < 6; i++) {
            if (selectedItem[i] === undefined || count[i] === undefined) {
                
            }
            else {
                document.getElementById('product').innerHTML += ' ' + selectedItem[i] + '<br>';
                document.getElementById('quantity').innerHTML += ' ' + count[i] + '<br>';
                document.getElementById('price').innerHTML += ' $' + totalItem[i] + '<br>';
            }
        }
        let printTotal = '';
        printTotal += `
        Donation   : $${donation.toFixed(2)} <br>
        Tax        : $${tax} <br>
        Total      : $${totalTaxDonation.toFixed(2)} <br>
        `;
        document.getElementById('receiptTotal').innerHTML = printTotal;

    }
    return false;
}

