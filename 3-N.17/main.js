document.addEventListener("DOMContentLoaded", function() {

    let yourStr = prompt('Введите строку: ');

    //----------------------------------------

    const vowelsSumForEach = (str) => {
        let counter = 0;
        str.split('').forEach((itemText) => {
            let vowelsArray = 'аоиеёэыуюяАОИЕЁЭЫУЮЯ';

            if (vowelsArray.indexOf(itemText) !== -1) {
                counter++;
            }
        });
        return counter;
    };

    //----------------------------------------

    const vowelsSumFilter = (str) => str.split('').filter(item => 'аоиеёэыуюяАОИЕЁЭЫУЮЯ'.includes(item)).length;

    //----------------------------------------

    const vowelsSumReduce = (str) => str.split('').reduce((sum, itemText) => {
            let vowelsArray = 'аоиеёэыуюяАОИЕЁЭЫУЮЯ';
            if (vowelsArray.indexOf(itemText) !== -1) {
                return  sum + itemText.length
            } else {
                return sum
            }
        }, 0);

    //----------------------------------------


    console.time('time1');
    console.log('Количество гласных -', vowelsSumForEach(yourStr));
    console.timeEnd('time1');

    console.time('time2');
    console.log('Количество гласных -', vowelsSumFilter(yourStr));
    console.timeEnd('time2');

    console.time('time3');
    console.log('Количество гласных -', vowelsSumReduce(yourStr));
    console.timeEnd('time3');
});