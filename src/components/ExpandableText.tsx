import { Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 200;

  if (children && children.length <= limit) return <p>{children}</p>;

  const synopsis = expanded ? children : children.substring(0, limit) + "...";

  return (
    <div>
      <p>{synopsis}</p>
      <Button
        className="py-1 px-2 text-white text-[10px] block bg-[#283b52] rounded"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </div>
  );
};

export default ExpandableText;
