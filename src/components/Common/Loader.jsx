// import { motion } from 'framer-motion';

// const Loader = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
//       <div className="flex flex-col items-center space-y-4">
//         <motion.div
//           className="flex space-x-2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           {[0, 1, 2].map((index) => (
//             <motion.div
//               key={index}
//               className="w-4 h-4 bg-accent-primary rounded-full"
//               animate={{
//                 y: [0, -20, 0],
//                 scale: [1, 1.2, 1],
//               }}
//               transition={{
//                 duration: 0.6,
//                 repeat: Infinity,
//                 delay: index * 0.2,
//               }}
//             />
//           ))}
//         </motion.div>
//         <motion.p
//           className="text-gray-700 dark:text-gray-300"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//         >
//           Loading...
//         </motion.p>
//       </div>
//     </div>
//   );
// };

// export default Loader;

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete, minDuration = 2000 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / minDuration) * 100, 100);
      setProgress(newProgress);

      if (elapsed >= minDuration) {
        clearInterval(interval);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 300);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [minDuration, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Logo */}
          <div className="relative">
            <motion.div
              className="text-6xl md:text-7xl font-bold text-primary"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {"</>"}
            </motion.div>
          </div>

          {/* Text */}
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Loading Portfolio...
          </motion.p>

          {/* Progress Bar */}
          <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Percentage */}
          <motion.span
            className="text-sm text-muted-foreground font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {Math.round(progress)}%
          </motion.span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
