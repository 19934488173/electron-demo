import React from 'react';

const Title = ({ tip }: { tip: string }) => {
  return <div className="text-[#ff7800] text-[18px]">{tip}</div>;
};
export default React.memo(Title);
