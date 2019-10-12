<?php
include_once '../database/connection.php';
include_once 'phpfunction.php';

sec_session_start();

if (login_check($mysqli) == true) {
    $logged = 'in';
} else {
  header('Location: Login.php');
}
if(isset($_POST['p'])){
$newpass=filter_input(INPUT_POST, 'p', FILTER_SANITIZE_STRING);

$password=password_hash($newpass,PASSWORD_BCRYPT);
$stdid=$_SESSION['user_id'];
if($update_stmt=$mysqli->prepare("UPDATE students SET Password=? WHERE Student_ID = ?")){
$update_stmt->bind_param("ss",$password,$stdid);
if(!$update_stmt->execute()){
  $error_msg1="Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
}
//$newusername=preg_replace("/[^a-zA-Z0-9_\-]+/", "", $newusername);
//$stmt=$mysqli->prepare("SELECT Email_ID FROM students Where Student_ID=? LIMIT 1");
//$stmt->bind_param("s",$stdid);
//$stmt->execute();
//$stmt->bind_result($email);
header('Location: admin_logout.php');
$success_msg= '<div class="alert alert-success alert-dismissable fade in" role="alert">
<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
<strong>Success!</strong> Successfully username updated!
</div>';
}
}
if(isset($_POST['newuser'])){
  $newusername=$_POST['newuser'];
  $stdid=$_SESSION['user_id'];
  if($update_stmt=$mysqli->prepare("UPDATE students SET Username=? WHERE Student_ID = ?")){
  $update_stmt->bind_param("ss",$newusername,$stdid);
  if(!$update_stmt->execute()){
    $error_msg1="Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
  }
  //$newusername=preg_replace("/[^a-zA-Z0-9_\-]+/", "", $newusername);
  $_SESSION['username'] = $newusername;
  $success_msg= '<div class="alert alert-success alert-dismissable fade in" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Success!</strong> Successfully username updated!
  </div>';
}
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
    <script src="../js/sha512.js"></script>
    <script src="../js/jquery.validate.js"></script>
    <script src="../js/jquery-3.1.1.js"></script>

  <link href="../style.css" rel="stylesheet">
  <style>
  body{
    font-family: "Times New Roman", Times, serif;
  }
  #wrapper {
  padding-left: 250px;
  transition: all 0.4s ease 0s;
}

#sidebar-wrapper {
  margin-left: -250px;
  top: 51px;
  left: 250px;
  width: 250px;
  background: #243e8c;
  position: fixed;
  height: 100%;
  overflow-y: auto;
  z-index: 1000;
  transition: all 0.4s ease 0s;
}

#wrapper.active {
  padding-left: 0;
}

#wrapper.active #sidebar-wrapper {
  left: 0;
}

#page-content-wrapper {
  width: 100%;
  padding-top: 70px;
  transition: all 0.4s ease 0s;
}

.sidebar-nav {
  position: absolute;
  top: 0;
  width: 250px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar-nav li {
  line-height: 40px;
  text-indent: 20px;
}

.sidebar-nav li a {
  color: #999999;
  display: block;
  text-decoration: none;
  padding-left: 60px;
}

.sidebar-nav li a span:before {
  position: absolute;
  left: 0;
  color: #15328c;
  text-align: center;
  width: 20px;
  line-height: 18px;
}

.sidebar-nav li a:hover,
.sidebar-nav li.active {
  color: #fff;
  background: rgba(120, 137, 191,0.2);
  text-decoration: none;
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
  height: 65px;
  line-height: 60px;
  font-size: 18px;
}

.sidebar-nav > .sidebar-brand a {
  color: #999999;
}

.sidebar-nav > .sidebar-brand a:hover {
  color: #fff;
  background: none;
}

#menu-toggle {
    text-decoration: none;
    float: left;
    color: #15328c;
    padding-right: 15px;
}

@media (max-width:767px) {

#wrapper {
  padding-left: 0;
}

#sidebar-wrapper {
  left: 0;
}

#wrapper.active {
  position: relative;
  left: 250px;
}

#wrapper.active #sidebar-wrapper {
  left: 250px;
  width: 250px;
  transition: all 0.4s ease 0s;
}

#menu-toggle {
  display: inline-block;
}

}


