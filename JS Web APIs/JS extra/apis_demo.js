const baseUrl = 'https://jsonplaceholder.typicode.com';
const endPoint = '/todos/1'


async function hello() {
    try {
        const abc = await fetch(baseUrl + endPoint)
        console.log(await abc.json());
    }
    catch (elfdhigls) {
        console.log(elfdhigls)
    }

}

function bello() {
    fetch(baseUrl + endPoint).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })


}

