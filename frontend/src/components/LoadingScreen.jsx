const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-[485px] bg-gray-50">
      <div className="relative w-16 h-16">
        <div className="absolute w-16 h-16 border-4 border-indigo-200 rounded-full"></div>
        <div className="absolute w-16 h-16 border-4 border-indigo-600 rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
