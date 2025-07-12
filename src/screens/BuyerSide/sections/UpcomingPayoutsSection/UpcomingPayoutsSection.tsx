import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Separator } from "../../../../components/ui/separator";

export const UpcomingPayoutsSection = (): JSX.Element => {
  // Data for upcoming payouts
  const payouts = [
    {
      id: 1,
      supplier: "Supplier 1",
      amount: "$5,480",
      dueDate: "May 1, 2025",
    },
    {
      id: 2,
      supplier: "Supplier 2",
      amount: "$2,046",
      dueDate: "Jun 12, 2025",
    },
    {
      id: 3,
      supplier: "Supplier 3",
      amount: "$7,182",
      dueDate: "Apr 28, 2025",
    },
    {
      id: 4,
      supplier: "Supplier 4",
      amount: "$7,198",
      dueDate: "May 25, 2025",
    },
  ];

  return (
    <Card className="w-[299px] p-[14.63px] border-[1.22px] border-[#dfdfdf] rounded-[6.1px]">
      <CardContent className="p-0">
        <div className="flex flex-col items-start gap-[18.29px]">
          <div className="flex flex-col items-start gap-[9.76px] w-full">
            <div className="flex flex-col items-start gap-[4.88px] w-full">
              <div className="flex flex-col items-start gap-[7.32px] w-full">
                <div className="flex flex-col items-start gap-[14.63px] w-full">
                  <div className="flex flex-col items-start gap-[9.76px] w-full">
                    <div className="flex items-center gap-[7.32px] w-full">
                      <div className="font-semibold text-black text-[12.2px] leading-[20.7px] font-['Inter',Helvetica]">
                        Upcoming Payouts
                      </div>
                    </div>

                    <div className="flex items-center gap-[7.32px] w-full">
                      <div className="flex w-[218.9px] items-center justify-between">
                        <div className="font-normal text-[#818181] text-[12.2px] leading-[20.7px] font-['Inter',Helvetica]">
                          Supplier name
                        </div>

                        <div className="font-normal text-[#818181] text-[12.2px] leading-[20.7px] font-['Inter',Helvetica]">
                          Amount
                        </div>

                        <div className="font-normal text-[#818181] text-[12.2px] leading-[20.7px] font-['Inter',Helvetica]">
                          Due Date
                        </div>
                      </div>
                    </div>

                    <Separator className="w-[239.63px] h-px" />
                  </div>
                </div>

                {payouts.map((payout) => (
                  <div
                    key={payout.id}
                    className="flex flex-col items-start gap-[7.32px] w-full"
                  >
                    <div className="flex items-center gap-[7.32px] w-full">
                      <Checkbox className="w-[13.41px] h-[13.41px] rounded-[3.66px] border-[0.61px] border-black" />

                      <div className="flex w-[218.9px] items-center justify-between">
                        <div className="font-normal text-black text-[8.5px] leading-[14.5px] font-['Inter',Helvetica]">
                          {payout.supplier}
                        </div>

                        <div className="font-normal text-black text-[8.5px] leading-[14.5px] font-['Inter',Helvetica]">
                          {payout.amount}
                        </div>

                        <div className="font-normal text-black text-[8.5px] leading-[14.5px] font-['Inter',Helvetica]">
                          {payout.dueDate}
                        </div>
                      </div>
                    </div>

                    <Separator className="w-[239.63px] h-px" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
