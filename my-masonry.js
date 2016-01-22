jQuery(function($){


$('div.activity-comments form textarea').keypress(function(event){
    element = event.target;
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
var user_id = $(this).closest("form").attr("id");
var button_id = '#' + user_id + ' > div.ac-reply-content > input[type="submit"]:nth-child(2)';

$(button_id).trigger("click");

    }
end();
});

var activity = $('#activity-stream').masonry();
activity.masonry({
'gutter': 20,
'columnWidth': 352.5, 
'isFitWidth': true
});

activity.imagesLoaded( function() {
  activity.masonry();
});

$( "div.activity-content > div.activity-meta > a.button.item-button.bp-secondary-action.delete-activity.confirm" ).click(function() {
});

$('#activity-stream').on('DOMNodeInserted', function(event) {
$( activity ).masonry( 'reloadItems' );
$( activity ).masonry( 'layout' );
$('.ac-input.bp-suggestions').attr('placeholder', 'Comment');
$('div.activity-comments form textarea').keypress(function(event){
    element = event.target;
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
var user_id = $(this).closest("form").attr("id");
var button_id = '#' + user_id + ' > div.ac-reply-content > input[type="submit"]:nth-child(2)';

$(button_id).trigger("click");
end();
    }
});

activity.imagesLoaded( function() {
  activity.masonry();
});

});

$('#activity-stream').on('DOMNodeRemoved', function(event) {
$( activity ).masonry( 'reloadItems' );
$( activity ).masonry( 'layout' );
});
$( document ).ajaxComplete(function() {
$( activity ).masonry( 'reloadItems' );
$( activity ).masonry( 'layout' );
});
});

