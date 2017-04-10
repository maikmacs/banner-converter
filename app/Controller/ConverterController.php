<?php

class ConverterController extends AppController {

	    public function doubleclick(){

    	if ($this->request->is('post')) {

    		$data = $this->request->data;

            if (!empty($_FILES)) {
                $url_zip = upload_file($_FILES);
            }else{
                $this->redirect(array(
                        'controller' => 'pages', 'action' => 'error', '?' => array(
                            'error' => 'zip'
                        )
                    ));
                   die();
            }
    		

	    	if ($url_zip !== 'error') {
				$filename = $_FILES["zip_file"]["name"];
				$zip_arr = unzip_file($url_zip);
				$index_name = $zip_arr['index_name'];

                if ($zip_arr['index_url'] == '') {
                   $this->redirect(array(
                        'controller' => 'pages', 'action' => 'error', '?' => array(
                            'error' => 'index'
                        )
                    ));
                   die();
                }

                //GET SIZE
                $html = file_get_contents($zip_arr['index_url']);
                $doc = new DOMDocument();
                @$doc->loadHTML($html);
                $tag = $doc->getElementsByTagName('canvas');
                $width = $tag[0]->getAttribute("width");
                $height = $tag[0]->getAttribute("height");
                //

				$js_name = str_replace(' ','',$index_name);

                $createjs = 'js/createjs-2015.11.26.min.js';

                if($zip_arr['js_url'] != '' ){ 
                    $js_file = file_get_contents($zip_arr['js_url']);
                }else{
                    $js_file = '';
                }
                
                error_reporting(~0);
                ini_set('display_errors', 1);

			$html='<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>'.$index_name.'</title>
    <meta name="ad.size" content="width='.$width.',height='.$height.'">
    <script>

        '.file_get_contents($createjs).'

        var canvas, stage, exportRoot;

        function init() {
            canvas = document.getElementById("canvas");
            images = images || {};
            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", handleFileLoad);
            loader.addEventListener("complete", handleComplete);
            loader.loadManifest(lib.properties.manifest);
        }

        function handleFileLoad(evt) {
            if (evt.item.type == "image") {
                images[evt.item.id] = evt.result;
            }
        }

        function handleComplete(evt) {
            exportRoot = new lib.
            '.$js_name.' ();
            stage = new createjs.Stage(canvas);
            stage.addChild(exportRoot);
            stage.update();
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);
        }
        '.$js_file.'
        var clickTag = "'.$data['clicktag'].'";
    </script>
</head>

<body onload="init();" style="background-color:#D4D4D4;margin:0px;">
    <a href="javascript:window.open(window.clickTag)">
        <canvas id="canvas" width="'.$width.'" height="'.$height.'" style="background-color:#FFFFFF"></canvas>
    </a>
</body>

</html>';   
            
				mod_html($html, $zip_arr);

				//DELETE JS
				$file = new File($zip_arr['js_url'],true, 0777);
				$file->delete();

                //DELETE FLA

                if ($zip_arr['fla_file'] != '') {
                    $file = new File($zip_arr['fla_file'],true, 0777);
                    $file->delete();
                }
               
				$all_vars = array_merge($zip_arr,$url_zip);

				$outfile = zip_file($all_vars);
				download_header($filename,$outfile);

				//DELETE FOLDER
				$temppath = $all_vars['temppath'];
				$folder = new Folder($temppath);
				$folder->delete();
			}

    	}else{
            $this->redirect(array(
                        'controller' => 'pages', 'action' => 'error', '?' => array(
                            'error' => 'zip'
                        )
                    ));
                   die();
        }
    	
    }

}