import { useQuery } from "react-query";
import axios from "axios";

const fetchRegions = async () => {
  try {
    const response = await axios.get(
      "https://api.real-estate-manager.redberryinternship.ge/api/regions",
      {
        headers: {
          accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching agent list", error);
    throw new Error("Error fetching agent list");
  }
};

const useGetAllRegion = () => {
  return useQuery("getAllRegion", fetchRegions);
};

export default useGetAllRegion;
