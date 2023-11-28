<?php
    $dirPath = "text/";
    $names = array();
    $files = scandir($dirPath);  
    array_push($names, NULL);
    foreach ($files as $file) {
        $filePath = $dirPath . '/' . $file;
        if (is_file($filePath)) {
            array_push($names,$file);
        }
    }
    header('Content-Type: application/json');
    echo json_encode($names);
?>