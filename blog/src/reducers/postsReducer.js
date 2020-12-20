export default (state = [], action) => {
  // if (action.type === "FETCH_POSTS") {
  //   return action.payload;
  // }

  // return state;

  // swtich syntax rather than if else
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};

// Bad examples that breaks the rules of redux reducers
// export default (state) => {
//   // Rule 3: Pure
//   // Bad! request API
//   axios.get("abc");
//   // import DOM element
//   document.querySelector("#root");

//   // Rule 4: Do not mutate state!
//   // arrays
//   state[0] = "abc";
//   state.pop();
//   state.push();

//   // objects
//   state.name = "abc";
//   state.age = 30;
// };
