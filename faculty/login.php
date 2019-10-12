<?php
include_once '../database/connection.php';
include_once 'phpfunction.php';

sec_session_start();
if (login_check($mysqli)==true)
{
  header('Location: index.php');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>SIMS Administration Login</title>
  <link rel='stylesheet prefetch' href='http://fonts.googleapis.com/css?family=Open+Sans:600'>
  <link rel="stylesheet" href="../css/fac_login_style.css">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head
       content must come *after* these tags -->
   <!-- Bootstrap -->
  <link href="../css/bootstrap.min.css" rel="stylesheet">
  <link href="../css/bootstrap-theme.min.css" rel="stylesheet">
  <link href="../css/font-awesome.min.css" rel="stylesheet">
  <link href="../css/bootstrap-social.css" rel="stylesheet">

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="../js/bootstrap.min.js"></script>
  <script src="../js/javascript.js"></script>
  <script type="text/JavaScript" src="../js/sha512.js"></script>
  <script type="text/JavaScript" src="../js/forms.js"></script>

</head>
<body>

  <div class="container">
      <!-- copy content   -->
      <div class="login-wrap">
      	<div class="login-html">
    <!--      <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab"></label> -->
            <span id="tab-1" class="tab" name="radio" class="sign-in"><label style="color: white;">Sign In</label></span>
            <?php
            if (isset($_GET['error'])) {
              if($_GET['error']==1){
              echo '<div class="alert alert-danger alert-dismissible" role="alert">';
              echo '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
              echo '<strong>Error!</strong> Username or Password!.';
              echo '</div>';
            }  else{
              echo '<div class="alert alert-danger alert-dismissible" role="alert">';
              echo '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
              echo '<strong>Invalid Request</strong>';
              echo '</div>';
            }
          }
            ?>
            <div class="login-form">
      			<div class="sign-in-htm">
              <form action="faculty_login.php" method="post">
      				<div class="group">
      					<label for="user" class="label">Email ID</label>
      					<input id="user" name="email" type="text" class="input">
      				</div>
      				<div class="group">
      					<label for="pass" class="label">Password</label>
      					<input id="pass" name="password" type="password" class="input" data-type="password">
      				</div>
      				<div class="group">
      					<input type="button" class="button" value="Sign In"
                        onclick="formhash(this.form, this.form.password);">
      				</div>
            </form>
      			</div>
      		</div>
      	</div>
      </div>
      <!-- End coppy -->
    </div>
</body>
</html>
