import React, { useEffect } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import Head from 'next/head';

import NicknameEditForm from '../components/NicknameEditForm';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';

const Profile = () => {
  const { loginDone, me } = useSelector(state => state.user);

  useEffect(() => {
    if (!loginDone) {
      Router.replace('/');
    }
  }, [loginDone])


  return (
    <AppLayout>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <NicknameEditForm />
      <FollowList
        header="팔로잉 목록"
        data={me.followings}
      />
      <FollowList
        header="팔로워 목록"
        data={me.followers}
      />
    </AppLayout>
  );
};

export default Profile;
