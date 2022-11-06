import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { useDispatch,useSelector } from 'react-redux';

import useInput from '../hooks/useInput';
import { loginRequestAction, LOG_IN_REQUEST } from '../reducers/user';

const LoginForm = () => {
  const [email, onChangeIdEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const dispatch = useDispatch();
  const {logInLoading} = useSelector((state)=>(state.user));

  const onSubmitForm = useCallback(() => {
    // console.log(email,password);
    dispatch({
      type: LOG_IN_REQUEST,
      data: { email, password },
    });
  }, [email, password]);

  return (
    <Form onFinish={onSubmitForm} style={{ padding: '10px' }}>
      <div>
        <label htmlFor="user-id">이메일</label>
        <br />
        <Input name="user-id" value={email} onChange={onChangeIdEmail} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" value={password} onChange={onChangePassword} type="password" required />
      </div>
      <div style={{ marginTop: '10px' }}>
        <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </div>
    </Form>
  );
};

export default LoginForm;
