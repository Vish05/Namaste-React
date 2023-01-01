**NPX -** - npm run == npx - npm run start == npm start

**babel-plugin-transform-remove-console -** -

- Remove all console log
- https://www.npmjs.com/package/babel-plugin-transform-remove-console

.babelrc

{
"plugins": [ ["transform-remove-console", { "exclude": [ "error", "warn"] }] ]
}

**Render -** - react call it component itself

**Reconciliation -** React provides a declarative API so that you don’t have to worry about exactly what changes on every update. This makes writing applications a lot easier, but it might not be obvious how this is implemented within React.

```
- **Keys -**

<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

**React.CreateElement -**

    - React comes for node_modules
    - It is object and the react convert into HTML, puts into DOM

**Bable -**

    - Babel is a JavaScript compiler
    - Bable take JSX code and gives us HTML code

**JSX - Javascript XML**

    - JSX HTML like syntax but it is not HTML inside Javascript
    - babel understading jsx and convert into HTML
    - JSX is react.createelement behind the scene and react.createelement is object which converted into HTML
    - JSX is created by React
    - JSX is not a package so it is not "import"
    - {} inside bracket we can write any javascript code
    - <Title /> this is known as component composition

**Component**

    - 2 Types ( Functional and Class based component)
    - Functional Componet - New Way
    - Class Component - Old way

**Functional Componet**

    - It is javascript function that return some spece of jsx element
    - Name of component will start with Captical Letter ( but not mandatory)
