// Supports links to targets inside closed <details> elements

// Based on https://www.sitepoint.com/fixing-the-details-element/
// Edited by Peter Mosses <https://pdmosses.github.io>:
// - All ARIA code removed
// - Deferment of loading to DOMContentLoaded removed
// - Assumes HTML5 and modern browser

// Caveat: The editor has no previous experience of writing JS,
// nor expertise in browser compatibility.
// Suggestions for improvmenet are welcome!


//add event construct for modern browsers or IE
//which fires the callback with a pre-converted target reference
function addEvent(node, type, callback)
{
	if(node.addEventListener)
	{
		node.addEventListener(type, function(e)
		{
			callback(e, e.target);
			
		}, false);
	}
	else if(node.attachEvent)
	{
		node.attachEvent('on' + type, function(e)
		{
			callback(e, e.srcElement);
		});
	}
}

//handle cross-modal click events 
function addClickEvent(node, callback)
{
	var keydown = false;
	addEvent(node, 'keydown', function()
	{
		keydown = true;
	});
	addEvent(node, 'keyup', function(e, target)
	{
		keydown = false;
		if(e.keyCode == 13) { callback(e, target); }
	});
	addEvent(node, 'click', function(e, target)
	{
		if(!keydown) { callback(e, target); }
	});
}

//get the nearest ancestor element of a node that matches a given tag name
function getAncestor(node, match)
{
	do
	{
		if(!node || node.nodeName.toLowerCase() == match)
		{
			break;
		}
	}
	while(node = node.parentNode);
	
	return node;
}
		
	
//define a statechange function that updates aria-expanded and style.display
//to either expand or collapse the region (ie. invert the current state)
//or to set a specific state if the expanded flag is strictly true or false
//then update the twisty if we have one with a correpsonding glyph
function statechange(details, expanded)
{				
	if(expanded === false)
	{
		details.setAttribute('open', 'open');
	}
	else if(expanded === true)
	{
		details.removeAttribute('open');
	}
		
	return true;
}


//define an autostate function that identifies whether a target 
//is or is inside a details region, and if so expand that region
//then iterate up the DOM expanding any ancestors, then finally
//return the original target if applicable, or null if not
function autostate(target, expanded, ancestor)
{
	if(typeof(ancestor) == 'undefined')
	{
		if(!(target = getAncestor(target, 'details'))) 
		{ 
			return null; 
		}
		ancestor = target;
	}
	else
	{
		if(!(ancestor = getAncestor(ancestor, 'details'))) 
		{ 
			return target; 
		}
	}

	statechange(ancestor, expanded);
	
	return autostate(target, expanded, ancestor.parentNode);
}

//then if we have a location hash, call the autostate 
//function now with the target element it refers to
if(location.hash)
{
	autostate(document.getElementById(location.hash.substr(1)), false);
}			

//then bind a document click event to handle internal page links
//ignoring links to other pages, else passing the target it 
//refers to to the autostate function, and if that returns a target
//auto-scroll the page so that the browser jumps to that target
//then return true anyway so that the address-bar hash updates
addEvent(document, 'click', function(e, target)
{
	if(!target.href) 
	{ 
		return true; 
	}
	if((target = target.href.split('#')).length == 1) 
	{ 
		return true; 
	}
	if(document.location.href.split('#')[0] != target[0]) 
	{ 
		return true; 
	}
	if(target = autostate(document.getElementById(target[1]), false))
	{
		window.scrollBy(0, target.getBoundingClientRect().top);
	}
	return true;
});
