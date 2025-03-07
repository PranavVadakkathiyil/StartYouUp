import React from "react";
import { Route, Routes } from "react-router-dom";
import AddInfo from "./AddInfo";
import ListingInfo from "./ListingInfo";
import Chat from "./Chat";
import Meet from "./Meet";

const UserDashboard = () => {
  return (
    <section className="sm:w-[95%] w-[85%] border h-[90vh]">
      <Routes>
      <Route index element={<AddInfo />} />
        <Route path="/addinfo" element={<AddInfo />} />

        <Route path="/listinfo" element={<ListingInfo />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/meet" element={<Meet />} />
      </Routes>
    </section>
  );
};

export default UserDashboard;
