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
  	var paintingSnows = function() {
  			classNames.forEach(function(item, index, classNames) {
					spanElement = createSpanElement();
					spanElement.className = item;        
			        spans.push(spanElement);
				}
			);
  	var spanElementPosition = (function() {
			spans.forEach(function(item, index, array) {
				item.style.left = randomInteger('0', '100') + '%';	
				item.style.top = randomInteger('0', '10') + '%';			
			});
		})();

	};
	paintingSnows();

 function snowing() {
        for (var i = 0; i < 5; i++) {

            setTimeout(paintingSnows, 500*i);
        }
    }
    snowing();

	

}

spanClassName()
