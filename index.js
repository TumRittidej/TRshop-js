const register = document.getElementById('register')
// const closeMenu = document.getElementById('closemenu')

function toggleMenu() {
    register.style.right = '0'
}
function closeMenu() {
    register.style.right = '-1000px'
}

let apiUrl = 'https://fakestoreapi.com/products/'
const productGrid = document.getElementById('product-grid')

function getFakeStore() {
    axios.get(apiUrl)
    .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
            productGrid.innerHTML += `
            <a href="/product.html?id=${res.data[i].id}" target="_blank" class="product-item" id="product-item">
                <div id="img" class="img"><img src="${res.data[i].image}"></div>
                <div class="title" id="title"><h5>${res.data[i].title}<h5>
                <span id="price"><h4>${res.data[i].price}$</h4></span></div>
            </a>
            `
        }
    })
}

function numbIncart() {
    const productArr = JSON.parse(localStorage.getItem('productList'));
    if (productArr) {
        const productIncart = document.getElementById('productincart')
        productIncart.innerText = `${productArr.length}`
    } 
}  
numbIncart()
getFakeStore()
