"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
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
              Currently developing an algorithmic trading system in my junior year and having completed my
              Macroeconomic Analysis paper as a sophomore, I combine theoretical knowledge with practical programming
              skills in Python and R to create meaningful insights from complex financial data.
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
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Education</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Istanbul University</p>
                <p className="font-medium">Economics (100% English)</p>
                <p className="text-sm text-muted-foreground">GPA: 3.64/4.0 • Currently</p>
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