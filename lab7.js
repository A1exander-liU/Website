function add(){
    a = parseFloat(jQuery('#num1').val())
    b = parseFloat(jQuery('#num2').val())
    sum = a + b
    result = a + " + " + b + " = " + sum
    jQuery('#result').html(result)
    recent = result
    old = jQuery('#history').html()
    jQuery('#history').html(old + "<span class='blue'>" + recent + "<button type='button' class='hide'>Remove This</button>" + "</span>")
}

function sub(){
    a = jQuery('#num1').val()
    b = jQuery('#num2').val()
    difference =  a - b
    result = a + " - " + b + " = " + difference
    jQuery('#result').html(result)
    recent = result
    old = jQuery('#history').html()
    jQuery('#history').html(old + "<span class='red'>" + recent + "<button type='button' class='hide'>Remove This</button>" + "</span>")
}

function mult(){
    a = jQuery('#num1').val()
    b = jQuery('#num2').val()
    product = a * b
    result = a + " * " + b + " = " + product
    jQuery('#result').html(result)
    recent = result
    old = jQuery('#history').html()
    jQuery('#history').html(old + "<span class='green'>" + recent + "<button type='button' class='hide'>Remove This</button>" + "</span>")
}

function div(){
    a = jQuery('#num1').val()
    b = jQuery('#num2').val()
    quotient =  a / b
    result = a + " / " + b + " = " + quotient
    jQuery('#result').html(result)
    recent = result
    old = jQuery('#history').html()
    jQuery('#history').html(old + "<span class='yellow'>" + recent + "<button type='button' class='hide'>Remove This</button>" + "</span>")
}

function font_increase(){
    calcs = jQuery('#history span').text()
    current_size = parseInt(jQuery('#history span').css('font-size'))
    current_size = current_size + 10
    jQuery('#history span').css('font-size', current_size)
}

function font_decrease(){
    calcs = jQuery('#history span').text()
    current_size = parseInt(jQuery('#history span').css('font-size'))
    current_size = current_size - 10
    jQuery('#history span').css('font-size', current_size)
}

function hide_(){
    jQuery(this).parent().remove()
}

function setup(){
    jQuery('#add').click(add)
    jQuery('#subtract').click(sub)
    jQuery('#multiply').click(mult)
    jQuery('#divide').click(div)
    jQuery('#font-up').click(font_increase)
    jQuery('#font-down').click(font_decrease)
    jQuery('body').on('click', '.hide', hide_)
}

jQuery(document).ready(setup)