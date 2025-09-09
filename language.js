document.addEventListener('DOMContentLoaded', () => {
    const langBtns = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-translate-key]');
    
    const setLanguage = (lang) => {
        // Сохраняем выбор пользователя
        localStorage.setItem('language', lang);

        // 1. Переводим статичные элементы
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-translate-key');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        // 2. Обновляем активную кнопку
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // 3. === НОВЫЙ БЛОК ДЛЯ ПЕРЕРИСОВКИ НОВОСТЕЙ ===
        if (typeof renderNews === 'function') {
            renderNews(lang);
        }
    };

    // Вешаем обработчики на кнопки
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = btn.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    // При загрузке страницы, запускаем все
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
});