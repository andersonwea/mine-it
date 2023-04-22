import React from "react";
import PropTypes from "prop-types";

const UserContext = React.createContext();

const UserStorage = ({ children }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <UserContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </UserContext.Provider>
  );
};

UserStorage.propTypes = {
  children: PropTypes.any,
};

export { UserContext, UserStorage };
