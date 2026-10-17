"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, BarChart, Brain, Languages, Briefcase } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Technical",
    icon: Code,
    description: "Languages and tools for data analysis and development",
    skills: [
      { name: "Python", level: "Advanced", details: "NumPy, Pandas, Matplotlib, scikit-learn, catboost, XGBoost" },
      { name: "R Programming", level: "Advanced", details: "ggplot2, tidyr, dplyr, caret, catboost, XGBoost, shiny" },
      { name: "MS Excel", level: "Intermediate", details: "Complex formulas, pivot tables" },
      { name: "GitHub", level: "Advanced", details: "Version control, collaboration" }
    ]
  },
  {
    title: "Data & Analytics",
    icon: BarChart,
    description: "Statistical analysis and visualization capabilities",
    skills: [
      { name: "Data Analytics", level: "Advanced", details: "Statistical modeling, hypothesis testing" },
      { name: "Data Visualization", level: "Advanced", details: "Interactive dashboards, storytelling" },
      { name: "Machine Learning", level: "Intermediate", details: "Statistical learning, predictive modeling" },
      { name: "Research & Reporting", level: "Advanced", details: "Academic research, data reporting" }
    ]
  },
  {
    title: "Economics & Finance",
    icon: Briefcase,
    description: "Domain expertise in economic theory and financial markets",
    skills: [
      { name: "Macroeconomic Analysis", level: "Advanced", details: "Policy analysis, economic indicators" },
      { name: "Blockchain Research", level: "Advanced", details: "Cryptocurrency analysis, DeFi protocols" },
      { name: "Quantitative Analysis", level: "Intermediate", details: "Statistical methods, econometrics" },
      { name: "Risk Management", level: "Intermediate", details: "Portfolio theory, risk assessment" }
    ]
  },
  {
    title: "Soft Skills",
    icon: Brain,
    description: "Analytical thinking and collaboration capabilities",
    skills: [
      { name: "Problem Solving", level: "Advanced", details: "Analytical thinking, creative solutions" },
      { name: "Teamwork", level: "Advanced", details: "Collaboration, project management" },
      { name: "Communication", level: "Advanced", details: "Presentation, technical writing" }
    ]
  },
  {
    title: "Languages",
    icon: Languages,
    description: "Multilingual communication abilities",
    skills: [
      { name: "Turkish", level: "Native", details: "Native speaker" },
      { name: "English", level: "Fluent", details: "Academic and professional proficiency" },
      { name: "German", level: "Elementary", details: "Basic (A1), self-studying" }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 border-t">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-sm md:text-heading-lg mb-4">Skills & Expertise</h2>
          <p className="text-body md:text-body-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, domain knowledge, and professional capabilities
          </p>
        </motion.div>

        <div className="grid gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 border rounded-full">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="p-5 border rounded-2xl hover:border-foreground transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h4 className="font-sans text-body-sm font-medium">{skill.name}</h4>
                          <Badge variant="outline">
                            {skill.level}
                          </Badge>
                        </div>
                        <p className="text-body-sm text-muted-foreground">{skill.details}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="bg-elevated border-transparent">
            <CardContent className="p-8">
              <h3 className="text-subheading mb-4">Currently Learning</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">Machine Learning</Badge>
                <Badge variant="outline">Deep Learning</Badge>
                <Badge variant="outline">Computer Vision</Badge>
                <Badge variant="outline">Quantitative Finance</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}