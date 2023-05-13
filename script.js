//Page Reload//

window.onload = function() {
    window.scrollTo(0,0);
}

//Video Stop//

const video1 = document.querySelector('#myVideo');
const observer1 = new IntersectionObserver(onIntersection, { threshold: 0.5 });

observer1.observe(video1);

const video2 = document.querySelector('#myVideo1');
const observer2 = new IntersectionObserver(onIntersection, { threshold: 0.5 });

observer2.observe(video2);

function onIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.play();
    } else {
      entry.target.pause();
    }
  });
}



//Navbar Search//


document.addEventListener("keyup", event => {
  if (event.target.matches("#buscador")) {
    if (event.key === "Escape") {
      event.target.value = "";
    }
    document.querySelectorAll(".article").forEach(movie => {
      if (event.target.value === "") {
        movie.classList.add("filter");
      } else if (movie.textContent.toLowerCase().includes(event.target.value.toLowerCase())) {
        movie.classList.remove("filter");
      } else {
        movie.classList.add("filter");
      }
    });
  }
});

//DropDown//

const dropdownMenuList = [].slice.call(document.querySelectorAll('.dropdown-menu'));
dropdownMenuList.map(function (dropdownMenu) {
  return new bootstrap.Dropdown(dropdownMenu);
});




$(document).ready(function() {
  var apiKey = 'ab4ba330a9cc47ecb02acfe2f95eda4e';
  var popularUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey;

  $.ajax({
    url: popularUrl,
    method: 'GET',
    dataType: 'json',
    success: function(popularResponse) {
      // Obtenemos las películas populares
      var peliculas = popularResponse.results;
      var peliculasHtml = '';

      peliculas.forEach(function(pelicula) {
        var peliculaHtml = '<div class="pelicula">';
        peliculaHtml += '<img src="https://image.tmdb.org/t/p/w500' + pelicula.poster_path + '">';

        // Agregamos información de la película al pasar el mouse por encima
        peliculaHtml += '<div class="info-pelicula">';
        peliculaHtml += '<h3>' + pelicula.original_title + '</h3>';
        peliculaHtml += '<p>' + pelicula.overview + '</p>';
        peliculaHtml += '<p>Estrellas: ' + pelicula.vote_average + '</p>';
        peliculaHtml += '<p>Duración: ' + pelicula.runtime + ' minutos</p>';
        peliculaHtml += '</div>';

        peliculaHtml += '</div>';

        peliculasHtml += peliculaHtml;
      });

      $('#peliculas').html(peliculasHtml);

      // Mostramos información de la película al pasar el mouse por encima
      $('.pelicula').mouseenter(function() {
        $(this).find('.info-pelicula').fadeIn();
      }).mouseleave(function() {
        $(this).find('.info-pelicula').fadeOut();
      });
    }
  });
});
























