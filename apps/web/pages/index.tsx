import { AppShell, Button } from 'ui';

export const getServerSideProps = () => {
  console.log('process.env.NEXT_PUBLIC_TEST:', process.env.NEXT_PUBLIC_TEST);
  return {
    props: {
      dt: new Date().toString(),
    },
  };
};

export default function Web({ dt }: { dt: string }) {
  return (
    <AppShell>
      <h1>Web</h1>
      <p>Server side rendered at {dt}</p>
      <p>Node env is {process.env.NODE_ENV}</p>
      <Button />
    </AppShell>
  );
}
