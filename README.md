#C-PaaS Front End code base

##Libraries used
- `React` for view components
- `Redux` for state management 
- `fetch` API polyfill for HTTP requests

##Adding a new dependency
- run `yarn add <Dependency-name> ` in root folder of frontend code where
+package.json is located. use `--dev` if it is a development dependency
- This will result in mainly three changes which must be checked-in to repo
- changes in offline-mirror
- changes in yarn.lock ( according to git it is a binary file )
- changes in package.json

##Development Environment Setup

##Build and Run
###Requirements
- `nodejs version 6 and above`
- `yarn latest`
- If you are behind proxy make sure you have proxy settings for `npm`
###Build
- open terminal in  `~/phoenix-apps/commonwebitems/.../frontend` directory
- run `yarn install` to install packages
- run `yarn run build` to build source code

##Run unit test cases
- run `yarn install`
- run `yarn test`
- run `npm run test -- --coverage --watchAll=false`
##TODO
- Directory and naming convention
- ✔ Add eslint
- ✔ Add jest for unit testing 


##Source code directory structure
Note: This directory structure may not be found in current source
This is placed here to make open for discussion so we can ammend the changes and implement the same
```
src
|--API //An API for all business logic, validation logic etc can go in isolated from framework
|--Components
|  |--Carosal
|  |--Dialogs
|  |--HeroBanner
|  |--partials
|  |....
|--containers
|  |--App
|  |--HomePage
|  |--SignUpPage
|  |--VideoInfoPage
|  |....
|--UI_Frontendlib
|  |--atoms
|  |--molecules
|  |--icons
|  |....
|--Testing-utils
|  |--Utils
.  .....
....

```

##Unit testing
###Libraries for unit testing
- `jest`
- `enzyme` for shallow rendering react components
- `jest-fetch-mock` for mocking fetch HTTP API ??

###Stratagy for unit testing
- jest snapshot testing for components ???
- Always have a failing unit test case for a requirement or a defect
- Always try to have 100% coverage
- Consider unexpectedly failing unit test case as serious as defect
- Consider uncovered functions, lines, statements or branches as uncompleted features or as pending defects

##Current challenges
- Paradigm shift ???

##Page Composition
```
+-----------------------------------------------+
|                                               |
|        PAGE / An Instance of application      |
|                                               |
| +-------------------------------------------+ |
| |                                           | |
| |               COMPONENTS                  | |
| |                                           | |
| | Buttons, Autoplay, Sliders, Carousal...  | |
| |                                           | |
| +-------------------------------------------+ |
|                                               |
| +-------------------------------------------+ |
| |                                           | |
| |              Integrations                 | |
| |                                           | |
| |  Action creators, Epics,Business logic... | |
| |                                           | |
| +-------------------------------------------+ |
| +-------------------------------------------+ |
| |                                           | |
| |                  Store                    | |
| |                                           | |
| |  State, Reducers, Middlewares ....        | |
| |                                           | |
| +-------------------------------------------+ |
|                                               |
+-----------------------------------------------+
```

###Components
Components are very simple high level abstractions of views which renders the view part to the DOM. Most of the components are stateless functional components and some components can be stateful components like carousel with local  state and they may get state related to data from redux state.

####Reference:
 - [Redux docs](http://redux.js.org/docs/introduction/Motivation.html "Rdeux docs" )

###Integrations
Executing business logic, getting the data from server and dispatching actions to the state will performed with the help of epics, Business logic API and Action creators.

###Store
State in the store can be viewd as a normalized relational database and reducers are responsible for reducing actions to state change.
Middlewares will help to integreate epics .....

