## Code style agreements 

### Styles 
- Don't use `export default {}`, only naming export
- Folder names and components file name with `camelCase`
- Types with `pascalCase`
- Don't use `interface` until you can prove you really need it

### Folder structure
- `app` for high-level abstractions, providers
- `pages` for pages
- `features` for everything you can call 'Page'
- `shared` for dumb components, utils, constants etc
- Typical import way: `App` -> `Pages` -> `Features` -> `Shared`. Avoid level up imports
