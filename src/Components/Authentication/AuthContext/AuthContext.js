import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { auth, provider } from "../../../firebase.config";

const AuthContext = createContext();

// can call it from any components and get values
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const [isNavigate, setIsNavigate] = useState(false);

  // google sign in method
  const signWithGoogle = () => {
    return auth.signInWithPopup(provider);
  };

  // sign up user method
  // const signup = (name, email, password) => {
  //   auth.createUserWithEmailAndPassword(email, password).then((res) => {
  //     const user = auth.currentUser;
  //     return user.updateProfile({
  //       displayName: name,
  //     });
  //   });
  // };
  const signup = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = auth.currentUser;
      await user.updateProfile({
        displayName: name,
      });
      return user;
    } catch (err) {
      throw err;
    }
  };

  // login user method
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  // sent password reset email
  const passwordResetEmail = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  // update email
  function updateEmail(email) {
    return currentUser?.updateEmail(email);
  }

  // update password
  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  //update displayName/Username
  const updateUserName = (name) => {
    const user = auth?.currentUser;
    return user?.updateProfile({
      displayName: name,
    });
  };

  //user Img update
  const updateUserImage = (imageUrl) => {
    const user = auth.currentUser;
    user
      ?.updateProfile({
        photoURL: imageUrl,
      })
      .then((res) => {
        console.log("update successful", res);
      })
      .catch((error) => {
        console.log("error occurred");
      });
  };

  // logout user method
  const logout = () => {
    return auth.signOut();
  };

  // get user information after login
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(true);
    });
  });

  const value = {
    currentUser,
    signWithGoogle,
    signup,
    login,
    logout,
    isNavigate,
    setIsNavigate,
    passwordResetEmail,
    updateEmail,
    updatePassword,
    updateUserName,
    updateUserImage,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
