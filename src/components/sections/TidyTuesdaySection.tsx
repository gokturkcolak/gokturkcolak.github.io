"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Calendar, BarChart3 } from "lucide-react";

const tidyTuesdayEntries = [
  {
    title: "FIDE Chess Player Ratings Analysis | W38 - 2025",
    description: "Comprehensive analysis of FIDE chess ratings exploring player performance patterns, demographic trends, age-related performance curves, and predictive modeling across global chess federations.",
    date: "2025-09-20",
    dataset: "FIDE Chess Player Ratings",
    technologies: ["R", "ggplot2", "dplyr", "tidyverse", "caret", "Linear Regression"],
    insights: [
      "Built linear regression model predicting September ratings with strong performance alignment",
      "Analyzed age-related performance curves revealing peak chess performance patterns",
      "Identified gender and title-based rating distributions across player segments",
      "Examined federation-level competitive strength with player threshold analysis"
    ],
    github: "https://github.com/gokturkcolak/tidytuesday/blob/main/chess_ratings/chess_ratings.Rmd",
    visualization: "https://github.com/gokturkcolak/tidytuesday/blob/main/chess_ratings/2025_38.png"
  }
  // Add more entries as you complete them
];

export default function TidyTuesdaySection() {
  return (
    <section id="tidytuesday" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">TidyTuesday Challenge</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Weekly data visualization challenges by the global Data Science Learning Community (R4DS), showcasing my R programming and data analysis skills.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tidyTuesdayEntries.length > 0 ? (
            tidyTuesdayEntries.map((entry, index) => (
              <motion.div
                key={entry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(entry.date).toLocaleDateString()}
                    </div>
                    <CardTitle className="text-lg">{entry.title}</CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {entry.dataset}
                    </Badge>
                    <CardDescription className="mt-2">
                      {entry.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Insights</h4>
                      <ul className="space-y-1">
                        {entry.insights.map((insight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                            {insight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Tools & Methods</h4>
                      <div className="flex flex-wrap gap-1">
                        {entry.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="gap-2 flex-1" asChild>
                        <a href={entry.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3" />
                          Code
                        </a>
                      </Button>
                      {entry.visualization && entry.visualization !== "#" && (
                        <Button variant="outline" size="sm" className="gap-2 flex-1" asChild>
                          <a href={entry.visualization} target="_blank" rel="noopener noreferrer">
                            <BarChart3 className="w-3 h-3" />
                            Plots
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="col-span-full"
            >
              <Card className="text-center py-12">
                <CardContent>
                  <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
                  <p className="text-muted-foreground">
                    TidyTuesday entries will be showcased here as I complete weekly challenges
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}