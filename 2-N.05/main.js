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

    console.log(treeSum(testArray))
});


