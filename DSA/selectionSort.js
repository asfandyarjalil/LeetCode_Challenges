// function selectionSort(arr) {
//     let smallest=0;
//     for (let i = 0; i < arr.length; i++) {
//         let temp = arr[i];
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] < arr[j + 1]) {
//                 smallest = j;
//                 // let temp = arr[j];
//                 // arr[j] = arr[j + 1];
//                 // arr[j + 1] = temp;
//             } else {
//                 smallest = j + 1;
//             }
//         }

//         arr[i] = arr[smallest];
//         arr[smallest] = temp;
//     }
//     return arr;
// }

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        let temp = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

let arr = [6, 5, 3, 4, 7, 8];

let resp = selectionSort(arr);
console.log(resp);
