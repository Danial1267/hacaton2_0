document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('first_name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('mail').value = '';
    alert('Форма отправлена успешно!');
});
