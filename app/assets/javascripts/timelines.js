$(function(){
  $('form.input_message_form input.post').click(function(e){
    // 「Post」ボタンは非Ajaxにする
    var form = $('form.input_message_form');
    form.removeAttr('data-remote');
    form.removeData("remote");
    form.attr('action', form.attr('action').replace('.json', ''));
  });

  $('form.input_message_form').on('ajax:complete', function(event, data, status){
    // Ajaxレスポンス
    if ( status == 'success') {
      var json = JSON.parse(data.responseText);
      // ここでifでtimelineとerrorの処理を分岐させます
      if(json.timeline) {
        $('div.timeline').prepend($(json.timeline));
      } else if (json.error) {
        $('div.alert').prepend(json.error);
      }
      
    }
  });
});
