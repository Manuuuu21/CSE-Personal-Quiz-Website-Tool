<?php
session_start();

// Set the max idle time in seconds
$max_idle_time = 5 * 60; // 5 minutes

// Get the current time
$current_time = time();

// Set the session variable
$_SESSION['session_time'] = $current_time;

// Delete old sessions
foreach ($_SESSION as $key => $value) {
    if ($current_time - $value > $max_idle_time) {
        unset($_SESSION[$key]);
    }
}

// Get the number of online users
$online_users = count($_SESSION);

// Return the number of online users
echo $online_users;
?>
