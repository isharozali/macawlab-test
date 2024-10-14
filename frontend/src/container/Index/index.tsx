import { Avatar, Input, Spin, Tabs } from "antd";
import { Button } from "@/components/ui/button";
import DefaultLayout from "@/layout/DefaultLayout";
import { Ellipsis } from "lucide-react";
import { InputOTPSeparator } from "@/components/ui/input-otp";
import Banner from "/src/assets/banner.svg";
import Feeds from "./feeds";
import { ENDPOINTS, STATIC_CONTENT } from "@/constants";
import { useQuery } from "@tanstack/react-query";

const { TextArea } = Input;

export default function Index() {
  const fetchComments = async () => {
    const response = await fetch(ENDPOINTS.GET_COMMENTS);
    if (!response.ok) {
      throw new Error("Something went wrong, please try again later");
    }
    return response.json();
  };
  const { data: comments = [], isLoading } = useQuery({
    queryKey: ["comments"],
    queryFn: fetchComments,
  });
  const TABS_ITEMS = [
    { key: "1", label: "Feed", children: <Feeds comments={comments} /> },
    { key: "2", label: "People", children: "Content of Tab Pane 2" },
    { key: "3", label: "About", children: "Content of Tab Pane 3" },
  ];
  return (
    <DefaultLayout>
      <Spin spinning={isLoading} fullscreen={true} />
      <main className="w-full h-auto overflow-auto">
        <div>
          <img
            src={Banner}
            alt="Banner"
            className="w-full h-[216px] object-cover"
          />
          <div className="min-h-[8px] bg-[#7874D2] w-full"></div>
          <div className="min-h-[120px] text-[#FFFFFF] bg-[#423CB9] w-full py-[20px] lg:py-[40px] lg:px-[90px]">
            <div className="w-[95%] lg:w-[60rem] flex-col md:flex-nowrap flex flex-wrap gap-2 mx-auto">
              <div className="text-start text-xl lg:text-[32px] font-bold">
                {STATIC_CONTENT.INDEX.HEADER_TITLE}
              </div>
              <div className="flex flex-wrap gap-2 justify-between text-base font-medium">
                <div className="flex items-center md:gap-2">
                  <Avatar size={40} src="https://github.com/shadcn.png" />
                  <div>{STATIC_CONTENT.INDEX.CONTRIBUTOR_TEXT}</div>
                  <InputOTPSeparator />
                  <div>{STATIC_CONTENT.INDEX.FLASHCARDS_TEXT}</div>
                  <InputOTPSeparator />
                  <div>{STATIC_CONTENT.INDEX.SUBSCRIBERS_TEXT}</div>
                </div>
                <div className="flex gap-3 w-full lg:w-auto items-center justify-end">
                  <Button
                    variant="secondary"
                    className="text-sm rounded-[6px] font-medium w-[40px] h-[36px] py-[10px] px-[12px]"
                  >
                    <Ellipsis className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    className="text-sm rounded-[6px] font-medium w-[116px] h-[36px] py-[10px] px-[24px]"
                  >
                    {STATIC_CONTENT.INDEX.SUBSCRIBE_BUTTON_TEXT}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[16px] border-t py-3 bg-[#FFFFFF] border-[#D8D8E4] w-full">
            <Tabs
              defaultActiveKey="1"
              items={TABS_ITEMS.map((tab) => ({
                ...tab,
                label: (
                  <span className="text-base font-semibold">{tab.label}</span>
                ),
              }))}
            />
          </div>
          <div className="bg-[#F4F4FA] p-4 w-full md:w-[70%] overflow-hidden mx-auto mt-[30px] ">
            <div className="flex items-center gap-2">
              <Avatar size={40} src="https://github.com/shadcn.png" />
              <h1 className="text-base font-semibold text-[#63637B]">
                Drew Koski
              </h1>
            </div>
            <TextArea
              placeholder={STATIC_CONTENT.INDEX.PLACEHOLDER_TEXT}
              autoSize={{ minRows: 5, maxRows: 5 }}
              className="mt-10 p-7"
            />
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}
