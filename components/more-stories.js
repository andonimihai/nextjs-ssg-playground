import { Flex, Text } from "@chakra-ui/react";
import PostPreview from "../components/post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <Text fontSize="3xl" textAlign="center" fontWeight="bold" mt={10} mb={6}>
        More Stories
      </Text>
      <Flex wrap="wrap" justifyContent="space-between" flexGrow={1}>
        {posts.map((node) => (
          <PostPreview
            key={node.slug}
            title={node.title?.rendered}
            coverImage={node.featured_media}
            date={node.date}
            slug={node.slug}
            excerpt={node.excerpt?.rendered}
            width="30%"
            mb={6}
          />
        ))}
      </Flex>
    </section>
  );
}
