<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\Filesystem\Folder;
use Cake\Filesystem\File;

class ConverterController extends AppController
{

	public function initialize()
    {
        parent::initialize();
        $this -> loadComponent('Global');
    }

    public function hb()
    {
    	
		$url_zip = $this->Global->upload_file($_FILES);
		

		if ($url_zip !== 'error') {
			$filename = $_FILES["zip_file"]["name"];
			$zip_arr = $this->Global->unzip_file($url_zip);
			$index_name = $zip_arr['index_name'];

$html ='<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>'.$index_name.'</title>
<meta name="ad.size" content="width=300,height=600">
<script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
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
'.file_get_contents($zip_arr['js_url']).'
</script>
</head>
<body onload="init();" style="cursor: pointer; margin:0px;">
<script>
var clickTag = %%CLICK_URL_UNESC%%%%DEST_URL%%;
</script>
<canvas id="canvas" width="300" height="600" style="background-color:#FFFFFF"></canvas>
<script type="text/javascript">
var clickArea = document.getElementById("canvas");
clickArea.onclick = function (){ 
window.open(clickTag,"blank");
}
</script>
</body>
</html>';
			
			$this->Global->mod_html($html, $zip_arr);
			//DELETE JS
			$file = new File($zip_arr['js_url'],true, 0777);
			$file->delete();

			$all_vars = array_merge($zip_arr,$url_zip);

			$outfile = $this->Global->zip_file($all_vars);
			$this->Global->download_header($filename,$outfile);

			//DELETE FOLDER
			$temppath = $all_vars['temppath'];
			$folder = new Folder($temppath);
			$folder->delete();
		}

		

    	die();
    }
}