import React from 'react';
import { auth } from '../firebase';

export default function VerifyEmail() {
  const user = auth.currentUser;
  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl mb-4">Verify Your Email</h2>
      <p>Please check your email (<strong>{user?.email}</strong>) for a verification link before logging in.</p>
    </div>
  );
}
