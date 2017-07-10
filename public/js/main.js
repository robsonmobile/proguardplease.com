$(document).ready(function () {
  new Clipboard('.btn');

  $('#search').bind("click", function (e) {
    e.preventDefault();

    $.ajax({
      url: '/rules',
      type: 'POST',
      cache: false,
      data: {
        library: $('#library').val(),
      },
      success: function (data) {
        $("#rules").text(data[0].rules);
      },
      error: function (jqXHR, textStatus, err) {
        console.log('text status ' + textStatus + ', err ' + err)
      }
    });
  });

});