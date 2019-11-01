- [ ] Why would you use class component over function components (removing hooks from the question)?

- [ ] Name three lifecycle methods and their purposes.
The three lifecycle methods are the Mounting, Updating, and Unmouting phase. The purpose of the Mounting phase is to build the component and render it to the DOM. Once the Mounting phase is complete, the componentDidMount method is called, allowing the application to manipulate mounted components. The Updating phase is to coninuously track and implement state changes in the components. This phase will frequently contain the setState method, which allows the state of the component and application to by updated dynamically. The Unmounting stage is the dismounting phase of the component, in which its lifecycle comes to an end and the component is therefore removed from the DOM.

- [ ] What is the purpose of a custom hook?
The purpose of a custom hook is to be able to use a hook specific to your application that can be used in components that occur frequently. They "allow you to apply non-visual behavior and stateful logic throughout your components by reusing the same hook over and over again." You can also combine several hooks together into one custom hook, which can make your overall development process faster and cleaner.


- [ ] Why is it important to test our apps?
"Testing is essential for software quality. " It helps us to avoid unforseeable bugs when the app is live, helps us to provide a better user experience and gives us the freedom to expand or  refactor our applications without the fear of breaking them. 