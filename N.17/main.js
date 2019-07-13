document.addEventListener("DOMContentLoaded", function() {

    let yourStr = prompt('Введите строку: ');


    console.time('time2');
    const vowelsSumFilter = (str) => str.split('').filter(c => 'аоиеёэыуюя'.includes(c)).length;
    console.timeEnd('time2');


    vowelsSumFilter(yourStr);
    console.log('Количество гласных -', vowelsSumFilter(yourStr))
});