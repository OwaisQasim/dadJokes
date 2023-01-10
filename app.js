const jokeElement = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()

function generateJoke() {
    const config = {
        headers: {
            Accept: 'Application/json',
        },
    }

    fetch('https://icanhazdadjoke.com', config)
        .then((response) => response.json())
        .then((data) => {
            jokeElement.innerHTML = data.joke
        })
}

jokeBtn.addEventListener('click', generateJoke)