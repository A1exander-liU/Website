function display_backdrop(){
    console.log("backdrop function called")
    backdrop_path = $(this).attr('id')
    console.log(`<img src="https://image.tmdb.org/t/p/original${backdrop_path}" width="100"%>`);
    if (backdrop_path != `orginalnull`){
        $('#right-col').html(`<img src="https://image.tmdb.org/t/p/original${backdrop_path}">`)
    }
    else {
        $('#right-col').html("No Available Backdrop Image For This Movie")
    }
}

function grab_movie_info(data){
    console.log("called or not");
    for(i=0; i<data.results.length; i++){
        image = data.results[i].poster_path
        display_image = `https://image.tmdb.org/t/p/w500${image}?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909`
        old = jQuery('#display_movies').html()
        jQuery('#display_movies').html(old + "<li>" + "<p>Title: " + data.results[i].original_title + "</p>" + "<p>Description: " + data.results[i].overview + "</p>" + "<p>" + `<img src=${display_image}` + "</p>" + `<button id="${data.results[i].backdrop_path}" class="show_backdrop"> Show Backdrop</button>` + "</li>" + "<hr>")
    }
    console.log(backdrops)
}


function get_request(){
    console.log("sending request...")
    movie_title = $('#movie_title').val();
    $.ajax(
        {
            "url": `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&query=${movie_title}`,
            "type": "GET",
            "success": grab_movie_info
        }
    )

}

function setup(){
    console.log("ready")
    $('#get_movie').click(get_request);
    $('body').on('click', '.show_backdrop', display_backdrop)
}

$(document).ready(setup)