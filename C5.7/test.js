const btn = document.querySelector('.j-btn-request');
let resultNode = document.querySelector('.result');
// Функция, которая возвращаем fetch

const myJSON = localStorage.getItem('myJSON');
if (myJSON) {
    // Если данные в localStorage есть - просто выводим их
    resultNode.innerHTML = `${JSON.parse(myJSON)}`;
}

const useRequest = (a, b) => {
    return fetch(` https://picsum.photos/v2/list?page=${a}&limit=${b}`)
        .then((response) => {
            result = response.json()
            console.log('response', result);

            return result;
        })
        .then((data) => {
            let cards = '';
            data.forEach(item => {
                const cardBlock = `
                          <div class="card">
                            <img
                              src="${item.download_url}"
                              class="card-image"
                            />
                            <p>${item.author}</p>
                          </div>
                        `;
                cards = cards + cardBlock;
            });
            console.log(cards)
            localStorage.setItem('myJSON', JSON.stringify(cards));
            return cards;
        })
        .catch(() => { console.log('error') });
}

btn.addEventListener('click', async () => {
    console.log('start');
    let v1 = document.querySelector('input[name="input1"]').value;
    let v2 = document.querySelector('input[name="input2"]').value;
    console.log(v1,v2);
    if (v1>=1 && v1<=10 && v2>=1 && v2<=10) {
        const requestResult = await useRequest(v1 , v2);
        resultNode.innerHTML = `${requestResult}`;
    }
    else if(v1<1 || v1>10){
        resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    }
    else if(v2<1 || v2>10){
        resultNode.innerHTML = 'Лимит вне диапазона от 1 до 10';
    }
    else{
        resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
    }
});


