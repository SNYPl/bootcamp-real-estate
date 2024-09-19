import { useQuery } from "react-query";
import axios from "axios";

const fetchListing = async () => {
  try {
    const response = await axios.get(
      "https://api.real-estate-manager.redberryinternship.ge/api/real-estates",
      {
        headers: {
          accept: "application/json",
          Authorization: "Bearer 9d04c1f4-4b69-4c2e-923a-e717ad5764fc",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching listing list", error);
    throw new Error("Error fetching listing list");
  }
};

const useGetAllListing = () => {
  return useQuery("getAllRealEstate", fetchListing);
};

export default useGetAllListing;
