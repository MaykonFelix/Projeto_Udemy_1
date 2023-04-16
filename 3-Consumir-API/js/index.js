const persons = document.getElementById('persons');
const starships = document.getElementById('starships');
const planets = document.getElementById('planets');

fillCounters();

function fillCounters() {
    Promise.all([
        getData('people/'),
        getData('starships/'),
        getData('planets/'),
    ])
        .then(data => {
            persons.style.fontSize = "5rem";
            starships.style.fontSize = "5rem";
            planets.style.fontSize = "5rem";

            persons.innerHTML = data[0].count;
            starships.innerHTML = data[1].count;
            planets.innerHTML = data[2].count;
        })
        .catch(err => console.log('Erro: ', err))
}

function getData(param) {
    return fetch(`https://swapi.dev/api/${param}`)
        .then(res => res.json())
}

function loadPhrases() {
    const btn = document.getElementById('btn-phrases');
    const phrases = document.getElementById('phrases');

    return fetch('https://api.breakingbadquotes.xyz/v1/quotes/5')
        .then(data => data.json())
        .then(json => {
            console.log(json)
            btn.innerHTML = "Ver mais uma frase!";
            phrases.innerHTML = `"${json[0].quote}"`;

            phrases.animate([
                { transform: 'translateY(-70px)' },
                { transform: 'translateY(0px)' }
            ], {
                duration: 500
            })
        })
        .catch(err => console.log('Erro ', err))
}