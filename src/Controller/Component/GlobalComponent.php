<?php
namespace App\Controller\Component;

use Cake\Controller\Component;
use Cake\Filesystem\Folder;
use Cake\Filesystem\File;
use ZipArchive;
use RecursiveIteratorIterator;
use RecursiveDirectoryIterator;

class GlobalComponent extends Component
{

	function upload_file($zip_file){

		$realpath = APP.'webroot';
		$temppath = $realpath . '/temp_'.md5(uniqid(rand(), true)).'/';
		$temppath_arr = new Folder($temppath, true, 0777);
		$temppath = $temppath_arr->path;

		$filename = $zip_file["zip_file"]["name"];
		$source = $zip_file["zip_file"]["tmp_name"];
		$type = $zip_file["zip_file"]["type"];

		$target_path = $temppath . $filename;
		$path = preg_replace('/\\.[^.\\s]{3,4}$/', '', $_FILES["zip_file"]["name"]);

		if (move_uploaded_file($source, $target_path)) {
			$return = array('target_path' => $target_path, 
							'filename' => $filename,
							'temppath' => $temppath);
			return $return;
		}else{
			return 'error';
		}

	}

	function unzip_file($zip_arr){

		$zip = new ZipArchive();

		$x = $zip->open($zip_arr['target_path']);

		for ($i = 0; $i < $zip->numFiles; $i++) {
			
			if (strpos($zip->getNameIndex($i) , '__MACOSX') !== false) {

			}else{

				$info = pathinfo($zip->getNameIndex($i));
				if(isset($info["extension"]) ){
					if ($info["extension"] == "html") {
						$index_name = $zip->getNameIndex($i);
						$index_url = $zip_arr['temppath'] . $zip->getNameIndex($i);
					}else if ($info["extension"] == "js") {
						$js_url = $zip_arr['temppath'] . $zip->getNameIndex($i);
					}
				}
				
			}
		}

		if ($x === true) {
			$zip->extractTo($zip_arr['temppath']); // change this to the correct site path
			$zip->close();
			unlink($zip_arr['target_path']);
		}

		$folder_name = basename($zip_arr['filename'], ".zip");
		$index_name = basename($index_name, $folder_name);
		$index_name = basename($index_name, '.html');

		$return = array('folder_name' => $folder_name,
						'index_name' => $index_name,
						'index_url' => $index_url,
						'js_url' => $js_url );

		return $return;

	}

	function mod_html($html, $zip_arr){
		$index_url = fopen( $zip_arr['index_url'], 'w');
		fwrite($index_url, $html);
		fclose($index_url);
	}

	function zip_file($all_vars){

		$zipFile_name = $all_vars['index_name'].'_.zip';
		$rootPath = realpath($all_vars['temppath'].$all_vars['folder_name']);//Folder to zip


		// Initialize archive object
		$zip = new ZipArchive();
		$zip->open($all_vars['temppath'].$zipFile_name, ZipArchive::CREATE | ZipArchive::OVERWRITE);

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

		return $zipfilename_out;
	}

	function download_header($filename,$outfile){

		header("Content-disposition: attachment; filename=$filename");
		header('Content-type: application/zip');
		ob_clean();
		flush();
		readfile($outfile);

	}
}

?>