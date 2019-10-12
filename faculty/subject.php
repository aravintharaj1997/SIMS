<?php
include_once '../database/connection.php';
include_once 'phpfunction.php';
//include_once 'reg.adm.php';
sec_session_start();

$error_msg1="";
$success_msg="";

if(isset($_POST['subj'])){
  $sub_Name=filter_input(INPUT_POST,'subj',FILTER_SANITIZE_STRING);


  if($del_stmt=$mysqli->prepare("DELETE FROM subjects WHERE Subject_Code=?"))
  {
    $del_stmt->bind_param('s',$sub_Name);
  if(!$del_stmt->execute()){

    $error_msg1='<p> Database error line 16</p>';
  }

  $success_msg= '<div class="alert alert-success alert-dismissable fade in" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Success!</strong> You have been Delete Department in successfully!
  </div>';
}
}

if(isset($_POST['Subject_Code'],$_POST['Subject_Name'],$_POST['dep'],$_POST['sem'])){
  $subject_code=filter_input(INPUT_POST,'Subject_Code',FILTER_SANITIZE_STRING);
  $subject_name=filter_input(INPUT_POST,'Subject_Name',FILTER_SANITIZE_STRING);
  $dep_Name=filter_input(INPUT_POST,'dep',FILTER_SANITIZE_STRING);
  $s=filter_input(INPUT_POST,'sem',FILTER_SANITIZE_STRING);
  $prep_stmt="SELECT SINo FROM subjects WHERE Subject_Code = ? LIMIT 1";
  $stmt=$mysqli->prepare($prep_stmt);
  if($stmt){
    $stmt->bind_param('s',$subject_code);
    $stmt->execute();
    $stmt->store_result();
    if($stmt->num_rows == 1){
      $error_msg1='<Strong>Error!</strong>A Subject Code is already exists.';
      $stmt->close();
    }
  }else{
    $error_msg1='<p>Database error line 40</p>';
    $stmt->close();
  }
  $prep_stmt="SELECT SINo FROM subjects WHERE Subject_Name = ? LIMIT 1";
  $stmt=$mysqli->prepare($prep_stmt);
  if($stmt){
    $stmt->bind_param('s',$subject_Name);
    $stmt->execute();
    $stmt->store_result();
    if($stmt->num_rows == 1){
      $error_msg1='<Strong>Error!</strong>A subject Name is already exists.';
      $stmt->close();
    }
  }else{
    $error_msg1='<p>Database error line 54</p>';
    $stmt->close();
  }
  if(empty($error_msg1)){
    if($insert_stmt=$mysqli->prepare("INSERT INTO subjects(Subject_Code, Subject_Name,Department_ID, Semester) values(?,?,?,?)")){
      $insert_stmt->bind_param("sssi",$subject_code,$subject_name,$dep_Name,$s);
      if(!$insert_stmt->execute()){
        // header('Location: ../error.php?err=Registration failure: INSERT');
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
        fd.submit();
        return true;
    }else {

      return false;
    }
    }

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
  $.validator.addMethod("OptCheck",
  function(value){
    return (value!='0');
  });
  $.validator.addMethod("subjectIDcheck",
  function(value, element) {
     return /^[A-Za-z0-9]+$/.test(value);
  });
  $.validator.addMethod("subjectNamecheck",
  function(value, element) {
     return /^[A-Za-z]+$/.test(value);
  });
  $().ready(function(){
    $("#addsubject").validate({
      rules:{
        Subject_Code:{
          required:true,
          subjectIDcheck:true
        },
        Subject_Name:{
          required:true,
          subjectNamecheck: true
        },
        sem:{
          required:true,
          OptCheck:true
        }
      },
      messages:{
        Subject_Code:{
          required:"Please, Enter the Deparment ID",
          subjectIDcheck:"Deparment ID only contains letter and Number."
        },
        Subject_Name:{
          required:"Please, Enter the DepartmentName",
          subjectNamecheck:"Deparment Name only contains Lettes."
        },
        sem:{
          required:"Please, Select any one.",
          OptCheck:"Please, Select any one."
        }
      },
      submitHandler: function(form){
        if($("#addsubject").valid())
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
        <li class="active"> <a href="#">Subject</a></li>
        <li><a href="mark.php">Semester Mark</a></li>
        
      </ul>
      <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-user" aria-hidden=true></span><?php echo htmlentities($_SESSION['username']) ?> <b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li><a href="#">Change Username</a></li>
              <li><a href="#">Change Password</a></li>
              <li><a href="#">Update Profile</a></li>
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
            <!--  <div class="modal-header"> -->
              <!--  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> -->
            <!--    <h3>Subjects</h3>
            </div> -->
              <div class="modal-body">
                <div class="well">
                  <ul id="tabs" class="nav nav-tabs">
                    <li class="active"><a href="#Subject" data-toggle="tab">Subject</a></li>
            <!--        <li><a href="#create" data-toggle="tab">need create</a></li> -->
                  </ul>
                  <div id="myTabContent" class="tab-content">
                    <div class="tab-pane active in" id="Subject">
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
                      <div class="col-xs-6 col-sm-3">

                        <form id="addsubject" name="registratrion" class="form-horizontal" action="<?php echo esc_url($_SERVER['REQUEST_URI']); ?>" method="POST" >
                          <fieldset>
                          <div id="legend">
                              <legend>Add Subjects</legend>
                            </div>
                            <div class="control-group">
                              <!-- Department ID-->
                              <label class="control-label" for="Subject_code">Subject Code</label>
                              <div class="controls">
                                <input type="text" maxlength="10" id="Subject_Code" name="Subject_Code" class="input-xlarge" required>
                              </div>
                            </div>
                            <div class="control-group">
                              <!-- Department ID-->
                              <label class="control-label" for="Subject_Name">Subject Name</label>
                              <div class="controls">
                                <input type="text" maxlength="20" id="Subject_Name" name="Subject_Name" class="input-xlarge" required>
                              </div>
                            </div>
                            <div class="control-group">
                              <!-- select semester -->
                              <label class="control-label" for="Department">Semester</label>
                              <div class="controls">
                                <select name="sem" id="sem">
                                  <option value="0">Select</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                </select>
                              </div>
                            </div>
                            <div class="control-group">
                            <div class="controls">
                              <input type="hidden" id="dep" name="dep" value="<?php echo $_SESSION['Department']; ?>">
                            </div>
                          </div>
                            <div class="control-group">
                              <!-- Button -->
                              <div class="controls">
                                <!-- <button id="submit" class="btn btn-success" >create a Account </button> -->
                                <button id="Submit" class="btn btn-success">Create Subject</button>
                              </div>
                            </div>
                          </fieldset>
                        </form>
                      </div>
                      <div class="col-xs-6 col-sm-3">
                        <form id="delsub" name="Delete_department" class="form-horizontal" action="<?php echo esc_url($_SERVER['REQUEST_URI']); ?>" method="POST">
                          <fieldset>
                            <div id="legend">
                              <legend>Delete Subject</legend>
                            </div>
                            <div class="control-group">
                              <!-- select department -->
                              <label class="control-label" for="Department">Subject Name</label>
                              <div clss="controls">
                                <select name="subj" id="subj">
                                  <option value="">Select (Code - Name - Semester)</option>
                                  <?php
                                  $deresult = mysqli_query($mysqli, 'select Subject_Code, Subject_Name, semester from subjects') or die('Query fail: ' . mysqli_error());
                                    while($row=mysqli_fetch_array($deresult)){
                                      echo '<option value='.$row[0].'>'.$row[0].' - '.$row[1].' - '.$row[2].'</option>';
                                    }
                                  ?>
                                </select>
                              </div>
                            </div>
                                <div class="control-group">
                                  <!-- Button -->
                                  <div class="controls">
                                    <!-- <button id="submit" class="btn btn-success" >create a Account </button> -->
                                    <button type="button" class="btn btn-success" onclick="formdelete(this.form,this.form.subj);">Delete Department</button>
                                  </div>
                                </div>


                          </fieldset>
                        </form>
                        </div>
                      <div class="col-xs-12 col-sm-6">
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

                  <!--  <div class="tab-pane fade" id="create">

                  </div>-->
                </div>
              </div>
            </div>
        </div>
	</div>
</div>
</div>
</body>
</html>
