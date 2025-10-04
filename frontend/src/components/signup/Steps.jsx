
import { CircleCheck, Mail, RectangleEllipsis, User } from 'lucide-react';
import React from 'react'
const Steps = ({ changeTab }) => {
  const steps = [
    {
      tab: "1",
      icon: <User strokeWidth={1.75} className="w-5 h-5" />,
      title: "Your details",
      description: "Please provide your details information.",
    },
    {
      tab: "2",
      icon: <Mail strokeWidth={1.5} className="w-5 h-5" />,
      title: "Check your inbox",
      description: "Verify codes delivered to your inbox.",
    },

    {
      tab: "3",
      icon: <RectangleEllipsis strokeWidth={1.5} className="w-5 h-5" />,
      title: "Choose a password",
      description: "Choose a secure password.",
    },
    {
      tab: "4",
      icon: <CircleCheck strokeWidth={1.5} className="w-5 h-5" />,
      title: "Successfully",
      description: "Go back to log in into your account.",
    },
  ];
  return (
    <div className="flex w-full gap-y-6 flex-col bg-[#F9FAFB] px-3 py-8 ">
      <div>
        <img src="/Logo.png" alt="logo" width="64" height="64" />
      </div>
      <div>
        <ul className="flex flex-col gap-4">
          {steps.map((step, i) => {
            console.log(step.tab === changeTab);
            return (
              <li className="flex items-center gap-3 ">
                <span
                  className={`border rounded-full p-1 border-slate-400 relative ${
                    step.tab === changeTab ? "text-black" : "text-slate-400"
                  }  ${
                    steps.length - 1 !== i &&
                    "after:absolute after:w-0.5 after:h-7 after:bg-slate-400 after:left-1/2 after:-bottom-0 after:translate-y-full"
                  }`}
                >
                  {step.icon}
                </span>
                <div className="">
                  <h1
                    className={`text-md font-semibold  ${
                      step.tab === changeTab
                        ? "text-slate-700"
                        : "text-slate-400"
                    } `}
                  >
                    {step.title}
                  </h1>
                  <p
                    className={`text-sm  ${
                      step.tab === changeTab
                        ? "text-slate-700"
                        : "text-slate-400"
                    }`}
                  >
                    {" "}
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Steps