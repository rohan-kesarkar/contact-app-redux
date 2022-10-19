const initialState = [
  {
    id: 0,
    name: "Rohit Sharma",
    number: 123456,
    email: "rohitsharma@gmail.com",
  },
  {
    id: 1,
    name: "Virat",
    number: 987654,
    email: "viratkolhhi@gmail.com",
  },
];

const contactRedcer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      // console.log(state
      return state;
    case "UPDATE_CONTACT":
      const updatedState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updatedState;
      return state;
    default:
      return state;
  }
};

export default contactRedcer;
