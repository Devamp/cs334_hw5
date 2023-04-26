<?php
// Database configuration
$host = "localhost";
$username = "root";
$password = "Devam123";
$dbname = "web";

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query the user table for all users
$sql = "SELECT * FROM users;";
$result = $conn->query($sql);

// Output the results
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "User ID: " . $row["id"] . " - Name: " . $row["name"] . " - Email: " . $row["email"] . "<br>";
    }
} else {
    echo "No users found.";
}

// Close the connection
$conn->close();
?>

