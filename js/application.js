$(document).ready(function(){
  // total price function

  // add item to list function
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
    bindInput();
  });

  // calculate sub-total function
  function updateSubtotal(e) {

    var quantityStr = e.target.value;
    var quantityNum = parseFloat(quantityStr);

    var jqueryObj = $(e.target);
    var priceStr = jqueryObj.parent().prev().html();
    var priceNum = parseFloat(priceStr.replace("$", ""));

    var subtotal = quantityNum * priceNum;
    jqueryObj.parent().next().html("$" + subtotal.toFixed(2));
  }
  function bindInput () {
    $('tbody input').on("keyup", updateSubtotal);
  }
  bindInput();

  // select input box
  // add keyup/keydown
  // attach function
  // in function, calculate subtotal
  // change html text to the subtotal


});
