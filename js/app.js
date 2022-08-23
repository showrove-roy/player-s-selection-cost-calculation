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


function getSetBtnValue(name, iD) {
    const element = document.getElementById(iD);
    element.setAttribute("disabled", true);
    element.classList.remove('bg-[#015196]');
    element.classList.add('bg-[#A2A9AF]');

    const playerList = document.getElementById('player-list');
    let playerName = document.createElement("li");
    playerName.innerText = name;

    playerList.appendChild(playerName);

    let playerListNumber = playerList.childElementCount;

    if (playerListNumber === 5) {
        let allSelectBtns = document.getElementsByClassName('all-select-btn');
        for (allSelectBtn of allSelectBtns) {
            allSelectBtn.setAttribute("disabled", true);
        };
        alert('Selection Done');
    };

}




document.getElementById('player-cost-btn').addEventListener('click', function () {
    const playerExpenses = getInputValue('per-player-cost');
    const playerList = document.getElementById('player-list');
    let playerListNumber = playerList.childElementCount;
    let totalPlayerExpenses = playerExpenses * playerListNumber;
    setValue('player-expenses', totalPlayerExpenses);
});

document.getElementById('total-cost-btn').addEventListener('click', function () {
    const playerExpenses = getInputValue('per-player-cost');
    const playerList = document.getElementById('player-list');
    let playerListNumber = playerList.childElementCount;
    let totalPlayerExpenses = playerExpenses * playerListNumber;

    const managerFee = getInputValue('manager-fee');
    const coachFee = getInputValue('coach-fee');

    const totalCost = totalPlayerExpenses + managerFee + coachFee;

    if (playerExpenses == 'NaN' || totalCost == "NaN") {
        alert('Please Enter Valid Input');
        return;

    } else {
        setValue('player-expenses', totalPlayerExpenses);
        setValue('total-cost', totalCost);
        return;
    };

});


