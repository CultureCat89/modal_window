function init() {
  const wrapper = document.querySelector('.wrapper');
  const modal1 = document.querySelector('.modal-1');
  const modal2 = document.querySelector('.modal-2');
  const submitForm = document.querySelector('.form-1');
  const openModalButton = document.getElementById("openModal");
  const toggleButton = document.getElementById("toggleButton");
  const closeButton = document.getElementById("closeButton");
  const closeButton2 = document.getElementById("closeButton2");
  const returnButton = document.getElementById("returnButton");
  const inputName = document.getElementById("name");
  const inputNumber = document.getElementById("phone");
  
  openModalButton.addEventListener('click', openModal);

  closeButton.addEventListener("click", closeModal);
  closeButton2.addEventListener("click", closeModal);
  returnButton.addEventListener("click", closeModal);

  inputNumber.addEventListener('input', formatPhoneNumber);
  inputNumber.addEventListener('keydown', handleBackspace);
  toggleButton.addEventListener("click", validateForm);
  submitForm.addEventListener('submit', submitData);

  function openModal() {
    wrapper.classList.add("open");
    modal1.classList.remove("hidden");
  }

  function toggleModals() {
    modal1.classList.toggle("hidden");
    modal2.classList.toggle("hidden");
  }

  function closeModal() {
      modal1.classList.add("hidden");
      modal2.classList.add("hidden");
      wrapper.classList.remove("open");
      inputName.value = '';
      inputNumber.value = '';
  }

  // function isClickOutsideModal(e) {
  //   const withinBoundaries = 
  // }
  
  function formatPhoneNumber() {
    let inputValue = this.value.replace(/\D/g, '');
    let formattedValue = `+7 ${inputValue.slice(1, 4)} ${inputValue.slice(4, 7)} ${inputValue.slice(7, 9)} ${inputValue.slice(9, 11)}`;
    
    this.value = formattedValue;
  }

  function validateForm() {
    if (!inputName.value || !inputNumber.value || inputNumber.value.length < 16) return;
    toggleModals();
  }
  
  function handleBackspace(e) {
    if (e.key === 'Backspace') {
      this.value = this.value.slice(0, -1);
      e.preventDefault();
    }
  }

  function submitData(e) {
    e.preventDefault();
  }

  /* Реализаця закрытия по кнопке Esc */

  // document.addEventListener("keydown", isEsc);
  // function isEsc(e) {
  //   if (e.keyCode == 27) {
  //     closeModal();
  //   }
  // }

  wrapper.addEventListener('click', (e) => {
    const composedPath = e.composedPath();
    const checkingArr = [openModalButton, modal1, modal2];
    // console.log(composedPath.includes(openModalButton));

    if (!checkingArr.some((value) => composedPath.includes(value))) {
      // console.log('Ок');
      // debugger;
      closeModal();
    } 
  });


};

document.addEventListener("DOMContentLoaded", init);
let test;