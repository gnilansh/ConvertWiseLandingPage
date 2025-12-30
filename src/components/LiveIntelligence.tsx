import { Activity, Eye, TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { AIProcessing } from './backgrounds/AIProcessing';
import { DataStream } from './backgrounds/DataStream';

export function LiveIntelligence() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* AI-themed background layers */}
      <AIProcessing />
      <DataStream />
      
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <Activity className="text-purple-400" size={16} />
              <span className="text-purple-300">Live Meeting Intelligence</span>
            </div>
            <h2 className="mb-6 text-4xl sm:text-5xl leading-tight">
              See what buyers never say out loud
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Your AI quietly watches the room so you don't have to. Every eyebrow raise, pause, spark of interest, or confidence dip gets analyzed in real time. You get the exact moments to lean in, pivot, or close.
            </p>

            {/* Feature list */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Eye className="text-purple-400" size={20} />
                </div>
                <div>
                  <h3 className="mb-1">Real-Time Emotion Detection</h3>
                  <p className="text-gray-400">Track micro-expressions and body language signals</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-orange-400" size={20} />
                </div>
                <div>
                  <h3 className="mb-1">Engagement Scoring</h3>
                  <p className="text-gray-400">Live confidence metrics for every participant</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="text-green-400" size={20} />
                </div>
                <div>
                  <h3 className="mb-1">Perfect Moment Alerts</h3>
                  <p className="text-gray-400">Get notified when it's time to close or pivot</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Advanced Dashboard */}
          <div className="relative">
            {/* Main dashboard */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
              {/* Dashboard header */}
              <div className="bg-gradient-to-r from-purple-600 to-orange-500 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Activity size={20} />
                    </div>
                    <div>
                      <div className="text-sm opacity-90">Live Analysis</div>
                      <div className="text-xs opacity-75">Enterprise Demo Call</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Recording</span>
                  </div>
                </div>
              </div>

              {/* Meeting participants */}
              <div className="p-4 border-b border-white/10">
                <div className="text-sm text-gray-300 mb-3">Participants (4)</div>
                <div className="grid grid-cols-4 gap-2">
                  <ParticipantCard name="Archit" emotion="😊" engagement={92} color="green" />
                  <ParticipantCard name="Shreedhar" emotion="🤔" engagement={78} color="blue" />
                  <ParticipantCard name="Lisa" emotion="👍" engagement={85} color="purple" />
                  <ParticipantCard name="Ishika" emotion="😐" engagement={65} color="orange" />
                </div>
              </div>

              {/* Live signals */}
              <div className="p-4 space-y-2">
                <div className="text-sm text-gray-300 mb-3">Live Signals</div>
                
                <div className="flex items-start gap-3 p-3 bg-green-500/20 border border-green-500/30 rounded-xl">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={16} />
                  <div className="flex-1">
                    <div className="text-sm text-green-300">Perfect Closing Moment</div>
                    <div className="text-xs text-green-400/70 mt-1">Sarah shows strong buying signals</div>
                  </div>
                  <div className="text-xs text-green-400">Now</div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-500/20 border border-blue-500/30 rounded-xl">
                  <TrendingUp className="text-blue-400 flex-shrink-0" size={16} />
                  <div className="flex-1">
                    <div className="text-sm text-blue-300">Engagement Spike</div>
                    <div className="text-xs text-blue-400/70 mt-1">High interest in ROI metrics</div>
                  </div>
                  <div className="text-xs text-blue-400">2m ago</div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-orange-500/20 border border-orange-500/30 rounded-xl">
                  <AlertCircle className="text-orange-400 flex-shrink-0" size={16} />
                  <div className="flex-1">
                    <div className="text-sm text-orange-300">Attention Dip</div>
                    <div className="text-xs text-orange-400/70 mt-1">Consider changing topic</div>
                  </div>
                  <div className="text-xs text-orange-400">5m ago</div>
                </div>
              </div>

              {/* Overall metrics */}
              <div className="p-4 bg-white/5 border-t border-white/10">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl text-purple-400 mb-1">87%</div>
                    <div className="text-xs text-gray-400">Avg Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-orange-400 mb-1">12</div>
                    <div className="text-xs text-gray-400">Key Moments</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-green-400 mb-1">23m</div>
                    <div className="text-xs text-gray-400">Duration</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating metric cards */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-600 to-purple-700 p-4 rounded-2xl shadow-2xl border border-purple-400/20">
              <div className="text-3xl mb-1">43</div>
              <div className="text-xs text-purple-200">Moments Detected</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl shadow-2xl border border-orange-400/20">
              <div className="text-3xl mb-1">92%</div>
              <div className="text-xs text-orange-200">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ParticipantCard({ 
  name, 
  emotion, 
  engagement, 
  color 
}: { 
  name: string; 
  emotion: string; 
  engagement: number; 
  color: string;
}) {
  const colorMap: Record<string, string> = {
    green: 'from-green-500 to-green-600',
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600'
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10">
      <div className="text-2xl mb-1">{emotion}</div>
      <div className="text-xs text-white mb-2">{name}</div>
      <div className={`text-xs bg-gradient-to-r ${colorMap[color]} bg-clip-text text-transparent`}>
        {engagement}%
      </div>
    </div>
  );
}