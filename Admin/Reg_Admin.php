<?php
include_once '../database/connection.php';
include_once 'phpfunction.php';
include_once 'reg.adm.php';
sec_session_start();

$error_msg1="";
$success_msg="";

if(isset($_POST['Dep_Names'])){
  $dep_Name=filter_input(INPUT_POST,'Dep_Names',FILTER_SANITIZE_STRING);
  if($del_stmt=$mysqli->prepare("DELETE FROM department WHERE department_ID=?"))
  {
  $del_stmt->bind_param('s',$dep_Name);
  if(!$del_stmt->execute()){
    $error_msg1='<p> Database error line 16</p>';
  }
  $success_msg= '<div class="alert alert-success alert-dismissable fade in" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Success!</strong> You have been Delete Department in successfully!
  </div>';
}
}

if(isset($_POST['Department_ID'],$_POST['Department_Name'])){
  $dep_ID=filter_input(INPUT_POST,'Department_ID',FILTER_SANITIZE_STRING);
  $dep_Name=filter_input(INPUT_POST,'Department_Name',FILTER_SANITIZE_STRING);
  $prep_stmt="SELECT SINo FROM department WHERE Department_ID = ? LIMIT 1";
  $stmt=$mysqli->prepare($prep_stmt);

  if($stmt){
    $stmt->bind_param('s',$dep_ID);
    $stmt->execute();
    $stmt->store_result();
    if($stmt->num_rows == 1){
      $error_msg1='<Strong>Error!</strong>A Department Name is already exists.';
      $stmt->close();
    }
  }else{
    $error_msg1='<p>Database error line 22</p>';
    $stmt->close();
  }
  $prep_stmt="SELECT SINo FROM department WHERE Name = ? LIMIT 1";
  $stmt=$mysqli->prepare($prep_stmt);
  if($stmt){
    $stmt->bind_param('s',$dep_Name);
    $stmt->execute();
    $stmt->store_result();
    if($stmt->num_rows == 1){
      $error_msg1='<Strong>Error!</strong>A Department Name is already exists.';
      $stmt->close();
    }
  }else{
    $error_msg1='<p>Database error line 36</p>';
    $stmt->close();
  }
  if(empty($error_msg1)){
    if($insert_stmt=$mysqli->prepare("INSERT INTO department (Department_ID, name) values(?,?)")){
      $insert_stmt->bind_param("ss",$dep_ID,$dep_Name);
      if(!$insert_stmt->execute()){
         header('Location: ../error.php?err=Registration failure: INSERT');
         echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
       }
    }

    $success_msg= '<div class="alert alert-success alert-dismissable fade in" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <strong>Success!</strong> You have been Department registered in successfully!
    </div>';

  }

}

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
    <script type="text/JavaScript" src="../js/sha512.js"></script>
    <script type="text/JavaScript" src="../js/forms.js"></script>
    <script src="../js/jquery.validate.js"></script>
    <script src="../js/jquery-3.1.1.js"></script>

    <link href="../style.css" rel="stylesheet">
  <style>
  body{
    font-family: "Times New Roman", Times, serif;
  }
  </style>
  <script type="text/javascript">
  function formdelete(fd,fn){
    if(fn.value != ""){
      var Answer= confirm("Do you want to delete this "+fn.value+" Department?");
      if(Answer){
        $('#tabs li:eq(1) a').tab('show');
        fd.submit();
        return true;
    }else {
      $('#tabs li:eq(1) a').tab('show');
      return false;
    }
    }
    $('#tabs li:eq(1) a').tab('show');
    return false;
  }
  </script>
  <script>
    window.setTimeout(function() {
      $(".alert").fadeTo(500, 0).slideUp(500, function(){
          $(this).remove();
      });
  }, 4000);
    </script>
  <script>
  $.validator.addMethod("DepartIDcheck",
  function(value, element) {
     return /^[A-Za-z0-9]+$/.test(value);
  });
  $.validator.addMethod("DepartNamecheck",
  function(value, element) {
     return /^[A-Za-z]+$/.test(value);
  });
  $().ready(function(){
    $("#regdep").validate({
      rules:{
        Department_ID:{
          required:true,
          DepartIDcheck:true
        },
        Department_Name:{
          required:true,
          DepartNamecheck: true
        }
      },
      messages:{
        Department_ID:{
          required:"Please, Enter the Deparment ID",
          DepartIDcheck:"Deparment ID only contains letter and Number."
        },
        Department_Name:{
          required:"Please, Enter the DepartmentName",
          DepartNamecheck:"Deparment Name only contains Lettes."
        }
      },
      submitHandler: function(form){
        if($("#regdep").valid())
        {
          form.submit();
        }
      }
    });
  });
  </script>
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
        <li> <a href="Reg_Student.php">Add Student</a></li>
        <li> <a href="Reg_Faculty.php">Add Faculty</a></li>
        <li class="Active"> <a href="#">Add Admin</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-user" aria-hidden=true></span><?php echo htmlentities($_SESSION['username']) ?> <b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li><a href="index.php">View profile</a></li>
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
        <div class="span12">
    		<div class="" id="loginModal">
              <div class="modal-header">
              <!--  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> -->
                <h3>Administration Account</h3>
              </div>
              <div class="modal-body">
                <div class="well">
                  <ul id="tabs" class="nav nav-tabs">
                    <li class="active"><a href="#login" data-toggle="tab">Create Administration Account</a></li>
                    <li><a href="#department" data-toggle="tab">Departments</a></li>
                    <li><a href="#create" data-toggle="tab">Show Account</a></li>
                  </ul>
                  <div id="myTabContent" class="tab-content">
                    <div class="tab-pane active in" id="login">
                      <?php
                      if (!empty($error_msg)) {
                        echo '<div class="alert alert-danger alert-dismissible" role="alert">';
                        echo '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
                        echo '<strong>'.$error_msg.'</strong>';
                        echo '</div>';
                      }
                      ?>
                      <form id="loginForm" name="registration_form" class="form-horizontal" action="<?php echo esc_url($_SERVER['REQUEST_URI']); ?>" method="POST">
                        <fieldset>
                          <div id="legend">
                            <legend class="">Create Account</legend>
                          </div>
                          <div class="control-group">
                            <!-- Username -->
                            <label class="control-label"  for="username">Username</label>
                            <div class="controls">
                              <input type="text" id="username" name="username" placeholder="" class="input-xlarge">
                            </div>
                          </div>
                          <div class="control-group">
                            <!-- Email -->
                            <label class="control-label"  for="Email">Email ID</label>
                            <div class="controls">
                              <input type="text" id="email" name="email" placeholder="" class="input-xlarge">
                            </div>
                          </div>
                          <div class="control-group">
                            <!-- Password-->
                            <label class="control-label" for="password">Password</label>
                            <div class="controls">
                              <input type="password" id="password" name="password" placeholder="" class="input-xlarge">
                            </div>
                          </div>
                          <div class="control-group">
                            <!-- Confiremed Password-->
                            <label class="control-label" for="confirm_password">Confirm Password</label>
                            <div class="controls">
                              <input type="password" id="confirmpwd" name="confirmpwd" placeholder="" class="input-xlarge">
                            </div>
                          </div>


                          <div class="control-group">
                            <!-- Button -->
                            <div class="controls">
                              <button class="btn btn-success" onclick="return regformhash(this.form,
                                              this.form.username,
                                              this.form.email,
                                              this.form.password,
                                              this.form.confirmpwd);">Create a Account</button>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                    <div class="tab-pane fade" id="department">
                      <div class="row">
                        <?php
                        if (!empty($error_msg1)) {
                          echo '<div class="alert alert-danger alert-dismissible" role="alert">';
                          echo '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
                          echo '<strong>'.$error_msg1.'</strong>';
                          echo '</div>';
                          echo '<script type="text/javascript">';
                          echo '$("#tabs li:eq(1) a").tab("show");';
                          echo '</script> ';
                        }
                        if(!empty($success_msg)){
                          echo $success_msg;
                          echo '<script type="text/javascript">';
                          echo '$("#tabs li:eq(1) a").tab("show");';
                          echo '</script> ';
                        }
                        ?>
                      <div class="col-xs-12 col-sm-3">

                        <form id="regdep" name="registratrion" class="form-horizontal" action="<?php echo esc_url($_SERVER['REQUEST_URI']); ?>" method="POST" >
                          <fieldset>
                            <div id="legend">
                              <legend>Add Departments</legend>
                            </div>
                            <div class="control-group">
                              <!-- Department ID-->
                              <label class="control-label" for="Department_ID">Department ID</label>
                              <div class="controls">
                                <input type="text" maxlength="10" id="Department_ID" name="Department_ID" class="input-xlarge" required>
                              </div>
                            </div>
                            <div class="control-group">
                              <!-- Department ID-->
                              <label class="control-label" for="Department_Name">Department Name</label>
                              <div class="controls">
                                <input type="text"maxlength="20" id="Department_Name" name="Department_Name" class="input-xlarge" required>
                              </div>
                            </div>
                            <div class="control-group">
                              <!-- Button -->
                              <div class="controls">
                                <!-- <button id="submit" class="btn btn-success" >create a Account </button> -->
                                <button id="Submit" class="btn btn-success">Create a Department</button>
                              </div>
                            </div>
                          </fieldset>
                        </form>
                      </div>
                      <div class="col-xs-12 col-sm-3">
                        <form id="deldep" name="Delete_department" class="form-horizontal" action="<?php echo esc_url($_SERVER['REQUEST_URI']); ?>" method="POST">
                          <fieldset>
                            <div id="legend">
                              <legend>Delete Deparment</legend>
                            </div>
                            <div class="control-group">
                              <!-- select department -->
                              <label class="control-label" for="Department">Deparment Name</label>
                              <div clss="controls">
                                <select name="Dep_Names" id="Dep_Names">
                                  <option value="">Select</option>
                                  <?php
                                  $deresult = mysqli_query($mysqli, 'select department_ID, Name from department') or die('Query fail: ' . mysqli_error());
                                    while($row=mysqli_fetch_array($deresult)){
                                      echo '<option value='.$row[0].'>'.$row[1].'</option>';
                                    }
                                  ?>
                                </select>
                              </div>
                            </div>
                                <div class="control-group">
                                  <!-- Button -->
                                  <div class="controls">
                                    <!-- <button id="submit" class="btn btn-success" >create a Account </button> -->
                                    <button type="button" class="btn btn-success" onclick="formdelete(this.form,this.form.Dep_Names)">Delete Department</button>
                                  </div>
                                </div>


                          </fieldset>
                        </form>
                        </div>
                      <div class="col-xs-12 col-sm-6">
                        <legend>Department Details</legend>
                        <table class="table table-striped table-bordered table-hover" id="dataTables-departmet">
                          <thead>
                            <tr>
                              <th>Department ID</th>
                              <th>Department Name</th>
                            </tr>
                          </thead>
                          <?php
                            $result = mysqli_query($mysqli, 'select Department_ID,Name from Department') or die('Query fail: ' . mysqli_error());
                            ?>
                            <tbody>
                              <?php while ($row = mysqli_fetch_array($result)) { ?>
                                <tr>
                                  <td><?php echo $row[0]; ?></td>
                                  <td><?php echo $row[1]; ?></td>
                                </tr>
                                <?php } ?>
                              </tbody>
                            </table>
                      </div>
                    </div>
                    </div>

                    <div class="tab-pane fade" id="create">
                      <form id="tab">

                        <table class="table table-striped table-bordered table-hover" id="dataTables-Admin">
                          <thead>
                            <tr>
                              <th>SI.No.</th>
                              <th>Admin Name</th>
                              <th>E-Mail ID</th>
                            </tr>
                          </thead>
                          <?php
                            $result = mysqli_query($mysqli, 'select Admin_ID, Admin_Name, email from Administration') or die('Query fail: ' . mysqli_error());
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
            </div>
        </div>
	</div>
</div>
</div>
</body>
</html>
