<?php
include_once '../database/connection.php';
include_once 'phpfunction.php';

sec_session_start(); // Our custom secure way of starting a PHP session.

if (isset($_POST['email'], $_POST['p'])) {
    $email = $_POST['email'];
    $password = $_POST['p']; // The hashed password.
    if (login($email, $password, $mysqli) == true) {
        header('Location: index.php');
    } else {
        // Login failed
        header('Location: login.php?error=1');
    }
} else {
    // The correct POST variables were not sent to this page.
    //echo 'Invalid Request';
    header('Location: login.php?error=2');
}
?>
