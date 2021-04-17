$(function () {
    $('#demoForm').validate({
        rules: {
            ptusername: {
                required: true,
                maxlength: 255,
            },
            ptpwd: {
                required: true,
                minlength: 6
            },
            ptemail: {
                required: true,
                email: true
            },
            ptdate: {
                required:true
            }
        },
        messages: {
            ptusername: {
                required: 'Please enter name',
                maxlength: 'Name is limited to 255 characters',
            },
            ptpwd: {
                required: 'Please enter password',
                maxlength: 'Please enter at least 6 characters',
            },
            ptemail: {
                required: 'This field is required',
            },
            ptdate: {
                required: 'Please enter date',
            },
        },
    });
})
$(function () {
    $('#demoFormProducts').validate({
        rules: {
            name: {
                required: true,
                maxlength: 255,
            },
            price: {
                required: true,
                number: true
            },
            description: {
                required: true,
                email: true
            },
            ptdate: {
                required:true
            }
        },
        messages: {
            ptusername: {
                required: 'Please enter product name',
                maxlength: 'Name is limited to 255 characters',
            },
            price: {
                required: 'Please enter the money',
                number: 'Please enter the number',
            },
            description: {
                required: 'Please enter the description',
            },
            ptdate: {
                required: 'Please enter date',
            },
        },
    });
})

