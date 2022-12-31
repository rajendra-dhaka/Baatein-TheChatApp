import React from "react";
import './Sidebar.scss';
import {Navbar,Search,Chats} from '../index'

export const Sidebar = () => {
  return <div className="sidebar">
    <Navbar />
    <Search />
    <Chats/>
  </div>;
};
