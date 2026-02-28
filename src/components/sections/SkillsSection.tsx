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
    description: "Leadership and analytical thinking capabilities",
    skills: [
      { name: "Problem Solving", level: "Advanced", details: "Analytical thinking, creative solutions" },
      { name: "Teamwork", level: "Advanced", details: "Collaboration, project management" },
      { name: "Leadership", level: "Advanced", details: "Team management, strategic planning" },
      { name: "Communication", level: "Advanced", details: "Presentation, technical writing" }
    ]
  },
  {
    title: "Languages",
    icon: Languages,
    description: "Multilingual communication abilities",
    skills: [
      { name: "Turkish", level: "Native", details: "Native speaker" },
      { name: "English", level: "Fluent", details: "Academic and professional proficiency" }
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert": return "bg-green-500";
    case "Advanced": return "bg-blue-500";
    case "Intermediate": return "bg-yellow-500";
    case "Elementary": return "bg-orange-500";
    case "Native": return "bg-purple-500";
    case "Fluent": return "bg-indigo-500";
    default: return "bg-gray-500";
  }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
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
                        className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-sm">{skill.name}</h4>
                          <Badge
                            variant="secondary"
                            className={`text-xs text-white ${getLevelColor(skill.level)}`}
                          >
                            {skill.level}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{skill.details}</p>
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
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Currently Learning</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">Machine Learning</Badge>
                <Badge variant="outline">Deep Learning</Badge>
                <Badge variant="outline">Computer Vision</Badge>
                <Badge variant="outline">Quantitative Finance</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Currently Studying Books */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Currently Reading</h3>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                <div className="p-4 bg-background rounded-lg border flex-1 min-w-[280px] max-w-[350px]">
                  <h4 className="font-semibold text-sm mb-1">Systematic Trading</h4>
                  <p className="text-xs text-muted-foreground">Robert Carver</p>
                </div>
                <div className="p-4 bg-background rounded-lg border flex-1 min-w-[280px] max-w-[350px]">
                  <h4 className="font-semibold text-sm mb-1">An Introduction to Statistical Learning with Applications in R</h4>
                  <p className="text-xs text-muted-foreground">Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}