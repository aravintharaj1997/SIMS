<?php
include_once '../database/connection.php';
include_once 'phpfunction.php';

sec_session_start();

if (login_check($mysqli) == true) {
    $logged = 'in';
} else {
    header('Location: Login.php');
}
?>
<html lang="en">
<head>
    <title>SIMS</title>
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
    <link href="../style.css" rel="stylesheet">
  <style>
  body{
    font-family: "Times New Roman", Times, serif;
  }
  </style>
</head>
<body>
  <!-- nav start -->
  <nav class="nav navbar-default navbar-inverse" role="navigation" style="background: #4169e1">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only"> Toggle navigation </span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">
          <font style="color: Blue; font-size:35px;">S</font><font style="color: White; font-size:35px;">IMS</font>
        </a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li><a href="index.php"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Home</a></li>
        <li> <a href="Faculty.php">Faculty details</a></li>
        <li> <a href="mark.php"></span>Marks</a></li>
        <li class="active"> <a href="Subject.php"></span>Subject</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-user" aria-hidden=true></span><?php echo htmlentities($_SESSION['username']) ?> <b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li><a href="index.php">View Profile</a></li>
              <li class="divider"></li>
              <li><a href="admin_logout.php"><span class="glyphicon glyphicon-log-out"></span>Logout</a></li>
            </ul>
          </li>
        </ul>
    </div>
  </div>
  </nav>
  <!-- Nav end -->
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
      <legend>Subject Details</legend>
      <table class="table table-striped table-bordered table-hover" id="dataTables-departmet">
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Semester</th>
          </tr>
        </thead>
        <?php
          $result = mysqli_query($mysqli, 'select Subject_Code, Subject_Name, semester from subjects') or die('Query fail: ' . mysqli_error());
          ?>
          <tbody>
            <?php while ($row = mysqli_fetch_array($result)) { ?>
              <tr>
                <td><?php echo $row[0]; ?></td>
                <td><?php echo $row[1]; ?></td>
                <td><?php echo $row[2]; ?></td>
              </tr>
              <?php } ?>
            </tbody>
          </table>
        </div>
    </div>
  </div>
</body>
</html>
