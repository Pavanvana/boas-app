import axios from "axios";
import { ErrorToast, SuccessToast } from "../utils/toastUtils";
import { ResponseUserType } from "../types/accountsModalTypes";

interface User {
  identifier: string;
  password: string;
}

const loginAPI = async (
  user: User,
  onOpenChange: (val: boolean) => void,
  onSubmitSuccess: (jwtToken: string, responseUser: ResponseUserType) => void
): Promise<void> => {
  const url = "http://localhost:1337/api/auth/local";
  await axios
    .post(url, user)
    .then((response) => {
      console.log(response.data);
      SuccessToast("Logged in successfully");
      onOpenChange(false);
      console.log(response.data);
      onSubmitSuccess(response.data.jwt, response.data.user);
    })
    .catch((error) => {
      ErrorToast(error.response.data.error.message);
    });
};

export default loginAPI;
