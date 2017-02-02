<?php
/**
 * This file is loaded automatically by the app/webroot/index.php file after core.php
 *
 * This file should load/create any application wide configuration settings, such as
 * Caching, Logging, loading additional configuration files.
 *
 * You should also use this file to include any files that provide global functions/constants
 * that your application uses.
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.Config
 * @since         CakePHP(tm) v 0.10.8.2117
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

// Setup a 'default' cache configuration for use in the application.
Cache::config('default', array('engine' => 'File'));

/**
 * The settings below can be used to set additional paths to models, views and controllers.
 *
 * App::build(array(
 *     'Model'                     => array('/path/to/models/', '/next/path/to/models/'),
 *     'Model/Behavior'            => array('/path/to/behaviors/', '/next/path/to/behaviors/'),
 *     'Model/Datasource'          => array('/path/to/datasources/', '/next/path/to/datasources/'),
 *     'Model/Datasource/Database' => array('/path/to/databases/', '/next/path/to/database/'),
 *     'Model/Datasource/Session'  => array('/path/to/sessions/', '/next/path/to/sessions/'),
 *     'Controller'                => array('/path/to/controllers/', '/next/path/to/controllers/'),
 *     'Controller/Component'      => array('/path/to/components/', '/next/path/to/components/'),
 *     'Controller/Component/Auth' => array('/path/to/auths/', '/next/path/to/auths/'),
 *     'Controller/Component/Acl'  => array('/path/to/acls/', '/next/path/to/acls/'),
 *     'View'                      => array('/path/to/views/', '/next/path/to/views/'),
 *     'View/Helper'               => array('/path/to/helpers/', '/next/path/to/helpers/'),
 *     'Console'                   => array('/path/to/consoles/', '/next/path/to/consoles/'),
 *     'Console/Command'           => array('/path/to/commands/', '/next/path/to/commands/'),
 *     'Console/Command/Task'      => array('/path/to/tasks/', '/next/path/to/tasks/'),
 *     'Lib'                       => array('/path/to/libs/', '/next/path/to/libs/'),
 *     'Locale'                    => array('/path/to/locales/', '/next/path/to/locales/'),
 *     'Vendor'                    => array('/path/to/vendors/', '/next/path/to/vendors/'),
 *     'Plugin'                    => array('/path/to/plugins/', '/next/path/to/plugins/'),
 * ));
 */

/**
 * Custom Inflector rules can be set to correctly pluralize or singularize table, model, controller names or whatever other
 * string is passed to the inflection functions
 *
 * Inflector::rules('singular', array('rules' => array(), 'irregular' => array(), 'uninflected' => array()));
 * Inflector::rules('plural', array('rules' => array(), 'irregular' => array(), 'uninflected' => array()));
 */

/**
 * Plugins need to be loaded manually, you can either load them one by one or all of them in a single call
 * Uncomment one of the lines below, as you need. Make sure you read the documentation on CakePlugin to use more
 * advanced ways of loading plugins
 *
 * CakePlugin::loadAll(); // Loads all plugins at once
 * CakePlugin::load('DebugKit'); // Loads a single plugin named DebugKit
 */

/**
 * To prefer app translation over plugin translation, you can set
 *
 * Configure::write('I18n.preferApp', true);
 */

/**
 * You can attach event listeners to the request lifecycle as Dispatcher Filter. By default CakePHP bundles two filters:
 *
 * - AssetDispatcher filter will serve your asset files (css, images, js, etc) from your themes and plugins
 * - CacheDispatcher filter will read the Cache.check configure variable and try to serve cached content generated from controllers
 *
 * Feel free to remove or add filters as you see fit for your application. A few examples:
 *
 * Configure::write('Dispatcher.filters', array(
 *		'MyCacheFilter', //  will use MyCacheFilter class from the Routing/Filter package in your app.
 *		'MyCacheFilter' => array('prefix' => 'my_cache_'), //  will use MyCacheFilter class from the Routing/Filter package in your app with settings array.
 *		'MyPlugin.MyFilter', // will use MyFilter class from the Routing/Filter package in MyPlugin plugin.
 *		array('callable' => $aFunction, 'on' => 'before', 'priority' => 9), // A valid PHP callback type to be called on beforeDispatch
 *		array('callable' => $anotherMethod, 'on' => 'after'), // A valid PHP callback type to be called on afterDispatch
 *
 * ));
 */
Configure::write('Dispatcher.filters', array(
	'AssetDispatcher',
	'CacheDispatcher'
));

/**
 * Configures default file logging options
 */
App::uses('CakeLog', 'Log');
CakeLog::config('debug', array(
	'engine' => 'File',
	'types' => array('notice', 'info', 'debug'),
	'file' => 'debug',
));
CakeLog::config('error', array(
	'engine' => 'File',
	'types' => array('warning', 'error', 'critical', 'alert', 'emergency'),
	'file' => 'error',
));

/***  Converter Functions ***/

App::uses('Folder', 'Utility');
App::uses('File', 'Utility');

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