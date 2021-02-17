import Date from "../components/date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { Box, Text, Flex, Button } from "@chakra-ui/react";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  ...rest
}) {
  return (
    <Box {...rest}>
      <Box>
        <CoverImage
          title={title}
          coverImage={coverImage}
          slug={slug}
          width="100%"
          objectFit="cover"
          minHeight="200px"
          borderRadius="md"
        />
      </Box>
      <Text fontWeight="bold" fontSize="lg" mt={2} mb={3}>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a dangerouslySetInnerHTML={{ __html: title }}></a>
        </Link>
      </Text>

      <Box dangerouslySetInnerHTML={{ __html: excerpt }} />
      <Flex alignItems="center" justifyContent="space-between" mt={2}>
        <Text fontWeight="medium">
          <Date dateString={date} />
        </Text>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <Button
            as="a"
            variant="outline"
            colorScheme="black"
            cursor="pointer"
            size="sm"
          >
            Read more
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
