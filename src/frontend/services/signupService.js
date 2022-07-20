import axios from "axios";

const signupService = async (firstname, lastname, email, password) => {
  console.log(firstname, lastname, email, password);
  const response = await axios.post("api/auth/signup", {
    firstName: firstname,
    lastName: lastname,
    email: email,
    password: password,
  });
  try {
    console.log(response);
    if (response.status === 201) {
      return response.data.encodedToken;
    } else {
      throw new Error(response);
    }
  } catch (error) {
    console.log(error);
  }
};

export { signupService };
