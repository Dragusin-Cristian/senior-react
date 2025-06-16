# NOTES FOR EACH SECTION

## Appendix A - Typescript Basics

- PropsWithChildren generic for passing children's props type:

```tsx
type CardProps = {color?: "red" | "green" | "blue"}

const Card = ({children, color = "blue"}: PropsWithChildren<CardProps>) => {
    return (
        <section style={color}>
        {children}
        </section>
    )
}
```

- ComponentPropsWithoutRef generic for passing DOM element's props type:

```tsx
type ButtonProps = ComponentPropsWithoutRef<'button'>

const Button = ({children, onClick, type}: ButtonProps) => {
    return <button onClick={onClick} type={type}>{children}</button>
}
```

- use prop types branches

- partial autocomplete

```tsx
const spaces = {
    s: "0.5rem",
    m: "1rem",
    l: "2rem",
};

type Space = keyof typeof spaces;

type SpaceType = Space | (string & {}); // nobody knows why this works, but will give you autocomplete for the Space type

```

- extract types with "as const"

```tsx
const BUTTON_TYPES = {
    0: "warning",
    1: "success",
    2: "error",
} as const; // this will make the object readonly

type ButtonTypes = typeof BUTTON_TYPES; // { 0: "warning", 1: "success", 2: "error" }

type TypesKeys = keyof ButtonTypes; // 0 | 1 | 2
type TypesValues = ButtonTypes[TypesKeys] // "warning" | "success" | "error"
```

- "satisfies" keyword for single source of truth principle on dynamic props
