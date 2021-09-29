const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");

var cashGivenDiv = document.querySelector(".cashGivenInput");
var changeReturnDiv = document.querySelector(".changeReturn");

var nextButton = document.querySelector("#next");

const checkButton = document.querySelector("#check-button");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener("click", ()=> {
    if(billAmount.value){
         hideMessage();
         
        if(Number(billAmount.value)>0){
            nextButton.style.display = "none";
            cashGivenDiv.style.display = "block";
        }
        else {
            showMessage("Enter valid bill amount 🙄");
        }
    }  else if (billAmount.value === "" ) {
        showMessage("Please enter bill amount");
        changeReturnDiv.style.display = "none";

     }
    // showMessage("Please enter  valid bill amount");
})

checkButton.addEventListener("click", function validateBillAndCashAmount() {

    hideMessage();

    if(billAmount.value === "" || cashGiven.value === " "){
         showMessage("Please enter both the values");
         changeReturnDiv.style.display = "none";
    }

    if (billAmount.value > 0) {
        if (Number(cashGiven.value) > Number(billAmount.value)) {
            const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
            console.log(amountToBeReturned);
            calculateChange(amountToBeReturned);

            changeReturnDiv.style.display = "block";
            // checkButton.style.display = "none";

            billAmount.value = " ";
            cashGiven.value = " ";

        }else if (cashGiven.value === "" ) {
            showMessage("Please enter amount of cash");

         } else if(cashGiven.value == billAmount.value){
             showMessage("No amount should be returned");
         }
         else if(cashGiven.value < 0){
            showMessage("Cash amount can not be negative🤨. Please enter valid value.");
           
         }

        else {
            showMessage(
                "The cash provided should be equal or more to the bill amount");
             }
    } 
     
});

function calculateChange(amountToBeReturned) {
    //go over availableNotes array
    for (let i = 0; i < availableNotes.length; i++) {
        // no. of notes needed for each denomination
        const numberOfNote = Math.trunc(amountToBeReturned / availableNotes[i]);

        // amount left after calculating no. of notes
        amountToBeReturned = amountToBeReturned % availableNotes[i];

        //updating no. of notes in table for current amount
        noOfNotes[i].innerText = numberOfNote;
    }

}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {

    message.style.display = "block";
    message.innerText = msg;
}