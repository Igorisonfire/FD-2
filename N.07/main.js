document.addEventListener("DOMContentLoaded", function() {

    let yourStr = prompt('Введите строку: ');

    console.time("time");
    function vowelsSum1(str) {
        let vowelsArray = 'аоиеёэыуюяАОИЕЁЭЫУЮЯ'.split('');
        let strToArray = str.split('');
        let counter = 0;

        for(let i = 0; i < strToArray.length; i++){
            if(vowelsArray.indexOf(strToArray[i]) !== -1){
                counter++
            }
        }
        return counter
    }
    console.timeEnd('time');


    console.time('time2');
    const vowelsSum2 = (str) => str.split('').filter(c => 'аоиеёэыуюяАОИЕЁЭЫУЮЯ'.includes(c)).length;
    console.timeEnd('time2');


    vowelsSum1(yourStr);
    vowelsSum2(yourStr);
    console.log('Количество гласных -', vowelsSum1(yourStr))
});