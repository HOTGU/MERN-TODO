export const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case "SEARCH_START":
      return { term: action.term };
      break;
    case "SEARCH_END":
      return { term: "" };
    default:
      return state;
  }
};
