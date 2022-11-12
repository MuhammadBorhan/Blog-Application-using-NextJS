import data from "../data";

export default function handler(req, res) {
  const { postId } = req.query;
  const { Posts } = data;
  if (postId) {
    const post = Posts.find((value) => value.id === parseInt(postId));
    if (!post) return res.status(400).json({ error: "post Id Not Matched" });
    return res.status(200).json(post);
  }
  return res.status(404).json({ error: "post data not found" });
}
