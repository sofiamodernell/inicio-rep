/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const targetLink = "https://sites.google.com/estudiantes.utec.edu.uy/portfolio--de-competencias/portfolio-de-competencias-sof%C3%ADa-modernell?authuser=1";

  return (
    <div className="h-screen w-screen relative flex flex-col items-center justify-center bg-terminal-bg text-terminal-green selection:bg-terminal-green selection:text-terminal-bg overflow-hidden font-mono antialiased">
      <div className="crt-overlay" />
      
      <div className="z-10 text-center flex flex-col items-center gap-16">
        <div className="text-xl tracking-[0.5em] opacity-80">
          LOGIN_SUCCESS // ACCESS_GRANTED
        </div>

        <div className="flex justify-center">
          <a
            href={targetLink}
            className="px-16 py-4 border-2 border-terminal-green text-3xl font-bold tracking-[0.4em] bg-transparent hover:bg-terminal-green hover:text-terminal-bg transition-colors"
            id="start-button"
          >
            [ COMENZAR ]
          </a>
        </div>

        <div className="text-sm tracking-[0.2em] flex flex-col items-center gap-2">
          <div>_WAITING_FOR_COMMAND</div>
          <div className="w-4 h-8 bg-terminal-green cursor-blink"></div>
        </div>
      </div>

      {/* Raw terminal metadata */}
      <div className="absolute top-4 left-6 text-[10px] space-y-1 opacity-50">
        <div>MODERNELL_SYSTEMS_INIT... [OK]</div>
        <div>VFS_MOUNTING... [OK]</div>
        <div>NET_ESTABLISHED: 127.0.0.1</div>
      </div>

      <div className="absolute bottom-4 right-6 text-[10px] opacity-50 text-right">
        <div>PORTFOLIO_OS V.1.0</div>
        <div>(C) 1996 TERMINAL_SOCIETY</div>
      </div>
    </div>
  );
}
