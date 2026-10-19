"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 border-t">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-sm md:text-heading-lg mb-4">About Me</h2>
          <p className="text-body md:text-body-lg text-muted-foreground max-w-3xl mx-auto">
            Economics student who&apos;d rather run the numbers than just read about them.
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
            <p className="text-body md:text-body-lg max-w-prose">
              I&apos;m in my fourth year of economics at Istanbul University. I spent April to
              September 2026 on an Erasmus exchange at the University of Tübingen. For a
              credit risk project there, I compared linear probability and logit models on
              45,000 loan applications and checked the estimators with Monte Carlo
              simulations. I also wrote a seminar paper on whether Bitcoin&apos;s fixed supply
              could do the job of inflation targeting.
            </p>

            <p className="text-body md:text-body-lg max-w-prose">
              I&apos;ve learned most of what I know about markets by building things. In 2025 I
              wrote an algorithmic trading system that uses the economic idea of hysteresis to
              filter out noise and avoid whipsaw trades, and I ran it around the clock on AWS.
              In my second year I wrote a paper on the U.S. economy from the Great Recession
              through COVID-19.
            </p>

            <p className="text-body md:text-body-lg max-w-prose">
              I also worked on the data science and product side of a project at BuildHub,
              a 14-person group building data and AI products.
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
                  <h3 className="eyebrow">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-medium">Istanbul University</p>
                      <span className="eyebrow">Istanbul, TR</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Economics (100% English)</p>
                    <p className="text-xs text-muted-foreground">GPA: 3.70/4.0 • 4. Year</p>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-medium">University of Tübingen</p>
                      <span className="eyebrow">Tübingen, Germany</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Erasmus+ Exchange • Economics & Data Science</p>
                    <p className="text-xs text-muted-foreground mb-2">April 2026 – Sept. 2026</p>
                    <ul className="space-y-1.5 mt-2">
                      <li className="text-body-sm text-muted-foreground flex gap-1.5">
                        <span className="text-primary mt-1">•</span>
                        <span>S310 – Applied Quantitative Methods: Monte Carlo, OLS, Binary Choice, Time Series (R)</span>
                      </li>
                      <li className="text-body-sm text-muted-foreground flex gap-1.5">
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
                  <h3 className="eyebrow">Location</h3>
                </div>
                <p className="font-medium">Istanbul, Turkey</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h3 className="eyebrow">Availability</h3>
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