import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Separator } from "../../../../components/ui/separator";
import { Switch } from "../../../../components/ui/switch";

export const PaymentSettingsSection = (): JSX.Element => {
  // Data for the slider markers
  const sliderMarkers = [
    { value: "1.0%", label: "Low" },
    { value: "", label: "Benchmark" },
    { value: "", label: "Popular" },
    { value: "", label: "High" },
    { value: "8.0%", label: "" },
  ];

  return (
    <Card className="flex flex-col w-full max-w-[582px] items-start gap-[14.63px] p-[14.63px] rounded-[6.1px] border-[1.22px] border-solid border-[#dfdfdf]">
      <CardContent className="flex flex-col items-start gap-[7.32px] self-stretch w-full p-0">
        <div className="flex items-center justify-between self-stretch w-full">
          <h3 className="font-semibold text-[12.2px] text-[#0f171f] leading-[17.1px] font-['Inter',Helvetica]">
            Set Early Payment Discount Rate
          </h3>

          <Select defaultValue="all">
            <SelectTrigger className="w-[112.8px] h-[37.8px] justify-center bg-white border-[0.61px] border-solid border-black rounded-[7.32px] text-[9.8px] font-normal font-['Inter',Helvetica]">
              <SelectValue placeholder="All suppliers" />
              <ChevronDownIcon className="w-[7.93px] h-[3.66px]" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All suppliers</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator className="w-full h-[1.22px]" />

        <div className="font-['Inter',Helvetica] text-[#0f171f] text-[12.2px]">
          <span className="font-semibold leading-[23.2px]">
            Discount Rate:
            <br />
          </span>
          <span className="text-[9.8px] leading-[18.5px]">
            4.5% / 30 days acceleration
          </span>
        </div>

        <div className="relative self-stretch w-full h-[94.51px]">
          <div className="relative w-full h-[95px]">
            <div className="flex flex-col w-full items-start gap-[7.32px] absolute top-[49px] left-0">
              {/* Slider background track */}
              <div className="relative self-stretch w-full h-[3.66px] bg-[#d9d9d9] rounded-[60.97px]" />

              <div className="flex flex-col items-start gap-[6.1px] p-[6.1px] relative self-stretch w-full">
                {/* Slider markers */}
                <div className="flex items-center justify-between self-stretch w-full relative">
                  {sliderMarkers.map((marker, index) => (
                    <div
                      key={index}
                      className="relative w-fit mt-[-0.13px] font-['Inter',Helvetica] font-normal text-black text-[12.2px] leading-[20.7px] whitespace-nowrap"
                    >
                      {marker.value || marker.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider filled track */}
              <div className="absolute w-[113px] h-1 top-0 left-[168px] rounded-[60.97px] bg-[linear-gradient(90deg,rgba(83,102,255,1)_0%,rgba(50,61,153,1)_100%)]" />
            </div>

            {/* Slider handle and tooltip */}
            <div className="flex flex-col w-[67px] items-start gap-[6.1px] p-[6.1px] absolute top-0 left-[190px]">
              <div className="flex flex-col items-start gap-[6.1px] p-[6.1px] relative self-stretch w-full">
                <div className="flex flex-col items-center relative self-stretch w-full">
                  {/* Tooltip */}
                  <div className="inline-flex items-center gap-[6.1px] px-[7.32px] py-[4.88px] relative bg-[#1d2129] rounded-[4.88px] overflow-hidden">
                    <div className="relative w-fit mt-[-0.61px] font-['PingFang_SC-Regular',Helvetica] font-normal text-white text-[8.5px] text-center leading-[13.4px] whitespace-nowrap">
                      4.5%
                    </div>
                  </div>

                  {/* Tooltip arrow */}
                  <img
                    className="relative self-stretch w-full"
                    alt="Arrow position"
                    src="https://c.animaapp.com/mczwotncTqxF4b/img/arrow-position-scrubber.svg"
                  />
                </div>
              </div>

              {/* Slider handle */}
              <div className="absolute w-2.5 h-2.5 top-[46px] left-7 bg-white rounded-[5.18px] border-[0.61px] border-solid border-black" />
            </div>
          </div>
        </div>

        {/* Formula AI recommendation card */}
        <Card className="flex flex-col items-start gap-[9.76px] p-[9.76px] relative self-stretch w-full bg-[#e5e7fa] rounded-[7.32px] border-none">
          <CardContent className="flex flex-wrap items-start gap-[8px_41.46px] relative self-stretch w-full p-0">
            <div className="flex w-full items-center justify-between relative">
              <div className="flex items-center gap-[13.41px] relative">
                <div className="inline-flex items-center gap-[8.54px] relative">
                  {/* Formula AI icon */}
                  <div className="relative w-[36.58px] h-[36.58px] bg-white rounded-[7.32px] flex items-center justify-center">
                    <img
                      className="w-[18px] h-[17px]"
                      alt="Vector"
                      src="https://c.animaapp.com/mczwotncTqxF4b/img/vector-1.svg"
                    />
                  </div>

                  <div className="font-['Inter',Helvetica] font-medium text-black text-[14.6px] leading-[27.8px] whitespace-nowrap">
                    Formula AI
                  </div>
                </div>

                <Badge className="flex h-[17.07px] items-center justify-center gap-[6.1px] p-[6.1px] bg-[#a4adf6] rounded-[609.75px] hover:bg-[#a4adf6]">
                  <span className="font-['Inter',Helvetica] font-medium text-[#282d52] text-[8.5px] leading-[16.2px]">
                    Recommended
                  </span>
                </Badge>
              </div>

              <Switch
                defaultChecked
                className="relative w-[21.34px] h-[12.99px] bg-[#5366ff] rounded-[41.9px] data-[state=checked]:bg-[#5366ff]"
              />
            </div>

            <div className="flex flex-col w-full max-w-[342.07px] items-start gap-[9.76px]">
              <p className="font-['Inter',Helvetica] font-normal text-black text-[8.5px] leading-[16.2px]">
                Maximize your results by taking into account various factors,
                such as seasonality, market trends, and more, and automatically
                adjusts the discount rate.
              </p>

              <p className="font-['Inter',Helvetica] font-normal text-black text-[8.5px] leading-[16.2px]">
                Discount rate will shift between -0.5% to +1.5% from your
                selected discount rate.
              </p>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};
