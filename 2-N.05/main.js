document.addEventListener("DOMContentLoaded", function() {

    let testArray = [5, 7,
        [4, [2], 8, [1,3], 2],
        [9, []],
        1, 8
    ];

    // function treeSum(yourArray) {
    //     let newArray = yourArray.join(',').split(',');
    //
    //     console.log(newArray)
    //
    //     let sumArr = 0;
    //
    //     for(let i = 0; i < newArray.length; i++){
    //         sumArr += Number(newArray[i]);
    //     }
    //     return sumArr
    // }

    function treeSum(yourArray) {
        let sumArr = 0;

        for(let i = 0; i < yourArray.length; i++){
            if(Array.isArray(yourArray[i])){
                sumArr += treeSum(yourArray[i])
            }
            else {
                sumArr += yourArray[i]
            }
        }
        return sumArr
    }


    // счетчик монет
    function newTestFunc(num, isItRecursion) {
        let count = 0
        let optionsArr = []
        const coinsArr = [11, 9, 7, 5, 1]

        for (let i = 0; i < coinsArr.length; i++){
            if (num === 0) {
                break
            } else if (coinsArr[i] > num) {
                continue
            } else if (isItRecursion) {
                count = Math.floor(num / coinsArr[i]) + newTestFunc(num % coinsArr[i], true).count
                break
            } else {
                count = Math.floor(num / coinsArr[i]) + newTestFunc(num % coinsArr[i], true).count
            }

            optionsArr.push(count)
        }



        return {count, optionsArr}
    }

    function finalFunc(num) {
        return Math.min(...newTestFunc(num).optionsArr)
    }



    console.log('final = ', finalFunc(16))
});


