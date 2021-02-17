import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts: edges }) {
  const heroPost = edges[0];
  const morePosts = edges.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title?.rendered}
              coverImage={heroPost.featured_media}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt?.rendered}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPostsForHome();

  return {
    props: { allPosts },
  };
}
