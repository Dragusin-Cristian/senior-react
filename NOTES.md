# NOTES FOR EACH SECTION

## Scalable Project Architecture


- General Architecture:
    - /api = methods for performing API requests
    - /assets
        - /fonts
        - /images
    - /components
        - /common = reusable components used across the app (buttons, texts etc.)
    - /config = runtime config files + 3rd party services (Firebase, auth servies etc.) Not .env files!
    - /constants
    - /context = global level context state providers
    - /helpers = utilities and small reusable functions (format date, time, currency etc.)
    - /hooks
    - /intl = when internalization is required in the app (translations, currencies, date formats)
    - /layout
    - /services = business logic code
    - /store = global state management (Redux, Zustand)
    - /styles = theme styles, styles variables
    - /types = for TS projects
    - /views = route components (pages)



- FEATURE BASED APPROACH: You are responsible for the code you write, you own that feature. Keep feature files as close as possible to e ach other. Don’t spread files across the project. So if you have specific components, services, types, utils to a single feature, create a folder for that feature with subfolders for components, services, types, utils etc. Don’t separate them in the root components, services, types, utils etc. folders.
