import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from './AuthProvider';
import type { User } from '../../types/auth';

export function GoogleAuth() {
  const { login } = useAuth();

  const handleSuccess = async (credentialResponse: any) => {
    try {
      // Decode the JWT token to get user info
      const base64Url = credentialResponse.credential.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );

      const { sub, name, email, picture } = JSON.parse(jsonPayload);
      
      const userData: User = {
        id: sub,
        name,
        email,
        picture,
      };

      login(userData);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="flex justify-center p-4">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.log('Login Failed')}
        useOneTap
      />
    </div>
  );
}