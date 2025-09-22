// src/app/about/page.tsx
export default function AboutPage() {
    return (
      <div className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <p className="mb-4">
          Economics student specializing in quantitative methods and data analysis...
        </p>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Technical Skills</h2>
            <ul className="list-disc pl-5">
              <li>Python (Pandas, NumPy, Matplotlib)</li>
              <li>R (tidyverse, ggplot2, quantmod)</li>
              <li>Advanced Excel</li>
              <li>Github</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Economics Focus</h2>
            <ul className="list-disc pl-5">
              <li>Macroeconomics</li>
              <li>Game Theory Applications</li>
              <li>Financial Markets</li>
              <li>Decentralized Finance (DeFi)</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }