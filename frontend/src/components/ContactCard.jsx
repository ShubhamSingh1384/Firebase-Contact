import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { TiEdit } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";

const ContactCard = ({contact}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <HiOutlineUserCircle className="text-3xl text-yellow-600" />
        <div className="ml-[-50px]">
          <div>Name: {contact.name}</div>
          <div>Email: {contact.Email}</div>
        </div>
        <div className="flex gap-2">
          <TiEdit className="text-3xl text-green-600 mr-[-2px]" />
          <MdDeleteForever className="text-3xl text-red-600 items-end" />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
