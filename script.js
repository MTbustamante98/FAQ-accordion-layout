document.addEventListener('DOMContentLoaded', function() {
  function accordionInit() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  
  function accordionClick(event) {
    console.log(event)
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }

  accordionList.forEach((item) => {
    item.addEventListener('click', accordionClick)
  });
 }
 accordionInit();
});

