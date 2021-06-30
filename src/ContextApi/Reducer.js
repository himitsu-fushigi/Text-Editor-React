export const initialState = {
  textData: "Your output will appear here 😇...",
  active: {
    alignment: "left",
    textStyle: {
      bold: false,
      italic: false,
      underline: false,
      strikeThrough: false
    },
    listing: "",
    quotation: [""],
    fontStyle: {
      size: 8,
      family: "lato",
    },
  },
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "ON_TEXT_CHANGE":
      return {
        ...state,
        textData: action.newTextData,
      };
    case "ON_ALIGNMENT_CHANGE":
      return {
        ...state,
        active: {
          ...state?.active,
          alignment: action.newAlignment
        }
      }
    default:
      return state;
  }
};

export default Reducer;
