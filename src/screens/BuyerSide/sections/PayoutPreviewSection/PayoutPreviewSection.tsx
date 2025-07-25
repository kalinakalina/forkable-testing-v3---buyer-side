import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const PayoutPreviewSection = (): JSX.Element => {
  // Calendar data for April 2025
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

  // Calendar days data with payment amounts
  const calendarDays = [
    // Week 1
    [
      { day: "1", amount: "$9,280", isSelected: true, isVisible: true },
      { day: "2", amount: "$9,304", isVisible: true },
      { day: "3", amount: "$9,328", isVisible: true },
      { day: "4", amount: "$9,352", isVisible: true },
      { day: "5", amount: "$9,376", isVisible: true },
    ],
    // Week 2
    [
      { day: "6", amount: "$9,400", isVisible: true },
      { day: "7", amount: "$9,424", isVisible: true },
      { day: "8", amount: "$9,448", isVisible: true },
      { day: "9", amount: "$9,472", isVisible: true },
      { day: "10", amount: "$9,496", isVisible: true },
      { day: "11", amount: "$9,520", isVisible: true },
      { day: "12", amount: "$9,544", isVisible: true },
    ],
    // Week 3
    [
      { day: "13", amount: "$9,568", isVisible: true },
      { day: "14", amount: "$9,592", isVisible: true },
      { day: "15", amount: "$9,616", isVisible: true },
      { day: "16", amount: "$9,640", isVisible: true },
      { day: "17", amount: "$9,644", isVisible: true },
      { day: "18", amount: "$9,688", isVisible: true },
      { day: "19", amount: "$9,712", isVisible: true },
    ],
    // Week 4
    [
      { day: "20", amount: "$9,736", isVisible: true },
      { day: "21", amount: "$9,760", isVisible: true },
      { day: "22", amount: "$9,784", isVisible: true },
      { day: "23", amount: "$9,808", isVisible: true },
      { day: "24", amount: "$9,832", isVisible: true },
      { day: "25", amount: "$9,856", isVisible: true },
      { day: "26", amount: "$9,880", isVisible: true },
    ],
    // Week 5
    [
      { day: "27", amount: "$9,904", isVisible: true },
      { day: "28", amount: "$9,928", isVisible: true },
      { day: "29", amount: "$9,952", isVisible: true },
      { day: "30", amount: "$9,976", isVisible: true },
      { day: "31", amount: "$95", isVisible: false },
      { day: "28", amount: "$90", isVisible: false },
      { day: "29", amount: "-", isVisible: false },
    ],
  ];

  return (
    <Card className="flex flex-col w-full max-w-[326px] h-[550px] gap-[6.1px] p-[12.8px] rounded-[13.64px] shadow-[inset_6.03px_16px_32px_-15.16px_#d5d8f1] bg-[linear-gradient(180deg,rgba(233,235,249,1)_0%,rgba(227,237,238,1)_100%)]">
      <CardContent className="flex flex-col w-full items-start gap-[11.59px] p-0">
        {/* Header */}
        <div className="w-[191.46px] flex items-center gap-[6.1px] p-[6.1px] rounded-[7.32px]">
          <div className="flex flex-col items-start justify-center gap-[6.1px] mr-[-2.73px]">
            <h3 className="w-fit mt-[-0.61px] [font-family:'Inter',Helvetica] font-semibold text-[#0f171f] text-[12.2px] text-center tracking-[0] leading-[17.1px] whitespace-nowrap">
              Preview of your flexible payout
            </h3>
            <p className="w-fit [font-family:'Inter',Helvetica] font-normal text-[#0f171f] text-[8.5px] text-center tracking-[0] leading-[12.0px] whitespace-nowrap">
              Sample payout of $10,000
            </p>
          </div>
        </div>

        {/* Original payment details card */}
        <Card className="w-full h-[55.49px] shadow-[0px_4px_4px_-4px_#0c0c0d0d,0px_16px_32px_-4px_#0c0c0d1a] rounded-[8.81px]">
          <CardContent className="flex items-center justify-around p-0 h-full">
            <div className="flex w-[243.9px] items-center justify-center gap-[20.73px]">
              <div className="flex flex-col items-start gap-[4.88px]">
                <p className="w-fit mt-[-0.61px] [font-family:'Inter',Helvetica] font-normal text-black text-[8.5px] text-right tracking-[0] leading-[normal]">
                  Original due date
                </p>
                <p className="w-fit [font-family:'Inter',Helvetica] font-semibold text-black text-[14.6px] text-right tracking-[0] leading-[normal]">
                  May 01, 2025
                </p>
              </div>

              <Separator orientation="vertical" className="h-full" />

              <div className="flex flex-col items-start gap-[4.88px]">
                <p className="w-fit mt-[-0.61px] [font-family:'Inter',Helvetica] font-normal text-black text-[8.5px] text-right tracking-[0] leading-[normal]">
                  Original amount
                </p>
                <p className="w-fit [font-family:'Inter',Helvetica] font-semibold text-black text-[14.6px] text-right tracking-[0] leading-[normal]">
                  $10,000
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New payment details card */}
        <Card className="w-full h-[67.07px] shadow-[0px_4px_4px_-4px_#0c0c0d0d,0px_16px_32px_-4px_#0c0c0d1a] bg-[#5d65f8] rounded-[8.81px]">
          <CardContent className="flex items-center justify-around p-0 h-full">
            <div className="flex w-[243.9px] items-center justify-center gap-[20.73px]">
              <div className="flex flex-col items-start gap-[4.88px]">
                <p className="w-fit mt-[-0.61px] [font-family:'Inter',Helvetica] font-normal text-[#ffffff] text-[8.5px] text-right tracking-[0] leading-[normal]">
                  New due date
                </p>
                <p className="w-fit [font-family:'Inter',Helvetica] font-semibold text-[#ffffff] text-[14.6px] text-right tracking-[0] leading-[normal]">
                  April 01, 2025
                </p>
                <p className="w-fit [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-[8.5px] text-right tracking-[0] leading-[normal]">
                  30 days acceleration
                </p>
              </div>

              <Separator
                orientation="vertical"
                className="h-full bg-white/20"
              />

              <div className="flex flex-col items-start gap-[4.88px]">
                <p className="w-fit mt-[-0.61px] [font-family:'Inter',Helvetica] font-normal text-[#ffffff] text-[8.5px] text-right tracking-[0] leading-[normal]">
                  New amount
                </p>
                <p className="w-fit [font-family:'Inter',Helvetica] font-semibold text-[#ffffff] text-[14.6px] text-right tracking-[0] leading-[normal]">
                  $9,550
                </p>
                <p className="w-fit [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-[8.5px] text-right tracking-[0] leading-[normal]">
                  Earn $450 back!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calendar section */}
        <Card className="w-full h-[314.63px] bg-[#ffffff] rounded-[10.06px]">
          <CardContent className="p-5">
            <div className="w-full h-full">
              <div className="flex flex-col gap-[9.76px]">
                {/* Calendar header */}
                <div className="flex flex-col gap-[34.15px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[2.23px]">
                      <span className="[font-family:'Inter',Helvetica] font-bold text-black text-[12.8px] tracking-[-0.26px] leading-[16.7px] whitespace-nowrap">
                        April
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-normal text-black text-[12.8px] tracking-[-0.26px] leading-[16.7px] whitespace-nowrap">
                        2025
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ChevronLeftIcon className="w-3 h-3 text-[#988ef6]" />
                      <ChevronRightIcon className="w-3 h-3 text-[#988ef6]" />
                    </div>
                  </div>

                  {/* Weekday headers */}
                  <div className="flex items-center justify-between mb-[-24.13px]">
                    {weekdays.map((day, index) => (
                      <div
                        key={index}
                        className="flex flex-col w-[27.21px] h-[12.62px] items-center justify-center rounded-[2.29px]"
                      >
                        <div className="[font-family:'Inter',Helvetica] font-normal text-[#4b516299] text-[8px] tracking-[0] leading-[11.5px] whitespace-nowrap">
                          {day}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Calendar grid */}
                <div className="flex flex-col gap-[12.83px] mt-8">
                  {calendarDays.map((week, weekIndex) => (
                    <div
                      key={`week-${weekIndex}`}
                      className="flex items-center justify-between"
                    >
                      {week.map((day, dayIndex) => (
                        <div
                          key={`day-${weekIndex}-${dayIndex}`}
                          className={`flex flex-col w-[25.24px] h-[25.24px] items-center justify-center rounded-[4.59px] ${
                            day.isSelected
                              ? "bg-[#5d65f8]"
                              : day.isVisible
                                ? ""
                                : "bg-[#ffffff] text-[#ffffff]"
                          }`}
                        >
                          <div
                            className={`[font-family:'Inter',Helvetica] font-normal ${
                              day.isSelected
                                ? "text-[#ffffff] text-[7.5px]"
                                : day.isVisible
                                  ? "text-black text-[8.2px]"
                                  : "text-[#ffffff] text-[8.2px]"
                            } tracking-[0] leading-[11.5px] whitespace-nowrap`}
                          >
                            {day.day}
                          </div>
                          <div
                            className={`[font-family:'Inter',Helvetica] ${
                              day.isSelected
                                ? "font-semibold text-[#ffffff] text-[6px]"
                                : day.isVisible
                                  ? "font-normal text-black text-[5.5px]"
                                  : "font-normal text-[#ffffff] text-[5.5px]"
                            } tracking-[0] leading-[11.5px] whitespace-nowrap`}
                          >
                            {day.amount}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};
