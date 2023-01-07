**Props -** Arguments passed into react components.

**Bundlers -** It is development tool which combines all the files and makes single file which is production ready.
_Ex -_ webpack(_used by React_), vite, parcel, rollup

**package-lock.json -** specifies the exact version of the dependencies.

- **integrity -** maintains the hash of exact version loacl and prod

**package.json -** holds metadata of the project and list of depedencies.

**npx -** excutes using npm.

**npm -** package manager.

**Treeshaking -** removing of the dead code, checks whether imported and exported files are used.

**dist -** holds the minified files and serves it on server, and also creates the dev build.

**parcel -**

- users Hot module replacement to keep track of file changes which use _file watcher algorithm._
- helps in cleaning up the files.
- helps in bundling, building, minifying the files.
- helps in optimising the js and media files.
- caching during development.
- manages port number.
- it requires less configuration or zero configuration.
- compatible with older version of browser using "browserlist" in package.json
- Tree Shaking - removing of the dead code, checks whether imported and exported files are used
- babel - convert your latest version code(es6) into older version of code (es6)

- Does not remove console.log

**browserlist -**

- The config to share target browsers and Node.js versions between different front-end tools.
