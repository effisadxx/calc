document.addEventListener('DOMContentLoaded', function() {
  const optionCards = document.querySelectorAll('.option-card, .option-icon, .option-area');
  const calculateBtn = document.getElementById('calculate-btn');
  const consultBtn = document.getElementById('consult-btn');
  
  let selectedOptions = {
      style: null,
      form: null,
      area: null
  };
  
  let totalPrice = 0;
  
  // Add click event listeners to all option cards
  // optionCards.forEach(card => {
  //     card.addEventListener('click', function() {
  //         // Determine which section this card belongs to
  //         const section = document.querySelector('.section');
  //         const sectionTitle = section.querySelector('h2').textContent.trim();
          
  //         // Remove selected class from all cards in this section
  //         const cardsInSection = section.querySelectorAll('.option-card, .option-icon, .option-area');
  //         cardsInSection.forEach(c => c.classList.remove('selected'));
          
  //         // Add selected class to clicked card
  //         this.classList.add('selected');
          
  //         // Store the selected option
  //         if (sectionTitle === 'Стиль:') {
  //             selectedOptions.style = {
  //                 name: this.getAttribute('data-value'),
  //                 price: parseInt(this.getAttribute('data-price'))
  //             };
  //         } else if (sectionTitle === 'Форма:') {
  //             selectedOptions.form = {
  //                 name: this.getAttribute('data-value'),
  //                 price: parseInt(this.getAttribute('data-price'))
  //             };
  //         } else if (sectionTitle === 'Площадь кухни:') {
  //             selectedOptions.area = {
  //                 name: this.getAttribute('data-value'),
  //                 price: parseInt(this.getAttribute('data-price'))
  //             };
  //         }
          
  //         // Calculate total price
  //         calculateTotal();
  //     });
  // });
  
  // Calculate total price based on selected options
  function calculateTotal() {
      totalPrice = 0;
      
      if (selectedOptions.style) {
          totalPrice += selectedOptions.style.price;
      }
      if (selectedOptions.form) {
          totalPrice += selectedOptions.form.price;
      }
      if (selectedOptions.area) {
          totalPrice += selectedOptions.area.price;
      }
  }
  
  // Handle calculate button click
  calculateBtn.addEventListener('click', function() {
      // Validate all options are selected
      if (!selectedOptions.style || !selectedOptions.form || !selectedOptions.area) {
          alert('Пожалуйста, выберите все параметры кухни');
          return;
      }
      
      // Format the price with spaces as thousand separators
      const formattedPrice = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      
      // Show result
      alert(`Выбранные параметры:\nСтиль: ${selectedOptions.style.name}\nФорма: ${selectedOptions.form.name}\nПлощадь: ${selectedOptions.area.name}\n\nПримерная стоимость: ${formattedPrice} руб.`);
  });
  
  // Handle consultation button click
  consultBtn.addEventListener('click', function() {
      alert('Спасибо за вашу заявку на консультацию! Наш дизайнер свяжется с вами в ближайшее время.');
  });
});

const openBtn = document.getElementById('openModalBtn');
        const modal = document.getElementById('modalOverlay');
        const closeBtn = document.querySelector('.close-btn');

        // Открытие модального окна
        openBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        // Закрытие модального окна
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Закрытие при клике вне окна
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Закрытие при нажатии ESC
        document.addEventListener('keydown', (e) => {
            if(e.key === 'Escape') {
                modal.style.display = 'none';
            }
        });