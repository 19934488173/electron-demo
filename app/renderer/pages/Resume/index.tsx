import React, { memo } from 'react';

import { getAppPath } from '../../../utils/appPath';
import fileAction from '../../../utils/file';

const Resume = () => {
  getAppPath().then((rootPath: string) => {
    fileAction.read(`${rootPath}app/renderer/pages/Resume/index.tsx`).then((data) => {
      console.log(data);
    });
  });

  return <div>我是简历模块</div>;
};
export default memo(Resume);
