"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Calendar, Users, Code, Github, ExternalLink } from "lucide-react";

type Competition = {
  title: string;
  description: string;
  date: string;
  type: string;
  placement?: string;
  teamSize: number;
  technologies: string[];
  achievements: string[];
  github?: string;
  demo?: string;
};

const competitions: Competition[] = [
  {
    title: "Manus AI Hackathon",
    description: "A one-day hackathon at DotsHub in Istanbul, organized by Istanbul Ignited by Slush'D, with 100 accepted participants. With M. Ferit Avcı, I built Localify. Brands post the same content in every country, and translating the caption isn't enough when the photo shows a place, a food or a sign that means nothing in that market. Localify finds those posts in a brand's Instagram account and adapts them for each market.",
    date: "2026-10-12",
    type: "Hackathon",
    teamSize: 2,
    technologies: ["Manus API", "fal", "Apify", "Prompt Engineering"],
    achievements: [
      "Scans every image post and flags what's market-specific: places, objects, food, text and prices",
      "Sorts the library by what each post needs: visual changes, text changes, or nothing",
      "Plans the changes for each market with a Manus agent, with a reason for each one",
      "Pitched it in 3 minutes: 2 of slides and 1 of live demo",
      "Cleaned up the UI after the event, fixed what broke on real accounts, and open-sourced it",
    ],
    github: "https://github.com/devfleksa/localify",
    demo: "https://devfleksa.github.io/localify/",
  },
  {
    title: "BTK Academy Datathon 2025",
    description: "Participated in a 1-week data science competition focusing on predictive analytics and machine learning solutions.",
    date: "2025-08-25",
    type: "Datathon",
    placement: "Top 10%",
    teamSize: 1,
    technologies: ["R", "tidyr", "dplyr", "ggplot2", "lubridate", "XGBoost"],
    achievements: [
      "Developed a predictive model that achieved 85% accuracy relative to the winning solution",
      "Implemented feature engineering pipeline",
      "Created comprehensive plots for analysis",
    ],
  }
  // Add more competitions as you participate
];

export default function CompetitionsSection() {
  const getPlacementIcon = (placement?: string) => {
    if (!placement) return Users;
    if (placement.includes("1st") || placement.includes("Winner")) return Trophy;
    if (placement.includes("2nd") || placement.includes("3rd") || placement.includes("Top") || placement.includes("62nd out of 571")) return Medal;
    return Users;
  };


  return (
    <section id="competitions" className="py-16 md:py-24 border-t">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-sm md:text-heading-lg mb-4">Hackathons & Datathons</h2>
          <p className="text-body md:text-body-lg text-muted-foreground max-w-3xl mx-auto">
            Timed events I&apos;ve entered, alone and in teams.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {competitions.length > 0 ? (
            competitions.map((competition, index) => (
              <motion.div
                key={competition.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 border rounded-full">
                          {(() => {
                            const IconComponent = getPlacementIcon(competition.placement);
                            return <IconComponent className="w-6 h-6" />;
                          })()}
                        </div>
                        <div>
                          <CardTitle>{competition.title}</CardTitle>
                          <div className="flex items-center gap-4 mt-2">
                            <Badge variant="default">{competition.type}</Badge>
                            {competition.placement && (
                              <Badge variant="outline">
                                {competition.placement}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="sm:text-right text-body-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(competition.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <Users className="w-4 h-4" />
                          {competition.teamSize === 1 ? "Individual" : `Team of ${competition.teamSize}`}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed mt-4">
                      {competition.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="eyebrow mb-3">Key Achievements</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {competition.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="eyebrow mb-3">Tools & Methods</h4>
                      <div className="flex flex-wrap gap-2">
                        {competition.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      {competition.github ? (
                        <Button variant="outline" size="sm" className="gap-2" asChild>
                          <a href={competition.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="gap-2" disabled>
                          <Code className="w-4 h-4" />
                          Solution is not published
                        </Button>
                      )}
                      {competition.demo && (
                        <Button variant="outline" size="sm" className="gap-2" asChild>
                          <a href={competition.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            Live Replay
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
            >
              <Card className="text-center py-12">
                <CardContent>
                  <Trophy className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-subheading mb-2">Ready for Competition</h3>
                  <p className="text-muted-foreground">
                    Competition entries and achievements will be showcased here as I participate in datathons and data science competitions
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