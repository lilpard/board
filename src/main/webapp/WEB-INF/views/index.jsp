<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<!--부트스트랩-->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<link href="/css/index.css" rel="stylesheet" type="text/css">

</head>
<body>
	<jsp:include page="component/nav.jsp"></jsp:include>

  <div class="container marketing">
      <!-- Three columns of text below the carousel -->
	  <h3 class="development_tool_header">계층형 게시판 개발도구</h3>
      <div class="row">
        <span class="col">
          <img class="img-circle" src="https://ryulth.com/assets//img/Java-logo.png" alt="Generic placeholder image" style="object-fit: contain; object-position: center; border: 2px solid #eee;" width="140" height="140">
          <h2>JAVA</h2>
        </span>
        <span class="col">
          <img class="img-circle" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="Generic placeholder image" width="140" height="140">
          <h2>HTML</h2>
        </span>
        <span class="col">
          <img class="img-circle" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt="Generic placeholder image"  width="140" height="140">
          <h2>CSS</h2>
        </span>
        <span class="col">
          <img class="img-circle" src="https://www.stimulsoft.com/images/products/reports-js/description/logo.svg" alt="Generic placeholder image" width="140" height="140">
          <h2>JavaScript</h2>
        </span>
        <span class="col">
          <img class="img-circle" src="https://e7.pngegg.com/pngimages/165/821/png-clipart-round-blue-logo-blue-symbol-sphere-logo-jquery-blue-logo.png" alt="Generic placeholder image" style="object-fit: cover; object-position: center;" width="140" height="140">
          <h2>JQuery</h2>
        </span>
        <div class="col">
          <img class="img-circle" src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdCoW6A%2FbtqKSgKaXpg%2FGxIgFK0GPYeApwmn2lK5nk%2Fimg.png" alt="Generic placeholder image" width="140" height="140">
          <h2>MySQL</h2>
        </div>
        <div class="col">
          <img class="img-circle" src="data:image/png;base64,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" width="140" height="140">
          <h2>Spring Boot</h2>
        </div>
        <div class="col">
          <img class="img-circle" src="https://cdn.jootc.com/wp-content/uploads/2018/09/bootstrap-logo.png" width="140" height="140">
          <h2>Bootstrap</h2>
        </div>
        <div class="col">
          <img class="img-circle" src="https://files.virgool.io/upload/users/796/posts/enwsr5rltz0d/jyjowrraqhfw.png" style="object-fit: contain; object-position: center; border: 2px solid #ee8877;" width="140" height="140">
          <h2>Sweet Alert</h2>
        </div>
      </div><!-- /.row -->


      <!-- START THE FEATURETTES -->

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="500x500" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxkZWZzLz48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjE5MC4zMDg1OTM3NSIgeT0iMjUwIiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjIzcHQ7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NTAweDUwMDwvdGV4dD48L2c+PC9zdmc+" data-holder-rendered="true">
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7 col-md-push-5">
          <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5 col-md-pull-7">
          <img class="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="500x500" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxkZWZzLz48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjE5MC4zMDg1OTM3NSIgeT0iMjUwIiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjIzcHQ7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NTAweDUwMDwvdGV4dD48L2c+PC9zdmc+" data-holder-rendered="true">
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="500x500" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxkZWZzLz48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjE5MC4zMDg1OTM3NSIgeT0iMjUwIiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjIzcHQ7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NTAweDUwMDwvdGV4dD48L2c+PC9zdmc+" data-holder-rendered="true">
        </div>
      </div>

 
      <!-- /END THE FEATURETTES -->



    </div><!-- /.container -->

	<!-- FOOTER -->
    <footer>
    	<jsp:include page="component/footer.jsp"></jsp:include>
    </footer>

</body>
</html>