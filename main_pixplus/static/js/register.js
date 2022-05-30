const btn_username_confirm = document.querySelector('.idfield .btn');
const input_username = document.querySelector('.idfield .inputblank');
const idcheck_success = document.querySelector('.idcheck .id-success');
const idcheck_fail = document.querySelector('.idcheck .id-fail');
const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    
console.log(input_username.value);
console.log($('.error_message').value);

idcheck_success.style.display = "none";
idcheck_fail.style.display = "block";

if($('.error_message').value == 1){
    alert("회원가입에 실패했습니다. 다시 시도해주세요");
    $('.error_message').attr('display','none');
}

btn_username_confirm.addEventListener('click',function () {
    console.log("confirm진입성공");

    if($('.idfield .inputblank').val() == ''){
        alert('이메일을 입력해주세요.')
        return;
    }

    $.ajax({
        url: 'id_overlap_check',
        // type: "POST",
        headers: {'X-CSRFToken': csrftoken},
        data: {
          'username': input_username.value
        },
        datatype: 'json',
        success: function (data) {
            console.log(data['overlap']);
            if (data['overlap'] > 0) { // fail = 1, success = 0
                $('.idfield .inputblank').attr("check_result", "false");
                $('.id-success').css("display", "none");
                $('.id-fail').css("display", "block");
              alert("이미 존재하는 아이디 입니다.");
              id_overlap_input.focus();
              return ;
            } else {
            $('.idfield .inputblank').attr("check_result", "success");
            $('.id-success').css("display", "block");
            $('.id-fail').css("display", "none");
            // idcheck_success.style.display = "block";
            // idcheck_fail.style.display = "none";
            $("#join_form").attr("id_check_result", "success");
            alert("사용가능한 아이디 입니다.");
            }
        },
        error: function (data) {
            alert("서버와의 통신에서 문제가 발생했습니다.");
            console.log("통신에러")
        }
    });
  
})

$('.idfield .inputblank').change(function () {
    idcheck_success.style.display = "none";
    idcheck_fail.style.display = "block";
    $("#join-submit").attr("id_check_result", "fail");
})


$('#join-form').submit(function() {
    console.log($("#join-submit").attr("id_check_result"));

    if ($('.username_input').attr("check_result") == "fail"){
        alert("아이디 중복체크를 해주시기 바랍니다.");
        $('.username_input').focus();
        return false;
    }

 });






