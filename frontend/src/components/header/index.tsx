import {
  AlignJustify,
  ArrowLeft,
  ChevronsUpDown,
  Ellipsis,
  Home,
  LineChart,
  Logs,
  Menu,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SideBarCollapsibles from "../sidebar/sidebarCollapsibles";

const Header = () => {
  return (
    <header className="flex h-14 items-center gap-4 border-b border-[#D8D8E4] bg-[#FFFFFF] px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex md:hidden flex-col min-h-screen  overflow-auto"
        >
          <div className="flex items-center md:hidden">
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
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <img src="/icons/allNotes.svg" alt="" />
              All Notes
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <img src="/icons/dailyNotes.svg" alt="" />
              Daily Notes
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg  px-3 py-2  text-muted-foreground transition-all hover:text-primary"
            >
              <img src="/icons/flashCards.svg" alt="" />
              Flash Cards
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-sm px-4 bg-gray-200 text-gray-600">
                120
              </Badge>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-blue-800 bg-blue-100 text-muted-foreground transition-all hover:text-primary"
            >
              <img src="/icons/spaces.svg" alt="" />
              Spaces
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <img src="/icons/editLater.svg" alt="" />
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
            <SideBarCollapsibles />
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-full mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <ArrowLeft className="h-5 w-5 text-[#9191AB]" />
            </div>
            <div className="text-base md:text-sm font-semibold text-[#63637B]">
              Cell Biology, Genetics and Evolution
            </div>
          </div>
          <div className="hidden md:block">
            <Ellipsis className="h-5 w-5 text-[#9191AB]" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
