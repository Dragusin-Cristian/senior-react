# NOTES FOR EACH SECTION

## Advanced Typescript: More on Typescript

- types vs interfaces:
    - interfaces are made for defining the structure of objects and classes, to define a contract/blueprint for objects that share common props and methods, can be extended. Used for public APIs
    - types are used for defining specific data types, cannot be re-opened or extended. Used for props and components in React


## Advanced Typescript: Component Patterns

- HOC types:
```tsx
const withMousePosition = <T extends {}>(Component: React.ComponentType<TProps>) => {
    (props: Omit<T, keyof TProps>) => {
        ...
    }
}
```

- RenderProps pattern: the one used in lists, carousels when we take the renderItem prop.

```tsx
type TProps<T,> = {
  data: T[];
  renderItem: (item: T, slideIndex: number) => ReactNode;
};

const Carousel = <T, >({
  data,
  renderItem,
}: TProps<T>) => {
  return (
      <Styles.ScrollContainer
      >
        {data.map((itemProps: T, index) => (
          <Styles.Slide
            key={index}
          >
            {renderItem(itemProps, index)}
          </Styles.Slide>
        ))}
      </Styles.ScrollContainer>
  );
};
```
