$(document).ready(function() {
    // remove trees if clicked
    $('.favorite').click(function(){
        $(this).parent().parent().parent().remove()
    });
});
