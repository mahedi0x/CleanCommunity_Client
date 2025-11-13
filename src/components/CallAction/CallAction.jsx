import React from 'react';

const CallAction = () => {
    return (
        <section class="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800" aria-labelledby="join-clean-drive-heading">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div class="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 text-center">
      
      <div class="absolute inset-0 overflow-hidden rounded-3xl">
        <svg class="absolute inset-0 h-full w-full stroke-gray-200 dark:stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="983e42fe-6f73-4342-9475-4a87330c73d2" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50 dark:fill-gray-800">
            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M0 400h201v201h-201Z M400 400h201v201h-201Z" stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#983e42fe-6f73-4342-9475-4a87330c73d2)" />
        </svg>
      </div>

      <div class="relative z-10">
        
        <p class="text-base font-semibold uppercase tracking-wider text-green-600 dark:text-green-400 mb-3">
          Be the Change
        </p>
        
        <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl" id="join-clean-drive-heading">
          Join Our Clean Drive
        </h2>
        
        <p class="mt-6 mx-auto max-w-xl text-xl text-gray-500 dark:text-gray-300">
          Volunteer your time and make a tangible difference in our community's environment. Together, we can create cleaner parks, beaches, and neighborhoods.
        </p>
        
        <div class="mt-10 flex justify-center">
          <a href="#" class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-green-600 hover:bg-green-700 transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50">
            Sign Up to Volunteer Today &rarr;
          </a>
        </div>
        
      </div>
      
    </div>
    
  </div>
</section>
    );
};

export default CallAction;