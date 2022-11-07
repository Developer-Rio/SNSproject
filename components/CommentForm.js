import { Button, Form, Input } from 'antd';
import React, { useCallback, useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { ADD_COMMENT_REQUEST ,addComment} from '../reducers/post';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const {addCommentDone ,addCommentLoading} = useSelector((state) => state.post);

  const [commentText, onChangeCommentText ,setCommentText] = useInput('');
  const dispatch = useDispatch()
  useEffect(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);

  const onSubmitComment = useCallback(() => {
    console.log(commentText);
    console.log(commentText, post.id, id);
    dispatch(
      addComment({content : commentText, postId : post.id, userId : id})
    )
  }, [commentText]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
        <Button loading={addCommentLoading} style={{zIndex : 1 ,position: 'absolute', right: 0, bottom: -40 }} type="primary" htmlType="submit">트윗</Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
