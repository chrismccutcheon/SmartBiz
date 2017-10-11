export default function reducer(state={
  title: "",
  email: "",
  message: "",
  isEmail: false,
  sending: false,
  errorMessage: "",
  displayError: false,
  sent: false,
  error: null
}, action){
  switch (action.type) {
    case "CHANGE_TITLE":
      return {...state, title: action.payload};
      break;
    case "CHANGE_EMAIL":
      return {...state, email: action.payload.email, isEmail: action.payload.isEmail};
      break;
    case "CHANGE_MESSAGE":
      return {...state, message: action.payload};
      break;
    case "SENDING_MESSAGE":
      return {...state, sending: true, sent: false, displayError: false, errorMessage: ""};
      break;
    case "SENT_MESSAGE":
      return {...state, sending: false, sent: true};
    case "VERIFICATION_ERROR":
      return {...state, errorMessage: action.payload, displayError: true, sent: false, error: true};
      break;
    default:
  }
  return state;
}
