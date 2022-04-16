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

    const {
      data: { access_token },
    } = await Axios.post(endpoints.auth.login, { email, password }, options);

    // The web save this cookie session, and determinate if the user is logged in
    if (access_token) {
      const token = access_token;
      Cookie.set('token', token, { expires: 5 });

      // send to axios define the value of the token
      Axios.defaults.headers.Authorization = `Bearer ${token}`;
      const { data: user } = await Axios.get(endpoints.auth.profile);
      console.log(user);
    }
  };

  return {
    user,
    signIn,
  };
}
