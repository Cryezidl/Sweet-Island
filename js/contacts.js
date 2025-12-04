document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            const email = document.getElementById('email').value;
            
            if (!name.trim() || !phone.trim() || !message.trim()) {
                alert('Пожалуйста, заполните все обязательные поля (имя, телефон, сообщение)');
                return;
            }
         
            const successMessage = `
Сообщение успешно отправлено!
            
Ваши данные:
Имя: ${name}
Телефон: ${phone}
Email: ${email || 'не указан'}
Сообщение: ${message}
            
Мы свяжемся с вами в ближайшее время.`;
            
            alert(successMessage);
            

            contactForm.reset();
        });
    }
    
});