import React from 'react';
import { Link } from 'react-router-dom';
import { mutate } from 'swr';

import { useHomeVisible, VISIBLE } from '@src/data/use-home-data';

function Home() {
  const { data: homeVisible } = useHomeVisible();
  console.log(homeVisible);

  return (
    <div>
      <div>一个模板简历制作平台, 让你的简历更加出众</div>
      <Link to="resume/1">resume</Link>
      <div onClick={() => mutate(VISIBLE, true)}>测试一下值的变化</div>
    </div>
  );
}

export default Home;
