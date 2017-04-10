function droids() {
	document.querySelector('.panel-body').innerHTML = 
		'<div><button type="button" onClick="removeDroids()">good one.</button>' +
		'<div style="position:relative;height:0;padding-bottom:56.25%" id="youtoob">' + 
			'<iframe src="https://www.youtube.com/embed/2I33k8vV3Sk?ecver=2" width="356px" height="200px" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe>' + 
		'</div></div>';
}

function removeDroids() {
	document.querySelector('.panel-body').innerHTML = '<img src="http://i.imgur.com/N2XDtVY.jpg" id="profile"/>'
}