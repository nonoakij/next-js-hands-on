export default function dashboardLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <main className="relative">
      <div className="p-8 h-dvh">
        <h1 className="text-4xl font-extrabold tracking-tight">
          The Joke Mail Service
        </h1>
        <section className="h-full pt-8">{props.children}</section>
      </div>
      {props.modal}
    </main>
  );
}
