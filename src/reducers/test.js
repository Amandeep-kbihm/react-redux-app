const initialState = {
    test: [
        {id: 1, name: "abc"},
        {id: 2, name: "xyz"}
      ]
}
export default  function test(state = initialState, action) {
    switch (action.type) {
      default:
        return state
    }
  }