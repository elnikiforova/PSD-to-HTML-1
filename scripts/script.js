var tweet = `<div style="margin: 20px 0; padding: 10px; background: #eee">
The big fight live: Ham vs Cheese!
 </div>`;

$('#tweets div').append(tweet);
// $('#tweets div').html(tweet);
// $('#tweets div').text(tweet);

// event binding
$('#points-of-sale').on('click', function () {
  console.log('event binder');
})

// event helper
$('#contact').click(function () {
  console.log('event helper');
})
