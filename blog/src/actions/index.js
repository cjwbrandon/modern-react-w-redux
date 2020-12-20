import jsonPlaceholder from "../apis/jsonPlaceholder";

// Using Redux-thunk -> We can use async await here
export const fetchPosts = () => async (dispatch) => {
  const { data } = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: data });
};

// export const fetchPosts = async () => {
// Bad approach!!
// Error: Actions must be plain objects. Use custom middleware for async actions.
// const response = await jsonPlaceholder.get("/posts");

// return {
//   type: "FETCH_POSTS",
//   payload: response,
// };
// };
