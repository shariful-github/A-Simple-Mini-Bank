document.getElementById('btn-withdraw').addEventListener('click', function(){
    // Update withdraw amount
    const withdrawElement = document.getElementById('withdraw-element');
    const perviousWithdrawAmount = parseFloat(withdrawElement.innerText);

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);

    const totalWithdrawAmount = perviousWithdrawAmount + newWithdrawAmount;

    withdrawElement.innerText = totalWithdrawAmount;

    // update balance
    const balanceElement = document.getElementById('balance-element');
    const previousBalance = parseFloat(balanceElement.innerText);

    const currentBalance = previousBalance - newWithdrawAmount;

    balanceElement.innerText = currentBalance;

    withdrawField.value = '';
})