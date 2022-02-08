const register = document.getElementById('register')

function toggleMenu() {
    register.style.right = '0'
}
function closeMenu() {
    register.style.right = '-1000px'
}

const queryString = window.location.search;
let numb = queryString.match(/\d/g);
numb = numb.join('')
// console.log(numb)

let apiUrl = `https://fakestoreapi.com/products/${numb}`
const productImg = document.getElementById('product-img')
const title = document.getElementById('title')
const description = document.getElementById('description')
const price = document.getElementById('price')

const idProduct = document.getElementById('idproduct')

function getFakeStore() {
    axios.get(apiUrl)
    .then((res) => {
            productImg.innerHTML = `<img src="${res.data.image}" alt="" id="dataimage">`
            title.innerHTML = `<h1 id="datatitle">${res.data.title}</h1>`
            description.innerHTML = `<h1><h3>Description</h3><p>${res.data.description}</p></h1>`
            price.innerHTML = `<h3>Price :</h3><span id="dataprice">${res.data.price}</span><h3>$</h3>`
            idProduct.innerHTML = `<p id="dataid">${res.data.id}</p>`
    })
}
getFakeStore()

function addtoCart() {
    let dataPiece = document.getElementById('datapiece').value
    let dataImage = document.getElementById('dataimage').src
    let dataTitle = document.getElementById('datatitle').textContent
    let dataPrice = document.getElementById('dataprice').textContent
    let dataID = document.getElementById('dataid').textContent
    // console.log(dataID)

    const productDetail = {
        id:dataID,
        image:dataImage,
        title:dataTitle,
        price:dataPrice,
        piece:dataPiece
    }
    // console.log(productDetail.id)
    
    if (localStorage.getItem('productList') === null) {
        const productArr = []
        productArr.push(productDetail)
        localStorage.setItem('productList', JSON.stringify(productArr))
    } else {
        const productArr = JSON.parse(localStorage.getItem('productList'));
        const sameProductIndex = productArr.findIndex((product) => {
            return product.id === productDetail.id
        })
        if (sameProductIndex === -1) {
            productArr.push(productDetail)
            localStorage.setItem('productList', JSON.stringify(productArr))
        } else {
            productArr[sameProductIndex].piece = Number(productDetail.piece) + Number(productArr[sameProductIndex].piece)
            localStorage.setItem('productList', JSON.stringify(productArr))
        }
    } 
    numbIncart()
}

function numbIncart() {
    const productArr = JSON.parse(localStorage.getItem('productList'));
    if (productArr) {
        const productIncart = document.getElementById('productincart')
        productIncart.innerText = `${productArr.length}`
    }
}
numbIncart()
