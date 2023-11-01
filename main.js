const toggleBtn= document.querySelector('.toggle_btn');
const dropDownMenu= document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', () => {
      dropDownMenu.classList.toggle('open');
    });