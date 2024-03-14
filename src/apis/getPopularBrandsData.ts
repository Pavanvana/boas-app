import axios from "axios";
import { ErrorToast } from "../utils/toastUtils";

export interface PopularBrandsDataType {
  id: number;
  brand: string;
  imageURL: string;
  logoURL: string;
}

const getPopularBrandsData = async (
  setPopularBrandsData: (data: PopularBrandsDataType[]) => void
): Promise<void> => {
  const url = "https://boas-strapi-backend.onrender.com/api/popular-brands";
  await axios
    .get(url)
    .then((response) => {
      const updatedData = response.data.data.map((data: any) => {
        return {
          id: data.id,
          brand: data.attributes.brand,
          imageURL: data.attributes.imgURL,
          logoURL: data.attributes.logoURL,
        };
      });
      setPopularBrandsData(updatedData);
    })
    .catch((error) => {
      ErrorToast(error.response.data.error.message);
    });
};

export default getPopularBrandsData;
