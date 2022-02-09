<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<link href="/css/member/login.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="/js/member/login.js"></script>
<title>Insert title here</title>

</head>
<body>
	<jsp:include page="../component/nav.jsp"></jsp:include>

	<div class="container">
	    <form class="form-signin">
	      <h2 class="form-signin-heading">로그인</h2>
		  <input type="text" id="inputId" class="form-control" placeholder="ID" autofocus="autofocus" required="">
	      <label for="inputPassword" class="sr-only">Password</label>
	      <input type="password" id="inputPassword" class="form-control" autocomplete="name" placeholder="Password" required="">
	      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
	    </form>
    </div>
    
    <jsp:include page="../component/footer.jsp"></jsp:include>
</body>
</html>