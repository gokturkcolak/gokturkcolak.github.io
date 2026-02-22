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
    github: "https://github.com/gokturkcolak/tidytuesday/blob/main/2025/Week%2038/chess_ratings.Rmd",
    visualization: "https://github.com/gokturkcolak/tidytuesday/blob/main/2025/Week%2038/chess_ratings.png"
  },
  {
    title: "2026 Winter Olympics Schedule Analysis | W6 - 2026",
    description: "Exploratory visual analysis of the 2026 Milan Cortina Winter Olympics schedule, examining session types, daily rhythms across the Games, and venue activity distribution.",
    date: "2026-02-13",
    dataset: "2026 Winter Olympics",
    technologies: ["R", "ggplot2", "dplyr", "tidyverse", "lubridate", "patchwork", "ggbranding"],
    insights: [
      "Visualized the training-vs-competition session split with a donut chart highlighting scheduling priorities",
      "Revealed daily session volume patterns across the week with a gradient bar chart",
      "Ranked the top 10 busiest venues by total scheduled sessions using a lollipop chart",
      "Identified peak competition days and the disciplines with the highest number of events"
    ],
    github: "https://github.com/gokturkcolak/tidytuesday/blob/main/2026/Week_6/winter_olympics.Rmd",
    visualization: "https://github.com/gokturkcolak/tidytuesday/blob/main/2026/Week_6/winter_olympics.png"
  },
  {
    title: "New Zealand Agricultural Production | W7 - 2026",
    description: "Multi-panel visual analysis of New Zealand's agricultural statistics from Stats NZ, tracing long-term trends in cattle populations, wheat farming efficiency, and land use across major sectors.",
    date: "2026-02-16",
    dataset: "NZ Agricultural Production",
    technologies: ["R", "ggplot2", "dplyr", "tidyverse", "scales", "patchwork", "janitor"],
    insights: [
      "Charted the historical shift of dairy cattle overtaking beef cattle as NZ's dominant livestock sector",
      "Tracked wheat yield-per-hectare improvements from 1935–2024, showing steady agricultural efficiency gains",
      "Aggregated 2024 land use into five categories, revealing the dominance of pasture and grassland",
      "Combined cattle and wheat panels into a branded multi-plot layout using patchwork"
    ],
    github: "https://github.com/gokturkcolak/tidytuesday/blob/main/2026/Week_7/nz_agricultural_production.Rmd",
    visualization: "https://github.com/gokturkcolak/tidytuesday/blob/main/2026/Week_7/nz_agricultural_production.png"
  }
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