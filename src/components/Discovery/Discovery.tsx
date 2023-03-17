import { Outlet } from 'react-router-dom';

export default function Discovery() {
  return (
    <div className="flex flex-col min-h-screen px-4 py-6">
      <div className="flex items-center gap-2 mx-auto mb-6">
        <div className="h-2 w-10 rounded-full bg-blue-800" />
        <div className="h-2 w-4 rounded-full bg-gray-400" />
        <div className="h-2 w-4 rounded-full bg-gray-400" />
      </div>
      <Outlet />
    </div>
  );
}
