import { Skeleton } from "@chakra-ui/react";

const EmptyVideo = () => {
  return (
    <div className="w-full overflow-hidden rounded">
      <Skeleton
        startColor="#1f1f1f"
        endColor="#2a2e2f"
        width={"w-full"}
        height={"400px"}
      ></Skeleton>
    </div>
  );
};

export default EmptyVideo;
