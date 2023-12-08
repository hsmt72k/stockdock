import Navbar from "../(marketing)/_components/navbar";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div  className="h-full dark:bg-[#1F1F1F]">
      <Navbar />
      <div className="dark:bg-[#1F1F1F]">{children}</div>
    </div>
  );
};

export default PublicLayout;
