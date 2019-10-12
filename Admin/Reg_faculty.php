<?php
include_once '../database/connection.php';
include_once 'phpfunction.php';
include_once 'reg.fac.php';

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

  <!--  <link href="../css/bootstrapValidator.css" rel="stylesheet">
    <link href="../css/bootstrapValidator.min.css" rel="stylesheet"> -->
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
    <script src="../js/faculty_form.js"></script>
    <script src="../js/sha512.js"></script>
    <link href="../style.css" rel="stylesheet">
<!--  <script src="../js/bootstrapValidator.js"></script>
  <script src="../js/bootstrapValidator.min.js"></script> -->
  <script src="../js/jquery.validate.js"></script>
  <script src="../js/jquery-3.1.1.js"></script>

  <script src="../js/bootstrap-datepicker.js" ></script>
  <link href="../css/bootstrap-datepicker.css" rel="stylesheet">

<script>
  window.setTimeout(function() {
    $(".alert").fadeTo(500, 0).slideUp(500, function(){
        $(this).remove();
    });
}, 4000);
  </script>
  <style>
  body{
    font-family: "Times New Roman", Times, serif;
  }
  </style>
  <script>
  var fc;
  function formcheck(jf,jff,ju,je,jp,jcp,ja){
    fc=$('#regform').valid();
    if(fc==true){
    return regformhash(jf,jff,ju,je,jp,jcp,ja);
  }else {
    return false;
    }
  }

  $.validator.addMethod("OptCheck",
  function(value){
    return (value!='0');
  });
  $.validator.addMethod("Numcheck",
  function(value, element) {
     return /^[0-9]+$/.test(value);
  });
  $.validator.addMethod("Namecheck",
  function(value, element) {
     return /^[A-Za-z]+$/.test(value);
  });
  $.validator.addMethod("stuIDcheck",
  function(value, element) {
     return /^[A-Za-z0-9]+$/.test(value);
  });
  $.validator.addMethod("pwdcheck",
  function(value, element) {
     return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(value);
  });
  $().ready(function(){
    $("#regform").validate({
      rules:{
        faculty_ID:{
          required:true,
          stuIDcheck:true
        },
        username:{
          required:true
        },
        email:{
          required:true,
          email:true
        },
        password:{
          required: true,
          pwdcheck:true
        },
        confirmpwd:{
          required: true,
          equalTo: "#password"
        },
        name:{
          required: true,
          Namecheck: true
        },
        Designation:{
          required:true,
          Namecheck:true
        },
        gender:{
          required:true,
          OptCheck:true
        },
        Experience:{
          required:true,
          minlength: 2,
          Numcheck:true
        },
        Dep_Names:{
          required:true,
          OptCheck:true
        },
        Line_1:{
          required: true
        },
        City:{
          required: true
        },
        District:{
          required: true
        },
        pincode:{
          required: true,
          minlength: 6,
          Numcheck:true
        },
        cell_Number:{
          required: true,
          minlength: 10,
          Numcheck:true
        }
      },
      messages:{
        faculty_ID:{
          required: "Please, Enter the Student ID",
          stuIDcheck: "Student id must contain only letters & Number"
        },
        username:{
          required: "Please, Enter the Username"
        },
        email:{
          required: "Please, Enter the E-Mail ID"
        },
        password:{
          required: "Please, Enter the Password",
          pwdcheck: "Passwords must be at least 6 characters long. Passwords must contain at least one number, one lowercase and one uppercase letter."
        },
        confirmpwd:{
          required:"Please, Enter the Confirm password",
          equalTo: "Password Not Same"
        },
        name:{
          required:"Please, Enter the Student Name",
          Namecheck:"Only contains letters"
        },
        Designation:{
          required:"Please, Enter the Father Name",
          Namecheck:"Only Contains letters"
        },
        gender:{
          required:"Please, Select Gender",
          OptCheck:"Please, Select Gender"
        },
        Experience:{
          required:"Please, Enter the Batch (ex:-2016)",
          minlength:"Enter the 2 digit",
          Numcheck:"Only contains number"
        },
        Dep_Names:{
          required:"Please, Select Department Name",
          OptCheck:"Please, Select Department Name"
        },
        Line_1:{
          required: "Please, Enter the Address"
        },
        City:{
          required: "Please, Enthe the City Name"
        },
        District:{
          required: "Please, Enter the District Name"
        },
        pincode:{
          required: "Please, Enter the Pincode",
          minlength: "Enter the 6 digit",
          Numcheck:"Only contains Number"
        },
        cell_Number:{
          required: "Please, Enter the Cell Number",
          minlength: "Enter the 10 digit",
          Numcheck:"Only contains Number"
        }
      },
      submitHandler: function(form) { // <- pass 'form' argument in
          if($("#regform").valid())
          {
            return true;
          }
            else {
            return false;
            }
          //  form.submit(); // <- use 'form' argument here.
        }
    });
  });
  $().ready(function(){
    $("#f").validate({
        rules: {
          email:{
            required:true,
            email:true
          }
        }
    });
});
  </script>
