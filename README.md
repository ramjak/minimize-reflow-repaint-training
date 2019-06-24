## How to use:
- use remote debugger on low-end phone to know more about the reflow and repaint impact.
- script time does not reflect the reflow and repaint time, you have to open profiling tools to know more about the impact of each adding content method.

## Result:
### Chrome:
- creating element 'one by one' and 'all at once' does not really have any difference. Probably because recalculate and layout event have to wait until the whole script done.
- replacing only the part that changed have a smallest reflow and repaint time. Even though it has biggest script running time.  

## Reference:
- [Efficient Javascript](https://dev.opera.com/articles/efficient-javascript/#reflow)
- [Reflows & Repaints: CSS Performance making your JavaScript slow?](http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/)
- [ Minimizing browser reflow](https://developers.google.com/speed/docs/insights/browser-reflow)
