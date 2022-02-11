/**
 * 
 */
 
 
	 $(document).ready(function(){
		fnReg();
		fnModify();
		fndelete();
	});
	
	var pwPass = 0;
	var namePass = 1;
	var emailPass = 1;
	
	function fnReg(){
		let regEmail= /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
		let regPw= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z0-9@$!%*#?&]{8,}$/;
		let regName= /^[가-힣]{2,}$/;
		
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
		$('body').on('blur', '#inputEmail', function(){
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
	
	function fnModify(){
		$('body').on('submit', '.form-signin', function(event){
			event.preventDefault();
			if(pwPass == 2 && namePass == 1 && emailPass == 1){
				let member = JSON.stringify({
					mno : mno,
					id : id,
					pw : $('#inputPassword').val(),
					name : $('#inputName').val(),
					email : $('#inputEmail').val()
				});
				console.log(member);
				$.ajax({
					url: '/api/member',
					type: 'put',
					data: member,
					async: false,
					contentType : 'application/json',
					dataType : 'json',
					success: function(map){
						if(map.result == true){
							swal('수정 성공', '회원정보가 성공적으로 수정되었습니다.', 'success', {
								button: '확인'
							}).then(() => {
								location.href='/';								
							})						
						} else{
							swal('수정 실패', '회원정보 수정에 실패하였습니다.', 'error', {
								button: '확인'
							}).then(() => {
								return false;								
							})
						}
					}
				});				
			} else{
				alert('입력정보를 확인해주세요.');
			}
		})
	}// fnModify 수정하기
	
	function fndelete(){
		$('body').on('click', '.deleteBtn', function(){
			swal({
				  title: '정말 회원탈퇴를 진행하시겠습니까?',
				  text: '',
				  icon: 'warning',
				  buttons: true,
				  dangerMode: true,
				})
				.then((willDelete) => {
				  if (willDelete) {
					$.ajax({
						url: '/api/member/' + mno,
						type: 'delete',
						async: false,
						dataType: 'json',
						success: function(map){
							if(map.result == true){
							    swal('회원탈퇴가 성공적으로 이루어졌습니다.', '', {
							      icon: "success",
							    }).then(() => {
								  location.href = '/';							
								});
							}else{
								 swal("회원탈퇴에 실패했습니다.", {
							      icon: "error",
							    })
							}
						}
					});			
				  } else {
				    swal("회원탈퇴를 취소하였습니다.");
				  }
				});
			
		});
	} // fndelete 회원탈퇴