<?php
    $dirPath = "text/";
        $names = array();
        $files = scandir($dirPath);  
        foreach ($files as $file) {
            $filePath = $dirPath . '/' . $file;
            if (is_file($filePath)) {
                array_push($names,$file);
            }
        }

        foreach ($names as $key => $name) {
            echo "<section>
                    <button value='".$name."'></button>
                    <blockquote><pre></pre></blockquote>
                </section>";
        }
        
?>