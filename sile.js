const rightslide = document.querySelector('#right') /*2 cái icon khi mình click vào*/
const leftslide = document.querySelector('#left')
const img = document.querySelectorAll('.slide-content-left-top img') /*đếm số lượng hình để dịch chuyển*/
let i = 0 /*biến chạy*/
rightslide.addEventListener("click", function(){
    i = i + 1
    if(i > img.length - 1){
        i = 0
    }
    document.querySelector('.slide-content-left-top').style.right = i * 100+"%"
})
leftslide.addEventListener("click", function(){
    i = i - 1
    if(i <=0){
        i = img.length-1
    }
    document.querySelector('.slide-content-left-top').style.right = i * 100+"%"
})
