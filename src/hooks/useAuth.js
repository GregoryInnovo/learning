import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import Axios from 'axios';
import endpoints from '@services/api/';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProviderAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };

    const { data: access_token } = await Axios.post(endpoints.auth.login, { email, password }, options);
    console.log(access_token);
  };

  return {
    user,
    signIn,
  };
}
