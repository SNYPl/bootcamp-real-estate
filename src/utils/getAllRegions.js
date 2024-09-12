import axios from "axios";

export const getAllRegions = async () => {
  const response = await axios.get(
    "https://api.real-estate-manager.redberryinternship.ge/api/regions"
  );

  return response?.data;
};
