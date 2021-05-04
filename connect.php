<?php
$name =$_POST['name'];
$email =$_POST['email'];
$phone = $_POST['phone'];
$altnumber = $_POST['altnumber'];
$address =$_POST['address'];
$type =$_POST['type'];
$conn = new mysqli('localhost','root','','test');
if($conn->connect_error){
  die("Connection Failed" : '.$conn->connect_error');
}
else{
  $stmt =$conn ->prepare("INSERT INTO test(name, email, phone, altnumber, address, type)
   value(?, ?, ?, ?, ?, ?)");
  $stmt -> bind_param("ssiiss", $name, $email, $phone, $altnumber, $address, $type);
  $stmt -> execute();
  header('Location:index.html');
  $stmt -> close();
  $stmt -> close();
}


?>
