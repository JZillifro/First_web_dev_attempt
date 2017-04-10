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

function google() {
	document.querySelector('#leftNip').innerHTML = 
		'<div><button type="button" onClick="removeGoogle()">beep boop</button>' + 
			'<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/jeL7NfZ62S8?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>' + 
		'</div>';
}

function removeGoogle() {
	document.querySelector('#leftNip').innerHTML = 
						'<div>' +
						'<a href="https://www.facebook.com/jacob.zillifro" class="btn btn-primary">Facebook</a>' +
						'<a href="https://www.instagram.com/jzillifro/?hl=en" class="btn btn-success">Instagram</a>' +
						'<button type="button" class="btn btn-danger" onClick="google()">Google</a>' +
						'</div>'
}