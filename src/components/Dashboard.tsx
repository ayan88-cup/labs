import React from 'react';
import { motion } from 'motion/react';
import { Challenge } from '../types';
import { ShieldAlert, Globe, Server, Key, Lock, Unlock, ArrowRight } from 'lucide-react';

interface DashboardProps {
  challenges: Challenge[];
  onSelectChallenge: (id: string) => void;
}

export function Dashboard({ challenges, onSelectChallenge }: DashboardProps) {
  const completedCount = challenges.filter(c => c.completed).length;
  const totalCount = challenges.length;
  const progress = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="flex-1 overflow-y-auto p-8 hacker-grid">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Global Rank" value="#4,092" subtext="Top 12% of operators" icon={<Globe className="text-blue-400" />} />
          <StatCard title="Nodes Compromised" value={`${completedCount} / ${totalCount}`} subtext={`${progress}% completion rate`} icon={<Server className="text-green-400" />} />
          <StatCard title="Clearance Level" value="Level 1" subtext="Script Kiddie" icon={<ShieldAlert className="text-yellow-400" />} />
        </div>

        {/* Modules */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold font-mono tracking-tight text-zinc-100 border-l-4 border-green-500 pl-3">Target Modules</h2>
            <div className="text-sm font-mono text-zinc-500">Select a target to begin simulation</div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {challenges.map((challenge, idx) => (
              <ChallengeCard key={challenge.id} challenge={challenge} idx={idx} onClick={() => onSelectChallenge(challenge.id)} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function StatCard({ title, value, subtext, icon }: { title: string, value: string, subtext: string, icon: React.ReactNode }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-xl backdrop-blur-sm relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
        {React.cloneElement(icon as React.ReactElement, { size: 100 })}
      </div>
      <div className="relative z-10">
        <h3 className="text-sm font-mono text-zinc-500 mb-2">{title}</h3>
        <div className="text-3xl font-bold text-zinc-100 mb-1">{value}</div>
        <div className="text-xs text-zinc-400">{subtext}</div>
      </div>
    </motion.div>
  );
}

function ChallengeCard({ challenge, idx, onClick }: { challenge: Challenge, idx: number, onClick: () => void, key?: React.Key }) {
  const isWeb = challenge.category === 'Web';
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: idx * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={onClick}
      className="cursor-pointer group relative bg-zinc-900/50 border border-zinc-800 hover:border-green-500/50 p-6 rounded-xl backdrop-blur-sm transition-all duration-300"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-lg ${challenge.completed ? 'bg-green-500/20 text-green-400' : 'bg-zinc-800 text-zinc-400'} group-hover:bg-green-500/20 group-hover:text-green-400 transition-colors`}>
            {challenge.completed ? <Unlock size={24} /> : <Lock size={24} />}
          </div>
          <div>
            <h3 className="text-lg font-bold text-zinc-200 font-mono flex items-center gap-2">
              {challenge.title}
              {challenge.completed && <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded border border-green-500/30">PWNED</span>}
            </h3>
            <span className="text-xs font-mono px-2 py-1 bg-zinc-800 rounded-md text-zinc-400 border border-zinc-700">
              {challenge.difficulty}
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-zinc-400 mb-6 line-clamp-2">
        {challenge.description}
      </p>
      
      <div className="flex justify-between items-center border-t border-zinc-800 pt-4">
        <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
          {isWeb ? <Globe size={14} /> : <Server size={14} />} {challenge.category}
        </span>
        <div className="flex items-center text-xs font-mono text-green-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
          INITIALIZE ATTACK <ArrowRight size={14} className="ml-1" />
        </div>
      </div>
    </motion.div>
  );
}
