/**
 * 
 */
 
	$(document).ready(function(){
		fnContentLength();
		fnInsertBoard();
	});
	const fnContentLength = () => {		
	    $('body').on('keyup', '#content', function() {
	        $('#test_cnt').html("("+$(this).val().length+" / 1500)");
	        if($(this).val().length > 1500) {
	            $(this).val($(this).val().substring(0, 1500));
	            $('#test_cnt').html("(1500 / 1500)");
	        }
	    });
	}// fnContentLengt 글자 제한.
	
	const fnInsertBoard = () => {
		$('body').on('submit', '.form-insert', function(event){
			event.preventDefault();
			if($('.title').val() != ''){
				let board = JSON.stringify({
					mno : mno,
					title : $('.title').val(),
					content : $('#content').val()
				});
				$.ajax({
					url: '/api/board',
					type: 'post',
					async: false,
					data: board,
					contentType: 'application/json',
					dataType: 'json',
					success: function(map){
						if(map.result == true){
							swal('등록 성공', '게시글이 성공적으로 등록되었습니다.', 'success', {
								button: '확인'
							}).then(() => {
								location.href='/board/listPage';
							});
						} else{
							swal('등록 실패', '게시글 등록에 실패하였습니다.', 'error', {
								button: '확인'
							}).then(() => {
								return false;
							});
						}
					}
				});
			} else {
				swal('제목은 필수입니다.','', 'error', {
					button: '확인'
				}).then(() => {
					return false;
				});
			}
		});			
	}// fnInsertBoard 게시글 작성
	
