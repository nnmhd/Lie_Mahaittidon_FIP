const contactInfoBox = document.querySelector("#contact-info");
const paymentCon = document.querySelector("#paymentmethod-con");
const deliveryInfo = document.querySelector("#delivery-info");
const confirmCon = document.querySelector("#confirmation-con");
const paymentBtn = document.querySelector("#payment-btn");
const gopayBtn = document.querySelector("#gopay-btn");
const stopSign = document.querySelectorAll(".stopcircle");

console.log(stopSign[1]);

function goToPay(e) {
  paymentCon.classList.remove("hide");
  contactInfoBox.classList.add("hide");
  deliveryInfo.classList.add("hide");
  stopSign[1].style.backgroundColor = `#00a44b`;
  e.preventDefault();
}

function getOtp(e) {
  confirmCon.classList.remove("hide");
  paymentCon.classList.add("hide");

  stopSign[2].style.backgroundColor = `#00a44b`;
  e.preventDefault();
}

paymentBtn.addEventListener("click", goToPay);
gopayBtn.addEventListener("click", getOtp);
