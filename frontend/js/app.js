$(document).ready(function(){
	//$("."+appData.moduleName).addClass("active")

	ac.onAvailable(".ac-popover",function(){
		$.each(this,function(){
			var id=$(this).attr("id")
			$(this).after("<div id='"+id+"-popover' class='"+id+"' tabindex='-1'></div>")
			$(this).popover({
				html:true,
				placement:"bottom",
				content:$(this).find(".details").html(),
				container: "#"+id+"-popover",
				trigger:"hover"
			})
			var self=$(this)
			$("#"+id+"-popover").blur(function(e){
				console.log(e)
				self.popover('hide')
			})
		})
	})

	$('.tooltip-trigger').tooltip()

	if (innerWidth>750) {}

})
