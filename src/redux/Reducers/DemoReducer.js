const stateDefault = {
  data: [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ],
  hoTen: "Nguyễn Quang Minh",
  tenLop: "cb34",
};

export const DemoReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHANGE_DATA":
      state.data.push({ id: action.payload });
      return { ...state };

    default:
      return { ...state };
  }
};
