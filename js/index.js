
// Init code of jquery.
$(document).ready(function() {
    
    // Play song.
    audioPlay = new Audio('/audio/jumpScare.mp3')
    
    // Hide elements.
    $('.jumpScare').hide()
    $('.search').hide()
    $('.clearInput').hide()
    function clearInput() {
        $('.search').val('')
        $(".full li").css("display", "block");
    }
    
    // Show/hide search bar.
    function showSearch() {
        $('.search').toggle('slow')
        $('.clearInput').toggle('slow')
    }
    
    // Init to easter egg.
    function init() {
        $('.notClick').html("EU AVISEI")
        audioPlay.play()
        setTimeout(function() {
            $('.jumpScare').toggle()
        }, 5000)
    }
    
    // Filter on search bar.
    $(".search").keyup(function(){
		var texto = $(this).val();
		$(".full li").css("display", "block");
		$(".full li").each(function(){
			if($(this).text().indexOf(texto) < 0)
			   $(this).css("display", "none");
		});
	});
    
    // Time of standby to easter egg.
    setTimeout(function() {
        $('.jumpScare').hide()
        audioPlay.mute()
    }, 8000)
    
    // Events to call functions.
    $('#icon1').on('click', showSearch)
    $(".notClick").on('click', init)
    $(".clearInput").on('click', clearInput)
});
