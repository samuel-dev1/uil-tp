
export const AppCard = ({ children }) => {
  return (
    <div
      className="bg-white lg:w-2/5 md:w-3/5 w-4/5 shadow-xl rounded-2xl flex items-center flex-col pt-4 pb-16"
      style={{
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)'
      }}
    >
      {children}
    </div>
  );
}

