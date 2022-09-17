import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Custom404 = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.back();
    }, 5000);
  });
  return <div>요청하신 페이지는 존재하지 않습니다.</div>;
};

export default Custom404;
