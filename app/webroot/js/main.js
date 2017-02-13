$(function() {


    $('#form_HB,#form_DD').validator();


	// $(".file_upload").change(function () {
 //        var fileExtension = ['zip'];
 //        if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
 //            alert("Only formats are allowed : "+fileExtension.join(', '));
 //        }
 //    });

    $(".file_upload").filer({
    	limit: 1,
		showThumbs: true,
		addMore: false,
		allowDuplicates: false,
		extensions: ['zip'],
        templates: {
            removeConfirmation: false,
        },
		captions: {
            button: "Choose Files",
            feedback: "Choose files To Upload",
            feedback2: "files were chosen",
            drop: "Drop file here to Upload",
            removeConfirmation: "Are you sure you want to remove this file?",
            errors: {
                filesLimit: "Only {{fi-limit}} files are allowed to be uploaded.",
                filesType: "Only Zip files are allowed to be uploaded.",
                filesSize: "{{fi-name}} is too large! Please upload file up to {{fi-fileMaxSize}} MB.",
                filesSizeAll: "Files you've choosed are too large! Please upload files up to {{fi-maxSize}} MB.",
                folderUpload: "You are not allowed to upload folders."
            }
        }
	});

});