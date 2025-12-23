import { Skeleton } from "@chakra-ui/react";

const SmallEmptyVideo = () => {
  return (
    <div className="w-71.25 overflow-hidden rounded">
      <Skeleton
        startColor="#1f1f1f"
        endColor="#2a2e2f"
        width={"w-full"}
        height={"160px"}
      ></Skeleton>
    </div>
  );
};

export default SmallEmptyVideo;
