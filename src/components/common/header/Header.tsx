export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between p-5 bg-slate-100 text-slate-500 ${className}`}
    >
      <p>Logo</p>
      <p>Menu</p>
    </header>
  );
};

export default Header;
