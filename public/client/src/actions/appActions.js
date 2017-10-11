export function changeTitle(_title){
  return {
    type: "CHANGE_TITLE",
    payload: _title
  }
}

export function changeEmail(_email){
  const checkemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var isEmail = false;
  if(_email.match(checkemail)){
    isEmail = true;
  }
  return {
    type: "CHANGE_EMAIL",
    payload: {
      email: _email,
      isEmail: isEmail
    }
  }
}
export function changeMessage(_message){
  return {
    type: "CHANGE_MESSAGE",
    payload: _message
  }
}

export function verificationError(_errorMessage){
  return {
    type: "VERIFICATION_ERROR",
    payload: _errorMessage
  }
}
export function sentMessage(){
  return {
    type: "SENT_MESSAGE"
  }
}
export function sendingMessage(){
  return {
    type: "SENDING_MESSAGE"
  }
}

export function displayErrorMessage(){
  return {
    type: "DISPLAY_ERROR_MESSAGE"
  }
}
