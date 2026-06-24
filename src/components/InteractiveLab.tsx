import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Challenge } from '../types';
import { Terminal as TerminalIcon, Play, AlertTriangle, CheckCircle, Database, Lock, Unlock, Code } from 'lucide-react';

interface InteractiveLabProps {
  challenge: Challenge;
  onComplete: (id: string) => void;
}

export function InteractiveLab({ challenge, onComplete }: InteractiveLabProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPayload, setInputPayload] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const logsEndRef = useRef<HTMLDivElement>(null);

  // Reset state when challenge changes
  useEffect(() => {
    setLogs([
      `[SYSTEM] Establishing connection to target module: ${challenge.title}...`, 
      '[SYSTEM] Connection established on port 443.', 
      '[INFO] Analyzing target attack surface...'
    ]);
    setInputUsername('');
    setInputPassword('');
    setInputPayload('');
    setIsSuccess(challenge.completed);
  }, [challenge.id, challenge.title, challenge.completed]);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const processAttack = (val: string, displayVal: string) => {
    setLogs(prev => [...prev, `\n> [ATTACK] Submitting payload: ${displayVal}`]);

    setTimeout(() => {
      let isWin = false;
      const lowerVal = val.toLowerCase();

      // Dynamic win conditions based on the challenge category and id
      if (challenge.id === 'sqli-01') {
        isWin = lowerVal.includes("' or") || lowerVal.includes("'||") || lowerVal.includes("';");
      } else if (challenge.id === 'ai-01') {
        isWin = lowerVal.includes("ignore") || lowerVal.includes("system prompt") || lowerVal.includes("bypass");
      } else if (challenge.id === 'sys-01') {
        isWin = lowerVal.length >= 20 && lowerVal.includes("aaaa");
      } else if (challenge.id === 'net-01') {
        isWin = lowerVal.includes("arp") || lowerVal.includes("spoof") || lowerVal.includes("mitm");
      } else if (challenge.id === 'web-02') { // SSRF
        isWin = lowerVal.includes("localhost") || lowerVal.includes("127.0.0.1") || lowerVal.includes("169.254");
      } else if (challenge.id === 'web-03' || challenge.id === 'cmd-01') { // RCE / CMD
        isWin = lowerVal.includes("whoami") || lowerVal.includes("ls") || lowerVal.includes("cat") || lowerVal.includes(";");
      } else if (challenge.id === 'web-05') { // LFI
        isWin = lowerVal.includes("../") && lowerVal.includes("etc/passwd");
      } else if (challenge.id === 'net-02') { // Exfiltration
        isWin = lowerVal.includes("dns") || lowerVal.includes("tunnel") || lowerVal.includes("nslookup");
      } else {
        // Generic fallback for simulation purposes
        isWin = lowerVal.length > 3 && (lowerVal.includes("exploit") || lowerVal.includes("hack") || lowerVal.includes("admin"));
      }

      if (isWin) {
        setLogs(prev => [...prev, '[!] CRITICAL: Target vulnerability triggered.', '[+] Security controls bypassed successfully.', '[+] Access GRANTED. Objective complete.']);
        setIsSuccess(true);
        onComplete(challenge.id);
      } else {
        setLogs(prev => [...prev, '[-] Payload ineffective or blocked by WAF/Filters.', '[-] Access DENIED.']);
      }
    }, 800);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    processAttack(inputUsername, `Login attempt - User: ${inputUsername}`);
  };

  const handleGenericSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    processAttack(inputPayload, inputPayload);
  };

  const isLoginScenario = challenge.id === 'sqli-01' || challenge.id === 'web-04';

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden hacker-grid">
      
      {/* Header */}
      <header className="bg-zinc-900/80 border-b border-zinc-800 p-4 backdrop-blur-md flex justify-between items-center z-10">
        <div>
          <h2 className="text-xl font-bold font-mono text-zinc-100 flex items-center gap-2">
            <span className="text-green-500 animate-pulse">●</span> TARGET: {challenge.title}
          </h2>
          <p className="text-xs text-zinc-500 font-mono mt-1">Difficulty: {challenge.difficulty} | Category: {challenge.category} | Status: VULNERABLE</p>
        </div>
        {isSuccess && (
          <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded border border-green-500/50 font-mono text-sm flex items-center gap-2">
            <CheckCircle size={16} /> COMPROMISED
          </div>
        )}
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Side: Briefing & Lessons */}
        <div className="w-1/3 bg-zinc-900/40 border-r border-zinc-800 p-6 overflow-y-auto flex flex-col gap-6">
          <div className="space-y-4">
            <h3 className="text-sm font-mono text-green-500 uppercase tracking-widest border-b border-zinc-800 pb-2">Mission Briefing</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">{challenge.description}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-mono text-blue-400 uppercase tracking-widest border-b border-zinc-800 pb-2 flex items-center gap-2">
              <Database size={16} /> Technical Theory
            </h3>
            <ul className="space-y-3">
              {challenge.lessons.map((lesson, idx) => (
                <li key={idx} className="text-sm text-zinc-400 bg-zinc-900/50 p-3 rounded border border-zinc-800 leading-relaxed">
                  {lesson}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-lg">
            <h4 className="flex items-center gap-2 text-yellow-500 font-bold text-sm font-mono mb-2">
              <AlertTriangle size={16} /> SIMULATION HINT
            </h4>
            <p className="text-xs text-yellow-500/80 font-mono">
              Analyze the theory to construct your payload. For generic challenges, try keywords like <code className="bg-zinc-950 px-1 py-0.5 rounded text-yellow-400">exploit</code>, or relevant technical terms like <code className="bg-zinc-950 px-1 py-0.5 rounded text-yellow-400">../etc/passwd</code> or <code className="bg-zinc-950 px-1 py-0.5 rounded text-yellow-400">169.254.169.254</code>.
            </p>
          </div>
        </div>

        {/* Right Side: Simulation & Terminal */}
        <div className="flex-1 flex flex-col relative">
          
          {/* Target App Simulation */}
          <div className="flex-1 p-8 flex items-center justify-center bg-zinc-950 relative overflow-hidden">
            {/* 3D decorative background elements */}
            <div className="absolute inset-0 perspective-[1000px] pointer-events-none opacity-20">
              <motion.div 
                animate={{ rotateX: [0, 5, 0], rotateY: [0, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-full h-full border-[1px] border-green-500 rounded-[100px] transform rotate-x-[60deg] scale-[2] translate-y-[-20%]"
              />
            </div>

            {isLoginScenario ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`relative z-10 w-full max-w-sm bg-white p-8 rounded-xl shadow-2xl ${isSuccess ? 'opacity-50 pointer-events-none grayscale' : ''}`}
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-zinc-900 font-sans">Target Portal</h2>
                  <p className="text-zinc-500 text-sm mt-2">Secure access only</p>
                </div>

                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Username / Payload</label>
                    <input 
                      type="text" 
                      value={inputUsername}
                      onChange={(e) => setInputUsername(e.target.value)}
                      className="w-full px-4 py-2 bg-zinc-100 border border-zinc-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-900 font-mono text-sm"
                      placeholder="admin"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Password</label>
                    <input 
                      type="password" 
                      value={inputPassword}
                      onChange={(e) => setInputPassword(e.target.value)}
                      className="w-full px-4 py-2 bg-zinc-100 border border-zinc-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-900"
                      placeholder="••••••••"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
                  >
                    <Lock size={16} /> Authenticate
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`relative z-10 w-full max-w-2xl bg-zinc-900 border border-zinc-800 p-8 rounded-xl shadow-2xl ${isSuccess ? 'opacity-50 pointer-events-none grayscale' : ''}`}
              >
                <div className="flex items-center gap-3 mb-6 border-b border-zinc-800 pb-4">
                  <div className="p-2 bg-green-500/10 rounded">
                    <Code className="text-green-500" size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-zinc-100 font-mono">Payload Injector</h2>
                    <p className="text-zinc-500 text-xs font-mono mt-1">Send crafted requests or commands directly to the target.</p>
                  </div>
                </div>

                <form onSubmit={handleGenericSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-green-500 uppercase mb-2 font-mono">Injection Vector</label>
                    <textarea 
                      value={inputPayload}
                      onChange={(e) => setInputPayload(e.target.value)}
                      className="w-full h-32 px-4 py-3 bg-zinc-950 border border-zinc-700 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-zinc-300 font-mono text-sm resize-none"
                      placeholder="Enter payload... (e.g. AAAAAAAAAAAAA, ../../../etc/passwd, ignore all previous instructions)"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/50 font-bold py-3 px-4 rounded transition-colors flex items-center justify-center gap-2 font-mono uppercase tracking-wider text-sm"
                  >
                    <Play size={16} /> Execute Payload
                  </button>
                </form>
              </motion.div>
            )}

            {isSuccess && (
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center z-20"
              >
                <div className="bg-green-500/20 backdrop-blur-md border-2 border-green-500 p-8 rounded-2xl text-center shadow-[0_0_50px_rgba(34,197,94,0.3)]">
                  <Unlock size={64} className="text-green-400 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold font-mono text-green-400 mb-2">TARGET COMPROMISED</h2>
                  <p className="text-zinc-300 font-mono">Objective successfully completed.</p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Hacker Terminal Logs */}
          <div className="h-64 bg-zinc-950 border-t border-zinc-800 p-4 font-mono text-xs flex flex-col">
            <div className="flex items-center gap-2 text-zinc-500 mb-2 border-b border-zinc-800 pb-2">
              <TerminalIcon size={14} /> <span>Terminal Log // Interactive Shell</span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-1 pr-2 custom-scrollbar">
              {logs.map((log, i) => (
                <div key={i} className={`${
                  log.includes('CRITICAL') || log.includes('COMPROMISED') || log.includes('GRANTED') ? 'text-green-400 font-bold' : 
                  log.includes('DENIED') || log.includes('blocked') ? 'text-red-400' : 
                  log.includes('ATTACK') ? 'text-yellow-400' :
                  'text-zinc-400'
                } whitespace-pre-wrap`}>
                  {log}
                </div>
              ))}
              <div ref={logsEndRef} />
            </div>
            <div className="mt-2 flex items-center gap-2 text-green-500">
              <span>root@cyberlab:~#</span> <span className="w-2 h-4 bg-green-500 animate-pulse"></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
