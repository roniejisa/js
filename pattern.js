var a = /^[^\s]+(\s+[^\s]+)*$/
// Kiểm tra đầu hoặc cuối có khoảng trắng không

var b =/^[0-9]\d*$/
// Kiểm tra là số phải lớn hơn 0

var c = /^(0[0-9]{9})$/
// Kiểm tra 10 kí có số 0 bắt đầu | Số điện thoại

//Tìm name tháng của Date 
const date = new Date(2009, 10, 10);  // 2009-11-10
const month = date.toLocaleString('default', { month: 'long' });
console.log(month);
