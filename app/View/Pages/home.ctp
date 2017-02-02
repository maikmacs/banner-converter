<?php /*
<ul id="tabs" class="nav nav-tabs" data-tabs="tabs">
    <li class="active"><a href="#HB" data-toggle="tab">Banner HB</a></li>
    <li><a href="#DD" data-toggle="tab">DoubleClick</a></li>
</ul>
*/ ?>
    <div id="my-tab-content" class="tab-content">
        <?php /*
        <div class="tab-pane active" id="HB">
            <div class="tab_content">
              <form id="form_HB" action="<?php echo Router::url(array('controller' => 'converter', 'action' => 'hb')); ?>" method="post" enctype="multipart/form-data">
                <div class="container">
                  <div class="well clearfix">
                    <fieldset class="well well-form">

                      <legend class="well-legend"><h2>Banner HB</h2></legend>

                      <div class="row">
                        <div class="col-md-6">
                          <label class="control-label" for="booking-date">Zip File</label>

                          <div class="input-group">
                          <input class="file_upload" type="file" name="zip_file" id="zip_file_HB" accept=".zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed" required/>
                          </div>
                        </div>


                      </div>
                      <!-- end Row -->

                      <div class="row">
                        <div class="col-md-12">
                          <button class="btn btn-success "> Send </button>
                        </div>
                      </div>

                    </fieldset>
                    <!-- end Row -->
                  </div>
                  <!-- end Well -->
                </div>
                <!-- end Container -->

              </form>
            </div>
        </div>
        */?>
        <?php /* <div class="tab-pane" id="DD"> */ ?>
              <div class="tab_content">
                <form id="form_DD"  action="<?php echo Router::url(array('controller' => 'converter', 'action' => 'doubleclick')); ?>" method="post" enctype="multipart/form-data">
                  <div class="container">
                    <div class="well clearfix">
                      <fieldset class="well well-form">
                        <legend class="well-legend"><h2>DoubleClick - BETA</h2></legend>

                        <div class="row">
                           <div class="col-md-4">
                            <label class="control-label" for="booking-date">Click Tag</label>

                            <div class="form-group input-group">
                              <span class="input-group-addon "><i class="fa fa-file-archive-o"></i></span>
                              <input class="form-control" type="url" name="clicktag" id="clicktag" placeholder="clickTag" required/>
                              
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-12">
                            <label class="control-label" for="booking-date">Zip File</label>

                            <div class="form-group">
                              <input class="file_upload" type="file" name="zip_file" id="zip_file_DD" accept=".zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed" required/>
                            </div>
                          </div>
                        </div>

                        <!-- <div class="row">
                          
                          <div class="col-md-2">
                            <label class="control-label" for="banner_size">Width:</label>
                            <input class="form-control" type="number" name="width">
                          </div>

                          <div class="col-md-2">
                            <label class="control-label" for="banner_size">Height:</label>
                            <input class="form-control" type="number" name="height">
                          </div>
                          
                        </div> -->

                        <div class="row">
                          <div class="col-md-12">
                            <br>
                            <button class="btn btn-success "> Send </button>
                          </div>
                        </div>
                      </fieldset>

                      <fieldset  class="well well-form">

                        <div class="row">
                          <div class="col-sm-12">
                            <a href="https://h5validator.appspot.com/dcm#/asset" target="_blank">Validador DoubleClick</a>
                          </div>
                        </div>

                      </fieldset>


                    </div>

                  </div>

                </form>
              </div>
        <?php /* </div> */ ?>


   <?php /* </div> */ ?>