document.addEventListener('DOMContentLoaded', function() {
    
    // --- КЛЮЧЕВАЯ НАСТРОЙКА ---
    const modsPerPage = 12; // СКОЛЬКО МОДОВ ПОКАЗЫВАТЬ НА ОДНОЙ СТРАНИЦЕ
    // -------------------------

    const modCards = document.querySelectorAll('.mod-card');
    const paginationContainer = document.querySelector('.pagination-container');
    const totalMods = modCards.length;
    const totalPages = Math.ceil(totalMods / modsPerPage);

    // Если страниц нужна всего одна, ничего не делаем
    if (totalPages <= 1) {
        return;
    }

    // Функция, которая показывает моды для нужной страницы
    function displayPage(pageNumber) {
        const startIndex = (pageNumber - 1) * modsPerPage;
        const endIndex = startIndex + modsPerPage;

        // Сначала прячем все карточки
        modCards.forEach(card => card.style.display = 'none');

        // Потом показываем только те, что нужны для этой страницы
        for (let i = startIndex; i < endIndex && i < totalMods; i++) {
            modCards[i].style.display = 'flex'; // 'flex', потому что у .mod-card такой display в CSS
        }
        
        // Обновляем активную кнопку
        updateActiveButton(pageNumber);
    }

    // Функция для создания кнопок пагинации
    function setupPagination() {
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.className = 'pagination-btn';
            button.innerText = i;
            button.addEventListener('click', () => {
                displayPage(i);
            });
            paginationContainer.appendChild(button);
        }
    }

    // Функция для выделения активной кнопки
    function updateActiveButton(activePage) {
        const allButtons = document.querySelectorAll('.pagination-btn');
        allButtons.forEach((button, index) => {
            if ((index + 1) === activePage) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // Первоначальный запуск
    setupPagination(); // Создаем кнопки
    displayPage(1);    // Показываем первую страницу
});