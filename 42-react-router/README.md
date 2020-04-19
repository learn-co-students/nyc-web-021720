React Router
============

## SWBAT

- [ ] Create a multi-page SPA
- [ ] Explain the advantages of using React Router
- [ ] Utilize the most common `react-router` components to build a SPA: `BrowserRouter`, `Route`, `Switch`, `Link`, and `NavLink`
- [ ] Use `push` and `history` to navigate pages
- [ ] Create dynamic routes and use `params`
- [ ] Make the distinction between `state` being one _Single Source of Truth_ and `react-router` being another _Single Source of Truth_



## Movie Review Fullstack 
### Setup 
- Run frontend: `npm start` 
- Run backend: `rails s -p 3001`

### Features
- [MovieApp Wireframe and Component Hierarchy](https://awwapp.com/b/ui0yjws5o/)
- [ ] Route for login
- [ ] Route for signup
- [ ] Route for home page
- [ ] Enable navbar to move between home/login/signup
- [ ] Clicking on a movie movies us to `/movies/:id`
- [ ] Use dynamic route to fetch a display single movie view

## Lecture Notes
- [Example with All of Ze Routes](https://github.com/sbal13/Project_Athena_client/blob/master/src/App.js)

## SPAs

### Benefits



### Challenges 



## Dynamic Routing from Rails





### Component Notation vs Render Notation
Component Notation just takes a component name and automatically adds the routerProps as props to it (history, location, match)

Render Notation takes a callback that returns a component, written as JSX. We do this so we can pass our own props.
if you need routerProps, need to explicitly pass to your component


## Parking Lot


### Using React Router
`npm install react-router-dom --save`

### Static vs Dynamic Routing

Server-side vs Client-side Routing.

- Client-side == no more request response.
- This results in a much faster/smoother feeling website.

**Why do we even need routes?**

- The user can use forward/back to navigate your app
- The user can navigate via urls
- We can make urls describe the action that the user might be taking
- Users can bookmark urls

**What are the drawbacks to client-side routing?**

- We're loading all of our frontend at once, so it might add to the initial load time
- We have to design all of our routes to be coupled with our component structure (which can be a good thing long-term)

### HTML5 History API

You can manipulate the URL in your browser with these:

```javascript
window.history.pushState({}, null, 'page');
window.history.back();
window.history.forward();
```

Combine that with `if/else` logic and tracking history and you get `react-router`.

### React Router API

> To get your intuition in line with React Router’s, think about components, not static routes. Think about how to solve the problem with React’s declarative composability because nearly every “React Router question” is probably a “React question”.
> [_source: React Router Philosophy_](https://reacttraining.com/react-router/web/guides/philosophy)

## Resources

- [HTML5 History API MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- [React Router Github](https://github.com/ReactTraining/react-router)
- [React Router Website](https://reacttraining.com/react-router/)




