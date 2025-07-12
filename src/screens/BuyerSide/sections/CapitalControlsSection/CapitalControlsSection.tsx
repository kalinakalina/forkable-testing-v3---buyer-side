import { BuildingIcon, PlusIcon, SettingsIcon, UsersIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const CapitalControlsSection = (): JSX.Element => {
  // Navigation menu data
  const navItems = [
    {
      id: "create",
      label: "Create",
      icon: <PlusIcon className="h-[14.63px] w-[14.63px]" />,
      active: true,
    },
    {
      id: "manage",
      label: "Manage",
      icon: <SettingsIcon className="h-[14.63px] w-[14.63px]" />,
      active: false,
    },
    {
      id: "team",
      label: "Team",
      icon: <UsersIcon className="h-[14.63px] w-[14.63px]" />,
      active: false,
    },
    {
      id: "finance",
      label: "Finance",
      icon: <BuildingIcon className="h-[14.63px] w-[14.63px]" />,
      active: false,
    },
  ];

  return (
    <nav className="flex flex-col w-[169px] items-start gap-[14.63px]">
      {navItems.map((item) => (
        <Button
          key={item.id}
          variant={item.active ? "default" : "ghost"}
          className={`flex h-[36.58px] items-center gap-[7.32px] p-[14.63px] w-full justify-start rounded-[7.32px] ${
            item.active ? "bg-[#5d65f8]" : ""
          }`}
        >
          {item.icon}
          <span className="font-normal text-[12.2px] leading-[17.1px]">
            {item.label}
          </span>
        </Button>
      ))}
    </nav>
  );
};
