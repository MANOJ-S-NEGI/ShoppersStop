import React from "react";
import { Routes, Route } from "react-router-dom";

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navigation from "./routes/navigation/navigation.jsx";
import Home from "./routes/home/home.jsx";
import SignInAuthentication from "./routes/sign-in-authentication/sign-in-authentication.jsx";
import Shop from "./routes/shop/shop.route.jsx";
import CheckOut from "./routes/checkout/checkout.components.jsx";

import { checkUserSession } from './redux-store/user/user.action.js';

// import { setCurrentUser } from './redux-store/user/user.action.js'
// import {
//   OnAuthStateChangedListener,
//   createUserDocumentFromAuth,
// } from './utils/firebase/firebase.utils';


// const App = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const unsubscribe = OnAuthStateChangedListener(async (userAuth) => {
//       if (userAuth) {
//         // Call createUserDocumentFromAuth with the user object
//         await createUserDocumentFromAuth(userAuth,);
        
//         // Dispatch only serializable fields to Redux
//         const sanitizedUser = {
//           uid: userAuth.uid,
//           email: userAuth.email,
//           displayName: userAuth.displayName,
//           emailVerified: userAuth.emailVerified,
//         };
  
//         dispatch(setCurrentUser(sanitizedUser));
//       } else {
//         dispatch(setCurrentUser(null));
//       }
//     });
  
//     return unsubscribe;
//   }, [dispatch]);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);
  
  return (
    <div className="app-container">
      <Routes>
        <Route path= "/" element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path= "shop/*" element={<Shop />}/>
          <Route path= "sign-in" element={<SignInAuthentication />}/> 
          <Route path= "checkout" element={<CheckOut />}/> 
        </Route>
      </Routes>      
    </div>
  );
};

export default App;
