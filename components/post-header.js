import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import { Box, Text } from "@chakra-ui/react";

export default function PostHeader({ title, coverImage, date }) {
  return (
    <Box>
      <Box>
        <CoverImage title={title} coverImage={coverImage} width="100%" />
      </Box>
      <PostTitle>{title}</PostTitle>

      <Box mb={8}>
        <Text color="blackAlpha.700" fontWeight="medium">
          Posted <Date dateString={date} />
        </Text>
      </Box>
    </Box>
  );
}
