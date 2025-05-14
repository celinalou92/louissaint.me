import React, { ReactNode } from "react";

interface StyledCardProps {
  contentHeader: string;
  contentText: string[];
  cardMedia: string;
  buttons: ReactNode[];
  tags?: string[];
}

const StyledCard = ({
  contentHeader,
  contentText,
  cardMedia,
  buttons,
  tags = [],
}: StyledCardProps) => {
  return (
    <div className="w-full max-w-3xl border border-[#ff79725c] rounded-xl overflow-hidden shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-[#1C1C1D]">
      <img
        src={cardMedia}
        alt={contentHeader}
        className="w-full h-52 sm:h-64 md:h-72 object-cover object-center"
      />

      <div className="p-4 sm:p-6 border-t border-[#ff79725c]">
        <div className="pb-4 mb-4 border-b border-[#ff79725c]">
          <h3 className="text-center text-lg font-medium uppercase text-[#f5f2eb]">
            {contentHeader}
          </h3>

          {tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#ff797214] text-[#FF7972] text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="px-[3%] sm:px-[5%] mb-6">
          <p className="text-sm text-[#f5f2eb] leading-relaxed">{contentText[0]}</p>

          {contentText.length > 1 && (
            <p className="text-xs text-[#cccccc] mt-4">{contentText[1]}</p>
          )}
        </div>

        <div className="border-t border-[#ff79725c] pt-4 px-4 flex flex-col sm:flex-row gap-4 justify-center">
          {buttons.map((button, index) => (
            <div key={index} className="flex justify-center w-full sm:w-auto">
              {button}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyledCard;