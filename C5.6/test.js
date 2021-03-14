const btn = document.querySelector('.j-btn-request');
let resultNode = document.querySelector('.result');
// Функция, которая возвращаем fetch
const useRequest = (a, b) => {
    return fetch(`https://picsum.photos/${a}/${b}`)
        .then((response) => {
            console.log('response', response);
            return response.url;
        })
        .then((json) => { return json; })
        .catch(() => { console.log('error') });
}

btn.addEventListener('click', async () => {
    console.log('start');
    let v1 = document.querySelector('input[name="input1"]').value;
    let v2 = document.querySelector('input[name="input2"]').value;
    console.log(v1,v2);
    if (v1>=100 && v1<=300 && v2>=100 && v2<=300) {
        const requestResult = await useRequest(v1 , v2);
        resultNode.innerHTML = `<img src="${requestResult}" alt=""/>`;
    }
    else{
        resultNode.innerHTML = 'Введенные числа не подходят!';
    }
});


