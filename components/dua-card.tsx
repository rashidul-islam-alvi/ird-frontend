import React from "react";
import ImageComponent from "./ui/custom-image-component";
import CardTitle from "./ui/card-title";
import CardSubtitle from "./ui/card-subtitle";
import TooltipComponent from "./ui/tooltip-component";

interface DuaProps {
  id: number;
  cat_id: number;
  subcat_id: number;
  dua_id: number;
  dua_name_bn: string;
  dua_name_en: string;
  top_bn: string;
  top_en: string;
  dua_arabic: string;
  dua_indopak: string;
  clean_arabic: string;
  transliteration_bn: string;
  transliteration_en: string;
  translation_bn: string;
  translation_en: string;
  bottom_bn: null;
  bottom_en: null;
  refference_bn: string;
  refference_en: string;
  audio: string;
}

const DuaCard: React.FC<{ dua: DuaProps }> = ({ dua }) => {
  return (
    <div
      id={dua.dua_id.toString()}
      className="py-[15px] px-[30px] bg-white rounded-[10px] transition-all duration-300"
    >
      <div className="flex gap-[10px] mb-[28px] items-center">
        <div>
          <ImageComponent
            src="allah.svg"
            alt="dua_card_header_icon"
            className="w-[35px] h-[35px]"
          />
        </div>
        <div>
          <CardTitle
            cardLabel={dua.dua_id + ". " + dua.dua_name_en}
            className="font-semibold"
          />
        </div>
      </div>

      <div className="flex flex-col gap-7">
        {dua.top_en && (
          <div>
            <p className="text-[16px] text-black leading-6">{dua.top_en}</p>{" "}
          </div>
        )}

        {dua.dua_arabic && (
          <div>
            <p className="text-[24px] text-end leading-[72px]">
              {dua.dua_arabic}
            </p>
          </div>
        )}

        <div className="flex flex-col gap-[10px]">
          {dua.transliteration_en && (
            <div>
              <p className="text-[16px] leading-[25px]">
                <span className="font-semibold">Transliteration: </span>
                <span className="italic">{dua.transliteration_en}</span>
              </p>
            </div>
          )}
          {dua.translation_en && (
            <div>
              <p className="text-[16px] leading-[25px]">
                <span className="font-semibold">Translation: </span>
                {dua.translation_en}
              </p>
            </div>
          )}
        </div>
        <div>
          <div>
            <CardSubtitle
              label="Reference:"
              className="text-primary-green font-semibold text-[16px]"
            />
          </div>
          <div>
            <CardSubtitle
              label={dua.refference_en}
              className="text-black font-medium text-[16px]"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="cursor-pointer">
            <ImageComponent
              src="/audio.png"
              alt="dua_footer_audio_icon"
              className="w-11 h-11"
            />

            {/* <audio controls>
              <source src={dua.audio} type="audio/mp3" />
            </audio> */}
          </div>

          <div className="flex gap-10">
            <div>
              <TooltipComponent label="Copy">
                <ImageComponent
                  src="/copy.svg"
                  alt="dua_footer_copy_icon"
                  className="w-4 h-4"
                />
              </TooltipComponent>
            </div>
            <div>
              <TooltipComponent label="Bookmark">
                <ImageComponent
                  src="/bookmark2.png"
                  alt="dua_footer_copy_icon"
                  className="w-3 h-4"
                />
              </TooltipComponent>
            </div>
            <div>
              <TooltipComponent label="Memorize">
                <ImageComponent
                  src="/bulb2.svg"
                  alt="dua_footer_bulb_icon"
                  className="w-4 h-4"
                />
              </TooltipComponent>
            </div>
            <div>
              <TooltipComponent label="Share">
                <ImageComponent
                  src="/share.svg"
                  alt="dua_footer_share_icon"
                  className="w-4 h-4"
                />
              </TooltipComponent>
            </div>
            <div>
              <TooltipComponent label="Report">
                <ImageComponent
                  src="/report.svg"
                  alt="dua_footer_report_icon"
                  className="w-4 h-4"
                />
              </TooltipComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuaCard;
