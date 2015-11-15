									Jquery ## http://oscarotero.com/jquery/
the way to call a selector en jquery is similar as css:
here is a n example:
$("#myList")
now the jquery can add elements from the css to the html
var color = $("body").css("background-color");
$ VS $():
$(): 
$:
api documentation:
.prepend: method inserts the specified content as the first child of each element.
.aprepend: method inserts the specified content as the last child of each element.
.remove(): remove the element from the DOM (Document Object Modeling).
.on(): method attaches event handlers to the currently selected set of elements.(https://developer.mozilla.org/en-US/docs/Web/Events).
.val(): method is primarily used to get the values of form elements such as input, select and textarea.
.html(): security risk.
.text():Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.
.find():Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
.show():Display the matched elements. This signature does not accept any arguments.
.toggleClass():Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.

diference between $ vs $()
the $ = this its for methos that generally utility-type methods, and do not work with selections.
the $() = its for methods and core methos that have the same name.
