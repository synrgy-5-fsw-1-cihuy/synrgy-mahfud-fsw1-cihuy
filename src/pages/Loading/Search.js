import React from 'react'
const Loading = () => {
  return (
    <>
      <div className="flex justify-center dark:bg-gray-800 bg-slate-100">
        <div className="w-4/5">
          <div role="status" className="animate-pulse flex bg-slate-100 p-3 lg:p-10 rounded-md w-full">
            <div className="flex items-center space-x-2 w-full">
              <div className="h-8 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div className="hidden lg:flex space-x-2 w-full lg:ml-56">
              <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center dark:bg-gray-800 items-center justify-items-center bg-slate-100 pt-5 pb-10">
        <div className="w-4/5">
          <div role="status" className="animate-pulse flex flex-col lg:flex-row bg-slate-100 p-3 lg:p-10 rounded-md w-full">
            <div className="flex flex-col justify-center w-full">
              <div className="h-8 bg-gray-300 rounded-full dark:bg-gray-600 w-4/5"></div>
              <div className="h-6 bg-gray-300 rounded-full dark:bg-gray-600 w-1/2 mt-4 mb-8"></div>
              <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-600 w-2/3 mt-2"></div>
              <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-600 w-3/5 mt-2"></div>
              <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-600 w-2/5 mt-2"></div>
            </div>
            <div className="flex mt-12 lg:mt-0 justify-center items-center w-full lg:w-4/5 h-80 bg-gray-300 rounded dark:bg-gray-700">
              <svg className="w-14 h-14 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center dark:bg-gray-800 items-center justify-items-center -mt-10 mb-10">
        <div className="w-full p-3 lg:p-0 lg:w-3/5">

          <div role="status" className="animate-pulse flex gap-6 bg-slate-100 p-10 border-8 rounded-md w-full">
            <div className="h-7 bg-gray-300 rounded-full dark:bg-gray-600 w-2/5 mt-2"></div>
            <div className="h-7 bg-gray-300 rounded-full dark:bg-gray-600 w-2/5 mt-2"></div>
            <div className="h-7 bg-gray-300 rounded-full dark:bg-gray-600 w-2/5 mt-2"></div>
            <div className="h-7 bg-gray-300 rounded-full dark:bg-gray-600 w-2/5 mt-2"></div>
            <div className="h-7 bg-gray-300 rounded-full dark:bg-gray-600 w-2/5 mt-2"></div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden flex dark:bg-gray-800 justify-center items-center justify-items-center mt-4">
        <div className="w-4/5 flex gap-4 justify-center">
          <div
            role="status"
            className="p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
            <div className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
              <svg
                className="w-12 h-12 text-gray-200 dark:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
            <div className="flex items-center mt-4 space-x-3">
              <svg
                className="w-14 h-14 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
          <div
            role="status"
            className="p-4 max-w-sm rounded border dark:bg-gray-800 border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
            <div className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
              <svg
                className="w-12 h-12 text-gray-200 dark:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
            <div className="flex items-center mt-4 space-x-3">
              <svg
                className="w-14 h-14 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <div className="h-2.5 bg-gray-200 dark:bg-gray-800 rounded-full dark:bg-gray-700 w-32 mb-2" />
                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
          <div
            role="status"
            className="p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
            <div className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
              <svg
                className="w-12 h-12 text-gray-200 dark:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
            <div className="flex items-center mt-4 space-x-3">
              <svg
                className="w-14 h-14 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>

    </>
  );
};

export default Loading;
