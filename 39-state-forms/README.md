State and Forms
==============

## SWBATs
- [ ] Explore state more in depth
- [ ] Identify where (in which component) state should live
- [ ] Explain we use controlled forms
- [ ] Implement controlled form
- [ ] Draw a component hierarchy and describe the Flow of Information
- [ ] Pass data up and down the component hierarchy with our callbacks
- [ ] Use form data to update state in various ways

### Features / Process
- Walk through code changes
- Add Comment Form 
- PRACTICE HW ====> Pair Program & Blind Driver: Search with automatic filtering 

## Lecture Notes

### Vanilla JS Forms
- We had HTML form
- Grab the input using `querySelector`
  - `event.target.value`
- Use form data to update backend using a fetch
- Update the DOM

### React Controlled Forms
- For each input you need:
  1. Some state to manage the input
  2. A handleChange to monitor user input and update state
  3. A value attribute on the input itself (fully-controlled form)
  4. A handleSubmit to finally submit data

In React, rather than finding individual input elements using `querySelector` or `getElementBy...`, we use `state` to monitor the user's input as they type.

The all-purpose `handleChange`. Just remember to add `name` attributes to your inputs!
```js
handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
```

Doing this creates a 1-way connection wherein user input changes `state`. This is called an *uncontrolled form*. To make it a 2-way street wherein `state` can change the user's input, we add a `value` attribute to our inputs.

```jsx
<input 
  value={this.state.beef} 
  name="beef" 
  onChange={this.handleChange}
/>
```

#### Trick for updating arrays!

```js
    const updatedCustomers = this.state.customers.map(customer => {
      if (customer.id === foundCustomer.id){
        return foundCustomer
      } else {
        return customer
      }
    })
```
### Lifting State

[Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
- Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.
- If two sibling components need access to the same `state`, you will want to place the shared `state` in a parent container. Then you can pass down that `state` as well as any functions that need to modify the state as props to the two sibling components that need to display and/or change that data.

## Extras

- [Reconciliation](https://reactjs.org/docs/reconciliation.html)