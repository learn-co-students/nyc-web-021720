# Intro to the DOM 📜

## Three things that JS allows us to do:

1. Account for user interaction
2. Interact with the web page (DOM) *<= this lecture*
3. Run requests

## SWBATs

- [ ] Draw DOM tree by looking at HTML
- [ ] Explain what a DOM node is and what its most important attributes are
- [ ] Use the Chrome Dev tools to explore the DOM tree and its attributes
- [ ] Use JS to select DOM nodes
- [ ] Use JS to add, remove, and edit DOM nodes

### The Document Object Model Overview
> The DOM is the browser's programmatic representation of the web page (the HTML). This means we can manipulate the DOM using JavaScript to change what we see on the web page.

- What is the DOM?
  - The DOM (Document Object Model) is a representation of an HTML document as a **tree** (more on this later) that can be manipulated with JavaScript
  - Javascript is a language created to manipulate the DOM
  - "[JavaScript] DOM methods allow programmatic access to the tree; with them you can change the document's structure, style or content." - [MDN DOM Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) (more on this later)

## The DOM is a Tree 🎄

- What is a tree in computer science? A data structure that represents some hierarchical structure; parent nodes (elements), child nodes, sibling nodes. Trees look like upside down trees:

![tree](https://webdocs.cs.ualberta.ca/~aixplore/learning/DecisionTrees/InterArticle/graphics/inverted-tree.gif)

- Here is another representation of a tree with a root node and several children or branches:

![tree data structure](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/300px-Binary_tree.svg.png)

- Here is a representation of our HTML as a tree. This is the DOM:

![tree structure via tutorial republic](https://www.tutorialrepublic.com/lib/images/html-dom-tree.gif)

---

- DOM (Document Object Model)
  - The DOM is a tree structure with several child `nodes`. All of the elements in the tree are related to each other. Some elements may have children:

```html
<body>
  <div >
    <h1>Welcome to the DOM Dominion</h1>
    <p>A magical land of trees and <em>mystical</em> properties</p>
    <ul>
      <li>Explore the trees</li>
      <li>Discover mystical properties</li>
    </ul>
  </div>
</body>
```

---

- This tree structure starts at the `document`, where `document` is the topmost **parent** of each individual `node` (HTML Element). Every single HTML element in the DOM is a `node`: `<p></p>`, `<h1></h1>`, `<img>`, etc. **If you are not comfortable with HTML syntax and/or HTML tags, go through the [intro to HTML section on W3Schools](https://www.w3schools.com/html/html_intro.asp)**
- JavaScript allows us to **traverse** this tree to find and _manipulate_ different `nodes` (we'll see how in a bit).
  - "The DOM model represents a document with a logical tree. Each branch of the tree ends in a node, and each node
    contains objects. DOM methods allow programmatic access to the tree; with them you can change the document's
    structure, style or content." -
    [MDN Article on the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- Elements (`nodes`) have properties that can be manipulated (`style`, `textContent`, `innerHTML`, etc). In this particular example, we'll be manipulating the `.src` attribute of some `img` tags.
- Element interfaces
  - Different elements (`table`, `p`, `image`) support different methods
    - `image.src`, for instance
    - `document.body.style.backgroundColor = 'red'`
  - Refer to the documentation for each element you wish to manipulate to find out which properties/attributes you can manipulate. - [MDN HTML Element Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

---

### DOM CRUD

- READ:

- `document.getElementById`
  - returns the first element with that id
  - can only be called on document becuase id should be unique on the page

  - `document.getElementById('image-container')`
  
- `node.getElementsByTagName`
  - search the DOM by tag name
  - returns array like thing of objects

  - `ul.getElementsByTagName('li')`

- `node.getElementsByClassName`
  - search the DOM by class name
  - returns an array like thing of objects

  - `ul.getElementsByClassName('movie')`

- `node.querySelector`
  - returns the first element that satisfies the search criteria

  - `document.querySelector('.movie')`

  
- `node.querySelectorAll`
  - returns all the elements that satisfies the search criteria

  - `document.querySelectorAll('.movie')`

  - We can also combine selectors for more specificity:
    - We need a space between `#parent .child`
    - We can chain selectors `div.image.highlighted`
    - We can search for siblings with `~`

---

- UPDATE:

<!-- https://i.ytimg.com/vi/qYKrqd9VacY/maxresdefault.jpg -->

// get the image
// update something about the image to change the picture it displays

```javascript
let img = document.getElementsByTagName('img')[0]
img.src = "https://i.ytimg.com/vi/qYKrqd9VacY/maxresdefault.jpg"
```

---

- DELETE:

```javascript
let ul = document.getElementsByTagName('ul')[0]
ul.remove()
```

---

- CREATE:


---

## External Resources:

- [MDN Article on the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [MDN NodeList reference](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
- [MDN HTMLCollection reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
- [CSS Selectors Cheatsheet](https://guide.freecodecamp.org/css/tutorials/css-selectors-cheat-sheet/)
- [MDN Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- [When are Selected HTML Elements Live](https://stackoverflow.com/questions/28163033/when-is-nodelist-live-and-when-is-it-static)
- [Difference Between the DOM and the BOM](https://stackoverflow.com/questions/4416317/what-is-the-dom-and-bom-in-javascript)
