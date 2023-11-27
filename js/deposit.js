document.getElementById('btn-deposit').addEventListener('click', function(){
    // Update Total deposit amount
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value); //-------------------------
    
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalAmount = parseFloat(depositTotalElement.innerText); //---------------------

    const currentDepositTotalAmount = previousDepositTotalAmount + newDepositAmount;
    
    depositTotalElement.innerText = currentDepositTotalAmount;

    // update total balance amount
    const balanceElement = document.getElementById('balance-element');
    const previousBalance = parseFloat(balanceElement.innerText);
    console.log(previousBalance);
    const currentBalanceTotal = previousBalance + newDepositAmount;
    console.log(currentBalanceTotal);

    balanceElement.innerText = currentBalanceTotal;

    depositField.value = '';
})