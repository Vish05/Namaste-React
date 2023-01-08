**React.Fragment -**

    - It is component which come with importing React
    - It is like empty tag
    - <>....</> it is shorthand of React.Fragment

**Virtual DOM -**

    - Virtual DOM is just a copy of the original DOM
    - Virtual DOM is a virtual representation of DOM in memory.
    - Virtual DOM is required reconciliation in react

**Reconciliation -**

    - React uses an Diff algorithm and it finds out what need to updated
    - It is does not re-render whole app
    - It is process where we have diff algorithm which find out diff between tree

**React Fiber -**

    - In React 16, diff algorithm was changed and React Fiber was introduced. Its a new reconciliation engine which is responsible for diff.

**Confign Driven UI -**

    - When we build a Real world app we control our frontend using a config driven by backend(API) For ex- Lets consider our food ordering app, in which lets assume there are three different cities Pune, Mumbai, Delhi. Now lets say we have some offers going on which are different cities and we have to show the data in our frontend based on their locations. So, these things will be configured from backend.
