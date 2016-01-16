jQuery(function($){
$('#activity-stream').on('DOMNodeInserted', function(event) {

        var load_newest_btn=$(".load-newest:visible");

        if(!load_newest_btn.get(0)){
            return;
        }
        else
        {
        $( "#activity-stream > li:nth-child(1) > a").trigger( "click" );
        }
    
    });

});
