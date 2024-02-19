// -------------修改right_box导航栏下方红线样式-----------------

const items = document.querySelectorAll('.navbar li')
function setActive() {
    items.forEach((item) => {
        item.classList.remove('active')
    })
    this.classList.add('active')
    current_tag.innerText = this.innerText
}
items.forEach((item) => {
    item.addEventListener('click', setActive)
})

// ----------------旋转木马轮播图效果--------------------
const bannerbox = document.getElementById('bannerbox')
const prebtn = document.getElementById('prebtn')
const nextbtn = document.getElementById('nextbtn')
const imgbox = document.getElementById('lunbotu')
const dotbox = document.getElementById('dotbox')
const dots = dotbox.children
const imgs = imgbox.children
let classArr = ['img_left', 'img_center', 'img_right']
let imgNum = 10
let curIndex = 0 //默认顺序是第一张，0
let timer = null //定时器
let onOff = true //控制当前是否可以点击按钮 避免切换太快造成bug

// 自动定时器
// 自动下一张
timer = setInterval(nextImg, 3000)

//鼠标悬停图片层显示左右按钮
bannerbox.onmouseover = function () {
    // block 和none是字符形式哈
    prebtn.style.display = 'block'
    nextbtn.style.display = 'block'
    clearInterval(timer)
}
//鼠标离开图片层隐藏左右按钮
bannerbox.onmouseout = function () {
    prebtn.style.display = 'none'
    nextbtn.style.display = 'none'
    timer = setInterval(nextImg, 3000)
}

// next按钮点击
nextbtn.onclick = function () {
    if (onOff) {
        onOff = !onOff
        nextImg()

        setTimeout(() => {
            onOff = true
        }, 500);
    }

}

prebtn.onclick = function () {
    if (onOff) {
        onOff = !onOff
        if (curIndex > 0) {
            curIndex--
        } else {
            curIndex = imgNum - 1 //还原初始值
        }
        changeBanner(curIndex, 'pre')
        setTimeout(() => {
            onOff = true
        }, 500);
    }


}
// 改变banner图片与样式的方法
function changeBanner(index, direc) {
    let curLeft = (index === 0 ? imgNum - 1 : index - 1)
    let curRight = (index === imgNum - 1 ? 0 : index + 1)
    movenav(dots[index])
    if (direc === 'pre') {
        classArr.push(classArr.shift())
    } else {
        classArr.unshift(classArr.pop())
    }
    for (let i = 0; i < classArr.length; i++) {
        imgs[i].className = classArr[i]
        if (classArr[i] === 'img_left') {
            imgs[i].children[0].src = 'image/lunbo/' + (curLeft + 1) + '.jpg'
        } else if (classArr[i] === 'img_center') {
            imgs[i].children[0].src = 'image/lunbo/' + (index + 1) + '.jpg'
        } else {
            imgs[i].children[0].src = 'image/lunbo/' + (curRight + 1) + '.jpg'
        }
    }
}


// 切换函数
function nextImg() {
    if (curIndex < imgNum - 1) {
        curIndex++
    } else {
        curIndex = 0 //还原初始值
    }
    changeBanner(curIndex, 'next')

}

//修改圆点样式函数
function movenav(obj) { //修改圆点样式
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = ''  //清除所有圆点样式
    }
    obj.className = 'select_dot'
}

let currentIndex = 0;
const slides = document.querySelectorAll('.lunbotu li');

// 点击下一个按钮
document.getElementById('nextbtn').addEventListener('click', function() {
  goToSlide(currentIndex + 1);
});

// 点击上一个按钮
document.getElementById('prebtn').addEventListener('click', function() {
  goToSlide(currentIndex - 1);
});

// 切换到特定索引的轮播项
function goToSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  // 隐藏所有轮播项
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  // 显示特定索引的轮播项
  slides[index].style.display = 'block';

  currentIndex = index;
}