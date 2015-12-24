Data = JSON.stringify({
    'key': 'V0D_Zxz9tADoT1PJUBYXhQ', // Get from mandrillapp.com 
    'message': {
        'from_email': 'yuor@gmail.com',
        'to': [{ 'email': "sale@gmail.com", 'type': 'to' }],
        'autotext': 'true',
        'subject': 'New order',
        'html': ' <table style=""> <tr> <td>' + input1 + '</td> </tr> </table> '
    }
})

$.ajax({
    type: "POST",
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    data: Data,
});