# Adding a new movie to the DOM 

We want to add the ability to add a new movie to our list of movies. We're going to implement all of this functionality in JavaScript - we __*will not*__ make any changes to the HTML file.

### Step 1

To view the desired behavior, go to bottom of the `index.html` and comment out this line:

```html
<script type="text/javascript" src="index.js" charset="utf-8"></script>
```

and uncomment the line below it:

```html
<script type="text/javascript" src="extraJS/formDemo.js" charset="utf-8"></script>
```

This will load a JavaScript file at `extraJS/formDemo.js` into the `index.html` file. 

When you load this HTML page into the browser, you'll see our app but with an additional button that says "Add Movie". Play around with the functionality of this button until you understand it. 

After you've played with the demo, change the `index.html` file back to its original state with `index.js` being loaded into the page instead of `extraJS/formDemo.js`. 

### Step 2

This is the user story describing the desired behavior. 

> As a user, I should see a button that says "Add Movie" beside the welcome image. 
>
>When I click the "Add Movie" button I should see the button disappear and in its place I should see a form with fields corresponding to the movie details. 
>
>When I fill out this form and click "Submit", the form should disappear and the button should reappear in its place. The movie should also be displayed at the bottom of the existing movie list in the same format as the other movies.


Write out your psuedocode in the space below.

```

```

### Step 3

Make a new branch.

```bash
git checkout -b your-branch-name
```

Write your code in the `index.js` file. Don't forget to test as you go. 

Here is the HTML for the form:


```html
<form>
  <label>Title: </label>
  <input type="text" name="title"><br/>
  <label>Image URL: </label>
  <input type="text" name="imageUrl"><br/>
  <label>Year: </label>
  <input type="number" name="year"><br/>
  <label>Submit: </label>
  <input type="submit" value="submit">
</form>
```

### Step 4

When you're done add and commit your changes (__*don't push*__)

```bash
git branch -a # make sure your branch has a '*' next to it
git add .
git commit -m 'deliverables complete'
```

### Some questions to think about as you go:

* How can we add the button to the DOM in the position we want it?
* How can we swap the button and the form?
* What type of events will we listen for? What DOM elements should we put those listeners on?
* How will we get data out of our form? (Maybe read [this](https://javascript.info/form-elements) first...)
