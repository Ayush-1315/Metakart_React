import axios from "axios";
const signinService = async (email, password) => {
  const response = await axios.post("api/auth/login", {
    email: email,
    password: password,
  });
  try {
    if (response.status === 200) {
      return response;
    } else {
      throw new Error(response);
    }
  } catch (error) {
    console.log(error);
    console.log(response.status);
  }
};

export { signinService };