</head>
<script type="text/javascript">
        // When the document is ready
        $(document).ready(function () {

            $('#date').datepicker({
                autoclose: true
            });

        });
</script>
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
        <li class="active"> <a href="#">Add Faculty</a></li>
        <li> <a href="Reg_admin.php">Add Admin</a></li>
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
                  <ul class="nav nav-tabs">
                    <li class="active"><a href="#reg_stud" data-toggle="tab">Create Faculty Account</a></li>
                    <li><a href="#create" data-toggle="tab">Show Account</a></li>
                  </ul>
                  <div id="myTabContent" class="tab-content">
                    <div class="tab-pane active in" id="reg_stud">
                      <div class="row">
                      <?php
                      if (!empty($error_msg)) {
                        echo '<div class="alert alert-danger alert-dismissible" role="alert">';
                        echo '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
                        echo '<strong>'.$error_msg.'</strong>';
                        echo '</div>';
                      }
                      if (!empty($success_msg)) {

                        echo '<div>'.$success_msg.'</div>';

                      }
                      ?>
                      <form id="regform" name="registration_form" class="form-horizontal" action="<?php echo esc_url($_SERVER['REQUEST_URI']); ?>" method="POST">
                        <fieldset class="col-xs-12 col-md-4">
                          <div id="legend">
                            <legend class="">Create Account</legend>
                          </div>
                          <div class="control-group">
                            <!-- Student ID -->
                            <label class="control-label"  for="faculty_ID">Faculty ID</label>
                            <div class="controls">
                              <input type="text" pattern="^[a-zA-Z0-9]+$" maxlength="20" id="faculty_ID" name="faculty_ID" placeholder="" class="input-xlarge" required>
                            </div>
                          </div>
                          <div class="control-group">
                            <!-- Username -->
                            <label class="control-label"  for="username">Username</label>
                            <div class="controls">
                              <input type="text" id="username" name="username" maxlength="20" placeholder="" class="input-xlarge" required>
                            </div>
                          </div>
                          <div class="control-group">
                            <!-- Email -->
                            <label class="control-label"  for="Email">Email ID</label>
                          <div class="controls">
                              <input type="email" id="email" name="email" maxlength="30" placeholder="" class="input-xlarge" required>
                            </div>
                          </div>
                          <div class="control-group">
                            <!-- Password-->
                            <label class="control-label" for="password">Password</label>
                            <div class="controls">
                              <input type="password" id="password" name="password" placeholder="" class="input-xlarge" required>
                            </div>
                          </div>
                          <div class="control-group">
                            <!-- Confiremed Password-->
                            <label class="control-label" for="confirm_password">Confirm Password</label>
                            <div class="controls">
                              <input type="password" id="confirmpwd" name="confirmpwd" placeholder="" class="input-xlarge" required>
                            </div>
                          </div>
                          <div class="control-group">
                          <div class="controls">
                            <input type="hidden" id="a" name="a" value="<?php echo $_SESSION['username']; ?>">
                          </div>
                        </div>
                        </fieldset>
                        <fieldset class="col-xs-12 col-sm-8">
                          <div id="legend">
                            <legend class="">Faculty Details</legend>
                          </div>
                          <div class="control-group">
                            <!-- Name -->
                            <label class="control-label"  for="name">Faculty Name</label>
                            <div class="controls">
                              <input type="text" pattern="^[a-zA-Z]+$" maxlength="30" id="name" name="name" placeholder="" class="input-xlarge" required>
                            </div>
                          </div>
                          <div class="control-group">
                            <!--father Name -->
                            <label class="control-label"  for="Designation">Designation</label>
                            <div class="controls">
                              <input type="text" pattern="^[a-zA-Z]+$" maxlength="30" id="Designation" name="Designation" placeholder="" class="input-xlarge" required>
                            </div>
                          </div>
                          <div class="control-group">
                            <!-- gender -->
                            <label class="control-label" for="gender">Gender</label>
                            <select id="gender" name="gender" class="input-xlarge" required>
                            <option value=0>Select</option>
                            <option value=1>Male</option>
                            <option value=2>Female</option>
                            <option value=3>Others</option>
                          </select>
                        </div>
                        <div class="control-group">
                          <!--date -->
                          <label class="control-label"  for="date of birth">D.O.B</label>
                          <div class="controls">
                            <input data-provide="datepicker" id="date" name="date" placeholder="" class="input-xlarge" required>
                          </div>
                        </div>
                        <div class="control-group">
                          <!--batch -->
                          <label class="control-label"  for="Experience">Experience</label>
                          <div class="controls">
                            <input type="text" pattern="^[0-9]+$" maxlength="2" id="Experience" name="Experience" placeholder="" class="input-xlarge" required>
                          </div>
                        </div>
                        <div class="control-group">
                          <!-- select department -->
                          <label class="control-label" for="Department">Deparment Name</label>
                          <div clss="controls">
                            <select name="Dep_Names" id="Dep_Names">
                              <option value="0">Select</option>
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
                          <!--Line 1 -->
                          <label class="control-label" for="address"><strong>Address</strong></label><br>
                          <label class="control-label"  for="father_name">Line_1</label>
                          <div class="controls">
                            <input type="text" maxlength="50" id="Line_1" name="Line_1" placeholder="" class="input-xlarge" required>
                          </div>
                        </div>
                        <div class="control-group">
                          <!--Line 2 -->
                          <label class="control-label"  for="father_name">Line_2</label>
                          <div class="controls">
                            <input type="text" maxlength="50" id="Line_2" name="Line_2" placeholder="" class="input-xlarge">
                          </div>
                        </div>
                        <div class="control-group">
                          <!--Line 3 -->
                          <label class="control-label"  for="father_name">Line_3</label>
                          <div class="controls">
                            <input type="text" maxlength="50" id="Line_3" name="Line_3" placeholder="" class="input-xlarge">
                          </div>
                        </div>
                        <div class="control-group">
                          <!--City -->
                          <label class="control-label"  for="City">City</label>
                          <div class="controls">
                            <input type="text" maxlength="50" id="City" name="City" placeholder="" class="input-xlarge" required>
                          </div>
                        </div>
                        <div class="control-group">
                          <!--District -->
                          <label class="control-label"  for="District">District</label>
                          <div class="controls">
                            <input type="text" maxlength="50" id="District" name="District" placeholder="" class="input-xlarge" required>
                          </div>
                        </div>
                        <div class="control-group">
                          <!--pincode -->
                          <label class="control-label"  for="father_name">Pincode</label>
                          <div class="controls">
                            <input type="text" maxlength="6" id="pincode" name="pincode" placeholder="" class="input-xlarge" required>
                          </div>
                        </div>
                        <div class="control-group">
                          <!--CellNO -->
                          <label class="control-label"  for="father_name">Cell No</label>
                          <div class="controls">
                            <input type="text" maxlength="10" id="cell_Number" name="cell_Number" placeholder="" class="input-xlarge" required>
                          </div>
                        </div>

                          <div class="control-group">
                            <!-- Button -->
                            <div class="controls">
                              <!-- <button id="submit" class="btn btn-success" >create a Account </button> -->
                              <button id="button" class="btn btn-success" onclick="return formcheck(this.form,
                                              this.form.faculty_ID,
                                              this.form.username,
                                              this.form.email,
                                              this.form.password,
                                              this.form.confirmpwd,
                                              this.form.a);">Create a Account</button>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                    </div>
                    <div class="tab-pane fade" id="create">
                      <div class="row">
                        <div class="col-xs-12">
                        <legend>Subject Details</legend>
                        <table class="table table-striped table-bordered table-hover" id="dataTables-departmet">
                          <thead>
                            <tr>
                              <th>Faculty ID</th>
                              <th>Name</th>
                              <th>Designation</th>
                              <th>Email ID</th>
                            </tr>
                          </thead>
                          <?php
                            $query=sprintf("SELECT Faculty_ID, Name, Designation FROM faculty_details");
                            $result = mysqli_query($mysqli, $query) or die('Query fail: ' . mysqli_error());
                            ?>
                            <tbody>
                              <?php while ($row = mysqli_fetch_array($result)) {
                                  $query2=sprintf("SELECT Email_ID  FROM faculty WHERE Faculty_ID =? LIMIT 1");
                                  $stmt=$mysqli->prepare($query2);
                                  $stmt->bind_param("s",$row[0]);
                                  $stmt->execute();
                                  $stmt->bind_result($email);
                                  $stmt->fetch();
                                ?>
                                <tr>
                                  <td><?php echo $row[0]; ?></td>
                                  <td><?php echo $row[1]; ?></td>
                                  <td><?php echo $row[2]; ?></td>
                                  <td><?php echo $email; ?></td>

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
  </div>
  </div>

</body>
</html>
