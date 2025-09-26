document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    // Проверяем, есть ли на странице кнопки табов, чтобы не вызывать ошибку
    if (tabButtons.length === 0 || tabPanels.length === 0) {
        return;
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Убираем active со всех кнопок и панелей
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Добавляем active к нажатой кнопке
            button.classList.add('active');
            
            // Находим и показываем нужную панель
            const targetPanelId = button.dataset.tab;
            const targetPanel = document.getElementById(targetPanelId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
});