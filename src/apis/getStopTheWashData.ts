import axios from "axios";
import { ErrorToast } from "../utils/toastUtils";

export interface StopTheWashDataType {
  id: number;
  color: string;
  imageURL: string;
  pageURL: string;
}
const getStopTheWashData = async (
  setStopTheWashData: (data: StopTheWashDataType[]) => void
): Promise<void> => {
  const url = "https://boas-strapi-backend.onrender.com/api/shop-the-washes";
  await axios
    .get(url)
    .then((response) => {
      const updatedData = response.data.data.map((data: any) => {
        return {
          id: data.id,
          color: data.attributes.color,
          imageURL: data.attributes.imgURL,
          pageURL: data.attributes.pageURL,
        };
      });
      setStopTheWashData(updatedData);
    })
    .catch((error) => {
      ErrorToast(error.response.data.error.message);
    });
};

export default getStopTheWashData;
