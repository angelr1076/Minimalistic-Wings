//Set up the input function
$(document).ready(function(){

    //jQuery method to hide the pin element then slide down after 1 second
    $('.pin').hide(function(){
        $('.pin').slideDown(2000);
    }); 
    

    $.ajax({
        type: 'GET',
        url: 'https://www.redbullshopus.com/products.json',
        data: {
        products: {}
    },
    dataType: "json",
    success: function(response) {
        "<div id='flex-container'>"
        for (var i = 0; i < response.products.length; i++) {
            $('.row').append("<div class='image'>" + "<img src=" + response.products[i].images[0].src + "</div>" + "<div class='product'>" + response.products[i].title + "</div>" + "<div class='price'>" + '$ ' + response.products[i].variants[0].price + "</div>" + "<div class='description'>" + response.products[i].body_html + "</div>" + "<button class='purchase'>Add to cart</button>");
            }
        "</div>"
        }
    });
});
