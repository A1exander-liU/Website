let total_pages = 0
let page_num = 1
let page_size = 3
let movie_name = $('#movie_title').val() //global variable for movie_name
let movie_data; // array to hold the movies

function get_current_page(){
    page_num = $(this).val()
    console.log(page_num)
    get_request()
}

function get_first_prev_next_last(){
    if ($(this).attr('id') == "first"){
        page_num = 1
        get_request()
    } else if ($(this).attr('id') == "prev"){
        page_num -= 1
        if (page_num < 1) {
            page_num = 1
        }
        get_request()
    } else if ($(this).attr('id') == "next"){
        page_num += 1
        if (page_num > total_pages){
            page_num = total_pages
        }
        get_request()
    }
    else if ($(this).attr('id') == "last"){
        page_num = total_pages
        get_request()
    }
}

function display_buttons(total_pages){
    pagination = 1
    $('#page span').remove() // so the buttons don't keep stacking
    first_prev = "<button id='first'>" + "First" + "</button>" + "<button id='prev'>" + "Prev" + "</button>"
    next_last = "<button id='next'>" + "Next" + "</button>" + "<button id='last'>" + "Last" + "</button>"
    $('#page_buttons').html(first_prev + "<span id='page'>" + "</span>" + next_last)
    for(pagination; pagination<total_pages + 1; pagination++){
        button = "<button class='pages' value='" + pagination + "'>" + pagination + "</button>"
        old = $('#page').html()
        $('#page').html(old + "<span class='page_button'>" + button + "</span>")
    }
}

function get_page_size(){
    page_size = $('#page_size option:selected').val()
    page_size = parseInt(page_size)
    console.log(page_size)
    // console.log(page_size_num)
}

function display_backdrop(){
    // console.log("backdrop function called")
    backdrop_path = $(this).attr('id')
    console.log(backdrop_path)
    console.log(`<img src="https://image.tmdb.org/t/p/original${backdrop_path}">`);
    if (backdrop_path != null){
        $('#right-col').html(`<img src="https://image.tmdb.org/t/p/original${backdrop_path}" width='100%'>`)
    }
    else {
        $('#right-col').text("No Available Backdrop Image For This Movie")
    }
}

function display_movies(data){ 
    // console.log("called or not");
    movie = data.results
    total_pages = Math.ceil(movie.length / page_size)
    display_buttons(total_pages)
    console.log(page_num)
    console.log(page_size)
    start_index = page_size * (page_num - 1) 
    stop_index = page_size * (page_num - 1) + page_size
    // console.log(start_index)
    // console.log(stop_index)
    $('#display_movies >*').remove()
    for(start_index; start_index<stop_index; start_index++){
        image = movie[start_index].poster_path
        display_image = `https://image.tmdb.org/t/p/w500${image}?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909`
        old = jQuery('#display_movies').html()
        jQuery('#display_movies').html(old + "<p>#" + (start_index + 1) + "</p>" + "<p>Title: " + movie[start_index].original_title + "</p>" + "<p>Description: " + movie[start_index].overview + "</p>" + `<img src=${display_image} height="100">` + "</br>" + `<button id="${movie[start_index].backdrop_path}" class="show_backdrop"> Show Backdrop</button>` + "<hr>")
    }
}

function get_request(){
    console.log("sending request...")
    movie_name = $('#movie_title').val()
    $.ajax(
        { 
            "url": `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&query=${movie_name}`,
            "type": "GET",
            "success": display_movies
        }
    )
}

function setup(){
    console.log("ready")
    $('#get_movie').click(get_request);
    $('body').on('click', '.show_backdrop', display_backdrop) 
    $('#page_size').change(get_page_size)
    $('body').on('click', '.pages', get_current_page)
    $('body').on('click', 'button', get_first_prev_next_last)
}

$(document).ready(setup)