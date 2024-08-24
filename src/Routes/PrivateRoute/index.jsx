import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { auth } from "../../firebase/firebase";

export const PrivateRouter = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  //   loading = true
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      user ? setIsAuthorized(true) : setIsAuthorized(false);
    });
    return () => unsubcribe();
  }, []);

  //   лоадер
  return <div>{isAuthorized ? <>{children} </> : <>NOT AUTHORIZED</>}</div>;
};
