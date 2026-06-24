import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { InteractiveLab } from './components/InteractiveLab';
import { KnowledgeBase } from './components/KnowledgeBase';
import { challengesData } from './data';
import { knowledgeBaseData } from './knowledgeData';
import { ViewState } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [challenges, setChallenges] = useState(challengesData);
  const [activeChallengeId, setActiveChallengeId] = useState<string | null>(null);

  const handleSelectChallenge = (id: string) => {
    setActiveChallengeId(id);
    setCurrentView('challenge');
  };

  const handleCompleteChallenge = (id: string) => {
    setChallenges(prev => prev.map(c => c.id === id ? { ...c, completed: true } : c));
  };

  const activeChallenge = activeChallengeId 
    ? challenges.find(c => c.id === activeChallengeId) || challenges[0]
    : challenges[0];

  return (
    <div className="flex h-screen bg-zinc-950 overflow-hidden text-zinc-300">
      <Sidebar 
        currentView={currentView} 
        onNavigate={(view) => setCurrentView(view)} 
      />
      
      {currentView === 'dashboard' && (
        <Dashboard 
          challenges={challenges} 
          onSelectChallenge={handleSelectChallenge} 
        />
      )}
      
      {currentView === 'challenge' && activeChallenge && (
        <InteractiveLab 
          challenge={activeChallenge} 
          onComplete={handleCompleteChallenge} 
        />
      )}

      {currentView === 'knowledge-base' && (
        <KnowledgeBase articles={knowledgeBaseData} />
      )}
    </div>
  );
}
