
## JS Fetch and Async

## Learning Goals

- [ ] Implement Fetch functionality against an external datasource
- [ ] Set up an API backend using `json-server`
- [ ] Describe how to interact with an external datasource using RESTful conventions
- [ ] Understand asynchronous behavior in JavaScript
- [ ] Utilize Fetch and Promises to implement async API calls

## JSON Server

* install using `npm install -g json-server`
* provides a quick-and-dirty way of setting up a backend API
* not production ready, used for prototyping and practice
* leverages JSON objects for persistance
* utilizes RESTful conventions to performs CRUD operations

## RESTful call to json-server

### GET: `http://localhost:4000/movies`

Example response:
```javascript
[
  {
    id: 1,
    title: 'Jaws',
    imageUrl: 'https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA',
    year: 1975,
    score: 0
  },
  { 
    id: 2,
    title: 'The Matrix',
    imageUrl: 'https://imgc.allpostersimages.com/img/print/u-g-F4S5W20.jpg?w=550&h=550&p=0',
    year: 1999  ,
    score: 0
  }...
]
```

### POST: `http://localhost:3000/movies`

Body: 
```javascript
{
  score: 0, 
  title: 'Jaws', 
  imageUrl: 'https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA', 
  year: 1975
}
```

Example response:
```javascript
  {
    id: 1,
    title: 'Jaws',
    imageUrl: 'https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA',
    year: 1975,
    score: 0
  }
```

### PATCH: `http://localhost:3000/movies/:id`

Body: 
```javascript
{
  year: 1980
}
```

Example response: 
```javascript
  {
    id: 1,
    title: 'Jaws',
    imageUrl: 'https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA',
    year: 1980,
    score: 0
  }
```

### DELETE: `http://localhost:3000/movies/:id`

## Fetching ⚾️ <== 🐕

**About**

* `fetch` will always **return** a [_Promise_][mdn-promise] and it is promising to do something **if** it returns. We can think of this as the **promise** of an eventual value
  * There is **NO** guarantee of when it will come back!
  * There is **NO** guarantee that it will succeed!
* We **want** `fetch` to be **asynchronous _BECAUSE_**:
  * **If** `fetch` calls were **synchronous**, we would be stuck waiting for the call to finish before the code could proceed.
  * So **rather than _blocking_** any other JavaScript from running, we want `fetch` calls to be asynchronous. We want to write code around the eventual success or failure of some _asynchronous_ ⏳ operation such as an HTTP request.

**Usage**

* The `body` data **HAS** to be a string in a `POST`, `PUT`, or `PATCH` `fetch` call.
* You need `headers` in `POST`, `PUT`, or `PATCH` to tell the server what kind of content (`Content-Type`) you are sending to it. For example:
  * `'Content-Type': 'application/json'` is telling the server that you are sending a string of JSON in the `body` of your `fetch` request. You can [read more about the different types of data that can be sent here][mdn-mime-types]

---

## Optimistic vs Pessimistic Rendering

#### Optimistic

* You can manipulate the DOM synchronously (outside the `.then()`).
* This is referred to as optimist rendering because you are **not waiting** for the async response to resolve.

**Pros**:
* Super responsive! User Experience++!

**Cons**:
* `fetch`es (aka: the "Promise") can lie!! If the `fetch` fails, data can become out of sync.
* `fetch`es are also **NOT** guaranteed to run in order.
  * What if we create a Pokemon and then update it relying all on optimistic rendering? The `PATCH` might reach the server _before_ your `POST`!!

Very interesting example of optimistic rendering that is handled _robustly_: **Reddit**

