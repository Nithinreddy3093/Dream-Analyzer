import React, { useState } from 'react';
import { EmailSignIn } from './EmailSignIn';
import { SignUpForm } from './SignUpForm';
import { GoogleAuth } from './GoogleAuth';

export function AuthTabs() {
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex mb-6">
        <button
          onClick={() => setActiveTab('signin')}
          className={`flex-1 py-2 text-center ${
            activeTab === 'signin'
              ? 'border-b-2 border-purple-500 text-purple-600'
              : 'text-gray-500'
          }`}
        >
          Sign In
        </button>
        <button
          onClick={() => setActiveTab('signup')}
          className={`flex-1 py-2 text-center ${
            activeTab === 'signup'
              ? 'border-b-2 border-purple-500 text-purple-600'
              : 'text-gray-500'
          }`}
        >
          Sign Up
        </button>
      </div>

      {activeTab === 'signin' ? <EmailSignIn /> : <SignUpForm />}

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div className="mt-6">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
}