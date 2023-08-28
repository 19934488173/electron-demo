import useSWR from 'swr';

/** 测试数据情况 */
export const VISIBLE = 'VISIBLE';
export const useHomeVisible = () =>
  useSWR<boolean>(VISIBLE, {
    fallbackData: false,
  });
