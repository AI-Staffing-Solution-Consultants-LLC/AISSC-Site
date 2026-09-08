import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import dashboardImg from '@/assets/platform-dashboard.jpg';
import thinkingLayerImg from '@/assets/platform-thinking-layer.jpg';

const shots = [
  {
    src: dashboardImg,
    alt: 'NEXUS-SUAD orchestration console showing a live multi-agent pipeline, execution logs and a $0.00 baseline cost meter',
    title: 'SUAD-Nexus Action Layer Console',
    description:
      'Live pipeline graph, per-step execution logs, and Cloud Run services pinned at zero idle instances. Every run is metered so the baseline hosting footprint stays at $0.00.',
  },
  {
    src: thinkingLayerImg,
    alt: 'Independent Structured Thinking Layer inspector showing task decomposition, QA audit results and verified build milestones',
    title: 'Independent Structured Thinking Layer',
    description:
      'Task decomposition, automated QA audits, on-demand agent profile streaming, and a signed build timeline — the anti-hallucination spine of the AI-Hive-Mind.',
  },
];

const ProductEvidence = () => {
  return (
    <section id="platform" className="py-20 bg-secondary/40">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="gradient-text mb-4">Inside the Platform</h2>
          <p className="text-muted-foreground">
            AISSC-Automated-Online-Empire is a working software product, not a service retainer.
            These are the two surfaces our customers operate every day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {shots.map((shot) => (
            <Card key={shot.title} className="overflow-hidden">
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                width={1600}
                height={1008}
                className="w-full h-auto border-b border-border/60"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{shot.title}</h3>
                <p className="text-muted-foreground text-sm">{shot.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            { k: '$0.00', v: 'Baseline hosting cost when no task is running' },
            { k: 'Scale-to-zero', v: 'Ephemeral Cloud Run execution per task' },
            { k: '100% verified', v: 'Every milestone backed by execution logs and QA audits' },
          ].map((s) => (
            <div key={s.k} className="p-6 bg-background rounded-lg border border-border/60 text-center">
              <div className="text-2xl font-bold gradient-text mb-1">{s.k}</div>
              <p className="text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductEvidence;
