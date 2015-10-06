$(document).ready(function(){
  // add item to list function
  // calculate sub-total function
  // total price function

  $('#new-item-btn').on("click", function (e) {
    e.preventDefault();
    var itemName = $('#new-name').val();
    var itemPrice = $('#new-price').val();
    var html = '';
    html = html + "<tr>";
    html = html + "  <td>" + itemName + "</td>";
    html = html + "  <td>$" + itemPrice + "</td>";
    html = html + "  <td><input type=\"number\" name=\"quantity\"></td>";
    html = html + "  <td>$00.00</td>";
    html = html + "</tr>";
    $('tbody').append(html);

    $('form')[0].reset();
  });


});
