export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-[100px]">
      <div></div>
      {children}
    </div>
  );
}
