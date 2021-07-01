export const initialState = {
  textData: "Your output will appear here 😇...",
  active: {
    alignment: "left",
    textStyle: {
      bold: false,
      italic: false,
      underline: false,
      strikeThrough: false,
    },
    listing: {
      bulleted: false,
      numbered: false
    },
    quotation: {
      quote: false,
      code: false
    },
    fontStyle: {
      size: 8,
      family: "lato",
    },
  },
};

const Reducer = (state, action) => {
  switch (action.type) {
    // @dev activate on text change in text area
    case "ON_TEXT_CHANGE":
      return {
        ...state,
        textData: action.newTextData,
      };

    // @dev manage alignment on tabbar
    case "ON_ALIGNMENT_CHANGE":
      return {
        ...state,
        active: {
          ...state?.active,
          alignment: action.newAlignment,
        },
      };

    // @dev on font style change
    case "ON_FONT_STYLE_CHANGE":
      return {
        ...state,
        active: {
          ...state.active,
          textStyle: action.newTextStyle,
        },
      };
    
      // @dev on active list
    case "ON_LIST_ACTIVATE":
      return {
        ...state,
        active: {
          ...state.active,
          listing: action.newListing,
        },
      };
    default:
      return state;
  }
};

export default Reducer;
