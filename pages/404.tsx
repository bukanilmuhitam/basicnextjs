import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

export default function Blog() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Halaman tidak ditemukan</h1>
    </div>
  );
}
