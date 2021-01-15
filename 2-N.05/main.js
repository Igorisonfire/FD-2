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



    // площать перекрытия прямоугольников

    function getRect(coordinates) {
        let x1, x2, y1, y2
        let xArray = []
        let yArray = []

        coordinates.forEach((item, i) => {
            if (i % 2 === 0) {
                xArray.push(item)
            } else {
                yArray.push(item)
            }
        })

        x1 = Math.min(...xArray)
        x2 = Math.max(...xArray)
        y1 = Math.min(...yArray)
        y2 = Math.max(...yArray)

        return {x1, x2, y1, y2}
    }

    function ArrayChallenge(strArr) {
        let numbersArr = []

        strArr[0].replace(/[\(\)]/g,'').split(",").forEach((item) => {
            if(Number.isInteger(Number(item))) {
                numbersArr.push(Number(item))
            }
        })

        const firstRectCoordinates = numbersArr.slice(0,8)
        const secondRectCoordinates = numbersArr.slice(8,17)

        const firsRect = getRect(firstRectCoordinates)
        const secondRect = getRect(secondRectCoordinates)

        const left = Math.max(firsRect.x1, secondRect.x1);
        const top = Math.min(firsRect.y2, secondRect.y2);
        const right = Math.min(firsRect.x2, secondRect.x2);
        const bottom = Math.max(firsRect.y1, secondRect.y1);

        const width = right - left;
        const height = top - bottom;

        const overlapArea = width * height

        const firsRectArea = (firsRect.x2 - firsRect.x1) * (firsRect.y2 - firsRect.y1)

        if (width === 0 || height === 0) {
            return 0
        } else return Math.floor(firsRectArea / overlapArea)
    }



    console.log('final = ', ArrayChallenge(["(0,0),(5,0),(0,2),(5,2),(2,1),(5,1),(2,-1),(5,-1)"]))
});


