interface FooterItemProps {
  title: string;
  sub1: string;
  sub2: string;
  sub3: string;
  sub4?: string;
}
export default function FooterItem(props: Partial<FooterItemProps>) {
  const { title, sub1, sub2, sub3, sub4 } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        <li className="mb-6">
          <a href="" className="text-lg color-palette-1 text-decoration-none">
            {sub1}
          </a>
        </li>
        <li className="mb-6">
          <a href="" className="text-lg color-palette-1 text-decoration-none">
            {sub2}
          </a>
        </li>
        <li className="mb-6">
          <a href="" className="text-lg color-palette-1 text-decoration-none">
            {sub3}
          </a>
        </li>
        <li className="mb-6">
          <a href="" className="text-lg color-palette-1 text-decoration-none">
            {sub4}
          </a>
        </li>
      </ul>
    </div>
  );
}
