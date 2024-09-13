import React, { useState, createContext } from "react";

export const FilterItems = createContext({
  profileImage: "",
  setProfileImage: () => {},
  profileImageUpdated: "",
  setProfileImageUpdated: () => {},
  movies: [],
  setMovies: () => [],
});

export const FilterItemsProvider = ({ children }) => {
  const [profileImage, setProfileImage] = useState < any > "";
  const [profileImageUpdated, setProfileImageUpdated] = useState < any > "";
  const [movies, setMovies] = useState([]);

  return (
    <DashbCtrx.Provider
      value={{
        profileImageUpdated,
        setProfileImageUpdated,
        profileImage,
        setProfileImage,
        movies,
        setMovies,
      }}
    >
      {children}
    </DashbCtrx.Provider>
  );
};
