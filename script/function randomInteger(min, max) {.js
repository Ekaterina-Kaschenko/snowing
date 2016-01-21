function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
};

function createSpanElement() {
	var spanElement = document.createElement('span');
	document.body.appendChild(spanElement);
	return spanElement;
};

function spanClassName() {
	var classNames = ['snow1', 'snow2', 'snow3'],
  	spans = [];
  
  classNames.forEach(function(item, index, classNames) {
				spanElement = createSpanElement();
				spanElement.className = item;        
        spans.push( spanElement );
			}
	);
  
  function spanElementPosition() {
    spans.forEach.call(function(item, index, spans) {
      spans.style.top = randomInteger('0', '100') + '%';
      spans.style.left = randomInteger('0', '100') + '%';
    });
  }
  spanElementPosition();
}

spanClassName();

function snowing() {
  setInterval(spanElementPosition, 500);
}
snowing();