import Image from 'next/image';
import React from 'react';

export const RedirectToSignIn = () => {
  return (

    <>
    <div className='inset-0 fixed bg-black z-[10000]'>
    <div
      className="fixed inset-0 bg-black z-[10001] flex items-center justify-center animate-pulse "
    >
      <div className="flex flex-col items-center">
        
        <Image src="/animated/redirect.svg" alt="loading" width={500} height={500} />
        <h1>You are not logged in, redirecting...</h1>
        <Image src="/animated/loading2.gif" alt='loading' height={150} width={150} className='w-96 sm:w-[500px] h-32'/>
      </div>
    </div>
    </div>
    
    </>
    
  );
};
