"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, TrendingUp, BarChart3, Activity } from "lucide-react";

const projects = [
  {
    title: "Algorithmic Trading System",
    description: "A quantitative trading engine applying the economic theory of Hysteresis to reduce market noise and whipsaw trades. Features a production-ready ML pipeline deployed 24/7 on AWS EC2.",
    icon: TrendingUp,
    status: "Ongoing",
    technologies: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy", "AWS EC2", "Quantitative Finance"],
    features: [
      "Signal refinement using an XGBoost Classifier trained on RSI, MACD, and OBV indicators",
      "Live Binance API integration via CCXT for automated trade execution",
      "Hysteresis-based entry/exit logic to maintain momentum-driven positions and filter volatility",
      "Automated model deployment infrastructure",
      "Custom model serialization (model.json)",
      "Backtesting validation pipeline"
    ],
    github: "https://github.com/gokturkcolak/algorithmic-trading-system"
  },
  {
    title: "Macroeconomic Analysis of the U.S. Economy (2008-2023)",
    description: "Conducted comprehensive 15-year macroeconomic analysis using official data sources and 20+ academic reports. Analyzed key economic indicators and evaluated policy impacts across four major economic phases including Great Recession and COVID-19.",
    icon: BarChart3,
    status: "Completed",
    technologies: ["Economic Analysis", "Data Analysis", "Academic Research", "Excel"],
    features: [
      "Comprehensive 15-year macroeconomic analysis using official data sources and 20+ academic reports",
      "Analyzed key economic indicators including GDP, inflation, unemployment, public debt, and productivity trends",
      "Evaluated policy impacts across four major economic phases including Great Recession and COVID-19",
      "Produced structured academic report with detailed financial data tables and policy assessments"
    ]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in quantitative finance, data analysis, and economic research
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <Badge variant={project.status === "Ongoing" ? "default" : "secondary"} className="mt-2">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed mt-4">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Tools & Methods</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    {project.github && (
                      <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    )}

                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}