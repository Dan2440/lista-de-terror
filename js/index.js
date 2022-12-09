

// Init code of jquery.
$(document).ready(function() {
    
    var box = document.getElementsByClassName('switch').length
    //var box = document.querySelector('.switch')
    $('.switch').click(function() {
        for (let i = 1; i <= box; i++) {
            var checkbox = document.getElementById(String(i));
            localStorage.setItem("jogo" + String(i), checkbox.checked);
        }    
    })
    //for loading
    for (let i = 1; i <= box; i++) {
        if (localStorage.length > 0) {
            var checked = JSON.parse(localStorage.getItem("jogo" + String(i)));
            document.getElementById(String(i)).checked = checked;
        }
    }
    
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
    }, 8000)
    
    // Events to call functions.
    $('#icon1').on('click', showSearch)
    $(".notClick").on('click', init)
    $(".clearInput").on('click', clearInput)
});
