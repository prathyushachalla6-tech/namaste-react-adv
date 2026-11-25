emmet

browser has javascript engine init , so it has all the super powers of js.
Q. what is cdn?
Q. what is crossorigin ?

i copied two cdn links
1. To take care of creeatereact element
2. Dom is to handle root fetching


npm -> package manager
package.json ->   configuration for npm


bundler -> webpack,parcel,veet -> it bundels or packages your app 

npm install -D parcel -> there are two types of packages avilable -> D means dev dependency

1.dev dependecy -> used during development
2.normal dependency -> used in production

caret and tilde ->

package.json and pacakage -lock.json -> lock -> keeps exact version of package.json

nodemodules -> contains all the code that we fetch from npm

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>  ---> CDN links

To include emoji's -> windows+.(period) 

#parcel
- Dev Build
- Local Server
- HMR = Hot module replacement 
- File Watching Algorithm - written in C++
- caching things -faster build - it gives you faster development experience (caching in .parcel-cache folder - files are binary)
- Image optimization
- Minification
- Bundling
- Compression
- Consistant Hashing
- Code Splitting
- Differential bundling - support older browsers
- Diagnostic
- Error handling - better error suggestions
- you can host your app on HTTPs
- Tree Shaking - remove unused code for you
- Different dev and prod bundels

browserslist 
- if the app is government app it should supportd all the older browser versions
- we can mention country specific also

npm start ->  means -> npm run start -> it internally(behind the seen) consider inside package.json 

// React.createElement -> ReactElement - JS object -> HTMLElement(render)
//JSX is not html inside javascript -> it is html like or XML like syntax

command: Remove-Item -Recurse -Force .parcel-cache -. It deletes the cache which is causing the issue
npx parcel build index.html

- JSX (transpiled before it reached the JS Engine) -> transpilation means conversion
-JSX => React.createElemnt -> ReactElement - Js Object => Html element(render)
transpilation is done by parcel
-babel -> open source javascript compiler
-use camelcase -> while using attributes in JSX
-if the code is in multile lines wrap it in () -> because jsx has to understand where jsx starts and where it is ending
todo -> install prettier , bracket pair coloriser,better comments
- React Component -> 
1.Class Based Components -> OLD way of writing code
2.Functiona Components -> New or latest way of writing code
-React Functional Component -> it is just a normal javascript function and it returns React Element
- Component composition -> one component inside another component is called as Component Composition
- {} -> any javascript code 

<div>
      //Header
      //Body
      //Footer
    </div>


- Not using keys (not acceptable) <<<<<<<< index as a key <<<<<<<<<< unique id (best practice)

Two types of Export/Import 

export default ComponentName;
import componentName from "path";


export const ComponentName ;
import {componentName} from "path";

- when we have to export multipe things use name export.