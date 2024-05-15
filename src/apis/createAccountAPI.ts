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

interface Props {
  user: User;
  onOpenChange: (val: boolean) => void;
  onSubmitSuccess: (jwtToken: string, responseUser: ResponseUserType) => void;
  setCreateButtonStatus: (val: boolean) => void;
}

const createAccountAPI = async (props: Props): Promise<void> => {
  const { user, onOpenChange, onSubmitSuccess, setCreateButtonStatus } = props;
  setCreateButtonStatus(true);
  const url =
    "https://boas-strapi-backend.onrender.com/api/auth/local/register";
  await axios
    .post(url, user)
    .then((response) => {
      onOpenChange(false);
      SuccessToast("Account Created Successfully");
      onSubmitSuccess(response.data.jwt, response.data.user);
      setCreateButtonStatus(false);
    })
    .catch((error) => {
      ErrorToast(error.response.data.error.message);
      setCreateButtonStatus(false);
    });
};

export default createAccountAPI;
