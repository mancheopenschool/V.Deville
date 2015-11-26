$(document).ready(function(){

    $('img').each(function(){
        var variable = $(this).attr('src');
        $(this).wrap("<a rel='group' target='_blank' href='" + variable + "'></a>")
    })

    $('.gallery a').fancybox();
    
    $('nav li').click(function(){
        $('nav li').removeClass('hover');
        $(this).addClass('hover');
        $('#carre').toggle('carre')
    });
    $('#date').datepicker({
        dateFormat: "dd/mm/yy",
        onSelect: function(date) {
            console.log(date);
        }
    });
});
