let idealModal = document.getElementById("ideal-modal");
let doneModal = document.getElementById("done-modal");

let idealBtn = document.getElementById("idealBtn");
let doneBtn = document.getElementById("doneBtn");

let idealClose = document.getElementById("ideal-close");
let doneClose = document.getElementById("done-close");

doneBtn.onclick = () => {
  doneModal.style.display = "flex";
  doneModal.style.justifyContent = "center";
  doneInput.focus();
};

idealBtn.onclick = () => {
  idealModal.style.display = "flex";
  idealModal.style.justifyContent = "center";
  idealInput.focus();
};

idealClose.onclick = () => {
  idealErrorMessagge.innerHTML = "";
  idealErrorMessagge.style.display = "none";
  idealModal.style.display = "none";
};

doneClose.onclick = () => {
  doneErrorMessagge.innerHTML = "";
  doneErrorMessagge.style.display = "none";
  doneModal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === idealModal) {
    idealModal.style.display = "none";
  }
  if (event.target === doneModal) {
    doneModal.style.display = "none";
  } else {
  }
};