> When you vote, your vote isn’t instantly processed—instead, it’s placed into a queue.
>
> Source: [Caching at Reddit](https://redditblog.com/2017/1/17/caching-at-reddit/)

[Hacker News commenter's insight](https://news.ycombinator.com/item?id=13433793):

> I remember looking into this a while ago and was bewildered to find that when I upvoted or downvoted, there was no XHR call to the backend! There was no hidden iframe/image, no silent form post. Absolutely no network activity. Yet when I refreshed, my vote was shown correctly. I thought I was going crazy.
>
> This was long ago so I'm a bit fuzzy on the details but after a bit of digging, I found the most elegant data collection technique I've ever seen. Instead of sending network data when I voted, a local cookie was set with the link id and vote value. Then when I went to another page, my browser naturally sent the cookie to the server, where I believe it was processed, and then a fresh cookie was sent back to my browser. I could vote on 10 links, the local cookie would get large and then on the next page refresh, the backend would receive my batch of votes, process them, and send me a fresh cookie again.

#### Pessimistic

* You can manipulate the DOM asynchronously (inside the `.then()`) using the response from the server.
* Doing this is called pessimistic rendering because you **are waiting until** the async response has return to complete the action. In other words, you're pessimistic about the success of the request.
* This is to make sure the data on your page is consistent with the database.

**Pros**:
* What is reflected in the _client_ will always be in sync with the _server_.

**Cons**:
* If the `fetch` is slow, the UI will appear to not respond! (**hint** maybe good UX will signal to the user that something is happening)

![loading spinner](https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif)

Example of a feature you might want to always do pessimistically: **user signup**

* Think about registration forms on the web. What to do they normally all do?
  * Disable things once you submit?
  * Show a spinner?
  * Anything else?
* You want to confirm that a new user was successfully created before redirecting your user somewhere. In this case, pessimistic rendering is preferable.

---

## Updating the DOM

As the developer, _it is your job to decide whether optimistic or pessimistic rendering is appropriate_. You must then remember to update the data **everywhere** that it is kept. At a **minimum**, this means:

1. `fetch` for making changes to your database
2. DOM manipulation for updating what the user sees in the browser

_But wait, there's more!_

3. Did you store any data in JavaScript variables?
  * Update them!

These steps are you being aware of _how_ **your** application is built.

**Considerations** for #1, #2, #3, etc...:

1. Where should you put that `fetch`?
  * When do you want it to be sent? 🤔
  * Perhaps on some sort of `event`? 🤔🤔
  * Maybe I can _listen_ for a certain type of `event`? 🤔🤔🤔
  * I wonder where I can _add_ that _`event`_ _listener_? 🤔🤔🤔🤔
  * Maybe somewhere where we can _delegate_ that responsibility? 🤔🤔🤔🤔🤔
2. How can we update the DOM?
  * JavaScript has a **TON** of ways to accomplish the same task. Some are more hacky than others. Some are better than others. However, **always** remember: Red, Green, Refactor!
  * **Do what you know** to work before you try and make it better!
  * Some example strategies for manipulating the DOM:
    * Rerender is all! 🙌
    * `appendChild` 🤱 (just make sure to construct the whole node to append)
    * Add to `innerHTML` +=
    * `event.currentTarget` to find what the event listener is attached to (where everything bubbles up to) 👂
    * Climbing the tree 🧗‍🌲:
      * `event.target.parentElement` or `event.target.parentNode` for looking up the tree ([difference](https://stackoverflow.com/questions/8685739/difference-between-dom-parentnode-and-parentelement))
      * `event.target.children` for looking down the tree
    * `removeChild` 😵
    * Learn to use the MDN docs!
3. This is just pure JavaScript. Change your global data using things like `filter`, `push`, etc.
  * **HOWEVER!** Remember to take note of which methods are destructive and which are NOT!
  * If you don't remember, look it up! Google, StackOverflow, MDN, think of them as your "phone a friend". ☎️
  * For example: `filter` does not mutate while `push` does! Consistency? Naming conventions? What do you think we are, Ruby? 💎🤣

**Et cetera!**

As you are adding functionality (those things above), there will be times where you will need to add, remove, or change the base HTML in order to be able to accomplish the task. Remember that you are the developer. **You get to decide how the HTML looks!**

For example:

- new elements (`<button>`, `<form>`)
- more attributes (`data-id`, `data-action`)
- renaming attributes that make no sense (class: `pokemon-container` => `pokemon-card`)

```html
<div data-id="1" class="pokemon-card">
  <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
    <h1 class="center-text">bulbasaur</h1>
    <div style="width:239px;margin:auto">
      <div style="width:96px;margin:auto">
        <img name="flip" data-id="1" data-action="flip" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
      </div>
    </div>
    <button data-action="delete" class="pokebutton" style="width: 230px;margin:auto;">Delete</button>
  </div>
</div>
```

---

## External Resources
- [json-server][json-server]
- [MDN Using `fetch`][using-fetch-mdn]
- [MDN Promises][mdn-promise]
- [MDN MIME Types][mdn-mime-types]

<!-- markdown vars -->
[json-server]: https://github.com/typicode/json-server
[using-fetch-mdn]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
[mdn-promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[mdn-mime-types]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
