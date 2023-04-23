import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

const UserStorage = ({ children }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isDiamond, setIsDiamond] = React.useState(0);
  const [isBomb, setIsBomb] = React.useState(false);
  const [isWinnerPlayer, setIsWinnerPlayer] = React.useState(false);
  const [isLoserPlayer, setIsLoserPlayer] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (isDiamond === 8) {
      setIsWinnerPlayer(true);
      navigate("/play/winner");
    }
    if (isBomb) {
      setIsLoserPlayer(true);
      navigate("/play/loser");
    }

    console.log({
      diamonds: isDiamond,
      bomb: isBomb,
    });
  }, [isDiamond, isBomb, navigate]);

  return (
    <UserContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        setIsDiamond,
        setIsBomb,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserStorage.propTypes = {
  children: PropTypes.any,
};

export { UserContext, UserStorage };
