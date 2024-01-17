// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует
// fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который
// разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть
// отклонен с соответствующим сообщением об ошибке.

function getUserData(id) {
    fetch(`https://reqres.in/api/users/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json.data)
    })
    .catch(err => {
        console.log(err)
    })
}

getUserData(2)


// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует 
// fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, 
// если данные успешно отправлены, или отклоняется в случае ошибки.

const user = {
    "name": "John Doe",
    "job": "unknown"
}

function saveUserData(user) {
    fetch(`https://reqres.in/api/${user}`)
    .then(() => {
        console.log('data saved')
    })
    .catch(err => {
        console.log(err)
    })
}

saveUserData(user)


// Напишите функцию changeStyleDelayed, которая принимает id элемента и время задержки (в миллисекундах) в качестве аргументов.
// Функция должна изменить стиль (любой, например - цвет текста) элемента через указанное время.

function changeStyleDelayed(id, delay) {
    setTimeout(() => {
        const element = document.getElementById(id)
        element.style.color = 'red'
    }, delay)
}

changeStyleDelayed('header', 2000)