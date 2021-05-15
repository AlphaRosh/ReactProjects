import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebaseApp.jsx";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // register logic
  function register(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  //Login Logic
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  //logout logic
  function logout() {
    return auth.signOut();
  }

  //Reset Password logic
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  //Update Email Logic
  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }
  //Update Password Logic
  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }
  //login for after component did mount , will Unmount , did Update
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    register,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  };
  return (
    <>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </>
  );
}
