"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Calendar, Users, Code } from "lucide-react";

const competitions = [
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
    github: "#"
  }
  // Add more competitions as you participate
];

export default function CompetitionsSection() {
  const getPlacementIcon = (placement: string) => {
    if (placement.includes("1st") || placement.includes("Winner")) return Trophy;
    if (placement.includes("2nd") || placement.includes("3rd") || placement.includes("Top") || placement.includes("62nd out of 571")) return Medal;
    return Users;
  };

  const getPlacementColor = (placement: string) => {
    if (placement.includes("1st") || placement.includes("Winner")) return "text-yellow-600";
    if (placement.includes("2nd")) return "text-gray-500";
    if (placement.includes("3rd")) return "text-amber-600";
    if (placement.includes("Top") || placement.includes("62nd out of 571")) return "text-blue-600";
    return "text-primary";
  };

  return (
    <section id="competitions" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Competitions & Datathons</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing my competitive data science experience and achievements in various datathons and competitions
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
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {(() => {
                            const IconComponent = getPlacementIcon(competition.placement);
                            return <IconComponent className={`w-6 h-6 ${getPlacementColor(competition.placement)}`} />;
                          })()}
                        </div>
                        <div>
                          <CardTitle className="text-xl">{competition.title}</CardTitle>
                          <div className="flex items-center gap-4 mt-2">
                            <Badge variant="default">{competition.type}</Badge>
                            <Badge variant="outline" className={getPlacementColor(competition.placement)}>
                              {competition.placement}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(competition.date).toLocaleDateString()}
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
                      <h4 className="font-semibold mb-3">Key Achievements</h4>
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
                      <h4 className="font-semibold mb-3">Tools & Methods</h4>
                      <div className="flex flex-wrap gap-2">
                        {competition.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      {competition.github && (
                        <Button variant="outline" size="sm" className="gap-2">
                          <Code className="w-4 h-4" />
                          Solution is not published yet
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
                  <h3 className="text-lg font-semibold mb-2">Ready for Competition</h3>
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