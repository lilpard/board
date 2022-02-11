<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<link href="/css/board/list.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="/js/board/list.js"></script>

<title>Insert title here</title>

</head>
<body>
	<jsp:include page="../component/nav.jsp"></jsp:include>
	
	<table class="boardClass">
		<caption>게시판</caption>
		<thead>
			<c:if test="${loginUser != null}">
				<tr>
					<td colspan="1" id="totalCnt" class="totalCnt"></td>
					<td colspan="2"></td>
					<td>
						<input type="button" id="insertPageBtn" value="게시글 작성">
					</td>
				</tr>
			</c:if>
			<c:if test="${loginUser == null}">
				<tr>
					<td colspan="1" id="totalCnt" class="totalCnt"></td>
					<td colspan="3"></td>
				</tr>
			</c:if>			
			<tr>
				<td class="headerTD">게시글번호</td>			
				<td class="titleTD">제목</td>			
				<td class="headerTD">조회수</td>			
				<td class="headerTD">게시일</td>			
			</tr>
		</thead>
		<tbody id="board_list"></tbody>
		<tfoot class="boardPaging">
			<tr>
				<td colspan="1"></td>
				<td id="paging" colspan="2"></td>
				<td colspan="1"></td>
			</tr>
		</tfoot>
	</table>
	
	<jsp:include page="../component/footer.jsp"></jsp:include>
</body>
</html>