const numberList = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// console.log(numberList);
// for (let i = 0; i < numberList.length; i++) {
//     console.log(numberList[i]);
    
// }
// console.log("1");

// Hàm ES6: map(), filter(), find() bản chất là vòng lặp

// - Hàm map: Duyệt qua mảng đã chọn, có thể thay đổi giá trị của phần tử, sau đó trả về 1 mảng mới

// Cú pháp: tên_mảng.map()

let newNumberList = numberList.map(function (number) {
    console.log(number);
    return number + 3;
})

console.log(newNumberList);

let filterNumberList = numberList.filter(function (number) {
    return number < 10
} )

console.log(filterNumberList);


