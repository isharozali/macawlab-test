import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { Button } from "@/components/ui/button";
const SideBarCollapsibles = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  return (
    <>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className=" space-y-2"
      >
        <div className="flex items-center justify-start space-x-2 px-4">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="w-4 p-0 bg-white  border-none focus:ring-0 focus:outline-none active:border-none active:ring-0"
            >
              <img src="/icons/collapseArrow.svg" alt="" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
          <h4 className="text-sm text-gray-600 font-medium">
            The Science of Biology
          </h4>
        </div>

        <CollapsibleContent className="space-y-2">
          <div className=" px-4  font-mono text-sm pl-12">subtitle</div>
          <div className=" px-4  font-mono text-sm  pl-12">subtitle</div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible
        open={isOpen2}
        onOpenChange={setIsOpen2}
        className=" space-y-2"
      >
        <div className="flex items-center justify-start space-x-2 px-4">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="w-4 p-0 bg-white  border-none focus:ring-0 focus:outline-none active:border-none active:ring-0"
            >
              <img src="/icons/collapseArrow.svg" alt="" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
          <h4 className="text-sm text-gray-600 font-medium">
            The Chemistry of Life
          </h4>
        </div>

        <CollapsibleContent className="space-y-2">
          <div className=" px-4  font-mono text-sm pl-12">subtitle</div>
          <div className=" px-4  font-mono text-sm  pl-12">subtitle</div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible
        open={isOpen3}
        onOpenChange={setIsOpen3}
        className=" space-y-2"
      >
        <div className="flex items-center justify-start space-x-2 px-4">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="w-4 p-0 bg-white  border-none focus:ring-0 focus:outline-none active:border-none active:ring-0"
            >
              <img src="/icons/collapseArrow.svg" alt="" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
          <h4 className="text-sm text-gray-600 font-medium">The Biosphere</h4>
        </div>

        <CollapsibleContent>
          <Collapsible
            open={isOpen4}
            onOpenChange={setIsOpen4}
            className="  pl-8"
          >
            <div className="flex items-center justify-start space-x-2 px-4">
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-4 p-0 bg-white  border-none focus:ring-0 focus:outline-none active:border-none active:ring-0"
                >
                  <img src="/icons/collapseArrow.svg" alt="" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
              <h4 className="text-sm text-gray-600 font-medium">
                What is Ecology?
              </h4>
            </div>

            <CollapsibleContent>
              <div className=" px-4  text-gray-600 text-sm pl-12">
                Energy Flow
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible
            open={isOpen5}
            onOpenChange={setIsOpen5}
            className="  pl-8"
          >
            <div className="flex items-center justify-start space-x-2 px-4">
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-4 p-0 bg-white  border-none focus:ring-0 focus:outline-none active:border-none active:ring-0"
                >
                  <img src="/icons/collapseArrow.svg" alt="" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
              <h4 className="text-sm text-gray-600 font-medium">
                Cycle of Matter
              </h4>
            </div>

            <CollapsibleContent></CollapsibleContent>
          </Collapsible>
          <Collapsible
            open={isOpen6}
            onOpenChange={setIsOpen6}
            className="  pl-8"
          >
            <div className="flex items-center justify-start space-x-2 px-4">
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-4 p-0 bg-white  border-none focus:ring-0 focus:outline-none active:border-none active:ring-0"
                >
                  <img src="/icons/collapseArrow.svg" alt="" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
              <h4 className="text-sm text-gray-600 font-medium">
                The Role of Climate
              </h4>
            </div>

            <CollapsibleContent>
              <h4 className="text-sm text-gray-600 font-medium pl-10">
                Renewable and Nonrenew...
              </h4>
            </CollapsibleContent>
          </Collapsible>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible
        open={isOpen7}
        onOpenChange={setIsOpen7}
        className=" space-y-2"
      >
        <div className="flex items-center justify-start space-x-2 px-4">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="w-4 p-0 bg-white  border-none focus:ring-0 focus:outline-none active:border-none active:ring-0"
            >
              <img src="/icons/collapseArrow.svg" alt="" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
          <h4 className="text-sm text-gray-600 font-medium">
            Ecosystems and Communities
          </h4>
        </div>

        <CollapsibleContent className="space-y-2"></CollapsibleContent>
      </Collapsible>
      <Collapsible
        open={isOpen8}
        onOpenChange={setIsOpen8}
        className=" space-y-2"
      >
        <div className="flex items-center justify-start space-x-2 px-4">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="w-4 p-0 bg-white  border-none focus:ring-0 focus:outline-none active:border-none active:ring-0"
            >
              <img src="/icons/collapseArrow.svg" alt="" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
          <h4 className="text-sm text-gray-600 font-medium">Populations</h4>
        </div>

        <CollapsibleContent className="space-y-2"></CollapsibleContent>
      </Collapsible>
    </>
  );
};
export default SideBarCollapsibles;
