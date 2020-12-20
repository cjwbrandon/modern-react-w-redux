import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

// Action Creators in Action Creators!
// Recall: 2nd argument of redux-thunk is the getState
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // 1. Get lists of posts
  // console.log("About to fetch posts");
  // Manually dispatch the inner action creator
  await dispatch(fetchPosts());
  // console.log("fetched posts"); // Show that the await works

  // 2. Find Unique user ids from list of posts
  // console.log(getState().posts);
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // const userIds = [...new Set(getState().posts.map((post) => post.userId))];
  // console.log(userIds);

  // 3. Iterate unique user ids
  // userIds.forEach((id) => dispatch(fetchUser(id)));
  // if you require to await
  // const _ = await Promise.all(userIds.map((id) => dispatch(fetchUser(id))));

  // Chaining 2 & 3 with Lodash
  // _.chain(getState().posts)
  //   .map("userId")
  //   .uniq()
  //   .forEach((id) => dispatch(fetchUser(id)))
  //   .value();

  // Chaining with JS
  [...new Set(getState().posts.map((post) => post.userId))].forEach((id) =>
    dispatch(fetchUser(id))
  );
};

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

export const fetchUser = (id) => async (dispatch) => {
  const { data } = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: data });
};

// const { data } = await jsonPlaceholder.get(`/users/${id}`);
// dispatch({ type: "FETCH_USER", payload: data });

// Cannot memoize these funcitons
// Outer function -> Returns the function each time and calls it whether memoize or not
// Inner function -> Returns a new memoize function each time fetchUser is called.
// export const fetchUser = function (id) {
//   return async function (dispatch) {
//     const { data } = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: data });
//   };
// };

// Solution: Memoize outisde
// export const fetchUser = (id) => async (dispatch) => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const { data } = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: data });
// });

// Side effect: User data is changed on the API -> we cannot refetch the user
