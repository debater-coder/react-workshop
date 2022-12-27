export interface SlideProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children: React.ReactNode;
  notes?: React.ReactNode | string;
}

export default function Slide(props: SlideProps) {
  return (
    <section {...props}>
      {props.children}
      <aside className="notes">{props.notes}</aside>
    </section>
  );
}
