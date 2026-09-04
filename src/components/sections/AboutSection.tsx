"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="pt-8 pb-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Economics undergraduate with a strong foundation in quantitative methods and data analysis for financial markets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              I&apos;m an economics student at Istanbul University with a deep interest in financial markets,
              macroeconomic analysis, and data science. My academic journey has equipped me
              with strong analytical skills and a solid foundation in economic theory.
            </p>

            <p className="text-lg leading-relaxed">
              Currently building BuildHub, a data/AI-focused startup collective of 14 members,
              where I contribute across data science and product development as we move from
              idea to a working demo.
              Having also completed my Macroeconomic Analysis paper as a sophomore, I combine
              theoretical knowledge with practical programming skills in Python and R to
              create meaningful insights from complex financial data.
            </p>

            <p className="text-lg leading-relaxed">
              With strong English proficiency, I bring analytical rigor to my work and
              am passionate about using technology to solve real-world economic problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-medium">Istanbul University</p>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Istanbul, TR</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Economics (100% English)</p>
                    <p className="text-xs text-muted-foreground">GPA: 3.70/4.0 • 4. Year</p>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-medium">University of Tübingen</p>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Tübingen, Germany</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Erasmus+ Exchange • Economics & Data Science</p>
                    <p className="text-xs text-muted-foreground mb-2">April 2026 – Sept. 2026</p>
                    <ul className="space-y-1.5 mt-2">
                      <li className="text-[11px] leading-normal text-muted-foreground flex gap-1.5">
                        <span className="text-primary mt-1">•</span>
                        <span>S310 – Applied Quantitative Methods: Monte Carlo, OLS, Binary Choice, Time Series (R)</span>
                      </li>
                      <li className="text-[11px] leading-normal text-muted-foreground flex gap-1.5">
                        <span className="text-primary mt-1">•</span>
                        <span>DS320 – Intro to Data Science: Data manipulation and analysis in R and Python</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Location</h3>
                </div>
                <p className="font-medium">Istanbul, Turkey</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Availability</h3>
                </div>
                <p className="font-medium">Open for internships and collaborations</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}