function init() {
  const wrapper = document.querySelector(".wrapper");
  const modal = document.querySelector(".modal");
  const imageContainer = document.querySelector(".img");
  const submitForm = document.querySelector(".form-1");
  const acceptedForm = document.querySelector(".form-2");
  const openModalButton = document.getElementById("openModal");
  const toggleButton = document.getElementById("toggleButton");
  const closeButton = document.getElementById("closeButton");
  const returnButton = document.getElementById("returnButton");
  const inputName = document.getElementById("name");
  const inputNumber = document.getElementById("phone");

  openModalButton.addEventListener("click", openModal);

  closeButton.addEventListener("click", closeModal);
  returnButton.addEventListener("click", closeModal);

  inputNumber.addEventListener("input", formatPhoneNumber);
  // inputNumber.addEventListener("keydown", handleBackspace);
  toggleButton.addEventListener("click", validateForm);
  submitForm.addEventListener("submit", submitData);

  function openModal() {
    wrapper.classList.add("open");
    modal.classList.remove("hidden");
  }

  function toggleModals() {
    submitForm.classList.toggle("hidden");
    acceptedForm.classList.toggle("hidden");
    modal.classList.toggle("modal-1");
    modal.classList.toggle("modal-2");
    imageContainer.classList.toggle("img-1");
    imageContainer.classList.toggle("img-2");
  }

  function closeModal() {
    modal.classList.add("hidden");
    wrapper.classList.remove("open");
    modal.classList.add("modal-1");
    modal.classList.remove("modal-2");
    submitForm.classList.remove("hidden");
    acceptedForm.classList.add("hidden");
    imageContainer.classList.add("img-1");
    imageContainer.classList.remove("img-2");

    inputName.value = "";
    inputNumber.value = "";
  }

  function formatPhoneNumber() {
    let inputValue = this.value.replace(/\D/g, "");
    let formattedValue = `+7 ${inputValue.slice(1, 4)} ${inputValue.slice(
      4,
      7
    )} ${inputValue.slice(7, 9)} ${inputValue.slice(9, 11)}`;

    this.value = formattedValue.trim();
  }

  function validateForm() {
    if (!inputName.value || !inputNumber.value || inputNumber.value.length < 16)
      return;
    toggleModals();
  }

  // function handleBackspace(e) {
  //   if (e.key === "Backspace") {
  //     this.value = this.value.slice(0, -1);
  //     e.preventDefault();
  //   }
  // }

  function submitData(e) {
    e.preventDefault();
  }

  /* Реализаця закрытия по кнопке Esc */
  document.addEventListener("keydown", isEsc);
  function isEsc(e) {
    if (e.code == "Escape") {
      closeModal();
    }
  }

  wrapper.addEventListener("click", (e) => {
    const composedPath = e.composedPath();
    const checkingArr = [openModalButton, modal];

    if (!checkingArr.some((value) => composedPath.includes(value))) {
      closeModal();
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
