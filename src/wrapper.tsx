export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center h-full">
      <div className="container mx-auto">{children}</div>
    </div>
  );
};
