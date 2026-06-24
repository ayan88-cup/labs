import React from 'react';
import { Terminal as TerminalIcon, LayoutDashboard, ShieldAlert, BookOpen, Settings, LogOut } from 'lucide-react';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export function Sidebar({ currentView, onNavigate }: SidebarProps) {
  return (
    <div className="w-64 bg-zinc-900/50 border-r border-green-500/20 h-screen flex flex-col backdrop-blur-xl">
      <div className="p-6 flex items-center gap-3 border-b border-green-500/20">
        <div className="p-2 bg-green-500/10 rounded-lg border border-green-500/30">
          <TerminalIcon className="w-6 h-6 text-green-400" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-zinc-100 tracking-tight">Cyber<span className="text-green-500">Lab</span></h1>
          <p className="text-[10px] uppercase tracking-widest text-green-500/70 font-mono">Sim Environment</p>
        </div>
      </div>

      <nav className="flex-1 py-6 px-4 space-y-2">
        <NavItem 
          icon={<LayoutDashboard size={18} />} 
          label="Dashboard" 
          active={currentView === 'dashboard'} 
          onClick={() => onNavigate('dashboard')} 
        />
        <NavItem 
          icon={<ShieldAlert size={18} />} 
          label="Active Target" 
          active={currentView === 'challenge'} 
          onClick={() => onNavigate('challenge')} 
        />
        <NavItem 
          icon={<BookOpen size={18} />} 
          label="Knowledge Base" 
          active={currentView === 'knowledge-base'} 
          onClick={() => onNavigate('knowledge-base')} 
        />
      </nav>

      <div className="p-4 border-t border-green-500/20">
        <NavItem 
          icon={<Settings size={18} />} 
          label="Settings" 
          active={false} 
          onClick={() => {}} 
        />
        <NavItem 
          icon={<LogOut size={18} />} 
          label="Disconnect" 
          active={false} 
          onClick={() => {}} 
        />
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-sm transition-all duration-200 ${
        active 
          ? 'bg-green-500/10 text-green-400 border border-green-500/30' 
          : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 border border-transparent'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
