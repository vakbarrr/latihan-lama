<?php
include "koneksi.php";
if(!empty($_POST)){
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	$sql = "SELECT * FROM login WHERE username='$username' and password= '$password'";
	$query = mysqli_query($con, $sql) or die (mysqli_error($con));
	
	if($query){
		$row = mysqli_num_rows($query);
		if($row >0){
			$_SESSION['berhasil']="ok";
			$_SESSION['username']=$username;
			header('location:indexmenu.php');
		}else{
            echo"<script language='javascript'>alert('Terjadi kesalahan, silakan ulangi !')</script>";
            echo"<script language='javascript'>window.location = 'index.php'</script>";
		}
	}
}
