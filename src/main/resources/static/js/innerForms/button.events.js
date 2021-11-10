function showButtonsSave() {
    $('.buttons-edit').hide();
    $('.buttons-save').show();
    $('.form-details').removeAttr("disabled")
}

function hideButtonsSave() {
    $('.buttons-edit').show();
    $('.buttons-save').hide();
    $('.form-details').attr("disabled", "");
}