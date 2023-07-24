const searchStart = (term) => (dispatch) => {
  return dispatch({ type: "SEARCH_START", term });
};

const searchEnd = () => (dispatch) => {
  return dispatch({ type: "SEARCH_END" });
};

export const searchActions = {
  searchStart,
  searchEnd,
};
