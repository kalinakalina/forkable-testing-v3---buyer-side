import React from "react";
import { Button } from "../../../../components/ui/button";

export const MainDashboardSection = (): JSX.Element => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col items-start gap-[7px]">
        <h2 className="font-semibold text-[14.6px] leading-[20.5px] text-[#0f171f] font-['Inter',Helvetica]">
          My_Cost_Saving_Flexible_Payout_Program #5
        </h2>
        <p className="text-[12.2px] leading-[17.1px] text-[#4b5162] font-['Inter',Helvetica] font-normal max-w-[321px]">
          Maximize savings and incentives your suppliers by customizing your
          flexible payout program.
        </p>
      </div>

      <Button className="h-[36.58px] w-[98.78px] rounded-[7.32px] bg-[#5d65f8] p-[6.1px] text-[12.2px] font-['Inter',Helvetica] font-normal">
        Publish
      </Button>
    </div>
  );
};
