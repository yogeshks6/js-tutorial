const baseUrl = "https://dummyjson.com";
const endUrl = "/products/2";

async function hello() {
    try {
        const ghh = await fetch(baseUrl + endUrl)
        const data = await ghh.json();
        document.getElementById("id").innerHTML = data['id']
        document.getElementById("title").innerHTML = data['title']
        document.getElementById("description").innerHTML = data['description']
        document.getElementById('price').innerHTML = data['Price']
        document.getElementById('discountPercentage').innerHTML = data['discountPercentage']
        document.getElementById('rating').innerHTML = data['rating']
        document.getElementById('stock').innerHTML = data['stock']
        document.getElementById('brand').innerHTML = data['brand']
        document.getElementById('category').innerHTML = data['category']
        document.getElementById("price").innerHTML = data['price']
        document.getElementById("image1").src = data['images'][0]
        document.getElementById("image2").src = data['images'][1]
        document.getElementById("image3").src = data['images'][2]
        document.getElementById("image4").src = data['images'][3]

    }
    catch (err) {
        document.getElementById('demo').innerHTML = err;
    }
}

function bello() {
    fetch(baseUrl + endUrl).then((res) => {
        res.json().then((response) => {
            document.getElementById('id').innerHTML = response['id']
            document.getElementById('title').innerHTML = response['title']
            document.getElementById('description').innerHTML = response['description']
            document.getElementById('price').innerHTML = response['price']
            document.getElementById('discountPercentage').innerHTML = response['discountPercentage']
            document.getElementById('rating').innerHTML = response['rating']
            document.getElementById('stock').innerHTML = response['stock']
            document.getElementById('brand').innerHTML = response['brand']
            document.getElementById('category').innerHTML = response['category']
        

            document.getElementById("image1").src = response['images'][0]
            document.getElementById("image2").src = response['images'][1]
            document.getElementById("image3").src = response['images'][2]
            document.getElementById("image4").src = response['images'][3]
        });

    }).catch((err) => {
        document.getElementById('demo2').innerHTML = err;
    })
}

