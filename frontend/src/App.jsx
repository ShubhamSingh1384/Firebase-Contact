import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);

  const onOpen = ()=>{
    setIsOpen(true);
  }
  const onClose = () =>{
    setIsOpen(false);
  }

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "Contacts");
        const contactSnapshot = await getDocs(contactsRef);
        const contactLists = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
    // console.log(contacts[0].id);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center mt-4 ">
        <div className="relative bg-gray-700 w-[417px] px-4 py-3">
          <Navbar />
          <Searchbar onOpen={onOpen}/>
        </div>
        <div className="bg-gray-700 h-[69vh] overflow-hidden overflow-y-scroll scroll-smooth hide-scrollbar">
          <div className="w-[400px] px-4 py-3">
            {contacts.map((contact) => (
              <div
                className="text-white text-[15px] border border-gray-950 mt-3 rounded-xl bg-gray-600 px-3 py-1"
                key={contact.id}
              >
                <ContactCard contact={contact} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}/>
    </>
  );
};

export default App;
