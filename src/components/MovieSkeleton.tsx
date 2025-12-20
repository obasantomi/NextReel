import { HStack, Skeleton } from "@chakra-ui/react";

const MovieSkeleton = () => {
  return (
    <HStack spacing={10} width={"full"} paddingTop={"15px"}>
      {[1, 2, ].map((index) => (
        <Skeleton
          key={index}
          startColor="#1f1f1f"
          endColor="#2a2e2f"
          height="245px"
          width="200px"
          rounded={"15px"}
        />
      ))}
    </HStack>
  );
};

export default MovieSkeleton;
