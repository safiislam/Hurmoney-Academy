import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useInstractorClass = () => {
  const { user } = useContext(AuthContext);
  const { data: instructorClass = [], refetch } = useQuery({
    queryKey: ["course", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://summry-camp-school-server.vercel.app/courses?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [instructorClass,refetch];
};

export default useInstractorClass;
