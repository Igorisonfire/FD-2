document.addEventListener("DOMContentLoaded", function() {

    let yourStr = prompt('Введите строку: ');

    console.time("time");
    function vowelsSum1(str) {
        let vowelsArray = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
        let strToArray = str.split('');
        let counter = 0;

        for(let i = 0; i < vowelsArray.length; i++){
            for(let n = 0; n < strToArray.length; n++){
                if (strToArray[n] === vowelsArray[i]){
                    counter++
                }
            }
        }
        return counter
    }
    console.timeEnd('time');


    console.time('time2');
    const vowelsSum2 = (str) => str.split('').filter(c => 'аоиеёэыуюя'.includes(c)).length;
    console.timeEnd('time2');



    vowelsSum1(yourStr);
    vowelsSum2(yourStr);
    console.log('Количество гласных -', vowelsSum1(yourStr))
});