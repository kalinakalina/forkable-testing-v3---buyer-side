import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import { Switch } from "../../../../components/ui/switch";

export const UserProfileSection = (): JSX.Element => {
  // Data for the settings
  const settings = [
    {
      id: "capital-controls",
      label: "Capital Controls",
      type: "header",
      hasAvatar: true,
      avatarSrc: "https://c.animaapp.com/mczwotncTqxF4b/img/ellipse-2-1.png",
    },
    {
      id: "out-of-pocket",
      label: "Out-of-pocket limit",
      type: "toggle",
      defaultChecked: true,
    },
    {
      id: "spend-limit",
      label: "Spend limit",
      type: "input",
      defaultValue: "$15,000",
    },
    {
      id: "activate-financing",
      label: "Activate financing",
      type: "button",
      buttonText: "Activate",
    },
  ];

  return (
    <Card className="w-[270px] p-[14.63px] border-[1.22px] border-[#dfdfdf] rounded-[6.1px]">
      <CardContent className="p-0 flex flex-col gap-[18.29px]">
        <div className="flex flex-col gap-[9.76px]">
          {settings.map((setting, index) => (
            <React.Fragment key={setting.id}>
              {setting.type === "header" && (
                <>
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-[12.2px] leading-[20.7px] font-['Inter',Helvetica]">
                      {setting.label}
                    </div>
                    {setting.hasAvatar && (
                      <Avatar className="w-[21.95px] h-[21.95px]">
                        <AvatarImage
                          src={setting.avatarSrc}
                          alt="User avatar"
                        />
                      </Avatar>
                    )}
                  </div>
                  <Separator className="w-[218.9px]" />
                </>
              )}

              {setting.type === "toggle" && (
                <>
                  <div className="flex items-center justify-between">
                    <div className="font-normal text-[12.2px] leading-[20.7px] font-['Inter',Helvetica]">
                      {setting.label}
                    </div>
                    <Switch
                      defaultChecked={setting.defaultChecked}
                      className="bg-[#4b5162] data-[state=checked]:bg-[#4b5162]"
                    />
                  </div>
                  <Separator className="w-[218.9px]" />
                </>
              )}

              {setting.type === "input" && (
                <>
                  <div className="font-normal text-[12.2px] leading-[20.7px] font-['Inter',Helvetica]">
                    {setting.label}
                  </div>
                  <Input
                    defaultValue={setting.defaultValue}
                    className="h-[24.39px] px-[6.71px] py-[4.88px] text-[9.8px] leading-[14.6px] text-blue-100 rounded-[3.66px] border-[0.48px] border-[#a4a4a48a] shadow-[0px_0.48px_0.96px_#0a0c120d]"
                  />
                </>
              )}

              {setting.type === "button" && (
                <div className="flex items-center justify-between">
                  <div className="font-normal text-[12.2px] leading-[20.7px] font-['Inter',Helvetica]">
                    {setting.label}
                  </div>
                  <Button className="h-[24.39px] w-[70.73px] bg-[#5366ff] rounded-[4.88px] text-[9.8px] leading-[16.6px] font-normal">
                    {setting.buttonText}
                  </Button>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
