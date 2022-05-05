const input = document.querySelectorAll("input");
const clearBTN = document.getElementById("clearBTN");
clearBTN.addEventListener("click", () => {
  input.forEach((element) => {
    element.value = "";
  });
});

const etichetaDiv = document.getElementById("eticheta");
const printBTN = document.getElementById("printBTN");
let nameInput = document.getElementById("nameInput");

printBTN.addEventListener("click", () => {
  var canvasObj = document.getElementById("qrcode");
  canvasObj.toDataURL("image/png");
  html2canvas(etichetaDiv).then((canvas) => {
    const link = document.createElement("a");
    link.download = "Eticheta " + nameInput.value;
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
  });
});

const nikonBTN = document.getElementById("nikonBTN");
const canonBTN = document.getElementById("canonBTN");
const sonyBTN = document.getElementById("sonyBTN");

let imgCont = document.getElementById("imgLogo");

nikonBTN.addEventListener("click", () => {
  imgCont.innerHTML = ` <img src="./logo/nikon.png" class="img-fluid"/>`;
});
canonBTN.addEventListener("click", () => {
  imgCont.innerHTML = ` <img src="./logo/canon.png" class="img-fluid"/>`;
});
sonyBTN.addEventListener("click", () => {
  imgCont.innerHTML = ` <img src="./logo/sony.png" class="img-fluid"/>`;
});
