const add_file = document.querySelectorAll('.add_file');
const add_proj = document.querySelectorAll('.add_proj');
const username = document.querySelector('.username');

// using jQuery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
    var cookie = jQuery.trim(cookies[i]);
    // Does this cookie string begin with the name we want?
    if (cookie.substring(0, name.length + 1) == (name + '=')) {
    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    break;
    }
    }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');


for (const add of add_proj) {
    add.addEventListener('click', function(event) {
        console.log("click add rpoj")
        us = $('.username').text();
        $.ajax({
        url: 'create_proj',
        type: "POST",
        headers: {'X-CSRFToken': csrftoken},
        data: {
            'send': 0
          },
          datatype: 'json',
        success: function (data) {
            if (data['proj_list'] != null) { // fail = 1, success = 0
            location.reload();
            return ;
            } 
            else {
                console.log("에러");
                location.reload();

            }
        },
        error: function (data) {
            console.log("통신에러")
            location.reload();
        }
        });
    })
}


for (const add of add_file) {
    add.addEventListener('click', function(event) {
        console.log("click add file")
        $.ajax({
        url: 'create_file',
        type: "POST",
        headers: {'X-CSRFToken': csrftoken},
        data: {
          'send': 0
        },
        datatype: 'json',
        success: function (data) {
            if (data['proj'] != null) { 
                location.reload();
                console.log($('.folder_text').index());
                console.log(data[proj])
                console.log(data[file])
            return ;
            } 
            else {
                console.log("ㅇㄹ")
                location.reload();
            }
        },
        error: function (data) {
            // alert("서버와의 통신에서 문제가 발생했습니다.");
            console.log("통신에러")
            location.reload();
            
        }
        });
    })
}