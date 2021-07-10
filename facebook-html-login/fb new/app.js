$(document).ready(function () {
    $('.account-logn').click(function(){

    })
});

$(document).ready(function(){
    $('formValidate').validate({
        rules:{
            fname:{
                required: true,
                minlength: 6
            },
            surname:{
                required: true,

            }
        },
        messages:{}
        
    })
})
