$(document).ready(function(){

  // add item to list function
  $('#new-item-btn').on("click", function (e) {
    e.preventDefault();
    var itemName = $('#new-name').val();
    var itemPrice = $('#new-price').val();
    if (itemPrice !== "") {
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
    } else {
      alert("please enter a number");
    }
  });

  // total price function
  function updateTotal(e){
    var subtotalElements = $('tbody tr td:last-child');
    var total = 0;

    subtotalElements.each(function(index, element){
      var subtotalStr = $(element).html();
      var subtotalNum = parseFloat(subtotalStr.replace("$",""));
      total += subtotalNum;
    });

    $('#total-price').html("$" + total.toFixed(2));
  }

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

  function updateAll(e){
    updateSubtotal(e);
    updateTotal(e);
  }

  function bindInput () {
    $('tbody input').on("keyup", updateAll);
  }

  bindInput();
});
