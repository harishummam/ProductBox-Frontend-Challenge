export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error("Load state error:", err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (err) {
    console.error("Save state error:", err);
  }
};
