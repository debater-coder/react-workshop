export default function Slide({
  children,
  notes,
}: {
  children: React.ReactNode;
  notes?: React.ReactNode | string;
}) {
  return (
    <section>
      {children}
      <aside>{notes}</aside>
    </section>
  );
}
