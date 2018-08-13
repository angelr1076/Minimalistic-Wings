//Set up the input function
$(document).ready(function(){

    //Add a variable for the 't' input and name it so that the input makes sense and you can change 
    $('.pin').hide(function(){
        $('.pin').slideDown(1000);
    }); 
    
    //Add your ajax call 
    $.ajax({
        type: 'GET',
        url: 'https://www.redbullshopus.com/products.json',
        data: {
    //Your object will have one parameter for the title which the user can change by creating a variable for the local variable
        products: {id: 1326503788615}
    },
    dataType: "json",
    success: function(response) {
        "<div id='flex-container'>"
        for (var i = 0; i < response.products.length; i++) {
            $('.row').append("<div class='image'>" + "<img src=" + response.products[i].images[0].src + "</div>" + "<div class='product'>" + response.products[i].title + "<div class='price'>" + '$ ' + response.products[i].variants[0].price + "</div>" + "<div class='description'>" + response.products[i].body_html + "</div>" + "<button class='purchase'>Purchase</button>");
            }
        "</div>"
        }
    });

    // $('#search').keyup(function() {

    //     var input = $(this).val();
    
    //     $.ajax({
    //         type: 'GET',
    //         url: 'http://www.redbullshopus.com/products.json',
    //         data: {
    //         title: input
    //     },
    //     success: function(response) {
    //         for (var i = 0; i < response.products.length; i++) {
    //         // $('#title').html(response.Title)
    //         $('.image').append(response.products[i].images[0].src);
    //         $('.product').append(response.products[i].title);
    //         $('.price').append(response.products[i].variants[0].price);
    //         $('description').append(response.products[i].body_html);
    //         }
    //     }
    //     });
    // });
});
