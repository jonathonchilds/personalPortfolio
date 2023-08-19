import { ReactElement } from "react";

export const SourceButton = ({ href }: {href: string }):ReactElement => {
  return (
    <button className="border sm:p-4 sm:px-6 py-2 px-4 text-sm sm:text-base rounded-full w-[150px] bg-cyan-500">
      <a href={href} target="_blank" rel="noopener noreferrer">
        Source Code
      </a>
    </button>
  );
};

export const ApiButton = ({ href }: {href: string }):ReactElement => {
    return (
      <button className="border sm:p-4 sm:px-6 py-2 px-4 text-sm sm:text-base rounded-full w-[150px] bg-cyan-500">
        <a href={href} target="_blank" rel="noopener noreferrer">
          API
        </a>
      </button>
    );
  };
  
