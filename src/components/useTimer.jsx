import { useState } from "react";
import { useEffect } from "react";


const useTimer = (interval) => {
  const [seconds, setSeconds] = useState(interval);
  const [isActive, setIsActive] = useState(false);

  function start() {
    setIsActive(true);
  }

  function pause() {
    setIsActive(false);
  }

  function reset() {
    setSeconds(interval);
    setIsActive(false);
  }

  useEffect(() => {
    let intervalId = null;
    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            clearInterval(intervalId);
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive, interval]);

  return [seconds, start, pause, reset];
}
export default useTimer;
