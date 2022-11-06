import { Avatar, Card, Button } from 'antd';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { logoutRequestAction } from '../reducers/user';

const UserProfile = () => {
  const { me, isLoggingout } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">짹짹<br />{0}</div>,
        <div key="following">팔로잉<br />{0}</div>,
        <div key="follower">팔로워<br />{0}</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogout} loading= {isLoggingout}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
