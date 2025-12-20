import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  heading: string;
  body: string;
}

const WhyNextReelCard = ({ children, heading, body }: Props) => {
  return (
    <article className="w-full relative p-6 pb-20 bg-linear-150 bg- rounded-2xl from-[#220051] via-[#280051] to-[#320b3d]">
      <div className="flex flex-col gap-3">
        <h2 className="text-[20px] font-semibold">{heading}</h2>
        <p className="text-[14px] text-[#ffffffB3]">{body}</p>
      </div>
      <div className="absolute bottom-6 right-6 ">{children}</div>
    </article>
  );
};

export default WhyNextReelCard;
