

// SelectText
function SelectText(element) {
  var doc = document,
      text = element,
      range, selection;

  if (doc.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
      /*
      if(range.toString().length === 0){
        range.moveToElementText(text);
        range.select();
      }
      */
  } else if (window.getSelection) {
      selection = window.getSelection();
      if(selection.toString().length === 0){
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
      }
  }
}

$(document).ready(function(){    
    $(".fil-cat").click(function() {
      
      $('.rk-menu__item').removeClass('active');
      var parent = $(this).parent();
      parent.addClass( 'active' );

      var selectedClass = "";
      
      selectedClass = $(this).attr("data-rel"); 

      $(".rk-portfolio__items").fadeTo(100, 0.1);

      var items, filtered, query, diff;      
      items = $(".rk-portfolio__items a.rk-item");

      if (selectedClass === 'all') {
        filtered  = items;
        diff      = [];
      } else {
        query     = [ '[data-cat="', selectedClass, '"]' ].join('');
        filtered  = items.filter(query);
        diff      = items.not(filtered).get();
      }

      setTimeout(function() {

        $(diff).fadeOut();
        $(filtered).fadeIn();
        $(".rk-portfolio__items").fadeTo(300, 1);

      }, 300); 
    
    });
}); 