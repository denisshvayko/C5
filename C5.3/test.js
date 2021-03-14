function getData(){
    const value = document.querySelector('input').value;
    console.log(value);
    if (value>10 || value<1){
        resultNode.innerHTML = "число вне диапазона от 1 до 10";
    }
    else{
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if (xhr.status != 200){
                console.log('Статус ответа: ', xhr.status)
            }
            else {
                const result = JSON.parse(xhr.response);
                console.log(result);
                let cards = '';
                result.forEach(item => {
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
                resultNode.innerHTML = cards;
            }
        }

        xhr.onerror = function() {
            console.log('Ошибка запроса');
        };
        xhr.open("get", `https://picsum.photos/v2/list?limit=${value}`, true);
        xhr.send();

    }
}

const resultNode = document.querySelector('.result');
const btnStart = document.querySelector('.btn-start');
btnStart.addEventListener('click', getData);