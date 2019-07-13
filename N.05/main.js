document.addEventListener("DOMContentLoaded", function() {

    let testArray = [5, 6,
        [4, [2], 8, [1,3], 2],
        [9, []],
        1, 8
    ];

    function treeSum(yourArray) {
        let newArray = yourArray.join(',').split(',');
        let sumArr = 0;

        for(let i = 0; i < newArray.length; i++){
            sumArr += Number(newArray[i]);
        }
        return sumArr
    }

    treeSum(testArray);

    console.log(treeSum(testArray))
});