//Set up the input function
$(document).ready(function(){

    //Add a variable for the 't' input and name it so that the input makes sense and you can change 

    //Add your ajax call 
    $.ajax({
        type: 'GET',
        url: 'https://www.redbullshopus.com/products.json',
        data: {
    //Your object will have one parameter for the title which the user can change by creating a variable for the local variable
        // products: {id: 1326503788615}
    },
    dataType: "json",
    success: function(response) {
        "<div id='flex-container'>"
        for (var i = 0; i < response.products.length; i++) {
            $('.row').append("<div class='image'>" + "<img src=" + response.products[i].images[0].src + "<div class='product'>" + response.products[i].title + "<div class='price'>" + '$ ' + response.products[i].variants[0].price + "<div class='description'>" + response.products[i].body_html + "<button class='buy'>Buy</button>"+ "</div>" + "</div>" + "</div>" + "</div>" + "</div>");
            }
        "</div>"
        }
    });
});
