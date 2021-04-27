<?php

$name =$_POST['name'];
$email =$_POST['email'];
$phone = $_POST['phone'];
$altnumber = $_POST['altnumber'];
$address =$_POST['address'];
$type =$_POST['type'];
$conn = new mysqli('localhost','u857643933_RajnishR','serviceATS12','u857643933_ServiceAMC');
if($conn->connect_error){
  die();
}
else{
  $stmt =$conn ->prepare("INSERT INTO Service(name, email, phone, altnumber, address, type)
   value(?, ?, ?, ?, ?, ?)");
  $stmt -> bind_param("ssiiss", $name, $email, $phone, $altnumber, $address, $type);
  $stmt -> execute();
  echo "Booking successful...";
  $stmt -> close();
  
}


?>
