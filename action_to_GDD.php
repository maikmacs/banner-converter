<?php

function deleteDirectory($dir) {
    system('rm -rf ' . escapeshellarg($dir), $retval);
    return $retval == 0; // UNIX commands return zero on success
}

$realpath = realpath(dirname(__FILE__));
$temppath = $realpath . '/temp_'.md5(uniqid(rand(), true)).'/';

mkdir($temppath, 0777, true);

if ($_FILES["zip_file_DD"]["name"]) {
	$filename = $_FILES["zip_file_DD"]["name"];
	$source = $_FILES["zip_file_DD"]["tmp_name"];
	$type = $_FILES["zip_file_DD"]["type"];
	$name = explode(".", $filename);
	$accepted_types = array(
		'application/zip',
		'application/x-zip-compressed',
		'multipart/x-zip',
		'application/x-compressed'
	);
	foreach($accepted_types as $mime_type) {
		if ($mime_type == $type) {
			$okay = true;
			break;
		}
	}

	$continue = strtolower($name[1]) == 'zip' ? true : false;
	if (!$continue) {
		$message = "The file you are trying to upload is not a .zip file. Please try again.";
	}

	$target_path = $temppath . $filename;
	$path = preg_replace('/\\.[^.\\s]{3,4}$/', '', $_FILES["zip_file_DD"]["name"]);
	$temp_path = $temppath . $path;
	if (move_uploaded_file($source, $target_path)) {
		$zip = new ZipArchive();
		$x = $zip->open($target_path);


		 for ($i = 0; $i < $zip->numFiles; $i++) {
			
			if (strpos($zip->getNameIndex($i) , '__MACOSX') !== false) {

			}else{	
				$info = pathinfo($zip->getNameIndex($i));
				if ($info["extension"] == "html") {
					$index_name = $zip->getNameIndex($i);
					$index_url = $temppath . $zip->getNameIndex($i);
				}else if ($info["extension"] == "js") {
					$js_url = $temppath . $zip->getNameIndex($i);
				}
			}
		}

		if ($x === true) {
			$zip->extractTo($temppath); // change this to the correct site path
			$zip->close();
			unlink($target_path);
		}
		//libxml_use_internal_errors(true);
		
		$folder_name = basename($_FILES["zip_file_DD"]["name"], ".zip");

		$index_name = basename($index_name, $folder_name);
		$index_name = basename($index_name, '.html');
		$p='<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>'.$index_name.'</title>
<meta name="ad.size" content="'.$_POST['size'].'">
<script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
<script src="'.$index_name.'.js"></script>
<script>
var canvas, stage, exportRoot;
function init() {
	canvas = document.getElementById("canvas");
	images = images||{};
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
function handleComplete(evt) {
	exportRoot = new lib.'.$index_name.'();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}
var clickTag = "'.$_POST['clicktag'].'";
</script>
</head>
<body onload="init();" style="background-color:#D4D4D4;margin:0px;">
<a href="javascript:window.open(window.clickTag)">
	<canvas id="canvas" width="720" height="90" style="background-color:#FFFFFF"></canvas>
</a>
</body>
</html>';
		preg_replace( "/\r|\n/", "", $p );

		$a = fopen($index_url, 'w');
		fwrite($a, $p);
		fclose($a);
		//

		///

		$zipFile_name = $index_name.'_DD.zip';
		$rootPath = realpath($temppath.$folder_name);//Folder to zip


		// Initialize archive object
		$zip = new ZipArchive();
		$zip->open($temppath.$zipFile_name, ZipArchive::CREATE | ZipArchive::OVERWRITE);

		// Create recursive directory iterator
		/** @var SplFileInfo[] $files */
		$files = new RecursiveIteratorIterator(
		    new RecursiveDirectoryIterator($rootPath),
		    RecursiveIteratorIterator::LEAVES_ONLY
		);

		foreach ($files as $name => $file)
		{
		    // Skip directories (they would be added automatically)
		    if (!$file->isDir())
		    {
		        // Get real and relative path for current file
		        $filePath = $file->getRealPath();
		        $relativePath = substr($filePath, strlen($rootPath) + 1);

		        // Add current file to archive
		        $zip->addFile($filePath, $relativePath);
		    }
		}

		$zipfilename_out = $zip->filename;

		// Zip archive will be created only after closing object
		$zip->close();

		/// DOWNLOAD HEADER

			header("Content-disposition: attachment; filename=$zipFile_name");
			header('Content-type: application/zip');
			ob_clean();
			flush();
			readfile($zipfilename_out);
			unlink($zipfilename_out);
			unlink($rootPath);

			//CLEAR TEMP FOLDER

			deleteDirectory($temppath);

			}else {
				$message = "There was a problem with the upload. Please try again.";
				echo $message;
			}
		}else{
			$message = "No se cargo el archivo";
			echo $message;
		}
?> 