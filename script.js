function init() {
  const wrapper = document.querySelector('.wrapper');
  const modal1 = document.querySelector('.modal-1');
  const modal2 = document.querySelector('.modal-2');
  const openModalButton = document.getElementById("openModal");
  const toggleButton = document.getElementById("toggleButton");
  const closeButton = document.getElementById("closeButton");
  const closeButton2 = document.getElementById("closeButton2");
  const inputNumber = document.getElementById("phone");
  
  openModalButton.addEventListener('click', openModal);
  toggleButton.addEventListener("click", toggleModals);
  closeButton.addEventListener("click", closeModal);
  closeButton2.addEventListener("click", closeModal);
  
  inputNumber.addEventListener('input', formatPhoneNumber);
  inputNumber.addEventListener('keydown', handleBackspace);

  function openModal() {
    wrapper.classList.add("open");
    modal1.classList.remove("hidden");
  }

  function toggleModals() {
    modal1.classList.add("hidden");
    modal2.classList.toggle("hidden");
  }

  function closeModal() {
      modal1.classList.add("hidden");
      modal2.classList.add("hidden");
      wrapper.classList.remove("open");
  }
  
  function formatPhoneNumber() {
    let inputValue = this.value.replace(/\D/g, '');
    let formattedValue = `+7 ${inputValue.slice(1, 4)} ${inputValue.slice(4, 7)} ${inputValue.slice(7, 9)} ${inputValue.slice(9, 11)}`;
    
    this.value = formattedValue;
  }
  
  function handleBackspace(event) {
    if (event.key === 'Backspace') {
      this.value = this.value.slice(0, -1);
      event.preventDefault();
    }
  }

};

document.addEventListener("DOMContentLoaded", init);
