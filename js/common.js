

var press  =0;
$('.trigg_nav_btn').on('click',function(e){
	e.preventDefault();
	if(press == 0){
		$(this).addClass('active');
		$('#navbarSupportedContent').addClass('show');
		press = 1;
	}else{
		$(this).removeClass('active');
		$('#navbarSupportedContent').removeClass('show');
		press = 0;
	}
});
$('.overlay').on('click',function(){
		$('.trigg_nav_btn').removeClass('active');
		$('#navbarSupportedContent').removeClass('show');
		press = 0;
})