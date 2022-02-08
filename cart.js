const register = document.getElementById('register')

function toggleMenu() {
    register.style.right = '0'
}
function closeMenu() {
    register.style.right = '-1000px'
}

function hideEmpty() {
    const showEmpty = document.getElementById('showempty')
    showEmpty.style.display = "none"
}

function getproductDetail() {
    const productArr = JSON.parse(localStorage.getItem('productList'));
    const carteditBox = document.getElementById('cartedit-box')

    carteditBox.innerHTML = ''
    
    for (let i = 0; i < productArr.length; i++) {
        const totalPriceDeci = productArr[i].price*productArr[i].piece
        const totalPrice = totalPriceDeci.toFixed(2)
        // console.log(totalPrice)
        carteditBox.innerHTML += `
        <div class="cartedit-item" id="cartedit-item">
            <div id="cartedit-deletebtn" onclick="carteditDeleteBtn(${i})"><i class="fas fa-times-circle"></i></div>
            <div class="cartedit-img" id="cartedit-img">
                <h3>Product</h3>
                <img src="${productArr[i].image}" alt="">
            </div>
            <div class="cartedit-title" id="cartedit-title">
                <p>${productArr[i].title}</p>
            </div>
            <div class="cartedit-price" id="cartedit-price">
                <h3>Price/Piece</h3>
                <p>${productArr[i].price}$</p>
            </div>
            <div class="cartedit-piece" id="cartedit-piece">
                <h3>Piece</h3>
                <input type="number" id="pieceinput${i}" onchange="updatePiece(${i})" value="${productArr[i].piece}" min="1">
            </div>
            <div class="cartedit-total" id="cartedit-total">
                <h3>Total Piece</h3>
                <span>${totalPrice}$</span>
            </div>
        </div>
        `
    }
    hideEmpty() 
}

function updatePiece(index) {
    const pieceInput = document.getElementById(`pieceinput${index}`)
    const productArr = JSON.parse(localStorage.getItem('productList'))
    productArr[index].piece = pieceInput.value
    localStorage.setItem('productList', JSON.stringify(productArr))
    getproductDetail()
    totalOrderPrice()
}

function carteditDeleteBtn(index) {
    const productArr = JSON.parse(localStorage.getItem('productList'));
    productArr.splice(index, 1)
    localStorage.setItem('productList', JSON.stringify(productArr))
    getproductDetail()
    totalOrderPrice()
}

function numbIncart() {
    const productArr = JSON.parse(localStorage.getItem('productList'));
    if (productArr) {
        const productIncart = document.getElementById('productincart')
        productIncart.innerText = `${productArr.length}`
    }
}

function totalOrderPrice() {
    const totalOrder = document.getElementById('totalorderprice');
    const productArr = JSON.parse(localStorage.getItem('productList'))
    
    const total = productArr.reduce((prev ,current) => {
        return Number(prev) + (Number(current.price)*current.piece)
    },0)
    totalOrder.innerText = `${total.toFixed(2)}`
}

function clearProductList() {
    const totalOrder = document.getElementById('totalorderprice');
    localStorage.removeItem('productList')
    totalOrder.innerText = `0.00`
    getproductDetail()
}

totalOrderPrice()
getproductDetail()
numbIncart()



