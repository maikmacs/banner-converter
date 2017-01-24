<!DOCTYPE html>
<html>
<head>
    <?php echo $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Banner Converter
    </title>
    <?php echo $this->Html->meta('icon') ?>

    <?php echo $this->Html->css('bootstrap.min.css') ?>
    <?php echo $this->Html->css('font-awesome.min.css') ?>
    <?php echo $this->Html->css('jquery.filer.css') ?>
    <?php echo $this->Html->css('style.css') ?>

    <?php echo $this->Html->script('jquery-2.2.4.min.js') ?>
    <?php echo $this->Html->script('bootstrap.min.js') ?>
    <?php echo $this->Html->script('validator.min.js') ?>
    <?php echo $this->Html->script('jquery.filer.min.js') ?>
    <?php echo $this->Html->script('main.js') ?>

    <?php echo $this->fetch('meta') ?>
    <?php echo $this->fetch('css') ?>
    <?php echo $this->fetch('script') ?>
</head>
<body>

    <nav class="navbar navbar-inverse ">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Banner Converter</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
        <?php /*
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        */ ?>
        </div><!--/.nav-collapse -->
      </div>
    </nav>


    <div class="container">
        <?php echo $this->Flash->render(); ?>
        <div class="container clearfix">
            <?php echo $this->fetch('content'); ?>
        </div>
    </div>
    <footer>
    	<?php echo $this->element('sql_dump'); ?>
    </footer>
</body>
</html>
