$(document).ready(function(){
	console.log('ready')

var videos = [
            {videoURL:'https://www.youtube.com/watch?v=Y_qEzbXcwqg',containment:'self',startAt:0,mute:false,autoPlay:true,loop:false,opacity:1,showControls:false,showAnnotations:false},
            {videoURL:'https://www.youtube.com/watch?v=unVfhJeyKMk',containment:'self',startAt:0,mute:false,autoPlay:true,loop:false,opacity:1,showControls:false,showAnnotations:false},
            {videoURL:'https://www.youtube.com/watch?v=VfVX1e4MAgo',containment:'self',startAt:0,mute:false,autoPlay:true,loop:false,opacity:1,showControls:false,showAnnotations:false},
            {videoURL:'https://www.youtube.com/watch?v=tLsGlrEyjiQ',containment:'self',startAt:0,mute:false,autoPlay:true,loop:false,opacity:1,showControls:false,showAnnotations:false},
            {videoURL:'https://www.youtube.com/watch?v=JXO5WXU_bWk',containment:'self',startAt:0,mute:false,autoPlay:true,loop:false,opacity:1,showControls:false,showAnnotations:false},
            {videoURL:'https://www.youtube.com/watch?v=sZ1WWTnVub8',containment:'self',startAt:0,mute:false,autoPlay:true,loop:false,opacity:1,showControls:false,showAnnotations:false},
            {videoURL:'https://www.youtube.com/watch?v=AdoG_eSfa3g',containment:'self',startAt:0,mute:false,autoPlay:true,loop:false,opacity:1,showControls:false,showAnnotations:false},
            {videoURL:'https://www.youtube.com/watch?v=xN4bwuIZK8g',containment:'self',startAt:0,mute:false,autoPlay:true,loop:false,opacity:1,showControls:false,showAnnotations:false},
            {videoURL:'https://www.youtube.com/watch?v=j9MqDjk2Jss',containment:'self',startAt:0,mute:false,autoPlay:true,loop:false,opacity:1,showControls:false,showAnnotations:false}
        ];

	 jQuery(".player").YTPlaylist(videos, true);
	jQuery.mbYTPlayer.apiKey = "AIzaSyCf-y_WrLrvruUGZpzABWC-ZoE8rGG5Qhg"
$('.getData').click(function(){

console.log(jQuery('.player').YTPManageProgress().currentTime)

})
$('#movie1').click(function(){
$('.player').YTPChangeMovie({videoURL:'https://www.youtube.com/watch?v=Y_qEzbXcwqg',containment:'self',startAt:0,mute:false,autoPlay:true,loop:false,opacity:1,showControls:false,showAnnotations:false})
}	);
$('#movie2').click(function(){
$('.player').YTPChangeMovie({videoURL:'https://www.youtube.com/watch?v=unVfhJeyKMk',containment:'self',startAt:0,mute:false,autoPlay:true,loop:false,opacity:1,showControls:false,showAnnotations:false})
}	)
$('#movie3').click(function(){
$('.player').YTPChangeMovie({videoURL:'https://www.youtube.com/watch?v=VfVX1e4MAgo',containment:'self',startAt:0,mute:false,autoPlay:true,loop:false,opacity:1,showControls:false,showAnnotations:false})
}	)
$('#movie4').click(function(){
$('.player').YTPChangeMovie({videoURL:'https://www.youtube.com/watch?v=tLsGlrEyjiQ',containment:'self',startAt:0,mute:false,autoPlay:true,loop:false,opacity:1,showControls:false,showAnnotations:false})
}	)
$('#movie5').click(function(){
$('.player').YTPChangeMovie({videoURL:'https://www.youtube.com/watch?v=JXO5WXU_bWk',containment:'self',startAt:0,mute:false,autoPlay:true,loop:false,opacity:1,showControls:false,showAnnotations:false})
}	)
$('#movie6').click(function(){
$('.player').YTPChangeMovie({videoURL:'https://www.youtube.com/watch?v=sZ1WWTnVub8',containment:'self',startAt:0,mute:false,autoPlay:true,loop:false,opacity:1,showControls:false,showAnnotations:false})
}	)
$('#movie7').click(function(){
$('.player').YTPChangeMovie({videoURL:'https://www.youtube.com/watch?v=AdoG_eSfa3g',containment:'self',startAt:0,mute:false,autoPlay:true,loop:false,opacity:1,showControls:false,showAnnotations:false})
}	)
$('#movie8').click(function(){
$('.player').YTPChangeMovie({videoURL:'https://www.youtube.com/watch?v=xN4bwuIZK8g',containment:'self',startAt:0,mute:false,autoPlay:true,loop:false,opacity:1,showControls:false,showAnnotations:false})
}	)
$('#movie9').click(function(){
$('.player').YTPChangeMovie({videoURL:'https://www.youtube.com/watch?v=j9MqDjk2Jss',containment:'self',startAt:0,mute:false,autoPlay:true,loop:false,opacity:1,showControls:false,showAnnotations:false})
}	)
$('#cancel').click(function(){
		$('#name').val('');
		$('#comment').val('');
		console.log('heppen');
});



$('.myform').submit(
	function(e){
		e.preventDefault();
		
		$('.player').YTPPause();
		var val = $('.myform').serializeArray()

		console.log(String(jQuery('.player').YTPManageProgress().currentTime) )
		val.push({name:'time',value: String(jQuery('.player').YTPManageProgress().currentTime)});
		console.log('myform loading ' + val['time']);
		$.ajax(
				{
					url : 'http://localhost:3000/open',
					data : val,
					method: 'POST',
					success: function(){
						alert('The answer of your question would be mailed');
						console.log('success')
					}

				}
			)

		$('#name').val('');
		$('#comment').val('');
	}
	)
})
