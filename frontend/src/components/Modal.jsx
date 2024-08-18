import React from "react";
import { RxCrossCircled } from "react-icons/rx";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="mt-[-100vh] h-[100vh] flex justify-center items-center backdrop-blur">
          <div className="bg-gray-300 h-[300px] w-[350px]">
            <div className="flex">
              <div className="space-y-4 pl-5">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="mb-2 font-bold text-lg text-gray-900"
                  >
                    Name:{" "}
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Name"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="mb-2 font-bold text-lg text-gray-900"
                  >
                    Email:{" "}
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter Email"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <RxCrossCircled
                  onClick={() => onClose()}
                  className="text-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
    // document.getElementById("modal-root")
  );
};

export default Modal;
