function renderNews(lang) {
    const newsListContainer = document.getElementById('news-list');

    // Проверяем, что мы на нужной странице и данные есть
    if (!newsListContainer || typeof newsData === 'undefined') {
        return;
    }

    // Очищаем старые новости перед отрисовкой новых
    newsListContainer.innerHTML = '';

    // Проходимся по данным и создаем посты на выбранном языке
    newsData.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'news-post';

        const titleElement = document.createElement('h2');
        titleElement.className = 'news-title';
        titleElement.textContent = post.title[lang]; // Используем переданный язык

        const dateElement = document.createElement('p');
        dateElement.className = 'news-date';
        dateElement.textContent = post.date;

        const contentElement = document.createElement('div');
        contentElement.className = 'news-content';
        contentElement.innerHTML = post.full_content[lang]; // Используем переданный язык

        postElement.appendChild(titleElement);
        postElement.appendChild(dateElement);
        postElement.appendChild(contentElement);
        
        newsListContainer.appendChild(postElement);
    });
}

// Запускаем отрисовку новостей один раз при первой загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const initialLang = localStorage.getItem('language') || 'en';
    renderNews(initialLang);
});