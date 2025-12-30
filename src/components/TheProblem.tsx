import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';

export function TheProblem() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Grid pattern overlay */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px']
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <AlertTriangle className="text-orange-400" size={16} />
            <span className="text-white">The Problem</span>
          </div>
          <h2 className="mb-6 text-4xl sm:text-5xl max-w-3xl mx-auto">
            You're Playing Poker Blind
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every sales call, you're guessing. The best reps sense these moments. ConvertWise measures them.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <StatCard
            icon={<AlertTriangle size={32} />}
            stat="70%"
            label="Missed Signals"
            description="Teams miss hesitation spikes and enthusiasm shifts buried in calls."
            color="red"
            delay={0.2}
          />
          
          <StatCard
            icon={<Clock size={32} />}
            stat="3+"
            label="Hours Wasted"
            description="Reps manually dig through CRM notes before critical meetings."
            color="orange"
            delay={0.4}
          />
          
          <StatCard
            icon={<TrendingDown size={32} />}
            stat="47%"
            label="Stall Rate"
            description="Post-meeting emails address surface objections, concerns remain unresolved."
            color="purple"
            delay={0.6}
          />
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-block p-8 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-3xl">
            <p className="text-3xl sm:text-4xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              $200B in revenue vanishes annually
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ 
  icon, 
  stat, 
  label, 
  description, 
  color,
  delay
}: { 
  icon: React.ReactNode;
  stat: string;
  label: string;
  description: string;
  color: string;
  delay: number;
}) {
  const colorMap: Record<string, { bg: string; text: string; border: string; icon: string }> = {
    red: { bg: 'from-red-500 to-red-700', text: 'text-red-400', border: 'border-red-500/20', icon: 'text-red-400' },
    orange: { bg: 'from-orange-500 to-orange-700', text: 'text-orange-400', border: 'border-orange-500/20', icon: 'text-orange-400' },
    purple: { bg: 'from-purple-500 to-orange-600', text: 'text-purple-400', border: 'border-purple-500/20', icon: 'text-purple-400' }
  };

  const colors = colorMap[color];

  return (
    <motion.div 
      className={`bg-white/5 backdrop-blur-sm border ${colors.border} rounded-2xl p-6 hover:bg-white/10 transition-all`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className={`inline-flex p-3 bg-gradient-to-br ${colors.bg} bg-opacity-20 rounded-xl mb-4 ${colors.icon}`}
        whileHover={{ rotate: 10, scale: 1.1 }}
      >
        {icon}
      </motion.div>
      <div className={`text-5xl sm:text-6xl mb-2 bg-gradient-to-br ${colors.bg} bg-clip-text text-transparent`}>
        {stat}
      </div>
      <h3 className="mb-3">{label}</h3>
      <p className="text-gray-400 text-sm">
        {description}
      </p>
    </motion.div>
  );
}