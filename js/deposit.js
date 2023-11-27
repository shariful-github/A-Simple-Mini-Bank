document.getElementById('btn-deposit').addEventListener('click', function(){
    // Update Total deposit amount
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value); //-------------------------
    
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalAmount = parseFloat(depositTotalElement.innerText); //---------------------

    const currentDepositTotalAmount = previousDepositTotalAmount + newDepositAmount;
    
    depositTotalElement.innerText = currentDepositTotalAmount;

    // update total balance amount
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    console.log(currentBalanceTotal);

    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';
})