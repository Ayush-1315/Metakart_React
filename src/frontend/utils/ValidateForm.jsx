const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passwordFormat = /^(?=.*\d)(?=.*[a-zA-Z]).{4,8}$/;

const SignupCheck = (userInput) => {
  const { firstname, lastname, email, password, password_CFR } = userInput;
  console.log(userInput);
  const err = {};

  if (!firstname) {
    err.firstname = "Enter a valid name";
  }

  if (!lastname) {
    err.lastname = "Enter a valid lastname";
  }

  if (!email.match(mailFormat)) {
    err.email = "Enter a valid email";
  }

  if (!password) {
    err.password1 = "Enter a valid password";
  }
  if (password && !password.match(passwordFormat)) {
    err.password =
      "Password is too weak! must be alphanumeric of length between 4 and 8";
  }
  if (!password_CFR) {
    err.password_CFR = "Enter confirm password";
  }
  if (password_CFR && password !== password_CFR) {
    err.notmatching = "Password didn't match";
  }

  return err;
};
const SigninCheck = (userInput) => {
  const { email, password } = userInput;
  console.log(userInput);
  const err = {};
  if (!email.match(mailFormat)) {
    err.email = "Enter valid email";
  }
  if (!password) {
    err.password = "Enter valid password";
  }

  return err;
};
export { SigninCheck, SignupCheck };
