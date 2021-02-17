export default function PostBody({ content }) {
  return (
    <div
      className="wp-blog-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
