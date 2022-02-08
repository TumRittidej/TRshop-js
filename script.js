const pleanBottom = document.querySelector('.pleanbottom-item')
const pleanSelect = document.querySelectorAll('.pleanbottom-item img')
// const pleanShow = document.getElementById('pleanshow')

const pleanShow = document.getElementById('pleanshow')
const pleanImg = document.querySelectorAll('#pleanshow img')

const leftBtn = document.getElementById('arrow-left')
const rightBtn = document.getElementById('arrow-right')

let idx = 0;
let imgWidth = pleanImg[idx].clientWidth

pleanShow.style.width = `${imgWidth}px`

function changeImage() {
    if (idx > pleanImg.length-1) {
        idx = 0;
    } else if (idx < 0) {
        idx = pleanImg.length-1
    }

    let widthCon = 0;
    for (let i = 0; i < pleanImg.length; i++) {
        if (i < idx) {
            widthCon += pleanImg[i].clientWidth
        }
    }

    pleanShow.style.transform = `translateX(${-widthCon}px)`
        // console.log(`translateX(${-widthCon}px`)

    imgWidth = pleanImg[idx].clientWidth
    // console.log(pleanImg[idx].clientWidth)
    pleanShow.style.width = `${imgWidth}px`
    // console.log(imgWidth)
}

leftBtn.addEventListener('click', () => {
    idx--;
    changeImage();
    // console.log(idx)
});

rightBtn.addEventListener('click', () => {
    idx++;
    changeImage();
    // console.log(idx)
})

for (let i = 0; i < pleanSelect.length; i++) {
    pleanSelect[i].addEventListener('click', () => {

        for (let i = 0; i < pleanSelect.length; i++) {
            if (pleanSelect[i].classList.contains('active')) {
                pleanSelect[i].classList.remove('active')
            }
        }
        if (pleanSelect[i].classList.contains('active') === false) {
            pleanSelect[i].classList.add('active')
        } 
        
        // console.log(i)
        let widthCon = 0;
        for (let j = 0; j < pleanImg.length; j++) {
            // console.log(j)
            if (j < i) {
                // console.log(j)
                widthCon += pleanImg[j].clientWidth
                // console.log(widthCon)
            }
        }
        pleanShow.style.transform = `translateX(${-widthCon}px)`
        // console.log(`translateX(${-widthCon}px)`)

        imgWidth = pleanImg[i].clientWidth
        pleanShow.style.width = `${imgWidth}px`
    })
}

