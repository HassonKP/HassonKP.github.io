// Open Modal
function openModal(feature) {
  const modal = document.getElementById(`modal-${feature}`);
  if (modal) {
    modal.style.display = "block";
  }
}

// Close Modal
function closeModal(feature) {
  const modal = document.getElementById(`modal-${feature}`);
  if (modal) {
    modal.style.display = "none";
  }
}

// Close Modal on Outside Click
window.onclick = function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
