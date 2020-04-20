1. Which of the below are examples of props in this code sample? <RestaurantCard name="Chipotle" address={props.address} rating={props.rating} /> ( Multiple Choice)
** Answer 1 **: name
Answer 2: restaurantCard
** Answer 3 **: rating
** Answer 4 **: address
Answer 5: stars

Explanation: Check the code! The defined props being passed into the RestaurantCard are name, address and rating. RestaurantCard is the component name. 

2. Which are correct way(s) to import a default export? ( Multiple Choice)
Answer 1: import { RestaurantCard } from './RestaurantCard'
** Answer 2 **: import RestaurantCard from './RestaurantCard'
** Answer 3 **: import RestaurantCard as Card from './RestaurantCard.js'
Answer 4: import { RestaurantCard as Card } from './RestaurantCard.js'

Explanation: DEFAULT exports are not imported in curlyBois and can be aliased using `as`.

3. Which of the following types can be passed as props? ( Multiple Choice)
** Answer 1 **: strings
** Answer 2 **: booleans
** Answer 3 **: objects
** Answer 4 **: arrays
** Answer 5 **: integers
** Answer 6 **: functions

Explanation: EVERYTHING! All of the above can be passed as props.

4. What is missing from the following code snippet? [5,4,3,2,1].map(num => <div className="countdown">{num}</div>) ( Single Choice)
Answer 1: return statement
Answer 2: curly brackets
** Answer 3 **: key prop

Explanation: We don't need a return statement because there are not curlyBois and so the callback function implicitly returns. We also don't need curlyBois anyplace besides where we have them around num. We do need a key prop on the div to deal with the React warning. 