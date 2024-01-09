import { PostStyle, PostImage, PostText } from "./styles";

import PostComments from "../PostComments";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  imageUrl: string;
};

const Post = ({ children, imageUrl }: Props) => (
  <PostStyle>
    <PostImage src={imageUrl} />
    <PostText> {children} </PostText>
    <PostComments />
  </PostStyle>
);

export default Post;
