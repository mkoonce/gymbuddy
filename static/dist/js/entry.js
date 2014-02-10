var round_count = 1;

jQuery(document).ready(function(){
    // This button will increment the value
    updateButtons();

});

function updateButtons () {

$('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
            $('input[name='+fieldName+']').attr('value', currentVal+1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
            $('input[name='+fieldName+']').attr('value', 0);
        }
    });
// This button will decrement the value till 0
$(".qtyminus").click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name='+fieldName+']').val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 0) {
        // Decrement one
        $('input[name='+fieldName+']').val(currentVal - 1);
        $('input[name='+fieldName+']').attr('value', currentVal-1);
    } else {
        // Otherwise put a 0 there
        $('input[name='+fieldName+']').val(0);
        $('input[name='+fieldName+']').attr('value', 0);
    }
});

$('.deleteround').click(function() {
    var id = $(this).attr('roundid');
    var toDelete = $("#round" + id);
    toDelete.remove();
});

};

$('#addanother').click(function() {
    ++round_count;
    var addTo = $("#rounds");
    addTo.html(addTo.html() + '<div class="panel panel-default" id="round' + round_count + '"><div class="panel-heading">Round ' + round_count + '</div><div class="panel-body"><form method="POST" action="#" role="form" id="form' + round_count + '"><div class="form-group"><label for="reps' + round_count + '">Reps</label><div class="input-group"><span class="input-group-btn"><input id="reps' + round_count + '" type="button" value="-" class="qtyminus btn btn-default" field="reps' + round_count + '" /></span><input type="text" name="reps' + round_count  + '" value="0" class="qty form-control" /><span class="input-group-btn"><input type="button" value="+" class="qtyplus btn btn-default" field="reps' + round_count + '" /></span></div><!-- /input-group --></div><!-- /form-group --><div class="form-group"><label for="weight">Weight</label><div class="input-group"><span class="input-group-btn"><input id="weight' + round_count + '" type="button" value="-" class="qtyminus btn btn-default" field="weight' + round_count + '" /></span><input type="text" name="weight' + round_count + '" value="0" class="qty form-control" /><span class="input-group-btn"><input type="button" value="+" class="qtyplus btn btn-default" field="weight' + round_count + '" /></span></div><!-- /input-group --></div><!-- /form-group --></form><a class="btn btn-default deleteround" roundid="' + round_count + '">- Delete round</a></div><!-- /panel-body --></div><!-- /panel -->');
    updateButtons();
});
