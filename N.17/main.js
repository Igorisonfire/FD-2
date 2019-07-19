document.addEventListener("DOMContentLoaded", function() {

    let yourStr = prompt('Введите строку: ');

    //----------------------------------------

    console.time('time1');
    const vowelsSumForEach = (str) => {
        let counter = 0;
        str.split('').forEach((itemText) => {
            let vowelsArray = 'аоиеёэыуюяАОИЕЁЭЫУЮЯ'.split('');

            if (vowelsArray.indexOf(itemText) !== -1) {
                counter++;
            }
        });
        return counter;
    };
    console.timeEnd('time1');

    //----------------------------------------

    console.time('time2');
    const vowelsSumFilter = (str) => str.split('').filter(item => 'аоиеёэыуюяАОИЕЁЭЫУЮЯ'.includes(item)).length;
    console.timeEnd('time2');

    //----------------------------------------

    console.time('time3');
    const vowelsSumReduce = (str) => str.split('').reduce((sum, itemText) => {
            let vowelsArray = 'аоиеёэыуюяАОИЕЁЭЫУЮЯ'.split('');
            if (vowelsArray.indexOf(itemText) !== -1) {
                return  sum + itemText
            } else {
                return sum
            }
        }, '').length;
    console.timeEnd('time3');

    //----------------------------------------


    vowelsSumForEach(yourStr);
    console.log('Количество гласных -', vowelsSumForEach(yourStr));

    vowelsSumFilter(yourStr);
    console.log('Количество гласных -', vowelsSumFilter(yourStr));

    vowelsSumReduce(yourStr);
    console.log('Количество гласных -', vowelsSumReduce(yourStr));
});