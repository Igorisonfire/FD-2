document.addEventListener("DOMContentLoaded", function() {

    let yourStr = prompt('Введите строку: ');

    console.time('time1');
    const vowelsSumFilter = (str) => str.split('').filter(item => 'аоиеёэыуюя'.includes(item)).length;
    console.timeEnd('time1');

    console.time('time2');
    const vowelsSumForEach = (str) => {
        let counter = 0;
        str.split('').forEach((itemText) => {
            let vowelsArray = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];

            vowelsArray.forEach((itemVowels) =>{
                if (itemText === itemVowels){
                    counter++
                }
            });
        });
        return counter
    };
    console.timeEnd('time2');


    vowelsSumFilter(yourStr);
    console.log('Количество гласных -', vowelsSumFilter(yourStr));

    vowelsSumForEach(yourStr);
    console.log('Количество гласных -', vowelsSumForEach(yourStr));
});