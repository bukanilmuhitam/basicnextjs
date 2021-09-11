import Layout from '../../components/layout';

interface User {
  id: number,
  name: string,
  email: string,
  phone: string,
  website: string,
}

interface UserDetailProps{
  user: User;
}
export default function userDetail(props : UserDetailProps) {
  const { user } = props;
  return (
    <Layout pageTitle="User Detail">
      <h3>
        {' '}
        {user.name}
      </h3>
      <p>
        {' '}
        {user.email}
      </p>
      <p>
        {user.phone}
      </p>
      <p>
        {' '}
        {user.website}
      </p>
    </Layout>
  );
}
export async function getStaticPaths() {
  const respon = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await respon.json();
  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps{
 params : {
  id: string,
 }
}

export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const respon = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await respon.json();
  return {
    props: {
      user,
    },
  };
}
