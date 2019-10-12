<?php
include_once '../database/connection.php';
include_once '../database/config.php';


$error_msg = "";
$success_msg="";
if(isset($_POST['faculty_ID'],$_POST['username'],$_POST['email'],$_POST['p'],$_POST['a'],$_POST['name'],$_POST['Designation'],$_POST['gender'],$_POST['Experience'],$_POST['Dep_Names'],$_POST['Line_1'],
      $_POST['Line_2'],$_POST['Line_3'],$_POST['City'],$_POST['District'],$_POST['pincode'],$_POST['cell_Number'],$_POST['date'])){

$faculty_ID=filter_input(INPUT_POST,'faculty_ID',FILTER_SANITIZE_STRING);
$username=filter_input(INPUT_POST,'username',FILTER_SANITIZE_STRING);
$email=filter_input(INPUT_POST,'email',FILTER_VALIDATE_EMAIL);
$email=filter_var($email,FILTER_VALIDATE_EMAIL);
$user=filter_input(INPUT_POST,'a',FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, 'p', FILTER_SANITIZE_STRING);
$name=filter_input(INPUT_POST,'name',FILTER_SANITIZE_STRING);
$Designation=filter_input(INPUT_POST,'Designation',FILTER_SANITIZE_STRING);
$gender=filter_input(INPUT_POST,'gender',FILTER_SANITIZE_STRING);
$Experience=filter_input(INPUT_POST,'Experience',FILTER_SANITIZE_STRING);
$depname=filter_input(INPUT_POST,'Dep_Names',FILTER_SANITIZE_STRING);
$Line1=filter_input(INPUT_POST,'Line_1',FILTER_SANITIZE_STRING);
$Line2=filter_input(INPUT_POST,'Line_2',FILTER_SANITIZE_STRING);
$Line3=filter_input(INPUT_POST,'Line_3',FILTER_SANITIZE_STRING);
$city=filter_input(INPUT_POST,'City',FILTER_SANITIZE_STRING);
$District=filter_input(INPUT_POST,'District',FILTER_SANITIZE_STRING);
$pincode=filter_input(INPUT_POST,'pincode',FILTER_VALIDATE_INT);
$cellNumber=filter_input(INPUT_POST,'cell_Number',FILTER_SANITIZE_STRING);
$time=strtotime($_POST['date']);
$birthdate=date('Y-m-d',$time);

/*echo faculty_ID;
echo $username;
echo $email;
echo $user;
echo $name;
echo $fname;
echo $gender;
echo $batch;
echo $depname;
echo $Line1;
echo $Line2;
echo $Line3;
echo $city;
echo $District;
echo $pincode;
echo $cellNumber;
echo $birthdate;*/

if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
  $error_msg='<p class="error">The email address you entered in not valid</p>';
}
$password=filter_input(INPUT_POST,'p',FILTER_SANITIZE_STRING);
$user=filter_input(INPUT_POST,'a',FILTER_SANITIZE_STRING);
$prep_stmt="SELECT SINo FROM faculty WHERE Email_ID = ? LIMIT 1";
$stmt=$mysqli->prepare($prep_stmt);

if($stmt){
  $stmt->bind_param('s',$email);
  $stmt->execute();
  $stmt->store_result();

  if($stmt->num_rows == 1){
    $error_msg .= '<div><strong>Error!</strong> A User with this email address already exists.</div>';
    $stmt->close();
  }
}else {
      $error_msg = '<p class="error">Database error Line 30</p>';

        $stmt->close();
  }


$prep_stmt="SELECT SINo FROM faculty WHERE Faculty_ID = ? LIMIT 1";
$stmt=$mysqli->prepare($prep_stmt);

if($stmt){
  $stmt->bind_param('s',$faculty_ID);
  $stmt->execute();
  $stmt->store_result();
  if($stmt->num_rows == 1){
    $error_msg = '<div><Strong>Error!</strong> A user with this faculty id address already exists. </div>';
    $stmt->close();
  }
}else {
      $error_msg = '<p class="error">Database error Line 39</p>';
        $stmt->close();
  }

  $prep_stmt="SELECT Admin_ID FROM administration WHERE Admin_name = ? LIMIT 1";
  $stmt=$mysqli->prepare($prep_stmt);
if($stmt){
  $stmt->bind_param('s', $user);
  $stmt->execute();
  $stmt->store_result();
  // get variables from result
 $stmt->bind_result($user_id);
 $stmt->fetch();

  $stmt->close();

}else {
  $error_msg = '<p class="error">Database error Line 67</p>';
    $stmt->close();
}

  if (empty($error_msg)){

    $password=password_hash($password,PASSWORD_BCRYPT);
      if($insert_stmt=$mysqli->prepare("INSERT INTO faculty (faculty_ID, Username, Email_ID, Password, Add_admin) VALUES (?, ?, ?, ?, ?)")){
     $insert_stmt->bind_param("ssssi", $faculty_ID, $username, $email, $password, $user_id);
     if(!$insert_stmt->execute()){
        //header('Location: ../error.php?err=Registration failure: INSERT');
        echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
      }
    }
    $success_msg='<div class="alert alert-success alert-dismissable fade in" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <strong>Success!</strong> You have been registered in successfully!
    </div>';
  }
if (empty($error_msg)){
      if($insert_stmt=$mysqli->prepare("INSERT INTO faculty_details (Faculty_ID, Name, Designation, Gender, DOB, Department, Experience, Line1, Line2, Line3, City, District, Pincode, Cell_Number) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)")){
     $insert_stmt->bind_param("sssississsssis", $faculty_ID, $name, $Designation, $gender, $birthdate, $depname, $Experience, $Line1, $Line2, $Line3, $city, $District, $pincode, $cellNumber);
     if(!$insert_stmt->execute()){
        //header('Location: ../error.php?err=Registration failure: INSERT');
        echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
      }
    }
    $success_msg= '<div class="alert alert-success alert-dismissable fade in" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <strong>Success!</strong> You have been registered in successfully!
    </div>';
  }
}

?>
