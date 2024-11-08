import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Users,
  Calendar,
  Mail,
  Database,
  Briefcase,
  Bot,
  Wand2,
  Share2,
  Search,
  Globe,
  Settings,
  Shield,
  UserCog,
  Activity,
  ClipboardList,
  Clock,
  DollarSign,
  MessageSquare,
  Video,
  HardDrive,
  FileSpreadsheet,
  User,
  Sun,
  Moon,
  ChevronDown,
  ChevronRight,
  LucideIcon,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const MenuItem = ({ icon: Icon, label, to }: { icon: LucideIcon; label: string; to: string }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center space-x-3 px-4 py-3 rounded-lg transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 ${
        isActive
          ? 'bg-blue-600/10 text-blue-500'
          : 'text-gray-400 hover:text-white'
      }`
    }
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </NavLink>
);

const MenuSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-white transition-colors"
      >
        {title}
        {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>
      {isOpen && <div className="space-y-1">{children}</div>}
    </div>
  );
};

const Sidebar = () => {
  const { user, logout } = useAuth();
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  return (
    <aside className="w-64 h-screen bg-gray-900 border-r border-gray-800 flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Plugilo AI
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto px-2 py-4 space-y-6">
        <MenuSection title="Main">
          <MenuItem icon={Home} label="Home" to="/dashboard" />
          <MenuItem icon={Users} label="CRM" to="/dashboard/crm" />
          <MenuItem icon={Calendar} label="Calendar" to="/dashboard/calendar" />
        </MenuSection>

        <MenuSection title="Communication">
          <MenuItem icon={Mail} label="Email Box" to="/dashboard/email" />
          <MenuItem icon={Database} label="Database" to="/dashboard/database" />
          <MenuItem icon={Briefcase} label="Office Tools" to="/dashboard/office" />
        </MenuSection>

        <MenuSection title="AI & Tools">
          <MenuItem icon={Bot} label="AI Agents" to="/dashboard/ai-agents" />
          <MenuItem icon={Wand2} label="AI Tools" to="/dashboard/ai-tools" />
          <MenuItem icon={Share2} label="Social Media" to="/dashboard/social" />
          <MenuItem icon={Search} label="Database Search" to="/dashboard/db-search" />
          <MenuItem icon={Globe} label="Web Search" to="/dashboard/web-search" />
        </MenuSection>

        <MenuSection title="Administration">
          <MenuItem icon={Settings} label="Control Panel" to="/dashboard/control" />
          <MenuItem icon={Shield} label="Admin Control" to="/dashboard/admin" />
          <MenuItem icon={UserCog} label="User Rights" to="/dashboard/rights" />
          <MenuItem icon={Activity} label="Network Status" to="/dashboard/network" />
        </MenuSection>

        <MenuSection title="HR & Time">
          <MenuItem icon={ClipboardList} label="HR Main Tools" to="/dashboard/hr" />
          <MenuItem icon={Clock} label="Time Schedule" to="/dashboard/schedule" />
          <MenuItem icon={Clock} label="Time Clock" to="/dashboard/time-clock" />
          <MenuItem icon={DollarSign} label="Finances" to="/dashboard/finances" />
        </MenuSection>

        <MenuSection title="Google Workspace">
          <MenuItem icon={MessageSquare} label="Google Chat" to="/dashboard/gchat" />
          <MenuItem icon={Video} label="Google Meet" to="/dashboard/gmeet" />
          <MenuItem icon={HardDrive} label="Google Drive" to="/dashboard/gdrive" />
          <MenuItem icon={FileSpreadsheet} label="Google Sheet" to="/dashboard/gsheet" />
        </MenuSection>
      </div>

      <div className="border-t border-gray-800 p-4">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <User className="w-6 h-6 text-gray-300" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">{user?.name}</p>
            <button
              onClick={logout}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
