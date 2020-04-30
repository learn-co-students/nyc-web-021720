1. What components, props, and methods are provided by React Router? ( Multiple Choice)

** Answer 1: BrowserRouter
** Answer 2: useHistory
Answer 3: Provider
Answer 4: connect
** Answer 5: Link
** Answer 6: Route
** Answer 7: history

Explanation: Check those docs! Provider and connect were two red herrings - they are a part of the React-Redux library.

2. Which of the following React Router components should there only be ONE of in your application? ( Single Choice)
Answer 1: Route
** Answer 2: BrowserRouter
Answer 3: Switch
Answer 4: Link
Answer 5: NavLink

Explanation: There should only be one BrowserRouter in your app so there is only one API that your whoooollleee app is accessing. It should wrap about App in the index.js file. All of the other components you may or likely will need many of. 

3. The following are valid ways to move a user to a different URL using Router? ( Multiple Choice)
** Answer 1: history.push('/posts/20')
Answer 2: <a href="/posts/20" />
Answer 3: browser.location = "/posts/20"
** Answer 4: <Link to="/posts/20" />

Explanation: Only Answers 1 and 4 are utilizing React Router tools instead of vanilla JS or HTML. 