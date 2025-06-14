type MainButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const MainButton = ({ children, className = "" }: MainButtonProps) => {
  return (
    <a
      href=""
      className={`bg-sec py-3 px-4 text-sm cursor-pointer rounded-full flex items-center gap-2 w-fit text-white capitalize font-medium justify-center ${className}`}
    >
      {children}
    </a>
  );
};

export default MainButton;
