import useAxios from "axios-hooks";
import { API_URL } from "../../constants";
import { Character } from "../../types/Character";

export const useGetCharactersById = (id: string) => {
  return useAxios<Character>(
    {
      url: `${API_URL}/character/${id}`,
    },
    { manual: true }
  );
};
