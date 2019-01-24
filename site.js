function favMovie() {
    let movie = prompt('What is your favorite movie?');
    alert(`Your favorite movie is: ${movie}`);
}

function insertText() {
    let elem = document.getElementById('txt');
    document.getElementById('writeHere').innerHTML = " " + elem.value;
}



function insertMovie() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.onload = function() {
        let data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
            data.forEach(movie => {
                const title = document.getElementById('listOfMovies');
                const container = document.createElement('h4');
                title.appendChild(container);
                container.innerHTML = movie.title;
            });

        } else {
            document.getElementById('listOfMovies').innerHTML = 'Something went wrong';
        }

    }
}

function whatMovie() {
    let radio = document.forms[1];
    let request = new XMLHttpRequest();
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            let movieId = radio[i].value;
            request.open('GET', 'https://ghibliapi.herokuapp.com/films/' + movieId, true);
            request.setRequestHeader("Content-type", "application/json");
            request.send();
            request.onload = function () {
                let data = JSON.parse(this.response);
                document.getElementById('displayDetails').innerHTML = data.description;
            }
        }
    }
}

function omdbRequest() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://www.omdbapi.com/?t=the+godfather&apikey=49399b24', true);
    request.send();
    request.onload = function () {
        let data = JSON.parse(this.response);
        document.getElementById('image').innerHTML = '<img src="' + data.Poster + '">';
        document.getElementById('displayOmdbTitle').innerHTML = "Title: " + data.Title;
        document.getElementById('displayOmdbDirector').innerHTML = 'Director: ' + data.Director;
        document.getElementById('displayOmdbWriter').innerHTML = 'Writers: ' +  data.Writer;
        document.getElementById('displayOmdbActor').innerHTML = 'Actors: ' + data.Actor;
        document.getElementById('displayOmdbPlot').innerHTML = 'Plot: ' + data.Plot;
    }
}

function searchTitle() {
    let search = document.getElementById('searchtxt');
    let request = new XMLHttpRequest();
    request.open('GET', `http://www.omdbapi.com/?t=${search.value}&apikey=49399b24`, true);
    request.send();
    request.onload = function () {
        let data = JSON.parse(this.response);
        document.getElementById('image').innerHTML = '<img src="' + data.Poster + '">';
        document.getElementById('displayOmdbTitle').innerHTML = "Title: " + data.Title;
        document.getElementById('displayOmdbDirector').innerHTML = 'Director: ' + data.Director;
        document.getElementById('displayOmdbWriter').innerHTML = 'Writers: ' +  data.Writer;
        document.getElementById('displayOmdbActor').innerHTML = 'Actors: ' + data.Actor;
        document.getElementById('displayOmdbPlot').innerHTML = 'Plot: ' + data.Plot;
    }
}
