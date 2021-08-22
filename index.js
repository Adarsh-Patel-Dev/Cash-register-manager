const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");

const checkButton = document.querySelector("#check-button");
const noOfNotes = document.querySelectorAll(".no-of-notes");
 
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click",function validateBillAndCashAmount(){
    
    hideMessage();

    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
        showMessage(
            "The cash provided should be equal or more to the bill amount"
            );
        }
        
    } else {
        showMessage("Invalid Bill Amount");
     }
});

function calculateChange(amountToBeReturned){
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

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg) {
    
    message.style.display = "block";
    message.innerText = msg;
} 

