import { AppShell, Button } from 'ui';

type Data = {
  id: number;
  name: string;
};

export const getServerSideProps = async () => {
  console.log('process.env.MY_VAR:', process.env.MY_VAR);
  const data = await fetch(`${process.env.BASE_URL}/api/user`).then((res) => res.json());
  return {
    props: {
      data,
      dt: new Date().toString(),
    },
  };
};

export default function Web({ data, dt }: { data: Data; dt: string }) {
  return (
    <AppShell>
      <h1>Web For Container Apps</h1>
      <p>Server side rendered at {dt}</p>
      <p>Node env is {process.env.NODE_ENV}</p>
      {data && (
        <>
          <p>Id: {data.id}</p>
          <p>Name: {data.name}</p>
        </>
      )}
      <Button />
    </AppShell>
  );
}
