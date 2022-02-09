/**
 * 
 */
	$(document).ready(function(){
		fnInsertPage();
		fnBoardList();
		fnDetailPage();
		fnChangeListPage();
	});
	
	// 게시물작성 페이지 이동
	const fnInsertPage = () => {
		$('body').on('click', '#insertPageBtn', function(){
			location.href= '/board/insertPage';
		})		
	}
	
	// 게시물 불러오기
	var page = 1;
	
	const fnBoardList = () => {
		$.ajax({
			url: '/api/board/' + page,
			type: 'get',
			dataType: 'json',
			success: function(map){
				fnPrintBoardList(map);
				fnPringPaging(map.pageUtils);
			}
		})
	} // fnBoardList
	
	// 게시물 목록 출력
	const fnPrintBoardList = (map) => {
		fnInit();
		let p = map.pageUtils;
		$('#board_list').empty();
		$('#totalCnt').text('총 게시물 수 : ' + p.totalRecord);
		if(p.totalRecord == 0){
			$('<tr>')
			.append($('<td colspan="4">').text('게시물이 없습니다.'))
			.appendTo($('#board_list'));
		} else{
			$.each(map.list, function(i, board){
				$('<tr>')
				.append($('<td>').text(board.bno))
				.append($('<a>').html('<td width="600px" class="detailPage">' + board.title + '</td><input type="hidden" value="'+ board.bno +'">'))
				.append($('<td>').text(board.hit)) 
				.append($('<td>').text(board.created))
				.appendTo($('#board_list'));
			});
		}
	} // fnPrintBoardList
	
	const fnPringPaging = (p) => {
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
	}  // end fnPrintPaging
	
	const fnChangeListPage = () => {
		$('body').on('click', '.enable_link', function(){
			page = $(this).data('page');
			fnBoardList();
		});		
	}
	
	const fnDetailPage = () =>{
		$('body').on('click', '.detailPage', function(){
			let bno = $(this).next().val()
			location.href = '/board/detailPage/' + bno;
		});
	}
	
	const fnInit = () => {
		$('#board_list').empty();
		$('#paging').empty();
	}
	
