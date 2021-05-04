<?php

$name =$_POST['name'];
$email =$_POST['email'];
$phone = $_POST['phone'];
$altnumber = $_POST['altnumber'];
$mrp =$_POST['mrp'];
$address =$_POST['address'];
$type =$_POST['type'];
$conn = new mysqli('localhost','u857643933_RajnishR','serviceATS12','u857643933_ServiceAMC');
if($conn->connect_error){
  die();
}
else{
  $stmt =$conn ->prepare("INSERT INTO AMC(name, email, phone, altnumber, mrp, address, type)
   value(?, ?, ?, ?,?, ?, ?)");
  $stmt -> bind_param("ssiiiss", $name, $email, $phone, $altnumber,$mrp, $address, $type);
  $stmt -> execute();
 header('Location:index.html');
  $stmt -> close();

}


?>
