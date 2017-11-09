This project of web app helping people organize and keep their cooking recipes. The project is addressed to amateur cooks and cooks who are looking for inspiration.

## Table of Contents

=======================================================================

- [TODO List](#todo-list)
  - [Doing](#doing)
  - [Todo](#todo)
  - [Done](#done)

=======================================================================

- [Our Mission](#our-mission)
- [F.A.Q](#faq)
- [How to Start Work With This Repo (Github Tips)](#github-tips-to-start)
- [Technologies and Tools](#technologies-and-tools)
- [API Description](#api-description)
- [App Description](#app-description)

## Todo List

### Doing
-
-
-
-
-

### Todo
- More advenced list of tasks
- API Documentation
- Initial Design Patterns
- Decide how will Application State looks like (Redux side)
- Entry / Initial App Architecture
  - Add create-react-app to repo
  - Make initial setup with React-Router
  - Setup Redux State Management
  - Setup Tests Environment
-

### Done
-
-
-
-
-

=======================================================================

## Our Mission

* ... to be done

## FAQ

* ... to be done

## Github Tips to Start

* Clone this repository on your desctop <strong>git clone</strong>

* Do not forget about <strong>git pull</strong> before you start working on our project!

* Create a branch to work on our Task. It is good to use some naming convention eg feNavbar (Fe from <strong>Fe</strong>ature).
<strong>git checkout -b nameBranch</strong>

* We work on our branch. After finishing work we let go with: <strong>
git add -A  next:  git commit -m "Tresc commita" then: git push origin nameBranch</strong>

* Next Go to the git site with our project: https://github.com/IntermittentCoding/Cooking_Recipes.git

* Click the <strong>"New Pull Request"</strong> button, then don't change anyhing in <strong>"base: master"</strong> or <strong>"compare: select our branch".</strong> 
Go directly to <strong>"create pull request"</strong> Let's add a description of what you did and submit with <strong>"create pull request".</strong>

## Technologies and Tools

* Frontend: 
- ReactJS / Redux
  - create-react-app (we use this official boilerplate to start)
  - react-router
  - redux
  - react-redux
  - redux-form
  - redux-promise
  - redux-thunk
  ...

- Styling
  - simple CSS
  - to decide: bootstrap / some material.io framework
  - to decide: Design / UX / UI

* Backend: 
  - we start with PHP backend
  - we may consider Firebase or "Something else" in the future

## API Description

# Root
http://przepisy.end-dev.pl/api

# /register

## POST:
```
 body: JSON.stringify({name: '123', email: '123@123.com', password: '123123'})
```
returns
```
{ ...to complete }
```

# /login

## POST:
```
 body: JSON.stringify({ email: '123@123.com', password: '123123'})
```

returns
```
{ ...to complete }
```

# /AllRecipes

## GET:

returns::
```
{
  error: false,
  recipes: [{
    id: 1,
    recipe: "1",
    status: 1,
    createdAt: "2017-11-07 11:51:53" 
  },
  { 
    id: 2,
    recipe: "1",
    status: 1,
    createdAt: "2017-11-07 11:52:33" 
  }]
}
```

# /recipes/{id}
## GET: 

returns:
```
{
  error: false,
  id: 1,
  recipe: "1",
  status: 1,
  createdAt: "2017-11-07 11:51:53"
}
```



## APP Description and features

* Views:
  - Home
  - Category, tags, list of products (will probably be similar)
  - View of the recipe
  - Login / register
  - Administration panel
  - Add recipe, edit recipe
  - My recipes, saved rules

* Authorization with User Panel
  - User will be abble to register and login.
  - Logged user with the appropriate privileges can delete the recipe or edit it.

* The Administration Panel will contain:
  - Avatar / The name of the user / User role / User data
  - Saved / added provisions
  - The rest to make up / according to need
  - The logged in user see a form to add a recipe (it may be somewhere on the front).

* Recipe details:
  - photo shoots,
  - recipe name, "profile" photo, additional photos (slider, gallery),
  - date of publication,
  - the author of the publication,
  - source adress,
  - difficulty,
  - execution time,
  - what kind of a dish is this (lunch, dinner, breakfast, snack, cake, etc.)
  - for how many people,
  - approximate cost (20zł> 20zł etc, cheap, expensive),
  - categories,
  - tags,
  - rating system (stars or smth),
  - an icon that allows you to add a recipe to your favorites (the user can return to it in the future),
  - social shares
  - preliminary description (like: 'excellent dish, I do it for years :)')
  - list of ingredients needed (what do I have to buy), todo list which ingredients user has, and what need to buy?
  - description in the form of sub-points (it may be possible to add an image to each stage),
  - button to save the product to a pdf file or print,
  - comments section,
  - related / popular / latest recipes etc,

* Recipe list
  - The list of products should contain the items listed above (necessarily the picture, name, short description, the rest at the discretion) + pagination and filters
  - Filtering products by popularity, time of addition, category, ingredient, etc.
  - Product search

