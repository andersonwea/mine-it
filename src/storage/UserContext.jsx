import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();
const playAudio = new Audio("src/assets/sounds/mine-it-background-music.mp3");

const UserStorage = ({ children }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isDiamond, setIsDiamond] = React.useState(0);
  const [isBomb, setIsBomb] = React.useState(false);
  const [isWinnerPlayer, setIsWinnerPlayer] = React.useState(false);
  const [isLoserPlayer, setIsLoserPlayer] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    playAudio.loop = true;

    if (isPlaying) playAudio.play();
    else playAudio.pause();
  }, [isPlaying]);

  React.useEffect(() => {
    if (isDiamond === 8) {
      setIsWinnerPlayer(true);
    }
    if (isBomb) {
      setIsLoserPlayer(true);
    }
  }, [isDiamond, isBomb]);

  React.useEffect(() => {
    if (isWinnerPlayer || isLoserPlayer) {
      setTimeout(() => {
        setIsPlaying(false);
        navigate("/play/gameover");
      }, 1000);
    }
  }, [isWinnerPlayer, isLoserPlayer, navigate]);

  return (
    <UserContext.Provider
      value={{
        isPlaying,
        isWinnerPlayer,
        setIsPlaying,
        setIsDiamond,
        setIsBomb,
        setIsWinnerPlayer,
        setIsLoserPlayer,
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
