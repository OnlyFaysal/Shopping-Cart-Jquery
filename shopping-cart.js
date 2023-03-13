$(document).ready(function () {

	// Add to cart button click event
	$('.add-to-cart').click(function () {
		var price = $(this).data('price');
		var quantity = parseInt($(this).closest('tr').find('.quantity').val());

		if (quantity > 0) {
			var name = $(this).closest('tr').find('td:first').text();
			var total = price * quantity;
			var cartItem = $('<tr><td>' + name + '</td><td>$' + price.toFixed(2) + '</td><td>' + quantity + '</td><td>$' + total.toFixed(2) + '</td><td><button class="remove-item">Remove</button></td></tr>');
			$('#cart tbody').append(cartItem);
			updateCartTotal();
		}
	});

	// Remove item button click event
	$('#cart tbody').on('click', '.remove-item', function () {
		$(this).closest('tr').remove();
		updateCartTotal();
	});

	// Update cart total function
	function updateCartTotal() {
		var total = 0;
		$('#cart tbody tr').each(function () {
			var price = parseFloat($(this).find('td:nth-child(2)').text().replace('$', ''));
			var quantity = parseInt($(this).find('td:nth-child(3)').text());
			total += price * quantity;
		});
		$('#cart-total').text('$' + total.toFixed(2));
	}

});

