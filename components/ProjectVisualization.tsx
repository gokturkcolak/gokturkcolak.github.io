import { ResponsiveBar } from "@nivo/bar";

interface ProjectVisualizationProps {
  data: Array<{
    id: string;
    value: number;
    [key: string]: string | number;
  }>;
}

export default function ProjectVisualization({ data }: ProjectVisualizationProps) {
  return (
    <ResponsiveBar
      data={data}
      keys={["value"]}
      margin={{ top: 10, right: 10, bottom: 40, left: 50 }}
      padding={0.15}
      enableGridX={false}
      enableGridY={false}
      colors={(bar) => (bar.index % 2 === 0 ? "#4B5F8C" : "#D15837")}
      borderColor="#2A2A2A"
      axisBottom={{ tickSize: 0, tickPadding: 6, legendOffset: 32 }}
      axisLeft={{ tickSize: 0, tickPadding: 6 }}
      labelSkipWidth={24}
      labelSkipHeight={18}
      labelTextColor="#F8F5F0"
      motionConfig={{ mass: 2, tension: 60, damping: 18 }}
      animate={true}
      theme={{
        axis: { ticks: { text: { fontSize: 10, fill: "#2A2A2A" } } },
        tooltip: {
          container: { background: "#F8F5F0", color: "#2A2A2A", border: "1px solid #2A2A2A", borderRadius: 0 },
        },
      }}
    />
  );
}