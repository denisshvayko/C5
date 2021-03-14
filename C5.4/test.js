/**
 * Функция-обертка над XMLHttpRequest, осуществляющая запрос
 * url - урл, по которому будет осуществляться запрос
 * callback - функция, которая вызовется при успешном выполнении
 * и первым параметром получит объект-результат запроса
 */
function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
};

// Ищем кнопку, по нажатии на которую будет запрос
const btnRequestNode = document.querySelector('.j-btn-request');
// Ищем кнопку, по нажатии на которую очищаем localStorage
const btnClearNode = document.querySelector('.j-btn-clear');

// Вешаем обработчик на кнопку для запроса
btnRequestNode.addEventListener('click', () => {
    // Получаем данные по ключу myJSON в localStorage
    const myJSON = localStorage.getItem('myJSON');

    if (myJSON) {
        // Если данные в localStorage есть - просто выводим их
        console.log('localStorage JSON', JSON.parse(myJSON));
    } else {
        // Если данных в localStorage нет - делаем запрос
        useRequest('https://picsum.photos/v2/list/?limit=1', (json) => {
            // Выводим данные, полученные в результате запроса
            console.log('request JSON', json);
            // Записываем результат запроса в localStorage
            localStorage.setItem('myJSON', JSON.stringify(json));
        });
    }
});

// Вешаем обработчик на кнопку для очистки localStorage
btnClearNode.addEventListener('click', () => {
    localStorage.clear();
    console.log('Данные из localStorage удалены');
});