function getInputValue(elementID) {
    let inputValue = parseFloat(document.getElementById(elementID).value);
    if (isNaN(inputValue)) {
        return inputValue = 0;

    } else {
        return inputValue;
    };
};

function setValue(iD, valuE) {
    const element = document.getElementById(iD);
    element.innerText = valuE;
}


document.getElementById('player-cost-btn').addEventListener('click', function () {
    const playerExpenses = getInputValue('per-player-cost');
    setValue('player-expenses', playerExpenses);
});

document.getElementById('total-cost-btn').addEventListener('click', function () {
    const playerExpenses = getInputValue('per-player-cost');

    const managerFee = getInputValue('manager-fee');
    const coachFee = getInputValue('coach-fee');

    const getElement = document.getElementById('player-expenses').innerText;
    const playerexpenses = parseFloat(getElement);

    const totalCost = playerexpenses + managerFee + coachFee;

    if (playerExpenses == 'NaN' || totalCost == "NaN") {
        alert('Please Enter Valid Input');
        return;

    } else {
        setValue('player-expenses', playerExpenses);
        setValue('total-cost', totalCost);
        return;
    };

});


