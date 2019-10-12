<?php
include_once '../database/connection.php';
include_once '../database/config.php';
include_once 'phpfunction.php';


$error_msg = "";
$error_msg1="";
$success_msg="";
$editerror_msg="";
$editsuccess_msg="";
//$dep=$_SESSION['Department'];
//$user=$_SESSION['user'];


if(isset($_POST['stu_id'],$_POST['dep']))
{

  foreach ($_POST['stu_id'] as $key => $id) {
    $stu_id=$_POST['stu_id'][$key];
    $stu_int=$_POST['stu_int'][$key];
    $stu_ext=$_POST['stu_ext'][$key];
    $batch=$_POST['batch'];
    $sem=$_POST['sem'];
    $subj=$_POST['subj'];
    $dep=$_POST['dep'];
    $user=$_POST['user'];
    if($stu_int==-1 AND $stu_ext==-1 ){
      $total=0;
      $grade="AA";
    }elseif ($stu_int==-1) {
      $total=$stu_ext;
      $grade="AA";
    }elseif ($stu_ext==-1) {
      $total=$stu_int;
      $grade="AA";
    }else {
      $total=$stu_ext+$stu_int;
      if($total>=90){
        $grade="O";
      }elseif($total>=80){
        $grade="D";
      }elseif($total>=70){
        $grade="A+";
      }elseif($total>=60){
        $grade="A";
      }elseif($total>=50){
          $grade="B";
      }elseif($total>=40){
          $grade="C";
        }else{
          $grade="U";
        }
    }
    /*echo $dep;
    echo $user;
    echo $stu_id;
    echo $batch;
    echo $sem;
    echo $subj;
    echo $stu_int;
    echo $stu_ext;
    echo $total;
    echo $grade;*/

    $prep_stmt="SELECT SINo FROM marks WHERE Semester=? and Subject_Code =? and Student_ID=? LIMIT 1";
    $stmt=$mysqli->prepare($prep_stmt);
    if($stmt){

      $stmt->bind_param("iss",$sem,$subj,$stu_id);
      $stmt->execute();
      $stmt->store_result();
      if($stmt->num_rows==1){
        $error_msg='<Strong>Error!</strong> '.$stu_id.' The marks are already available.<br>';
      //  echo "<p>come to error</p><br>";
      //  echo $error_msg;
        $stmt->close();
      }
    }else{
        $error_msg='<p>Database error line 42</p>';
      //  echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
        $stmt->close();
      }
    if(empty($error_msg)){

      if($insert_stmt=$mysqli->prepare("INSERT INTO marks(Department_ID, Faculty_ID, Student_ID, Batch, Semester, Subject_Code, Internal, External, Total, Grade) values(?,?,?,?,?,?,?,?,?,?)")){

        $insert_stmt->bind_param("ssssisiiis",$dep, $user, $stu_id, $batch, $sem, $subj, $stu_int, $stu_ext, $total, $grade);
        if(!$insert_stmt->execute()){
          // header('Location: ../error.php?err=Registration failure: INSERT');
           //echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
           $error_msg="Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
         }
      }
    }
    $error_msg1.=$error_msg;
    $error_msg="";

  }
  //echo $error_msg1;

if(empty($error_msg1)){
    $success_msg= '<div class="alert alert-success alert-dismissable fade in" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <strong>Success!</strong> All Marks are success fully entered!
    </div>';
  }

}
if(isset($_POST['editStudent_ID'],$_POST['sub'],$_POST['editinternal'],$_POST['editexternal']))
{
$editstd_id=$_POST['editStudent_ID'];
$subj=$_POST['sub'];
$editint=$_POST['editinternal'];
$editext=$_POST['editexternal'];
$edituser=$_POST['edituser'];
if($editint==""){
  $prep_stmt="SELECT Internal FROM marks WHERE Subject_Code =? and Student_ID=? LIMIT 1";
  $stmt=$mysqli->prepare($prep_stmt);
  if($stmt){
    $stmt->bind_param("ss",$subj,$editstd_id);
    $stmt->execute();
    $stmt->bind_result($editint);
    $stmt->fetch();
    $stmt->close();
  }else{
  $editerror_msg="database error in 124";
}
}
if($editext==""){
  $prep_stmt="SELECT External FROM marks WHERE Subject_Code =? and Student_ID=? LIMIT 1";
  $stmt=$mysqli->prepare($prep_stmt);
  if($stmt){
    $stmt->bind_param("ss",$subj,$editstd_id);
    $stmt->execute();
    $stmt->bind_result($editext);
    $stmt->fetch();
    $stmt->close();
  }else{
  $editerror_msg="Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
}
}
if($editint==-1 AND $editext==-1 ){
  $total=0;
  $grade="AA";
}elseif ($editint==-1) {
  $total=$editext;
  $grade="AA";
}elseif ($editext==-1) {
  $total=$editint;
  $grade="AA";
}else {
  $total=$editext+$editint;
  if($total>=90){
    $grade="O";
  }elseif($total>=80){
    $grade="D";
  }elseif($total>=70){
    $grade="A+";
  }elseif($total>=60){
    $grade="A";
  }elseif($total>=50){
      $grade="B";
  }elseif($total>=40){
      $grade="C";
    }else{
      $grade="U";
    }
}
if(empty($editerror_msg)){

  if($insert_stmt=$mysqli->prepare("UPDATE marks SET Faculty_ID=?, Internal=?,External=?,Total=?,Grade=? WHERE Subject_Code =? and Student_ID=? LIMIT 1")){

    $insert_stmt->bind_param("siiisss",$edituser,$editint,$editext,$total,$grade,$subj,$editstd_id);
    if(!$insert_stmt->execute()){
      // header('Location: ../error.php?err=Registration failure: INSERT');
       //echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
       $editerror_msg="Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
     }
     $editsuccess_msg= '<div class="alert alert-success alert-dismissable fade in" role="alert">
     <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
     <strong>Success!</strong> Successfully updated!
     </div>';
  }
}
}
