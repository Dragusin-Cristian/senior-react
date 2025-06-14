# NOTES FOR EACH SECTION

## Performance Optimization

- code splitting and lazy loading with react router 6
- React.memo, useCallback, and useMemo for preventing re-renders with memoization
- state collocation: create the state as down as possible where it's needed, avoid passing state and setState via props
- lift components up when possible for preventing re-renders
- throttling: limits the function execution to once every X ms
- debouncing: delays function execution until X ms after the last call
