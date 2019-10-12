<?php
include_once '../database/connection.php';
include_once 'phpfunction.php';
include_once 'regmark.php';
sec_session_start();



if (login_check($mysqli) == true) {
    $logged = 'in';
} else {
    header('Location: Login.php');
}
$batch = "";
$selection="";
$edit="";
if(isset($_POST['editinternal'],$_POST['editexternal'])){
$ei=$_POST['editinternal'];
$ee=$_POST['editexternal'];
$s=$_POST['sub'];
}
if(isset($_POST['editStudent_ID'])){
  $edit=$_POST['editStudent_ID'];
}
if(isset($_POST['batch'])){
  $b=filter_input(INPUT_POST,'batch',FILTER_VALIDATE_INT);
  $batch=$b;
  $sem=filter_input(INPUT_POST,'sem',FILTER_VALIDATE_INT);
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
    <link href="../css/bootstrap-datepicker.css" rel="stylesheet">
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
    <script src="../js/bootstrap-datepicker.js" ></script>
    <link href="../style.css" rel="stylesheet">
  <style>
  body{
    font-family: "Times New Roman", Times, serif;
  }
  </style>
  <script>
  function next1(f){
    var check=document.getElementById("batch").value;
    var semcheck=document.getElementById("sem").value;
    if(check!="" && semcheck!=0){
      f.submit();
      return true;
  }else{
    return false;
  }
  }

  </script>
  <script>
    window.setTimeout(function() {
      $(".alert").fadeTo(500, 0).slideUp(500, function(){
          $(this).remove();
      });
  }, 4000);
    </script>
  <script type="text/javascript">
          // When the document is ready
          $(document).ready(function () {

              $('#batch').datepicker({
                  minViewMode: 'years',
                  autoclose: true,
                   format: 'yyyy'
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
        <li> <a href="Subject.php">Subject</a></li>
        <li class="active"> <a href="#">Semester Mark</a></li>
        
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
        <div class="modal-body">
          <div class="well">
            <ul id="tabs" class="nav nav-tabs">
              <li class="active" data-toggle="tab"><a href="#addmarks" data-toggle="tab">Add Marks</a></li>
              <li data-toggle="tab"><a href="#edit" data-toggle="tab">Edit Marks</a></li>
            </ul>
            <div id="myTabContent" class="tab-content">
              <div class="tab-pane active in" id="addmarks">
                <div class="row">
                  <!-- under devlope ---->
                  <?php
                  if (!empty($error_msg1)) {
                    echo '<div class="alert alert-danger alert-dismissible" role="alert">';
                    echo '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
                    echo '<strong>'.$error_msg1.'</strong>';
                    echo '</div>';
                  }
                  if(!empty($success_msg)){
                    echo $success_msg;
                    $batch="";
                    $_POST["sem"]="";
                    $_POST["batch"]="";
                  }
                  ?>
                  <div class="col-xs-12">
                  <form id="marks" name="marks" class="form-horizontal" action="<?php echo isset($_POST["batch"]) ? esc_url($_SERVER['REQUEST_URI']) : ''; ?>" method="post">
                    <fieldset>
                      <div id="legend">
                        <legend>Marks</legend>
                      </div>
                      <div class="control-group">
                        <!-- select batch -->
                        <label class="control-label" for="Department" >Batch</label>
                        <div class="controls">
                            <input type="text" id="batch" name="batch" value="<?php echo isset($_POST["batch"]) ? $_POST["batch"] : ''; ?>"  class="input-xlarge"  required>
                        </div>
                      </div>
                      <div class="control-group">
                        <!-- hidden Department -->

                        <div class="controls">
                            <input type="hidden" id="dep" name="dep" value="<?php echo $_SESSION['Department'] ?>" class="input-xlarge"  required>
                        </div>
                      </div>
                      <div class="control-group">
                        <!-- hidden user -->

                        <div class="controls">
                            <input type="hidden" id="user" name="user" value="<?php echo $_SESSION['user'] ?>" class="input-xlarge"  required>
                        </div>
                      </div>
                      <div class="control-group">
                        <!-- select semester -->
                        <label class="control-label" for="Department" >Semester</label>
                        <div class="controls">
                          <select name="sem" id="sem" required>
                            <option value="">Select</option>
                            <option value="1"<?php if(isset($_POST["sem"]) && $_POST["sem"] == "1") print(" selected")?>>1</option>
                            <option value="2"<?php if(isset($_POST["sem"]) && $_POST["sem"] == "2") print(" selected")?>>2</option>
                            <option value="3"<?php if(isset($_POST["sem"]) && $_POST["sem"] == "3") print(" selected")?>>3</option>
                            <option value="4"<?php if(isset($_POST["sem"]) && $_POST["sem"] == "4") print(" selected")?>>4</option>
                            <option value="5"<?php if(isset($_POST["sem"]) && $_POST["sem"] == "5") print(" selected")?>>5</option>
                            <option value="6"<?php if(isset($_POST["sem"]) && $_POST["sem"] == "6") print(" selected")?>>6</option>
                          </select>
                        </div>
                      </div>

                      <?php
                      if(!empty($batch)){
                        echo '
                        <div class="control-group">
                          <!-- select department -->
                          <div clss="controls">
                            <select name="subj" id="subj" required="Select the subject">
                              <option value="">Select (Code - Name)</option>'?>
                              <?php
                              $query=sprintf("SELECT Subject_Code, Subject_Name FROM subjects WHERE semester='%s'",$sem);
                              $deresult = mysqli_query($mysqli, $query) or die('Query fail: ' . mysqli_error());
                                while($row=mysqli_fetch_array($deresult)){
                                  echo '<option value='.$row[0].'>'.$row[0].' - '.$row[1].'</option>';
                                }
                              ?>
                            </select>
                          </div>
                        </div>
                        <?php
                        echo '<div class="control-group">
                              <label class="control-label">*If the Student is Absent in internal/external give value -1 in internal/external</label>
                              </div>
                        <legend>Subject Details</legend>
                        <table class="table table-striped table-bordered table-hover" id="dataTables-departmet">
                          <thead>
                            <tr>
                              <th>Student ID</th>
                              <th>Student Name</th>
                              <th>Internal</th>
                              <th>External</th>
                            </tr>
                          </thead>';?>
                          <?php
                            $query=sprintf("SELECT Student_ID, Name FROM students_details WHERE Batch='%s'",$batch);
                            $result = mysqli_query($mysqli, $query) or die('Query fail: ' . mysqli_error());
                            ?>
                            <tbody>
                              <?php while ($row = mysqli_fetch_array($result)) { ?>
                                <tr>
                                  <div class="control-group">
                                    <div class="controls">
                                  <td><?php echo $row[0]; ?><input name="stu_id[]" id="stu_id[]" type="hidden" value="<?php echo $row[0]; ?>"></td>
                                </div>
                              </div>
                                  <td><?php echo $row[1]; ?></td>
                                  <div class="control-group">
                                    <div class="controls">
                                  <td><input name="stu_int[]" id="stu_int[]" type="number" min="-1" max="25" required="Enter the number"></td>
                                </div>
                              </div>
                                  <div class="control-group">
                                    <div class="controls">
                                  <td><input name="stu_ext[]" id="stu_ext[]" type="number" min="-1" max="75" required="Enter the number"></td>
                                </div>
                              </div>
                                </tr>
                                <?php } ?>
                  <?php   echo      '</tbody>
                            </table>';
                      }
                      ?>
                      <div class="control-group">
                        <button type="submit" class="btn btn-success" onclick="next1(this.form)" <?php if(isset($_POST["batch"])) print("style='visibility:hidden;'") ?> >Next</button>
                      </div>
                      <div class="control-group">
                        <!-- Button -->
                        <div class="controls">
                          <!-- <button id="submit" class="btn btn-success" >create a Account </button> -->
                          <button type="submit" class="btn btn-success" <?php if(!(isset($_POST["batch"]))) print("style='visibility:hidden;'") ?>>Submit</button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>

                </div>
              </div>
              <div class="tab-pane fade" id="edit">
              <?php  if(!empty($_POST["editStudent_ID"])){
                  echo '<script type="text/javascript">';
                  echo '$("#tabs li:eq(1) a").tab("show");';
                  echo '</script> ';
                }
                ?>
                <?php
                if (!empty($editerror_msg)) {
                  echo '<div class="alert alert-danger alert-dismissible" role="alert">';
                  echo '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
                  echo '<strong>'.$editerror_msg.'</strong>';
                  echo '</div>';
                }
                if(!empty($editsuccess_msg)){
                  echo $editsuccess_msg;
                  $edit="";
                  $_POST["editStudent_ID"]="";
                }
                ?>
                  <form id="editmark" name="mark" action="<?php echo isset($_POST["editStudent_ID"]) ? esc_url($_SERVER['REQUEST_URI']) : ''; ?>" method="post">
                    <fieldset>
                      <div id="legend">
                        <legend>Marks</legend>
                      </div>
                      <div class="control-group">
                        <!-- select batch -->
                        <label class="control-label" for="subject" >Student ID</label>
                        <div class="controls">
                            <input type="text" id="editStudent_ID" name="editStudent_ID" value="<?php echo isset($_POST["editStudent_ID"]) ? $_POST["editStudent_ID"] : ''; ?>"  class="input-xlarge"  required>
                        </div>
                      </div>
                      <div class="control-group">
                        <!-- hidden user -->

                        <div class="controls">
                            <input type="hidden" id="edituser" name="edituser" value="<?php echo $_SESSION['user'] ?>" class="input-xlarge"  required>
                        </div>
                      </div>
                      <?php if(isset($_POST["editStudent_ID"]) && !empty($edit)) {
                        $stu=$_POST["editStudent_ID"];?>


                        <div class="control-group">
                          <label class="control-group" for="subject"> subject</label>
                          <div class="controls">
                            <select name="sub" id="sub" required="Select the subject">
                              <option value="">Select (Code - Name - sem)</option>';
                              <?php
                              $query=sprintf("SELECT Subject_Code, Student_ID FROM marks WHERE Student_ID='%s'",$stu);
                              $subresult=mysqli_query($mysqli,$query) or die('Query fail:' . mysqli_error());
                              while($row=mysqli_fetch_array($subresult)){
                                $query2="SELECT Subject_Name, Semester FROM subjects WHERE Subject_Code=? LIMIT 1";
                                $stmt=$mysqli->prepare($query2);
                                $stmt->bind_param("s",$row[0]);
                                if($stmt->execute()){
                                $stmt->bind_result($sn,$ssem);
                                $stmt->fetch();
                                echo '<option value='.$row[0].'>'.$row[0].' - '.$sn.' - '.$ssem.'</option>';
                              }
                              else {
                                echo '<option value='.$row[0].'>error</option>';
                              }
                              $stmt->close();
                              }
                              ?>
                            </select>
                          </div>
                        </div>
                        <div class="control-group">
                          <label class="control-group" for="internal">internal</label>
                          <div class="controls">
                          <input type="number" min="-1" max="25" id="editinternal" name="editinternal"   class="input-xlarge">
                        </div>
                      </div>
                      <div class="control-group">
                        <label class="control-group" for="extenal">external</label>
                        <div class="controls">
                          <input type="number" min="-1" max="75" id="editexternal" name="editexternal"   class="input-xlarge">
                        </div>
                      </div>
                      <?php } ?>

                      <div class="control-group">
                        <div class="controls">
                        <button type="submit" class="btn btn-success" <?php if(isset($_POST["editStudent_ID"])) print("style='visibility:hidden;'") ?> >Next</button>
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="controls">
                        <button type="submit" class="btn btn-success" <?php if(!isset($_POST["editStudent_ID"])) print("style='visibility:hidden;'") ?> >Submit</button>
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
  </div>
</body>
</html>
