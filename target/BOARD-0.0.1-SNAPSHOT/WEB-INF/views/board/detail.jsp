<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<link href="/css/board/detail.css" rel="stylesheet" type="text/css">
<script type="text/javascript">
	var bno = '${bno}';
	var loginMno = '${loginUser.mno}';
	var loginId = '${loginUser.id}';
	var loginName = '${loginUser.name}';
	var loginUser = '${loginUser}';
</script>
<script type="text/javascript" src="/js/board/detail.js"></script>

<title>Insert title here</title>

</head>
<body>
	<jsp:include page="../component/nav.jsp"></jsp:include>
		<div class="container">
			<form class="form-Board">
			
			</form>
		</div>
		
		<div class="container">
			<c:if test="${loginUser != null }">
				<form class="form-reply">
					<header class="">댓글</header>
					<input class="inputReplyName" type="text" value="${loginUser.name}" readonly="readonly">
					<input class="inputReplyContent" id="inputReplyContent" type="text" placeholder="댓글내용">
					<span id="reply_cnt">(0 / 40)</span>
					<input type="button" class="replyBtn" value="댓글작성">
				</form>
			</c:if>
			<c:if test="${loginUser == null}"></c:if>
			<div class="replyTable">
				<header>
					<ul>
						<li class="replyWriter">작성자</li>
						<li class="replyContent">내용</li>
						<li>삭제</li>
					</ul>
				</header>
				<section class="replyList"></section>
				<footer id="paging"></footer>
			</div>
		</div>
	<jsp:include page="../component/footer.jsp"></jsp:include>
</body>
</html>