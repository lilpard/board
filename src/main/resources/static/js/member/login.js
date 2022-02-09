/**
 * 
 */
 
 	$(document).ready(function(){
		fnLogin();
	});
	
	function fnLogin(){
		$(document).on('submit', '.form-signin', function(event){
			let member = JSON.stringify({
				id : $('#inputId').val(),
				pw : $('#inputPassword').val()
			});
			$.ajax({
				url: '/api/member/login',
				type: 'post',
				data: member,
				async: false,
				contentType: 'application/json',
				dataType: 'json',
				success: function(map){
					
					event.preventDefault();
					
					if(map.result == true){
						swal('로그인 성공', '', 'success', {
							button : '확인'
						}).then((value) => {
								location.href='/';
							});
					} else{
						swal('로그인 실패', '아이디와 비밀번호가 일치하지 않습니다.', 'error', {
							button : '확인'
						}).then((value) => {
								$('#inputPassword').val('');
								$('#inputPassword').focus();
							});
					}
				}				
			})
		});	
	} // fnLogin 
	