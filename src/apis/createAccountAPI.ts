import axios from "axios";
import { ErrorToast, SuccessToast } from "../utils/toastUtils";
import { ResponseUserType } from "../types/accountsModalTypes";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
}

const createAccountAPI = async (
  user: User,
  onOpenChange: (val: boolean) => void,
  onSubmitSuccess: (jwtToken: string, responseUser: ResponseUserType) => void
): Promise<void> => {
  const url =
    "https://boas-strapi-backend.onrender.com/api/auth/local/register";
  await axios
    .post(url, user)
    .then((response) => {
      onOpenChange(false);
      SuccessToast("Account Created Successfully");
      onSubmitSuccess(response.data.jwt, response.data.user);
    })
    .catch((error) => {
      ErrorToast(error.response.data.error.message);
    });
};

export default createAccountAPI;
