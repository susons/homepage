

$(window).on( 'load', function () {
	
	setTimeout( function () {
		$( '.pagefade' ).fadeIn( 600 );
	}, 600 );
	
	$( 'a[href]' ).click( function (event) {	
		if (event.currentTarget.href == 'index.html#myCarousel')
			{
				
				
			} 
		
		var url = this.href;
			
		
		
		$( 'body' ).fadeOut( 600 );		
		setTimeout( function () {
			
			location.href = url;
	//		console.log(location.href);
		
		}, 600 );
		return false;
	});
});