</style>
<script>
$(document).ready(function() {
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
    //alert(1);
});
});
</script>
<script>
function regformhash(form, password, conf){
  //check each field has a value
  var p= document.createElement("input");
  form.appendChild(p);
  p.name="p";
  p.type="hidden";
  p.value=hex_sha512(password.value);
  //
  password.value="";
  conf.value="";
  form.submit();

  return true;
}
function formcheck(form, fp,fcp){
  fc=$('#chgpass').valid();
  if(fc=true){
    return regformhash(form,fp,fcp);
  }else{
    return false;
  }
}
</script>
<script>
$.validator.addMethod("pwdcheck",
function(value, element) {
   return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(value);
});
$().ready(function(){
  $("#chgpass").validate({
    rules:{
      newpass:{
        required: true,
        pwdcheck:true
      },
      renewpass:{
        required: true,
        equalTo: "#newpass"
      }
    },
    messages:{
      newpass:{
        required: "Please, Enter the Password",
        pwdcheck: "Passwords must be at least 6 characters long. Passwords must contain at least one number, one lowercase and one uppercase letter."
      },
      renewpass:{
        required:"Please, Enter the Confirm password",
        equalTo: "Password Not Same"
      }
    }
  });
});
</script>
</head>
<body>
  <!-- nav start -->
  <div id="wrapper">
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" style="background: #4169e1">
    <div class="container-fluid">
      <div class="navbar-header">
        <button id="#menu-toggle" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only"> Toggle navigation </span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      <!--  <a class="navbar-brand" href="#">
          <a id="menu-toggle" href="#" class="glyphicon glyphicon-align-justify btn-menu toggle">
        </a>-->
      <!-- <a id="menu-toggle" href="#" class="navbar-toggle collapsed btn-menu toggle"></a>-->
     <button id="menu-toggle" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#snav" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only"> Toggle navigation </span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
          <font style="color: Blue; font-size:35px;">S</font><font style="color: White; font-size:35px;">IMS</font>
        </a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Home</a></li>
        <li> <a href="Faculty.php">Faculty details</a></li>
        <li> <a href="Mark.php">Mark</a></li>
        <li> <a href="Subject.php">Subject</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-user" aria-hidden=true></span><?php echo htmlentities($_SESSION['username']) ?> <b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li><a href="#">View profile</a></li>
              <li class="divider"></li>
              <li><a href="admin_logout.php"><span class="glyphicon glyphicon-log-out"></span>Logout</a></li>
            </ul>
          </li>
        </ul>
    </div>
  </div>

  </nav>
  <!-- Nav end -->

  <div id="sidebar-wrapper">
            <nav id="spy">
              <div id="snav" class="navbar-collapse collapse">
              <ul class="sidebar-nav nav nav-tabs" id="tabs">
                <!--  <li class="sidebar-brand">

                </li>-->
                  <li class="active">
                      <a href="#profile" data-toggle="tab">
                          <span>Personal Information</span>
                      </a>
                  </li>
                  <li>
                      <a href="#accinform" data-toggle="tab">
                          <span>Account Information</span>
                      </a>
                  </li>
                  <li>
                      <a href="#changeuser" data-toggle="tab">
                          <span>Change username</span>
                      </a>
                  </li>
                  <li>
                      <a href="#changepass" data-toggle="tab">
                          <span>Change Password</span>
                      </a>
                  </li>
              </ul>
            </div>
          </nav>
      </div>
      <!--Page content-->
      <div id="page-content-wrapper">
          <div class="page-content">
              <div class="container-fluid">
                  <div class="row">
                    <div id="myTabContent" class="tab-content">
                      <div class="tab-pane active in" id="profile">
                      <div class="col-md-6">
                          <?php
                          $std_id=$_SESSION['user_id'];
                          $query=sprintf("SELECT Student_ID, Name, Father_name, Gender, DOB, Department, Batch, Line1, Line2, Line3, City, District, Pincode, Cell_Number FROM students_details WHERE Student_ID='%s'",$std_id);
                          $result=mysqli_query($mysqli,$query) or die('Query fail :'.mysqli_error());
                          $row=mysqli_fetch_array($result)
                          ?>
                          <div>
                            <div>
                              <label>Student ID : </label>
                              <label><?php echo $row[0]; ?> </lable>
                            </div>
                            <div>
                                <label>Name : </label>
                               <label><?php echo $row[1]; ?> </lable>
                            </div>
                            <div>
                                <label>Father name : </label>
                               <label><?php echo $row[2]; ?> </lable>
                            </div>
                            <div>
                                <label>Gender : </label>
                               <label><?php echo $row[3]; ?> </lable>
                            </div>
                            <div>
                                <label>D.O.B : </label>
                               <label><?php echo $row[4]; ?> </lable>
                            </div>
                            <div>
                                <label>Batch : </label>
                               <label><?php echo $row[6]; ?> </lable>
                            </div>
                            <?php
                            $query1=sprintf("SELECT Name FROM department WHERE Department_ID='%s'",$row[5]);
                            $result1=mysqli_query($mysqli, $query1) or die('Query fail: ' . mysqli_error());
                            $d=mysqli_fetch_array($result1)
                            ?>
                            <div>
                                <label>Department : </label>
                               <label><?php echo $d[0]; ?> </lable>
                            </div>
                            <div>
                                <div><label>Address : </label></div>
                               <div><label><?php echo $row[7].'<br>'; echo $row[8].'<br>'; echo $row[9].'<br>'; echo $row[10].'<br>'; echo $row[11].'<br>';echo $row[12].'<br>';?> </lable></div>
                            </div>
                            <div>
                                <label>Cell Number : </label>
                               <label><?php echo $row[13]; ?> </lable>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="accinform">
                      <div class="col-md-6">
                          <?php
                            $std_id=$_SESSION['user_id'];
                            $query=sprintf("SELECT Student_ID, Username, Email_ID, Add_admin FROM students WHERE Student_ID='%s'",$std_id);
                            $result= mysqli_query($mysqli, $query) or die('Query fail: ' . mysqli_error());
                            $row=mysqli_fetch_array($result);
                            $username=$row[1];
                           ?>
                           <div>
                         <div>
                             <label>Student ID : </label>
                             <label><?php echo $row[0]; ?> </lable>
                           </div>
                           <div>
                               <label>Username : </label>
                               <label><?php echo $row[1]; ?> </lable>
                             </div>
                             <div>
                                 <label>Email ID : </label>
                                 <label><?php echo $row[2]; ?> </lable>
                               </div>
                         </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="changeuser">
                      <div class="col-md-6">
                          <?php
                          if (!empty($error_msg1)) {
                            echo '<div class="alert alert-danger alert-dismissible" role="alert">';
                            echo '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
                            echo '<strong>'.$error_msg1.'</strong>';
                            echo '</div>';
                            echo '<script type="text/javascript">';
                            echo '$("#tabs li:eq(2) a").tab("show");';
                            echo '</script> ';
                          }
                          if(!empty($success_msg)){
                            echo $success_msg;
                            echo '<script type="text/javascript">';
                            echo '$("#tabs li:eq(2) a").tab("show");';
                            echo '</script> ';
                          }
                          ?>
                          <form id="chguser" name="chguser" class="form-horizontal" action="<?php echo esc_url($_SERVER['REQUEST_URI']); ?>" method="POST">
                            <fieldset>
                              <div id="legend">
                                <legend>Change username</legend>
                              </div>
                              <div class="control-group">
                                <div class="controls">
                                  <label>Current Username : </label>
                                  <label><?php echo $username ?></label>
                                </div>
                              </div>
                              <div class="control-group">
                                <!-- new username-->
                                <label class="control-label" for="username">New Username</label>
                                <div class="controls">
                                  <input type="text" maxlength="20" id="newuser" name="newuser" class="input-xlarge" required>
                                </div>
                              </div>
                              <div class="control-group">
                                <!-- Button -->
                                <div class="controls">
                                  <!-- <button id="submit" class="btn btn-success" >create a Account </button> -->
                                  <button id="Submit" class="btn btn-success">Update Username</button>
                                </div>
                              </div>
                            </fieldset>
                            </form>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="changepass">
                      <div class="col-md-6">

                            <?php
                            if (!empty($error_msg2)) {
                              echo '<div class="alert alert-danger alert-dismissible" role="alert">';
                              echo '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
                              echo '<strong>'.$error_msg2.'</strong>';
                              echo '</div>';
                              echo '<script type="text/javascript">';
                              echo '$("#tabs li:eq(2) a").tab("show");';
                              echo '</script> ';
                            }
                            if(!empty($success_msg2)){
                              echo $success_msg2;
                              echo '<script type="text/javascript">';
                              echo '$("#tabs li:eq(2) a").tab("show");';
                              echo '</script> ';
                            }
                            ?>
                            <form id="chgpass" name="chgpass" class="form-horizontal" action="<?php echo esc_url($_SERVER['REQUEST_URI']); ?>" method="POST">
                              <fieldset>
                                <div id="legend">
                                  <legend>Change Password</legend>
                                </div>
                                <div class="control-group">
                                  <label>New Password : </label>
                                    <div class="controls">
                                      <input type="password" id="newpass" name="newpass" class="input-xlarge" required>
                                    </div>
                                </div>
                                <div class="control-group">
                                  <!-- new username-->
                                  <label class="control-label" for="username">Re-type Password : </label>
                                  <div class="controls">
                                    <input type="password" id="renewpass" name="renewpass" class="input-xlarge" required>
                                  </div>
                                </div>
                                <div class="control-group">
                                  <!-- Button -->
                                  <div class="controls">
                                    <!-- <button id="submit" class="btn btn-success" >create a Account </button> -->
                                    <button id="button" class="btn btn-success" onclick="return formcheck(this.form,
                                                      this.form.newpass,
                                                      this.form.renewpass);">Update Password</button>
                                  </div>
                                </div>
                              </fieldset>
                              </form>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
</body>
</html>
