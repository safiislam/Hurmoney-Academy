import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useUserRole = (user) => {
  const {  setLoader  } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: userData = [], isLoading ,refetch } = useQuery({
    queryKey: ["userRole", user?.email],
    // enabled: !user?.email,
    queryFn: async () => {
      // setLoader(true);
      if (user?.email) {
        const data = await axiosSecure.get(`/userRole?email=${user?.email}`);
        // const data = await axios.get(`http://localhost:5000/userRole?email=${user?.email}`);
        // setLoader(false);
        console.log(data.data);
        return data.data;
      }
    },
  });
  console.log(user);
  return [userData, isLoading,refetch];
};

export default useUserRole;
