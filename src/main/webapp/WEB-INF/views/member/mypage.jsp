<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<link href="/css/member/mypage.css" rel="stylesheet" type="text/css">
<script type="text/javascript">
	var mno = '${loginUser.mno}';
	var id = '${loginUser.id}';
</script>
<script type="text/javascript" src="/js/member/mypage.js"></script>

<title>Insert title here</title>
</head>
<body>
	<jsp:include page="../component/nav.jsp"></jsp:include>
	
	<div class="container">
	    <h2 class="form-signin-heading">마이페이지</h2>
	    <form class="form-signin">
	    	<div class="inputwrap">
		    	<label for="inputId" class="id">아이디</label>
		     	<span class="loginId"><h3>${loginUser.id}</h3></span>
	    	</div >
		   	<span id="idResult"></span>
	    	<div class="inputwrap">
		      <label for="inputPassword" class="password">비밀번호</label>
		      <input type="password" id="inputPassword" class="form-control" placeholder="Password" autocomplete="name" required="required">
	    	</div>
		    <span id="pwResult"></span>
	    	<div class="inputwrap">
		      <label for="inputPassword2" class="password">비밀번호 확인</label>
		      <input type="password" id="inputPassword2" class="form-control" placeholder="Password" autocomplete="name" required="required">
	    	</div>
		    <span id="pw2Result"></span>
	    	<div class="inputwrap">
		      <label for="inputName" class="name">이름</label>
		      <input type="text" id="inputName" class="form-control" placeholder="name" required="required" value="${loginUser.name}">
	    	</div>
		   	<span id="nameResult"></span>
	    	<div class="inputwrap">
		      <label for="inputEmail" class="email">이메일</label>
		      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="required" value="${loginUser.email}">
	    	</div >
		   	<span id="emailResult"></span>
		   	<div class="btnWrap">
		      <button class="btn btn-lg btn-primary btn-block" type="submit">수정</button>
		      <input type="button" class="resetBtn" value="초기화" onclick="$('.form-signin')[0].reset();">
		      <input type="button" class="deleteBtn" value="회원탈퇴">
		   	</div>
	    </form>
    </div>
	
	<jsp:include page="../component/footer.jsp"></jsp:include>
</body>
</html>