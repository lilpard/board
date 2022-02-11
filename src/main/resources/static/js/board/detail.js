/**
 * 
 */
 
	$(document).ready(function(){
		// 게시물 정보
		fnBoardInfo();
		// 댓글 길이
		fnReplyLength();
		// 댓글 등록
		fnAddReply();
		// 댓글 목록
		fnReplyList();
		// 페이지 변경
		fnChangeListPage();
		fnDeleteReply();
		// 대댓글 보기
		fnCommentShow();
		// 대댓글 작성
		fnAddComment();
	});
	
	const fnBoardInfo = () => {
		$.ajax({
			url: '/api/board/detail/' + bno,
			type: 'get',
			dataType: 'json',
			success: function(map){
				if(map.result){
					$('.form-Board').empty();
					$('.form-Board')
					.append($('<input type="text" class="header" value="' + map.board.title +'" readOnly="true">'))
					.append($('<div class="hitAndCreated">&nbsp;<span class="writer">작성자 : '+ map.board.member.name +'</span><span class="hit">조회수 : '+ map.board.hit +'</span><span class="created">게시일 : '+ map.board.created +'</span>&nbsp;</div>'))
					.append($('<textarea class="content" id="content" rows="20" cols="70" placeholder="내용" readOnly="true">' + map.board.content +'</textarea>'))
					if(loginUser == ''){
						return;
					} else{
						if(loginMno == map.board.member.mno || loginId == 'admin'){
							$('.form-Board')
							.append('<br/><input class="editBtn" type="button" value="수정하기">')
							.append('<input class="resetBtn" type="reset" value="수정취소">')
							.append('<input class="modifyBtn" type="button" value="수정완료">')
							.append('<input class="listBtn" onclick="fnList()" type="reset" value="목록보기">')
							.append('<br/><input class="deleteBtn" type="button" value="삭제하기">')
							fnModify(map);
							fnDelete();
						}else{

						}
					}
				}
			}
		});	
	} // fnBoardInfo 게시물 정보 불러오기
	
	function fnModify(map) {
		
		// 게시물 편집하기.
		$('body').on('click', '.editBtn', function(){
			$('.header').attr('readOnly', false);
			$('.header').addClass('editable');
			$('.content').attr('readOnly', false);			
			$('.content').addClass('editable');
			let len = $('.header').val().length;
			$('.header').focus();
			$('.header')[0].setSelectionRange(len, len);
		});
		
		// 게시물 초기화하기.
		$('body').on('click', '.resetBtn', function(){
			$('.header').attr('readOnly', true);
			$('.header').removeClass('editable');
			$('.header').attr('readOnly', true);
			$('.content').removeClass('editable');
		});
			
		// 게시물 수정완료
		$('body').on('click', '.modifyBtn', function(){
			if($('.header').val() == map.board.title && $('.content').val() == map.board.content){
				swal('변경사항이 없습니다.', '', 'error', {
					button:'확인'
				}).then(() => {
					$('.header').attr('readOnly', true);
					$('.header').removeClass('editable');
					$('.header').attr('readOnly', true);
					$('.content').removeClass('editable');					
				});
			} else {
				let board = JSON.stringify({
					bno : bno,
					title : $('.header').val(),
					content : $('.content').val()					
				});
				$.ajax({
					url: '/api/board',
					type: 'put',
					data: board,
					contentType: 'application/json',
					dataType: 'json',
					success: function(map){
						if(map.result){
							swal('수정 성공', '', 'success', {
								button: '확인'
							}).then(() => {
								fnBoardInfo();
							})
						} else{
							swal('수정 실패', '', 'error', {
								button: '확인'
							});
						}
					}
				})
			}
		});
	} //fnModify 게시물 수정하기
	
	const fnReplyLength = () => {		
	    $('body').on('keyup', '#inputReplyContent', function() {
	        $('#reply_cnt').html("("+$(this).val().length+" / 40)");
	        if($(this).val().length > 40) {
	            $(this).val($(this).val().substring(0, 40));
	            $('#reply_cnt').html("(40 / 40)");
	        }
	    });
	}// 댓글 수 fnContentLengt 제한.
	
	
	function fnList(){
		location.href='/board/listPage';
	}// 목록보기
	
	function fnDelete(){
		$('body').on('click', '.deleteBtn', function(){
			swal({
				title: '정말 해당 게시물을 삭제하시겠습니까?',
				text: '',
				icon: 'warning',
				buttons: true,
				dangerMode: true,
			})
			.then( (willDelete) => {
				if(willDelete){
					$.ajax({
						url: '/api/board/' + bno,
						type: 'delete',
						dataType: 'json',
						success: function(map){
							if(map.result){
								swal('삭제 성공', '게시물을 성공적으로 삭제했습니다.', 'success', {
									button: '확인'
								}).then( () =>{
									location.href= '/board/listPage';								
								})
							}else{
								swal('삭제 실패', '게시물을 삭제하지 못했습니다.', 'error', {
									button: '확인'
								})
							}
						}
					});									
				} else{
					swal('게시물 삭제 작업을 취소하였습니다.');
				}
			});
		})
	} // fnDelete() 삭제
	
	function fnAddReply() {
		$('body').on('click', '.replyBtn', function(){
			let reply = JSON.stringify({
					rcontent : $('#inputReplyContent').val(),
					mno : loginMno,
					bno : bno
			});
			$.ajax({
				url: '/api/reply',
				type: 'post',
				data: reply,
				contentType: 'application/json',
				dataType: 'json',
				success: function(map){
					if(map.result){
						swal('등록 성공', '댓글이 등록되었습니다.', 'success', {
							button: '확인'
						}).then( () => {
							fnReplyList();							
						})
					}else{
						swal('등록 실패', '댓글을 등록하지 못했습니다.', 'error', {
							button: '확인'
						});
						
					}
				}		
			});
		});
	}// fnAddReply
	
	var page = 1;
	function fnReplyList(){
		$.ajax({
			url: '/api/reply/' + bno + '/page/' + page ,
			type: 'get',
			async: true,
			dataType: 'json',
			success: function(map){
				fnPrintReplyList(map);
				fnPringPaging(map.pageUtils);
			}
		});
	}// fnReplyList
	
	function fnPrintReplyList(map){
		let p = map.pageUtils;
		$('.replyList').empty();		
		if(p.totalRecord > 0){
			$.each(map.list, function(i, reply){
				if(loginMno == reply.member.mno || loginId == 'admin'){
					$('<ul>')
					.append($('<li class="replyWriter">').text(reply.member.name))	
					.append($('<a class="commentShow">').html('<li class="replyContent">' + reply.rcontent + '<span class="commentCnt'+reply.groupNo+' commentCount"></span></li>'))
					.append($('<li>').html('<i class="far fa-trash-alt replyDeleteBtn"></i><input type="hidden" value="'+ reply.rno +'">'))
					.appendTo('.replyList');
				} else{
					$('<ul>')
					.append($('<li class="replyWriter">').text(reply.member.name))	
					.append($('<a class="commentShow">').html('<li class="replyContent">' + reply.rcontent + '<span class="commentCnt'+reply.groupNo+' commentCount"></span></li>'))
					.appendTo('.replyList');
				}
				if(loginUser != ''){
					$('<div class="inputComment_wrap hide">')
					.append($('<ul>')
					.append($('<li class="inputComment"><span class="inputCommentWriter1"><i class="fab fa-replyd"></i>&nbsp;&nbsp;'+ loginName +'</span><input type="text" class="commentContent" placehoder="대댓글 내용" maxlength="30"/><input type="button" data-groupord="'+ reply.groupOrd +'" data-groupno="'+ reply.groupNo +'" class="addCommentBtn" value="등록"><input type="hidden" data-depth="'+ reply.depth +'" value="'+ reply.rno +'"></li>')))
					.appendTo('.replyList');
					fnCommentList(reply);
				}else{
					$('<ul class="inputComment_wrap hide">')
					.appendTo('.replyList');
					fnCommentList(reply);
				}
			});
		} else {
			$('<ul>')
			.append($('<li class="replyNone">').text('등록된 댓글이 없습니다. 첫 번째 댓글의 주인공이 되어주세요!'))
			.appendTo('.replyList');
		}
	}
	
	function fnPringPaging(p){
	
		// 페이징 영역 초기화
		$('#paging').empty();
		// 1페이지로 이동
		if (page == 1) {
			//$('<div class="disable_link">&lt;&lt;</div>').appendTo('#paging');
			$('<div>').addClass('disable_link').html('<i class="fas fa-angle-double-left"></i>').appendTo('#paging');
		} else {
			//$('<div class="enable_link" data-page="1">&lt;&lt;</div>').appendTo('#paging');
			$('<div>').addClass('enable_link').html('<i class="fas fa-angle-double-left">').attr('data-page', 1).appendTo('#paging');
		}
		// 이전 블록으로 이동
		if (page <= p.pagePerBlock) {
			$('<div class="disable_link"><i class="fas fa-angle-left"></i></div>').appendTo('#paging');
		} else {
			$('<div class="enable_link" data-page="'+(p.beginPage-1)+'"><i class="fas fa-angle-left"></i></div>').appendTo('#paging');
		}
		// 페이지 번호
		for (let i = p.beginPage; i <= p.endPage; i++) {
			if (i == page) {
				$('<div class="disable_link now_page">'+i+'</div>').appendTo('#paging');
			} else {
				$('<div class="enable_link" data-page="'+i+'">'+i+'</div>').appendTo('#paging');
			}
		}
		// 다음 블록으로 이동
		if (p.endPage == p.totalPage) {
			$('<div class="disable_link"><i class="fas fa-angle-right"></i></div>').appendTo('#paging');
		} else {
			$('<div class="enable_link" data-page="'+(p.endPage+1)+'"><i class="fas fa-angle-right"></i></div>').appendTo('#paging');
		}
		// 마지막 페이지로 이동
		if (page == p.totalPage) {
			$('<div class="disable_link"><i class="fas fa-angle-double-right"></i></div>').appendTo('#paging');
		} else {
			$('<div class="enable_link" data-page="'+p.totalPage+'"><i class="fas fa-angle-double-right"></i></div>').appendTo('#paging');
		}
	}
	
	const fnChangeListPage = () => {
		$('body').on('click', '.enable_link', function(){
			page = $(this).data('page');
			fnBoardList();
		});		
	}
	
	function fnCommentList(reply){
		$('<div class="comment hide" id="comment'+ reply.groupNo +'">')
		.appendTo('.replyList');
		$.ajax({
			url : '/api/comment/' + reply.groupNo,
			type : 'get',
			dataType: 'json',
			success: function(map){
				if(map.result){
					if(map.commentTotalCnt > 0){
						$('.commentCnt'+ reply.groupNo).html('&nbsp;&nbsp;<i class="far fa-comment-dots"></i> ' + map.commentTotalCnt + '');
					}
					$.each(map.list, function(i, comment){
						let depth = '';
						for(i=0; i < comment.depth; i++){
							depth += '&nbsp;&nbsp&nbsp;&nbsp';
						}
						if(loginMno == comment.member.mno || loginId == 'admin'){
							$('<ul>')
							.append($('<li class="commentWriter">').html(depth + '<i class="fas fa-reply fa-rotate-180"></i> ' + comment.member.name))	
							.append($('<a class="commentShow">').html('<li class="commentContent">' + comment.rcontent + '</li>'))
							.append($('<li>').html('<i class="far fa-trash-alt replyDeleteBtn"></i><input type="hidden" value="'+ comment.rno +'">'))
							.appendTo('#comment'+ comment.groupNo);
						} else{
							$('<ul>')
							.append($('<li class="commentWriter">').html(depth + '<i class="fas fa-reply fa-rotate-180"></i> ' + comment.member.name))	
							.append($('<a class="commentShow">').html('<li class="commentContent">' + comment.rcontent + '</li>'))
							.appendTo('#comment'+ comment.groupNo);
						}
						
						if(loginUser != ''){
							if(comment.depth < 9){
								$('<ul class="inputComment_wrap hide">')
								.append($('<li class="inputComment"><span class="inputCommentWriter"><i class="fab fa-replyd"></i>&nbsp;&nbsp;'+ loginName +'</span><input type="text" class="commentContent" placehoder="대댓글 내용" maxlength="30"/><input type="button" data-groupord="'+ comment.groupOrd +'" data-groupNo="'+ comment.groupNo +'" class="addCommentBtn" value="등록"><input type="hidden" data-depth="'+ comment.depth +'" value="'+ comment.rno +'"></li>'))
								.appendTo('#comment'+ comment.groupNo);							
							} else{
								$('<ul class="inputComment_wrap hide">')
								.append($('<li class="inputComment"><span class="inputComment">더이상 대댓글을 추가할 수 없습니다.</span></li>'))
								.appendTo('#comment'+ comment.groupNo);			
								return;
							}							
						}else{
							$('<ul class="inputComment_wrap" style="display:none;">')
							.appendTo('#comment'+comment.groupNo);
						}
					});
				}
			}
		});
	}
	
	function fnDeleteReply(){
		$('body').on('click', '.replyDeleteBtn', function(){
			swal({
				title: '해당 댓글을 정말 삭제하시겠습니까?',
				text: '',
				icon: 'warning',
				buttons: true,
				dangerMode: true,
			})
			.then((willDelete) => {
				if(willDelete){
					let rno = $(this).next().val();
					$.ajax({
						url: '/api/reply/' + rno,
						type: 'delete',
						dataType: 'json',
						success: function(map){
							if(map.result){
								swal('삭제 성공', '댓글을 삭제하였습니다.', 'success', {
									button: '확인'
								}).then( () => {
									fnReplyList();									
								});
							}else{
								swal('삭제 성공', '댓글을 삭제하지 못했습니다.', 'error', {
									button: '확인'
								})
							}
						}
					});								
				} else{
					swal('댓글 삭제를 취소하였습니다.')
				}
			}); 
		});
	} // fnDeleteReply()
	
	function fnCommentShow(){
		$('body').on('click', '.commentShow', function(){
			$(this).parent().next().toggleClass('hide');
			$(this).parent().next().next('.comment').toggleClass('hide');
		});
	} // fnCommentShow
 	
	function fnAddComment(){
		$('body').on('click', '.addCommentBtn', function(){
			let reply = JSON.stringify({
				rcontent : $(this).prev().val(),
				mno : loginMno,
				bno : bno,
				depth : $(this).next().data('depth'),
				groupOrd : $(this).data('groupord'),
				groupNo: $(this).data('groupno')
			})
			$.ajax({
				url: '/api/comment',
				type: 'post',
				data: reply,
				context: this,
				contentType: 'application/json',
				dataType: 'json',
				success: function(map){
					if(map.result){
						swal('등록 성공', '대댓글을 성공적으로 등록하였습니다.', 'success', {
							button: '확인'
						}).then( () => {
							$(this).prev().val('');
							fnReplyList();							
						} )
					}else{
						swal('등록 실패', '대댓글을 등록하지 못했습니다.', 'error', {
							button: '확인'
						})
					}
				}
			});
		})
		
	}// fnAddComment
	
