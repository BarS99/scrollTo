# scrollTo
  
This repository contains a simple function called scrollDocumentTo, which is used to scroll to a given offset.  
  
Usage:  
scrollDocumentTo(value, time, callback);  
Where:
@param {int} value - offsetY to scroll  
@param {int} time - duration of scroll animation  
@callback callback - easing equation with 4 arguments where: (t - current time, b - start value, c - change in value, d - duration)  
