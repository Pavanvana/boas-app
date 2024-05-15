import axios from "axios";
import { ResponseUserType } from "../types/accountsModalTypes";
import { ErrorToast, SuccessToast } from "../utils/toastUtils";

interface User {
  identifier: string;
  password: string;
}

interface Props {
  user: User;
  onOpenChange: (val: boolean) => void;
  onSubmitSuccess: (jwtToken: string, responseUser: ResponseUserType) => void;
  setLoginStatus: (val: boolean) => void;
}
const loginAPI = async (props: Props): Promise<void> => {
  const { user, onOpenChange, onSubmitSuccess, setLoginStatus } = props;
  setLoginStatus(true);
  const url = "https://boas-strapi-backend.onrender.com/api/auth/local";
  await axios
    .post(url, user)
    .then((response) => {
      SuccessToast("Logged in successfully");
      onOpenChange(false);
      onSubmitSuccess(response.data.jwt, response.data.user);
      setLoginStatus(false);
    })
    .catch((error) => {
      ErrorToast(error.response.data.error.message);
      setLoginStatus(false);
    });
};

export default loginAPI;
