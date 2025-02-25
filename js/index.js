const mainBalanceElement = document.getElementById('main-balance');
const noakhaliAccountElement = document.getElementById('noakhali-account');
const noakhaliInputField = document.getElementById('noakhali-input-field');
// Flood at Noakhali Section 
const noakhaliDonationButton = document.getElementById('noakhali-donation-button');
noakhaliDonationButton.addEventListener('click', function () {
    const noakhaliInputFieldValue = parseFloat(noakhaliInputField.value) || 0;
    const mainBalance = parseFloat(mainBalanceElement.innerText) || 0;
    const noakhaliAccount = parseFloat(noakhaliAccountElement.innerText) || 0;

    const minusMainBalance = mainBalance - noakhaliInputFieldValue;
    const addedNoakhaliAccount = noakhaliInputFieldValue + noakhaliAccount;

    mainBalanceElement.innerText = minusMainBalance.toFixed(2); 
    noakhaliAccountElement.innerText = addedNoakhaliAccount.toFixed(2);
});

// Relief in Feni Section 
const feniAccountElement = document.getElementById('feni-account');
const feniInputField = document.getElementById('feni-input-field');
const feniDonationButton = document.getElementById('feni-donation-button');
feniDonationButton.addEventListener('click', function () {
    const feniInputFieldValue = parseFloat(feniInputField.value) || 0;
    let mainBalance = parseFloat(mainBalanceElement.innerText) || 0;
    let feniAccount = parseFloat(feniAccountElement.innerText) || 0;

    if (feniInputFieldValue > mainBalance) {
        alert("You don't have enough balance");
        return;
    }

    mainBalance -= feniInputFieldValue; 
    feniAccount += feniInputFieldValue; 

    mainBalanceElement.innerText = mainBalance.toFixed(2);
    feniAccountElement.innerText = feniAccount.toFixed(2);
});

// Quota Movement Section 
const quotaAccountElement = document.getElementById('quota-account');
const quotaInputField = document.getElementById('quota-input-field');
const quotaDonationButton = document.getElementById('quota-donation-button');
quotaDonationButton.addEventListener('click', function () {
    const quotaInputFieldValue = parseFloat(quotaInputField.value) || 0;
    const mainBalance = parseFloat(mainBalanceElement.innerText) || 0;
    const quotaAccount = parseFloat(quotaAccountElement.innerText) || 0;

    const minusMainBalance = mainBalance - quotaInputFieldValue;
    const addedquotaAccount = quotaInputFieldValue + quotaAccount;

    mainBalanceElement.innerText = minusMainBalance.toFixed(2); 
    quotaAccountElement.innerText = addedquotaAccount.toFixed(2);
});

// Donation Tab Section 
const donationButton = document.getElementById('donation-button');
donationButton.addEventListener('click',function(){
    const hideHistorySection = document.getElementById('history-container').classList.add('hidden');
    const showCardsContainer = document.getElementById('cards-container').classList.remove('hidden');

    donationButton.classList.add('bg-[#B4F461]');
    donationButton.classList.remove('bg-gray-300');
    historyButton.classList.add('bg-gray-300');
    historyButton.classList.remove('bg-[#B4F461]');
});

const noakhaliTital = document.getElementById('noakhali-tital').innerText;
const feniTital = document.getElementById('feni-tital').innerText;
const quotaTital = document.getElementById('quota-tital').innerText;
const historyContainer = document.getElementById('history-container').innerText;

// History Tab Section 
const historyButton = document.getElementById('history-button');
historyButton.addEventListener('click',function(){

    const hideCardsContainer = document.getElementById('cards-container').classList.add('hidden');
    const showHistorySection = document.getElementById('history-container').classList.remove('hidden');

    historyButton.classList.add('bg-[#B4F461]');
    historyButton.classList.remove('bg-gray-300');
    donationButton.classList.remove('bg-[#B4F461]');
    donationButton.classList.add('bg-gray-300');

    const quotaInputFieldValue = parseFloat(quotaInputField.value) || 0;
    const feniInputFieldValue = parseFloat(feniInputField.value) || 0;
    const noakhaliInputFieldValue = parseFloat(noakhaliInputField.value) || 0;

    const noakhaliTital = document.getElementById('noakhali-tital').innerText;
    const feniTital = document.getElementById('feni-tital').innerText;
    const quotaTital = document.getElementById('quota-tital').innerText;

    if (isNaN(quotaInputFieldValue) || quotaInputFieldValue < 0) {
        alert("Quota donation must be a positive number!");
        quotaInputField.value = "";
        return;
    }
    if (isNaN(feniInputFieldValue) || feniInputFieldValue < 0) {
        alert("Feni donation must be a positive number!");
        feniInputField.value = "";
        return;
    }
    if (isNaN(noakhaliInputFieldValue) || noakhaliInputFieldValue < 0) {
        alert("Noakhali donation must be a positive number!");
        noakhaliInputField.value = "";
        return;
    }

    if (quotaInputFieldValue === 0 && feniInputFieldValue === 0 && noakhaliInputFieldValue === 0) {
        alert("Please enter a valid donation amount.");
        return;
    }
    
    if (quotaInputFieldValue === 0 && feniInputFieldValue === 0 && noakhaliInputFieldValue === 0) {
        return;
    }

    if (quotaInputFieldValue === 0 && feniInputFieldValue === 0 && noakhaliInputFieldValue === 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    let mainBalance = document.getElementById('main-balance').innerText;
    let noakhaliBalance = document.getElementById('noakhali-account').innerText;
    let feniBalance = document.getElementById('feni-account').innerText;
    let quotaBalance = document.getElementById('quota-account').innerText;
    
    let totalDonation = quotaInputFieldValue + feniInputFieldValue + noakhaliInputFieldValue;
    if (totalDonation > mainBalance) {
        alert("You cannot donate more than your main balance (5500 Taka)!");
        return;
    }
    
    if (quotaInputFieldValue > quotaBalance) {
        alert("Quota account does not have enough balance!");
        return;
    }
    if (feniInputFieldValue > feniBalance) {
        alert("Feni account does not have enough balance!");
        return;
    }
    if (noakhaliInputFieldValue > noakhaliBalance) {
        alert("Noakhali account does not have enough balance!");
        return;
    }

    mainBalance -= totalDonation;
    quotaBalance -= quotaInputFieldValue;
    feniBalance -= feniInputFieldValue;
    noakhaliBalance -= noakhaliInputFieldValue;

    let message = "";
    if (quotaInputFieldValue > 0) {
        message += `${quotaInputFieldValue} Taka is Donated for ${quotaTital}<br>`;
    }
    if (feniInputFieldValue > 0) {
        message += `${feniInputFieldValue} Taka is Donated for ${feniTital}<br>`;
    }
    if (noakhaliInputFieldValue > 0) {
        message += `${noakhaliInputFieldValue} Taka is Donated for ${noakhaliTital}<br>`;
    }

    const div = document.createElement('div');
    div.className = 'bg-white rounded-lg py-6 text-xl font-bold ';
    div.innerHTML = `
     ${message}
        <h1 class="text-gray-500 text-xs">Date: ${new Date().toLocaleString()}</h1>
    `;
    const historyContainer = document.getElementById('history-container');
    historyContainer.insertBefore(div,historyContainer.firstChild);

    quotaInputField.value = "";
    feniInputField.value = "";
    noakhaliInputField.value = "";
});