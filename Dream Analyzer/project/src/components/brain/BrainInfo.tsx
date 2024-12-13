import React from 'react';

export function BrainInfo() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">The Brain & Dreams</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">
            How Dreams Form in Your Brain
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            During REM sleep, your brain becomes highly active, creating vivid dreams through complex
            neural patterns. The amygdala and hippocampus play crucial roles in emotional processing
            and memory consolidation during dreams.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">
            Brain Regions Involved in Dreaming
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Frontal Lobes: Decision making and self-awareness</li>
            <li>Amygdala: Processing emotions and emotional memories</li>
            <li>Hippocampus: Memory formation and consolidation</li>
            <li>Visual Cortex: Creating dream imagery</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">
            Dream Cycles and Brain Waves
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Dreams primarily occur during REM (Rapid Eye Movement) sleep, characterized by theta
            brain waves. During this phase, your brain activity patterns closely resemble those of
            wakefulness, explaining the vivid nature of dreams.
          </p>
        </section>
      </div>
    </div>
  );
}