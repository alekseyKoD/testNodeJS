// 1. Находим элементы на странице, с которыми будем работать
const btn = document.getElementById('magic-btn');
const statusText = document.getElementById('status-text');
let clickCount=0;
let tempCount=0;

// Задание 1: Обработка обычного клика (click)
btn.addEventListener('click', function(event) {
    // Меняем стиль кнопки
    btn.style.backgroundColor = '#e6be11'; // Зеленый цвет
    btn.innerText = ++clickCount;
    //btn.innerText = clickCount++;
    
    // Обновляем текст статуса внизу
    statusText.innerText = 'Статус: Кнопка нажата';
    statusText.style.color = '#2ecc71';
});
btn.addEventListener('mouseover', function(event) {
    btn.innerText = tempCount;
    
});
btn.addEventListener('mouseout', function(event) {
    tempCount=clickCount;
    btn.innerText = "---";
    
});

// {
// // Задание 2: Обработка наведения (mouseover) и ухода курсора (mouseout)
// btn.addEventListener('mouseover', function() {
//     btn.style.fontSize = '22px';
//     btn.style.transform = 'scale(1.05)'; // Немного увеличиваем кнопку
// });

// btn.addEventListener('mouseout', function() {
//     btn.style.fontSize = '18px';
//     btn.style.transform = 'scale(1)'; // Возвращаем размер
// });

// // Задание 3: Секретная функция при двойном клике (dblclick)
// btn.addEventListener('dblclick', function() {
//     document.body.style.backgroundColor = '#333'; // Темный фон страницы
//     btn.style.color = 'white'; // Белый текст на кнопке
//     statusText.innerText = 'Статус: Включен ночной режим';
// });

// btn.addEventListener('contextmenu', function() {
//     event.preventDefault(); 
//     alert("Да ты прямо программист от бога 🤣");
// });

// // btn.addEventListener('click', function() {
// //    alert("Ты ЧЁ кликнул ?");
// // });
// }