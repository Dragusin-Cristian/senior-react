# NOTES FOR EACH SECTION

## Boonus Section

- Wrapper Components Design Pattern (wraps around the component to add extra styles). Different from Container Components because those add business logic, not stying, typically stateless

```tsx
const CardWrapper = ({ children }) => (
  <div className="p-4 border rounded shadow">
    {children}
  </div>
);

// Usage
<CardWrapper>
  <Profile />
</CardWrapper>
```
