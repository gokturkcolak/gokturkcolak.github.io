"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Kaggle } from "@/components/icons/Kaggle";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[85vh] flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-[52px] md:text-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Göktürk Çolak
          </motion.h1>

          <motion.p
            className="eyebrow text-label md:text-body-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Economics Student & aspiring Data Scientist
          </motion.p>

          <motion.p
            className="text-body md:text-body-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Economics student at Istanbul University. I use R and Python to model
            credit risk, time series and trading strategies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button variant="accent" size="lg" asChild>
              <a href="/cv.pdf" download="Gokturk_Colak_CV.pdf">
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>

            <div className="flex gap-3">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/gokturkcolak" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.kaggle.com/gokturkcolak" target="_blank" rel="noopener noreferrer">
                  <Kaggle className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:gokturkcolakdev@gmail.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/gokturkcolak" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-coral/80 to-sky-blue/80 blur-[75px] opacity-35 dark:opacity-25" />
        <div className="absolute -bottom-32 -left-24 w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-sky-blue/80 to-mint/80 blur-[75px] opacity-35 dark:opacity-25" />
      </div>
    </section>
  );
}