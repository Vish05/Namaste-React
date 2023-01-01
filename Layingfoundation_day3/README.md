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

**Keys -** -

<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

**React.CreateElement -**

    - React comes for node_modules
    - It is object and the react convert into HTML, puts into DOM
