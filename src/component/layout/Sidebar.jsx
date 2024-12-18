import React from 'react';
import LogoPilah from '../../assets/LogoPilah.svg';
import { LayoutDashboard, Truck, TrendingUp, Wallet, Users, BookOpen, Settings, LogOut } from 'lucide-react';

const Sidebar = ({ activeItem, setActiveItem, onLogout }) => {
  const sidebarItems = [
    { icon: LayoutDashboard, text: 'Dashboard' },
    { icon: Truck, text: 'Yuk Angkut' },
    { icon: TrendingUp, text: 'Yuk Buang' },
    { icon: Wallet, text: 'Kuy Point' },
    { icon: Users, text: 'Users' },
    { icon: BookOpen, text: 'Blog' },
    { icon: Settings, text: 'Settings' }
  ];

  return (
    <div className="lg:sticky lg:top-0 lg:h-screen">
      <aside className="fixed bottom-[24px] left-4 right-4 lg:static lg:h-full bg-customTeal lg:bg-white shadow-inner before:absolute before:inset-x-0 before:-top-6 before:h-6 before:from-gray-200 before:to-transparent before:lg:hidden before:rounded-t-3xl rounded-3xl lg:rounded-none lg:shadow-md transition-all duration-300 ease-in-out w-auto lg:w-64 z-50">
        <nav className="flex flex-row lg:flex-col justify-between lg:justify-start px-2 py-4 lg:p-4 lg:space-y-4">
          <div className="hidden lg:flex items-center justify-center mb-6">
            <img src={LogoPilah} alt="Yuk Angkut Logo" className="w-16 h-16" />
          </div>

          <div className="flex flex-row lg:flex-col w-full justify-center lg:justify-start gap-1 md:gap-2 lg:gap-3">
            {sidebarItems.map(({ icon: Icon, text }) => (
              <button
                key={text}
                onClick={() => setActiveItem(text)}
                className={`flex items-center justify-center lg:justify-start lg:gap-3 p-2 lg:px-4 lg:py-2 text-sm rounded-3xl lg:rounded-xl transition-colors duration-200 min-w-[3rem] md:min-w-[3.5rem] lg:min-w-0 lg:w-full
                  ${activeItem === text 
                    ? 'bg-white text-gray-700 lg:bg-customTeal lg:text-white' 
                    : 'text-white lg:text-gray-700 hover:bg-white/10 lg:hover:bg-gray-100'
                  }`}
              >
                <Icon className={`w-6 h-6 lg:w-5 lg:h-5 ${activeItem === text ? 'text-gray-700 lg:text-white' : 'text-white lg:text-gray-700'}`} />
                <span className="hidden lg:inline">{text}</span>
              </button>
            ))}
            
            {/* Logout Button - Only visible on desktop */}
            <button
              onClick={onLogout}
              className="hidden lg:flex items-center justify-start gap-3 p-2 px-4 py-2 text-sm rounded-xl transition-colors duration-200 w-full text-red-600 hover:bg-red-50"
            >
              <LogOut className="w-5 h-5 text-red-600" />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;