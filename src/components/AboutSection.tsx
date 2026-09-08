import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Facebook, Zap, Database, ShieldCheck } from "lucide-react";

const physics = [
  {
    icon: Zap,
    title: 'NEXUS-SUAD Protocol',
    body: 'Ephemeral execution via Google Cloud Run that scales to zero the instant a task finishes, completely eliminating idle server overhead.',
  },
  {
    icon: Database,
    title: 'Zero-Cost Memory State',
    body: 'Context and schema hydration mounted via GCS FUSE and OpenViking RAG, streaming hundreds of specialized agent profiles on demand without container bloat.',
  },
  {
    icon: ShieldCheck,
    title: 'Evidence Over Claims',
    body: 'Vague functionality claims are strictly rejected; every build milestone is verified through real-time execution logs, automated QA audits, and working code.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="gradient-text mb-4">About Us</h2>
          <p className="text-muted-foreground">
            We build serverless, high-velocity AI systems designed to eliminate human-in-the-loop
            latency and idle compute costs. Our flagship startup proof-of-concept project,
            AISSC-Automated-Online-Empire, showcases our OpenClaw-tested AI-Hive-Mind system —
            featuring our Independent Structured Thinking Layer and our Action Layer, which houses
            the decentralized mechanics of our SUAD-Nexus GCP Cloud Run services. Together they
            deliver accurate long-term projects and complex task handling without hallucination
            errors, at a near-zero baseline cost.
          </p>
          <p className="text-muted-foreground mt-4">
            Powered by the NEXUS-SUAD-GCP-OpenClaw hybrid framework, we deploy decentralized
            multi-agent pipelines that convert high-level strategic directives into production-ready
            software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {physics.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="h-full bg-gradient-to-br from-brand-50/60 to-transparent">
              <CardContent className="p-6">
                <div className="p-2 w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-brand-600" />
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
          <p className="text-muted-foreground">
            To render always-on infrastructure obsolete and compress multi-day development cycles
            into hours. We equip AI startup founders with a zero-maintenance, scale-to-zero hybrid
            stack that delivers maximum operational velocity at a $0.00 baseline hosting footprint.
          </p>
        </div>

        {/* Founder */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card>
            <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-brand-500 to-teal-500 text-white flex items-center justify-center text-2xl font-bold shrink-0">
                JD
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Joshua DelaPena</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Founder &amp; Chief Executive Officer, AI Staffing Solution Consultants
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://www.linkedin.com/in/ai-automations-unstoppable/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    View LinkedIn Profile
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Facebook post / video */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Product Walkthrough</h3>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://www.facebook.com/profile.php?id=61570458237044"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4 mr-2" />
                Our Facebook Page
              </a>
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden border border-border/60 bg-white">
            <iframe
              title="AI Staffing Solution Consultants Facebook post"
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0txnrBABoimwfSK99LbWoXN7T5rXkNbXR7SEJMWuY6uGp1Mm6522tv1QtCfokUGu4l%26id%3D61570458237044&show_text=true&width=500"
              width="100%"
              height="634"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
