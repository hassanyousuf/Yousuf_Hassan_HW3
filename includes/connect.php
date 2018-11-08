<?php
$user = "root";
$password = "root";
$host = "localhost";
$db = "db_infographic";
$conn = mysqli_connect($host, $user, $password, $db);
mysqli_set_charset($conn, 'utf8');
if (!$conn) {
    echo "connection didn't work...";
    exit;
}

// echo "connected!";


// send the entire result set as a json encoded array
echo json_encode($rows);



// ------------------------------------------- example-------------------------


// if (isset($_GET["continentID"])) {
//     $continent = $_GET["continentID"];

//     //$myQuery = "SELECT * FROM tbl_country WHERE country_name = '$country'";

//     $myQuery = "SELECT * FROM tbl_continents , tbl_continents_country, tbl_country
//                 WHERE tbl_continents . continent_id = tbl_continents_country . continent_id
//                 AND tbl_continents_country . country_id = tbl_country . country_id
//                 AND tbl_continents . continent_id = '$continent'";

//     $result = mysqli_query($conn, $myQuery);
//     $rows = array();

//     while($row = mysqli_fetch_assoc($result)) {
//         $rows[] = $row;
//     }
// }


$myQuery = "SELECT * FROM tbl_info WHERE header = ID = 1";
    
$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);

$myQuery = "SELECT * FROM tbl_info WHERE header = ID = 2";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);

$myQuery = "SELECT * FROM tbl_info WHERE header = ID = 3";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);


$myQuery = "SELECT * FROM tbl_info WHERE header = ID = 4";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);

$myQuery = "SELECT * FROM tbl_info WHERE header = ID = 5";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);

$myQuery = "SELECT * FROM tbl_info WHERE header = ID = 6";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);

$myQuery = "SELECT * FROM tbl_info WHERE header = ID = 7";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);

$myQuery = "SELECT * FROM tbl_info WHERE header = ID = 8";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);

$myQuery = "SELECT * FROM tbl_info WHERE header = ID = 9";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);


$myQuery = "SELECT * FROM tbl_info WHERE header = ID = 10";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);



$myQuery = "SELECT * FROM tbl_info WHERE header = ID = 11";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);











$myQuery = "SELECT * FROM tbl_info WHERE paragraph = ID = 1";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);


$myQuery = "SELECT * FROM tbl_info WHERE paragraph = ID = 2";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);



$myQuery = "SELECT * FROM tbl_info WHERE paragraph = ID = 3";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);



$myQuery = "SELECT * FROM tbl_info WHERE paragraph = ID = 4";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);





$myQuery = "SELECT * FROM tbl_info WHERE paragraph = ID = 5";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);



$myQuery = "SELECT * FROM tbl_info WHERE paragraph = ID = 6";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);






$myQuery = "SELECT * FROM tbl_info WHERE paragraph = ID = 7";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);





$myQuery = "SELECT * FROM tbl_info WHERE paragraph = ID = 8";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);




$myQuery = "SELECT * FROM tbl_info WHERE paragraph = ID = 9";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);




$myQuery = "SELECT * FROM tbl_info WHERE paragraph = ID = 10";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);




$myQuery = "SELECT * FROM tbl_info WHERE paragraph = ID = 11";

$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
}
echo json_encode($rows);











?>