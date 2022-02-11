/**
 * 
 */
	$(document).ready(function(){
		fnReg();
		fnIdOverlapCheck();
		fnSubmit();
	});
	
	var idPass = 0;
	var pwPass = 0;
	var namePass = 0;
	var emailPass = 0;
	
	function fnReg(){
		let regEmail= /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
		let regPw= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z0-9@$!%*#?&]{8,}$/;
		let regId= /^[a-zA-Z]+[a-zA-Z0-9@$!*?&_]{4,}$/;
		let regName= /^[가-힣]{2,}$/;
		
		$('body').on('keyup', '#inputId', function(){
			if(regId.test($(this).val()) == false){
				$('#idResult').text('아이디 형식 맞지 않습니다. 아이디는 영문 대소문자, 숫자, 특수문자만 사용가능합니다.');
				$('#idResult').removeClass('enable');
				$('#idResult').addClass('disable');
				idPass = 0;
			}else{
				$('#idResult').text('중복확인이 필요합니다.');
				$('#idResult').removeClass('disable');
				$('#idResult').addClass('enable');
				idPass = 1;
			}
		});
		$('#inputPassword').on('blur', function(){
			if(regPw.test($(this).val()) == false){
				$('#pwResult').text('비밀번호에는 8자 이상의 대소문자, 숫자 그리고 특수문자가 포함되어야 합니다.');
				$('#pwResult').removeClass('enable');
				$('#pwResult').addClass('disable');		
				pwPass = 0;
			}else{				
				$('#pwResult').text('');
				$('#pwResult').removeClass('disable');
				$('#pwResult').addClass('enable');
				pwPass = 1;
			}
		});
		$('#inputPassword2').on('blur', function(){
			if(pwPass == 1){
				if( $('#inputPassword2').val() == $('#inputPassword').val()){
					$('#pw2Result').text('');
					$('#pw2Result').removeClass('disable');
					$('#pw2Result').addClass('enable');
					pwPass = 2;
				}else{				
					$('#pw2Result').text('비밀번호가 서로 일치하지 않습니다.');
					$('#pw2Result').removeClass('enable');
					$('#pw2Result').addClass('disable');	
					pwPass = 0;
				}				
			}
		});
		$('#inputName').on('blur', function(){
			if(regName.test($(this).val()) == false){
				$('#nameResult').text('이름은 2자 이상, 한글로만 입력이 가능합니다.');
				$('#nameResult').removeClass('enable');
				$('#nameResult').addClass('disable');	
				namePass = 0;
			}else{				
				$('#nameResult').text('');
				$('#nameResult').removeClass('disable');
				$('#nameResult').addClass('enable');
				namePass = 1;
			}
		});
		$('body').on('keyup', '#inputEmail', function(){
			if(regEmail.test($(this).val()) == false){
				$('#emailResult').text('이메일형식에 맞지 않습니다.');
				$('#emailResult').removeClass('enable');
				$('#emailResult').addClass('disable');
				emailPass = 0;
			}else{
				$('#emailResult').text('');
				$('#emailResult').removeClass('disable');
				$('#emailResult').addClass('enable');
				emailPass = 1;
			}
		});
	} // fnReg 정규식
	
	function fnIdOverlapCheck(){
		
		$(document).on('click', '#id_overlap_check', function(){
			if(idPass == 1){
				$.ajax({
					url: '/api/member/idCheck',
					type: 'post',
					data: 'id=' + $('#inputId').val(),
					dataType: 'json',
					success: function(map){
						if(map.result == true){
							$('#idResult').text('사용 가능한 아이디입니다.');
							$('#idResult').removeClass('disable');
							$('#idResult').addClass('enable');		
							idPass = 2;
						}else{
							$('#idResult').text('중복된 아이디입니다.');
							$('#idResult').removeClass('enable');
							$('#idResult').addClass('disable');		
							idPass = 0;							
							return false;
						}
					}
				});				
			}else{
				return false;
			}
		})
	} // fnIdOverlapCheck 아이디 중복체크
	
	function fnSubmit(){
		$('body').on('submit', '.form-signin', function(){
			if(idPass == 2 && pwPass == 2 && namePass == 1 && emailPass == 1){
				$(document).on('click', '#id_overlap_check', function(event){
					event.preventDefault();
					return false;
				});
				let member = JSON.stringify({
					id : $('#inputId').val(),
					pw : $('#inputPassword').val(),
					name : $('#inputName').val(),
					email : $('#inputEmail').val()
				});
				$.ajax({
					url: '/api/member',
					type: 'post',
					data: member,
					async: false,
					contentType : 'application/json',
					dataType : 'json',
					success: function(map){
						if(map.result == true){
							alert('회원가입이 성공적으로 이루어졌습니다.');
							$('.form-signin').attr('action', '/');
							submit();
						} else{
							alert('회원가입 실패');
						}
					}
				});				
			} else{
				alert('입력정보를 확인해주세요.');
			}
		})
	}
