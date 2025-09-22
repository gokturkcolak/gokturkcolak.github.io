"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Download } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "gokturkcolakktd@gmail.com",
    href: "mailto:gokturkcolakktd@gmail.com"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Istanbul, Turkey",
    href: "#"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/gokturkcolak",
    href: "https://github.com/gokturkcolak"
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about economics and data science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{contact.label}</p>
                      <p className="text-sm text-muted-foreground">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Let's Collaborate</CardTitle>
                <CardDescription>
                  I'm interested in internships, research opportunities, and projects in:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-sm">Quantitative Finance & Trading</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-sm">Data Science & Machine Learning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-sm">Macroeconomic Research</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-sm">Financial Technology</span>
                  </li>
                </ul>
                
                <div className="pt-4 space-y-3">
                  <Button className="w-full gap-2" asChild>
                    <a href="mailto:gokturkcolakktd@gmail.com">
                      <Mail className="w-4 h-4" />
                      Send Email
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full gap-2" asChild>
                    <a href="/cv.pdf" download="Gokturk_Colak_CV.pdf">
                      <Download className="w-4 h-4" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t"
        >
          <p className="text-muted-foreground">
            © 2025 Göktürk Çolak
          </p>
        </motion.div>
      </div>
    </section>
  );
}