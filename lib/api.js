const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

async function fetchAPI({ path, params, body, method = "GET" }) {
  const headers = { "Content-Type": "application/json" };
  let url = new URL(`${API_URL}${path}`);

  const requestOptions = {
    method,
    headers,
  };

  if (body) {
    requestOptions.body = JSON.stringify(body);
  }

  if (params) {
    Object.keys(params).forEach((key) => {
      url.searchParams.append(key, params[key]);
    });
  }

  const res = await fetch(url.toString(), {
    requestOptions,
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json;
}

export async function getAllPostsWithSlug() {
  return fetchAPI({
    path: "/wp/v2/posts",
    params: {
      per_page: 50,
      orderby: "date",
      order: "desc",
    },
  });
}

export function getAllPostsForHome() {
  return fetchAPI({
    path: "/wp/v2/posts",
    params: {
      per_page: 25,
      orderby: "date",
      order: "desc",
    },
  });
}

export function getMedia(id) {
  return fetchAPI({
    path: `/wp/v2/media/${id}`,
  });
}

export async function getPostAndMorePosts(slug) {
  const [post] = await fetchAPI({
    path: `/wp/v2/posts`,
    params: {
      slug,
      per_page: 1,
    },
  });

  const morePosts = await fetchAPI({
    path: "/wp/v2/posts",
    params: { per_page: 4, orderby: "date", order: "desc" },
  });

  const posts = morePosts.filter((p) => p.slug !== post?.slug);
  if (posts.length > 3) posts.pop();

  return {
    post,
    posts,
  };
}
