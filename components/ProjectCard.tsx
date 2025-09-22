import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

interface Project {
  title: string;
  description: string;
  tags: string[];
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="transition-all duration-300 border-[1px] border-[color:var(--primary)]">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs border border-[color:var(--secondary)]">
              {tag}
            </span>
          ))}
        </div>
        <Button variant="outline" className="group border-[color:var(--primary)] text-[color:var(--primary)] hover:bg-[color:var(--primary)] hover:text-background">
          View Project
          <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
}