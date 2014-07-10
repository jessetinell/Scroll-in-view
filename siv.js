//Siv = Scroll In View
var siv = function(){
	var viewportHeight;

	var elements = [];
	var calculate = function(){
		var sivEl = document.querySelectorAll("[data-siv]");
		for (var i = 0; i < sivEl.length; i++) {
			elements.push({
				el: sivEl[i],
				distance:getElementsDistanceFromViewportTop(sivEl[i]),
				seen:false,
				offset: (sivEl[i].getAttribute('data-siv') != "" ? sivEl[i].getAttribute('data-siv') : 30)
			});	
		};
	}

	var go = function(){
		//Set viewportHeight when window is loaded 
		viewportHeight = getViewPortHeight();

		calculate();

		window.onscroll = function(){
			var viewportBottomPosition = getScrollTop() + viewportHeight;
			
			for (var i = 0; i < elements.length; i++) {
				// in %
				var elementsDistanceFromBottom = ((viewportBottomPosition - elements[i].distance) / viewportHeight) * 100 >> 0;

				if(!elements[i].seen && elementsDistanceFromBottom > elements[i].offset)
				{
					elements[i].seen = true;
					elements[i].el.className = elements[i].el.className + " seen";
				}
			};
		};
	};

	function getViewPortHeight(){
		var w = window,d = document,e = d.documentElement,g = d.getElementsByTagName('body')[0],vh =w.innerHeight || e.clientHeight || g.clientHeight;
		return vh > screen.height ? screen.height : vh;
	};

//Get the distance (in %) between an element and the top of the viewport. 
var getElementsDistanceFromViewportTop = function(el){
	var yPos = 0;

	while (el)
	{
		yPos += el.offsetTop;
		el = el.offsetParent;
	}

	if (document.documentElement && (document.documentElement.scrollTop))
		yPos -= document.documentElement.scrollTop;
	else if (document.body && (document.body.scrollTop))
		yPos -= document.body.scrollTop;
	else if (window.pageYOffset)
		yPos -= window.pageYOffset;

	return yPos;
}

//Gets the distance from the top of the viewport to the top of the document. 
var getScrollTop = function(){
	if(typeof pageYOffset!= 'undefined')
		return pageYOffset;
	else{
		var B= document.body;
		var D= document.documentElement;
		D= (D.clientHeight)? D: B;
		return D.scrollTop;
	}
}
return{
	Go:go,
	Calculate:calculate
};
}();