const mainBalanceElement = document.getElementById('main-balance');
const noakhaliAccountElement = document.getElementById('noakhali-account');
const feniAccountElement = document.getElementById('feni-account');
const quotaAccountElement = document.getElementById('quota-account');

const noakhaliInputField = document.getElementById('noakhali-input-field');
const feniInputField = document.getElementById('feni-input-field');
const quotaInputField = document.getElementById('quota-input-field');

const noakhaliDonationButton = document.getElementById('noakhali-donation-button');
const feniDonationButton = document.getElementById('feni-donation-button');
const quotaDonationButton = document.getElementById('quota-donation-button');

function handleDonation(inputField, accountElement, cause) {
    let donationAmount = parseFloat(inputField.value) || 0;
    let mainBalance = parseFloat(mainBalanceElement.innerText) || 0;
    let accountBalance = parseFloat(accountElement.innerText) || 0;

    if (donationAmount <= 0) {
        alert(`Please enter a valid donation amount for ${cause}.`);
        inputField.value = "";
        return;
    }

    if (donationAmount > mainBalance) {
        alert(`You cannot donate more than your available balance.`);
        return;
    }

    mainBalance -= donationAmount;
    accountBalance += donationAmount;

    mainBalanceElement.innerText = mainBalance.toFixed(2);
    accountElement.innerText = accountBalance.toFixed(2);
}

noakhaliDonationButton.addEventListener('click', () => {
    handleDonation(noakhaliInputField, noakhaliAccountElement, "Noakhali Flood Relief");
    return;
});

feniDonationButton.addEventListener('click', () => {
    handleDonation(feniInputField, feniAccountElement, "Feni Relief");
    return;
});

quotaDonationButton.addEventListener('click', () => {
    handleDonation(quotaInputField, quotaAccountElement, "Quota Movement");
    return;
});

// Tab Switch Function
function handleTabSwitch(activeButton, inactiveButton, showContainerId, hideContainerId) {
  document.getElementById(hideContainerId).classList.add('hidden');
  document.getElementById(showContainerId).classList.remove('hidden');

  activeButton.classList.add('bg-[#B4F461]');
  activeButton.classList.remove('bg-gray-300');
  inactiveButton.classList.add('bg-gray-300');
  inactiveButton.classList.remove('bg-[#B4F461]');
}

// Donation Tab Click Event
const donationButton = document.getElementById('donation-button');
const historyButton = document.getElementById('history-button');

donationButton.addEventListener('click', function() {
  handleTabSwitch(donationButton, historyButton, 'cards-container', 'history-container');
});

// History Tab Click Event
historyButton.addEventListener('click', function() {
  handleTabSwitch(historyButton, donationButton, 'history-container', 'cards-container');

  const quotaInputFieldValue = parseFloat(quotaInputField.value) || 0;
  const feniInputFieldValue = parseFloat(feniInputField.value) || 0;
  const noakhaliInputFieldValue = parseFloat(noakhaliInputField.value) || 0;

  const noakhaliTital = document.getElementById('noakhali-tital').innerText;
  const feniTital = document.getElementById('feni-tital').innerText;
  const quotaTital = document.getElementById('quota-tital').innerText;

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

  if (message) {
      const div = document.createElement('div');
      div.className = 'bg-white rounded-lg py-4 text-xl font-bold';
      div.innerHTML = `
          ${message}
          <h1 class="text-gray-500 text-xs">Date: ${new Date().toLocaleString()}</h1>
      `;

      const historyContainer = document.getElementById('history-container');
      historyContainer.insertBefore(div, historyContainer.firstChild);
  }
  quotaInputField.value = "";
  feniInputField.value = "";
  noakhaliInputField.value = "";
});