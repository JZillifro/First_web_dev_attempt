function droids() {
	document.querySelector('.panel-body').innerHTML = 
		'<div>' +
		'<div style="position:relative;height:0;padding-bottom:56.25%" id="youtoob">' + 
			'<iframe src="https://www.youtube.com/embed/2I33k8vV3Sk?ecver=2" width="356px" height="200px" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe>' + 
		'</div><button type="button" onClick="removeDroids()">good one.</button></div>';
}

function removeDroids() {
	document.querySelector('.panel-body').innerHTML = '<img src="http://i.imgur.com/N2XDtVY.jpg" id="profile"/>'
}

function google() {
	document.querySelector('#leftNip').innerHTML = 
		'<div>' + 
			'<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/jeL7NfZ62S8?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>' + 
		'<button type="button" onClick="removeGoogle()">beep boop</button></div>';
}

function removeGoogle() {
	document.querySelector('#leftNip').innerHTML = 
						'<div id="mediaButtons">' +
							'<a href="https://www.facebook.com/jacob.zillifro" class="btn btn-primary">Facebook</a>' +
							'<a href="https://www.instagram.com/jzillifro/?hl=en" class="btn btn-success">Instagram</a>' +
							'<button type="button" class="btn btn-danger" onClick="google()">Google</a>' +
						'</div>	'	
}

function dream() {
	document.querySelector('.panel-body').innerHTML = 
		'<div>'+
			'<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/G7RgN9ijwE4?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>' + 
		'<button type="button" onClick="removeDream()">I have had a dream like that.</button></div>';
}

function removeDream() {
	document.querySelector('.panel-body').innerHTML = '<img src="http://i.imgur.com/N2XDtVY.jpg" id="profile"/>'
}