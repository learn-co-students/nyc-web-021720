# I dunno, some weird activity that I just made up. ¯\\_(ツ)_/¯ 

Run json-server

1. When a user clicks on the "Random GIF" button, make a `GET` request to the endpoint below to get a random gif. Display the gif on the `img` tag on the page with the id `image`.

Hint: you will have to navigate the data structure returned by the API to get the correct data from the response.

```
https://api.giphy.com/v1/gifs/random?api_key=1dg7TukE9mOaYxxBMF6Q8C69GZSJTnDO&tag=&rating=G
```

2. Using only JavaScript, add a "Like" button underneath the gif being displayed. If a user clicks the button, the image currently being displayed will get added to the database with the following attributes: `title`, `rating`, and the `url` you used to display the picture. The title and rating of the picture should also appear in the favorites list `ul` (e.g., "happy puppies - g"). 

### Bonus

3. If at any point one of our endpoints fails and a promise doesn't resolve, the `creepyDoll` function should be invoked. Hint: How can you test this?

```javascript
function creepyDoll(){
  let image = document.createElement('img')
  image.src = "assets/creepy_doll.jpg"
  image.style.height = '100%'
  image.style.width = '100%'

  document.body.style.backgroundColor = 'black'
  document.body.prepend(image)

  var scream = new Audio('assets/scream.mp3')
  scream.play();

  setTimeout(function(){
      image.remove()
      document.body.style.backgroundColor = ''
  }, 3000)
}
```

