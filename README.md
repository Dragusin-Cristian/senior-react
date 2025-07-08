## How I plan to use every important aspect learned from the course in this project (all namings are just for the concept, not fixed):

- Container Components DP is mainly used for separation of concerns: 
    - the smart component fetched data & executes business logic
    - the dumb component only displays the data

I plan to create a Dashboard that fetched data, handles clicks and other events as a smart component. The dashboard will render items as Card instances which will be the dumb component.

- Render Props DP receives as props the data and the function that returns the component for each item.

I plan to create a ListView for the items and pass the ListView inside the Dashboard passing as data the data fetched inside the Dashboard smart component and render as renderItem function prop the Card dumb component.

- HOCs are used to handle business logic and pass the results and functions as props to the Component.

I plan to create an includeCrudResource HOC that will take the resource URL, and performe the CRUD actions on that resource (current user, items etc.). The includeCrudResource HOC will wrap around the Dashboard and will pass the logic functions as props. The includeCrudResource HOC will also handle the isLoading state.

- Polymorphic Component DP is used for creating flexible and reusable components that can render different HTML elements or components.

I plan to create at least 2 components for that: one is Text which will get the prop "as" headings h1 - h6, and another one is Button which can render buttons or anchor tags.

- useCallback as ref is very useful for working with refs of elements that may or not be rendered. 

I plan to create a components for adding items. The component AddItem will have a state isAdding boolean. when isAdding is false, a button "Add new item" will be rendered and the input not. When the isAdding is true the button will hide and the input will show.

- Extra, create a src folder short path ~

- Use the Layout Component DP

I plan to create a few layouts, one for the CardLayout, one for the AppLayout (with navigation)
