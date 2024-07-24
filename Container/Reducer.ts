interface initialState {
  loading: boolean;
}

export const initialState: initialState = {
  loading: false,
};
export const reducer = (state: initialState, action: any) => {
  switch (action.type as string) {
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };

    default:
      break;
  }
};
