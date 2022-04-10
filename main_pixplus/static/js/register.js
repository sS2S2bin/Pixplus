const btn_username_confirm = document.querySelector('.idfield .btn');
const input_username = document.querySelector('.idfield .inputblank');
const input_userid = document.querySelector('input[name="username"]');
const idcheck_success = document.querySelector('.idcheck .id-success');
const idcheck_fail = document.querySelector('.idcheck .id-fail');

console.log(input_username);
console.log(input_userid);

btn_username_confirm.addEventListener('click',function () {
    console.log("confirm진입성공");

    if(input_username.val() == ''){
        alert('이메일을 입력해주세요.')
        return;
    }

    $.ajax({
        url: "{% url 'id_overlap_check' %}",
        data: {
          'username': input_username.value
        },
        datatype: 'json',
        success: function (data) {
            console.log(data['overlap']);
            if (data['overlap'] > 0) { // fail = 1, success = 0
              alert("이미 존재하는 아이디 입니다.");
              id_overlap_input.focus();
              return;
            } else {
              alert("사용가능한 아이디 입니다.");
              input_username.attributes("check_result", "success");
              idcheck_success.style.display = "block";
              idcheck_fail.style.display = "none";
              return;
            }
        }
    });
  
})

input_username.change(function () {
    idcheck_success.style.display = "none";
    idcheck_fail.style.display = "block";
    input_username.attributes("check_result",'fail');
})

if ($('.username_input').attr("check_result") == "fail"){
    alert("아이디 중복체크를 해주시기 바랍니다.");
    $('.username_input').focus();
    return false;
}