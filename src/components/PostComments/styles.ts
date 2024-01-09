import styled from "styled-components";

export const PostComments = styled.ul``;

export const PostComment1 = styled.li`
  color: #444;
  font-size: 12px;
  line-height: 20px;
  background-color: #ffff9f;
  padding: 8px 16px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const PostCommentContent = styled.p`
  font-style: italic;
`;

export const PostCommentsForm = styled.form`
  margin-top: 16px;
  text-align: right;
`;

export const PostCommentsFormTextsarea = styled.textarea`
  display: block;
  resize: none;
  width: 100%;
  margin-bottom: 8px;
  padding: 8px 16px;
`;

export const PostCommentsFormButton = styled.button`
  padding: 8px 16px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  background-color: #27ae60;
  color: #eee;
  cursor: pointer;
`;
