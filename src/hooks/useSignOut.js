import React from 'react'
import { use } from 'react';
import { AuthContext } from '../store/AuthContext';
import { useNavigate } from 'react-router';

export default function useSignOut() {
  const { setToken, token } = use(AuthContext);
  
  const navigate = useNavigate();
  const tkn = localStorage.getItem("tkn");
 

  function handleSignOut() {
    localStorage.removeItem("tkn");
    setToken(null);
    navigate("/sign-in");
    }
    
    return { token,handleSignOut }
}
