import { FormEvent, useState } from "react";

import {
  PostComment1,
  PostCommentContent,
  PostCommentsForm,
  PostCommentsFormTextsarea,
  PostCommentsFormButton,
  PostComments
} from "./styles";

import Comment from "../../models/Comment";

const Post = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [tempComment, setTempComment] = useState("");

  function handleAddComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newComment = new Comment(comments.length, tempComment);
    setTempComment("");
    setComments([...comments, newComment]);
  }

  return (
    <div>
      <PostComments data-testid="post-comments">
        {comments.map(({ comment, id }) => (
          <PostComment1 key={id}>
            <PostCommentContent>{comment}</PostCommentContent>
          </PostComment1>
        ))}
      </PostComments>
      <PostCommentsForm data-testid="form-comments" onSubmit={handleAddComment}>
        <PostCommentsFormTextsarea
          data-testid="textarea-comments"
          value={tempComment}
          onChange={(e) => setTempComment(e.target.value)}
          required
        />
        <PostCommentsFormButton type="submit">Comentar</PostCommentsFormButton>
      </PostCommentsForm>
    </div>
  );
};

export default Post;
