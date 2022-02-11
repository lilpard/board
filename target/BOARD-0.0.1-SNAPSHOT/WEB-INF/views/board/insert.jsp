<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<link href="/css/board/insert.css" rel="stylesheet" type="text/css">
<script type="text/javascript">
	var mno = '${loginUser.mno}'
</script>
<script type="text/javascript" src="/js/board/insert.js"></script>

<title>Insert title here</title>

</head>
<body>
	<jsp:include page="../component/nav.jsp"></jsp:include>
	
		<div class="container">
			<form class="form-insert">
				<header class="header">게시글 작성</header>
				<input class="title" type="text" placeholder="제목"><br/>
				<textarea class="content" id="content" rows="20" cols="70" placeholder="내용"></textarea><br/>
				<div id="test_cnt">(0 / 1500)</div>
				<button class="inertBtn">게시물 작성</button>
			</form>
		</div>
	
	<jsp:include page="../component/footer.jsp"></jsp:include>
</body>
</html>