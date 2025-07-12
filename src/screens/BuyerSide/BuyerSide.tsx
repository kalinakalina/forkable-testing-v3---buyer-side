import { LogOutIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { CapitalControlsSection } from "./sections/CapitalControlsSection";
import { MainDashboardSection } from "./sections/MainDashboardSection";
import { PaymentSettingsSection } from "./sections/PaymentSettingsSection";
import { PayoutPreviewSection } from "./sections/PayoutPreviewSection/PayoutPreviewSection";
import { UpcomingPayoutsSection } from "./sections/UpcomingPayoutsSection";
import { UserProfileSection } from "./sections/UserProfileSection";

export const BuyerSide = (): JSX.Element => {
  return (
    <div className="flex w-full bg-white" data-model-id="131:6601">
      {/* Sidebar */}
      <aside className="w-[20%] border-r border-[#dfdfdf] bg-white flex flex-col">
        {/* Logo and brand */}
        <div className="p-7">
          <div className="flex flex-col gap-[14.63px]">
            <div className="flex items-center gap-[7.32px]">
              <div className="flex items-center gap-[5.42px]">
                <img
                  className="w-[63.37px] h-[16.39px]"
                  alt="Formula"
                  src="https://c.animaapp.com/mczwotncTqxF4b/img/formula.png"
                />
              </div>
              <div className="font-normal text-[#0f171f87] text-[19.5px] leading-[27.3px] whitespace-nowrap">
                Payers
              </div>
            </div>
            <Separator className="w-full" />
          </div>
        </div>

        {/* Capital Controls Section */}
        <div className="flex-1">
          <CapitalControlsSection />
        </div>

        {/* Sign out button */}
        <div className="p-[18px]">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 rounded-[7.32px] p-[14.63px] h-auto"
          >
            <LogOutIcon className="w-[14.63px] h-[14.63px]" />
            <span className="font-normal text-[12.2px] leading-[17.1px]">
              Sign out
            </span>
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col">
        {/* Main Dashboard Section */}
        <section className="w-full">
          <MainDashboardSection />
        </section>

        {/* Content grid */}
        <div className="flex flex-1">
          {/* Left column */}
          <div className="flex flex-col w-[50%]">
            {/* Payment Settings Section */}
            <section className="flex-1">
              <PaymentSettingsSection />
            </section>

            {/* Bottom sections */}
            <div className="flex">
              {/* User Profile Section */}
              <section className="w-[46%]">
                <UserProfileSection />
              </section>

              {/* Upcoming Payouts Section */}
              <section className="w-[54%]">
                <UpcomingPayoutsSection />
              </section>
            </div>
          </div>

          {/* Right column - Payout Preview Section */}
          <section className="w-[28%]">
            <PayoutPreviewSection />
          </section>
        </div>
      </main>
    </div>
  );
};
