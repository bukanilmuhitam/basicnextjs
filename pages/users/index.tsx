import { useRouter } from 'next/router';
import Layout from '../../components/layout';

interface UsersProps{
  dataUsers : Array<any>;
}
export default function Users(props : UsersProps) {
  const { dataUsers } = props;
  const router = useRouter();

  return (
    <Layout pageTitle="Users">
      <h1>List User</h1>
      <ul>
        {dataUsers.map((user) => (
          <li key={user.id}>
            <p>
              {' '}
              {' '}
              {user.name}
              {' '}
              |
              {' '}
              {user.email}

            </p>
            <button type="button" onClick={() => router.push(`/users/${user.id}`)}>
              follow me
            </button>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const respon = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await respon.json();
  return {
    props: {
      dataUsers,
    },
  };
}
