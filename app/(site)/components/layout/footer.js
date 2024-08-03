// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Join Our Network</h2>
          <p className="mb-4 md:w-[630px] mx-auto text-center">
            Sign up to receive expert analysis from our community on the most important global issues, rapid insights on events as they unfold, and highlights of the Council's best work.
          </p>
          <form className="flex justify-center items-center max-w-md mx-auto">
            <div className="flex gap-x-3">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-md border-0"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 whitespace-pre rounded-md"
              >
                Get started
              </button>
            </div>
          </form>
          <p className="text-xs mt-4">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="#" className="underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="#" className="underline">
              Terms of Service
            </a>{' '}
            apply.
          </p>
        </div> */}
        <div className="text-center border-gray-700 pt-4">
          {/* <div className="flex justify-center mb-4 space-x-4">
            <img src="/logoo.jpg" alt="NIMC Journal and Blog" className="h-12" />
            <img src="/log.jpg" alt="NIMC Journal and Blog" className="h-12" />
          </div> */}
          <p className="text-2xl">Bangladesh Under Attack</p>
          <p className="text-sm">Government of the People's Republic Bangladesh</p>
          <div className="text-xs mb-4 mt-4">
            <a href="#" className="mx-2 hover:underline">Privacy Policy</a>|
            <a href="#" className="mx-2 hover:underline">Cookie Policy</a>|
            <a href="#" className="mx-2 hover:underline">Terms and conditions of use</a>|
            <a href="#" className="mx-2 hover:underline">Intellectual Independence Policy</a>|
            <a href="#" className="mx-2 hover:underline">Photo credits</a>
          </div>
          <p className="text-xs">&copy; Bangladesh Under Attack 2024 . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
