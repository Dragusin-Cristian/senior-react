# NOTES FOR EACH SECTION

## Clean code tips

- Using element prop: very useful for rendering specific DOM elements as custom React components with styles and logic. For example rendering an anchor tag in Real DOM with the Button component

- Optimising Context API: 
    - Keep every context in it’s separate file
    - Separate dispatches from state updates for re-rendering only the components that listen to the state changes (like displays), not also the ones that only use dispatches (like buttons)

- Less useEffects:
    - useEffect is good for fetching and other business mechanisms
    - don't use useEffect for event side effects (like user inputs, layout changes)
    - Never use chained useEffects