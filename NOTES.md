# NOTES FOR EACH SECTION

## Advanced Concepts and Hooks

- Portals stick your component to certain DOM elements



- Error boundaries class elements handle your errors at certain nesting levels.
Always have an error boundary at application top level to be sure.
Error boundaries only work for React crashes.



- Keys are used to differentiate same element appearances in the virtual DOM (which is a JS object) if they have similar paths (body > div > Element). If they would have different DOM paths (body > div > Element and body > section > element), then they would re-render



- Event listeners: Simple listeners (onClick, onHover etc.) use Bubble effect (goes from child to parent), while Capture listeners (onClickCapture etc) start triggering from outside to inside



* useEffect is asynchronous: the function runs after the Virtual DOM is committed to the Real DOM and Real DOM was painted to the screen. (That’s why useEffect is good for async tasks like Data fetching, subscriptions, timers, logging)
* useLayoutEffect is synchronous: the function runs after the Virtual DOM is committed to the Real DOM but before the Real DOM is painted to the screen (That’s why useLayoutEffect is good for layout changes: Layout measurements, scroll adjustments, style changes)



- useId hook will create an Id for the specific component in the DOM. It’s good when you have server side rendering and client side rendering, because the id will be the same for that particular rendered component. Using Math.random() as id, will have different values for server and client renders.



- useCallback can be used as Ref for elements that may be or not rendered



- useDeferredValue will return the state only after all updates of the component take place (other states update as well)
- useTransition needs to be used only for large computations, because it will trigger an extra render of the component


NOT FINIHSED YET: REACT ROUTER