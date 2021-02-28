# Locate & Position Element With Js ; The Guide

+ `Coordination X & Y`
is the same as clientX and clientY
is the same as screenX and screenY
+ `Width & Height`
  x/y – X/Y-coordinates of the rectangle origin relative to window,
    width/height – width/height of the rectangle (can be negative).

+ `ClientX & ClientY`
Client → the client viewport of the browser (clientX/Y)
If you click in the left top corner the value will always be (0,0) independent on scroll position. so, Even if you scroll the Document, the values are always the same.
viewport → the current body visible area
+ `PageX & PageY`
 Document → the complete document/page `HTML` (pageX/Y)
Note that pageX/pageY on the UIEvent object are not standardized.
+ `ScreenX & ScreenY`
Screen → the full screen of the monitor (screenX/Y)
Position will always be relative to the physical screen's viewport.
current position computer screenX and y coordinates
+ `OffsetX & OffsetY`
relative to X, Y coordinates event source element (srcElement)
relative to the x,y coordinates of the parent box with positioning
Relative to the x and y coordinates of the current monitoring element
+ `LayerX & LayerY`
  Is the position of the absolute/relative positioning element of the mouse relative to the target element (current dom or parent element) (Include border）
+ `OffsetLeft & OffsetTop`
   returns the  position (in pixels) relative to the side the offsetParent element the value returned includes : the top position, and margin of the element, the top padding, scrollbar and border of the offsetParent element
+ `OffsetParent`
   offsetParent is the closest parent that has `position:relative` or `position:absolute` or the body of the page
   The offsetParent property returns the nearest ancestor that has a position other than static.
  
+ *`ClientWidth & ClientHeight`*
  clientWidth and clientHeight you’re able to get the pixel dimensions of an HTML element.
  Borders, margins, or scrollbar (if present) are excluded when computing clientWidth and clientHeight.
  returns the inner height & width of an element in pixels, including padding but not the horizontal scrollbar height, border, or margin
+ `GetSelection()`
   returns a Selection object representing the range of text selected by the user or the current position of the caret.
+ `SelectionStart & SelectionEnd`
  using `input.select()` on input element caused to select the entire text . but now with SelectionStart & SelectionEnd , it's relatively easy to determine where the selection happen selectionStart & Selection End determine the index on which either the caret start of ends 
+ `setSelectionRange()`
  Same as SelectionStart and SelectionEnd it's does the same thing but the only difference is that it takes on two parameters setSelectionRange(IndexStart , IndexEnd)
  
  `Range`:
  The basic concept of selection is Range, that is essentially a pair of “boundary points”: range start and range end.
    + **createRange()** :
    + **Range()** :
    + **getRangeAt()**:
    + **caretRangeFromPoint()** :
    + ***cloneRange()*** :




<!-- + `scrollTop`
+ `movementX/movementY`
+ `scrollHeight` -->

 
<!-- - [Offsetwidth & OffsetHeight](#Client)
- [InnerWidth & InnerHeight](#Client)
- [OuterWidth & OuterHeight](#Client)
- [ElementFromPoint()](#Client) -->
<!-- - [Contenteditable & white-space & Word-Break](#Client)
- [element.contentEditable](#Client)
- [createTextRange()](#Client)
- [createRange()](#Client)
- getBoudingClientRect()
- [isContentEditable](#Client)
- [event.rangeParent](#Client)
- [event.rangeOffset](#Client)
- [caretRangeFromPoint()](#Client)
- [Range()](#Client) --> -->
  