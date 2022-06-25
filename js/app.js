$("#slider").flipster();

document.querySelectorAll('.image-conatiner img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image .lg').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image .logo').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}

// $( ".img-img button" ).click(function() {
//     $( ".sbox, .img-img img" ).css("display", "block");
//     $(".img-img button").slideUp();
// });

// $( ".img-img img" ).click(function() {
//     $( ".sbox, .img-img img" ).css("display", "none");
//     $(".img-img button").css("display", "block");
// });

$( "#fbox button" ).click(function() {
  $("#fbox").slideUp();
});
