"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, GraduationCap, Calendar } from "lucide-react";

const workExperiences = [
  {
    title: "Intern Student",
    company: "Istanbul University Informatics Department",
    location: "Beyazıt, Istanbul",
    period: "November 2023 – June 2024",
    type: "Internship",
    icon: Briefcase,
    description: "Collected and organized data and conducted basic research for the Informatics Department.",
    achievements: [
      "Collected and organized various data sets",
      "Used Microsoft Excel and Google Sheets for data management",
      "Supported department operations with data collection tasks",
      "Gained experience in systematic data organization"
    ]
  }
];

const studentActivities = [
  {
    title: "Vice President",
    company: "Istanbul University Data Club",
    location: "Beyazıt, Istanbul",
    period: "November 2023 – June 2024",
    type: "Student Club",
    icon: Users,
    description: "Organized institutional visits and managed corporate communications, including a visit to IBB Data Laboratory.",
    achievements: [
      "Organized institutional visit to IBB Data Laboratory",
      "Managed corporate communications and partnerships",
      "Volunteered at 22nd Academic Informatics Conference",
      "Focused on technology and innovation trends"
    ]
  },
  {
    title: "President of Scientific and Artistic Projects",
    company: "t-MBA Council",
    location: "İskenderun, Hatay",
    period: "September 2019 – June 2020",
    type: "Student Council",
    icon: GraduationCap,
    description: "Led strategic partnerships and coordinated institutional relationships. Participated in t-MBA Leadership Academy Training Camp featuring comprehensive leadership development programs.",
    achievements: [
      "Completed t-MBA Leadership Academy Training Camp with industry experts",
      "Participated in leadership sessions by Prof. Dr. Özgür Demirtaş on big data and data science trends",
      "Engaged in comprehensive leadership development and networking programs",
      "Managed entrepreneurial project development and innovation initiatives"
    ]
  }
];

const certifications = [
  {
    name: "Financial Literacy Level 3 – SPL",
    issuer: "SPL",
    year: "2024",
    category: "Finance"
  },
  {
    name: "Next Generation Banking Simulation",
    issuer: "İşbank",
    year: "2024",
    category: "Banking"
  },
  {
    name: "Digital Banking",
    issuer: "İşbank Preschool",
    year: "2024",
    category: "Banking"
  },
  {
    name: "Entrepreneurship Training",
    issuer: "İSTKA Social Development Support Program",
    year: "2024",
    category: "Business"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Leadership</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional experience and leadership roles that shaped my analytical and organizational skills
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {/* Work Experience */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
              {workExperiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <exp.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <CardTitle className="text-lg">{exp.title}</CardTitle>
                            <Badge variant="outline">{exp.type}</Badge>
                          </div>
                          <CardDescription className="text-base font-medium text-foreground">
                            {exp.company}
                          </CardDescription>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">Key Achievements</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Student Activities */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Leadership & Student Activities</h3>
              {studentActivities.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <exp.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <CardTitle className="text-lg">{exp.title}</CardTitle>
                            <Badge variant="outline">{exp.type}</Badge>
                          </div>
                          <CardDescription className="text-base font-medium text-foreground">
                            {exp.company}
                          </CardDescription>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">Key Achievements</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Training & Certifications</CardTitle>
                  <CardDescription>
                    Continuous learning in finance and technology
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4 pb-3">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-sm">{cert.name}</h4>
                        <Badge variant="outline" className="text-xs">{cert.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground">{cert.year}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}