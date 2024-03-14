import axios from "axios";
import { ErrorToast } from "../utils/toastUtils";

export interface WeHaveBeenFeaturedDataType {
  id: number;
  logoURL: string;
}
const getWeHaveBeenFeaturedAPI = async (
  setWeHaveBeenFeaturedData: (data: WeHaveBeenFeaturedDataType[]) => void
): Promise<void> => {
  const url =
    "https://boas-strapi-backend.onrender.com/api/we-have-been-featureds";
  await axios
    .get(url)
    .then((response) => {
      const updatedData = response.data.data.map((data: any) => {
        return {
          id: data.id,
          logoURL: data.attributes.logoURL,
        };
      });
      setWeHaveBeenFeaturedData(updatedData);
    })
    .catch((error) => {
      ErrorToast(error.response.data.error.message);
    });
};

export default getWeHaveBeenFeaturedAPI;
