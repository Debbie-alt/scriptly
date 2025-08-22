"use client";

import React from "react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '@/config/firebase.config';
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const auth = getAuth(app);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect or show success
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // Redirect or show success
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center 
                 bg-[url('/skypic1.jpg')] bg-cover bg-center"
    >
      {/* Login Card */}
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl 
                      bg-white backdrop-blur-lg border border-white/40">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full flex items-center justify-center 
                          bg-white/40 backdrop-blur-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Sign in with email
        </h2>
        <p className="text-center text-gray-800 text-sm mb-8">
          Make a new doc to bring your words, data, and teams together. For free
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleEmailLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 
                       focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 
                       focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <div className="flex justify-between text-sm">
            <span></span>
            <Link href="/register" className="text-blue-400 hover:underline">
              Register
            </Link>
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 
                       text-white font-semibold hover:opacity-90 disabled:opacity-60"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Get Started'}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-3 text-gray-700 text-sm">Or sign in with</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-4">
          <button type="button" onClick={handleGoogleLogin} className="bg-white/70 rounded-full p-2 hover:shadow-lg transition">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              className="w-8 h-8"
              loading="eager"
            />
          </button>
          <a href="#">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
              alt="Facebook"
              className="w-8 h-8"
              loading="eager"
            />
          </a>
          <a href="#">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
              alt="Apple"
              className="w-8 h-8"
              loading="eager"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
