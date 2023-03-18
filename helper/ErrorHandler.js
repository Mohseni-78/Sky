export function feedbackError(data) {
  const Errors = {};

  if (!data.name) {
    Errors.name = "name is required";
  } else if (data.name.length < 3) {
    Errors.name = "name must be bigger than 3";
  } else {
    delete Errors.name;
  }

  if (!data.lastName) {
    Errors.lastName = "lastName is required";
  } else if (data.lastName.length < 3) {
    Errors.lastName = "lastName must be bigger than 3";
  } else {
    delete Errors.lastName;
  }

  if (!data.email) {
    Errors.email = "email is required";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
  ) {
    Errors.email = "email is invalid";
  } else {
    delete Errors.email;
  }

  if (!data.password) {
    Errors.password = "password is required";
  } else if (data.password.length < 6) {
    Errors.password = "password is too short";
  } else {
    delete Errors.password;
  }

  if (!data.confirmPassword) {
    Errors.confirmPassword = "confirmPassword is required";
  } else if (data.password !== data.confirmPassword) {
    Errors.confirmPassword = "password and confirm password are not equal";
  } else {
    delete Errors.confirmPassword;
  }

  return Errors;
}
