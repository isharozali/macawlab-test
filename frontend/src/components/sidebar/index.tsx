import {
  ChevronsUpDown,
  ChevronsLeft
} from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import SideBarCollapsibles from "./sidebarCollapsibles";
  const Sidebar = () => {

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
     
         <div className="flex flex-col p-4 bg-white ">
      <div className="flex items-center justify-between">
       
        <div className="flex items-center">
          <img
            src="/images/download.jpeg" 
            alt="Profile"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-lg font-bold">Callie Spurlock</span>
          <span className="ml-2 cursor-pointer">
          <ChevronsUpDown className="h-4 w-4 text-gray-600" />
          </span>
        </div>
        <span className="cursor-pointer">
        <ChevronsLeft className="h-4 w-4 text-gray-600" />
        </span>
      </div>

      <div className="mt-2 relative" >
        <input
          type="text"
          placeholder="Search articles or rem"
          className="w-full p-2 text-[14px] rounded-md focus:outline-none  bg-gray-100 pl-10 "
        />
        <span className="absolute left-3 top-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 18a7 7 0 100-14 7 7 0 000 14zm2 0h3.5M18.5 18.5L22 22" />
          </svg>
        </span>
      </div>
    </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <img src="/icons/allNotes.svg"  alt="" />
             All Notes
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
               <img src="/icons/dailyNotes.svg"  alt="" />
             Daily Notes
             
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg  px-3 py-2  text-muted-foreground transition-all hover:text-primary"
            >
              <img src="/icons/flashCards.svg"  alt="" />
              Flash Cards
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-sm px-4 bg-gray-200 text-gray-600">
                120
              </Badge>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-blue-800 bg-blue-100 text-muted-foreground transition-all hover:text-primary"
            >
              <img src="/icons/spaces.svg"  alt="" />
              Spaces
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
               <img src="/icons/editLater.svg"  alt="" />
              Edit Later
            </Link>
          </nav>
          <div className="px-4 bg-gray-100 mt-5 py-1">
            <Tabs defaultValue="account">
              <TabsList className="grid w-full grid-cols-2 gap-2">
                <TabsTrigger
                  className="bg-gray-200 border-none focus:ring-0 focus:outline-none active:border-none active:ring-0"
                  value="Subscribed"
                >
                  Subscribed
                </TabsTrigger>
                <TabsTrigger
                  className="bg-gray-100 border-none focus:ring-0 focus:outline-none active:border-none active:ring-0"
                  value="All Spaces"
                >
                  All Spaces
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="mt-4">
           <SideBarCollapsibles/>
          </div>
        </div>
       
      </div>
    </div>
  );
};
export default Sidebar;
