<div class="tab_content">
      <form id="form_HB" action="action_to_HB.php" method="post" enctype="multipart/form-data">
        <div class="container">
          <div class="well clearfix">
            <fieldset class="well well-form">

              <legend class="well-legend"><h2>Banner HB</h2></legend>

              <div class="row">

              </div>

              <div class="row">
                <div class="col-md-4">
                  <label class="control-label" for="booking-date">Zip File</label>

                  <div class="form-group input-group">
                    <span class="input-group-addon "><i class="fa fa-external-link"></i></span>
                  <input class="form-control" type="file" name="zip_file_HB" id="zip_file_HB" required/>
                  </div>
                </div>


              </div>
              <!-- end Row -->

              <div class="row">
                <div class="col-md-12">
                  <button class="btn btn-success "> Enviar </button>
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

    <div class="tab_content">
      <form id="form_DD"  action="action_to_GDD.php" method="post" enctype="multipart/form-data">
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

                <div class="col-md-4">
                  <label class="control-label" for="booking-date">Zip File</label>

                  <div class="form-group input-group">
                    <span class="input-group-addon "><i class="fa fa-external-link"></i></span>
                  <input class="form-control" type="file" name="zip_file_DD" id="zip_file_DD" required/>
                  </div>
                </div>


                <div class="col-md-2">
                  <label class="control-label" for="form_days">Size</label>
                  <select class="form-control" id="form_days" name="size" required>
                    <option selected disabled hidden style='display: none' value=''></option>
                    <option value="height=90,width=720">720 x 90</option>
                  </select>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <button class="btn btn-success "> Enviar </button>
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