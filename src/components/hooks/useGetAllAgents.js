import { useQuery } from "react-query";
import axios from "axios";

const fetchAgents = async () => {
  try {
    const response = await axios.get(
      "https://api.real-estate-manager.redberryinternship.ge/api/agents",
      {
        headers: {
          accept: "application/json",
          Authorization: "Bearer 9d04c1f4-4b69-4c2e-923a-e717ad5764fc",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching agent list", error);
    throw new Error("Error fetching agent list");
  }
};

const useGetAllAgents = () => {
  return useQuery("getAllAgentList", fetchAgents);
};

export default useGetAllAgents;
