const refs = {
        openModalBtn: document.querySelector("[data__open__modal]"),
        closeModalBtn: document.querySelector("[data__close__modal]"),
        backdrop: document.querySelector("[data__backdrop]"),
      };

      refs.openModalBtn.addEventListener("click", toggleModal);
      refs.closeModalBtn.addEventListener("click", toggleModal);

      refs.backdrop.addEventListener("click", logBackdropClick);

      function toggleModal() {
        refs.backdrop.classList.toggle("is__hidden");
      }

      function logBackdropClick() {
        console.log("клик в бекдроп");
}