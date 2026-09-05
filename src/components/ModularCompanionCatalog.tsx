import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Server, CheckCircle, Zap, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ModularCompanionCatalog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const modules = [
    {
      id: 'thought-layer',
      icon: <Brain className="h-7 w-7" />,
      badge: 'MODULE 1',
      title: 'The Independent Structured Thought Layer',
      subtitle: 'The Cognitive "Hive Mind" for Long-Horizon Task Decomposition',
      description: 'Retrofits the enterprise NEXUS Systems Framework into an enclosed, structured cognitive engine that eliminates conversational drift through machine-readable, schema-driven state tracking.',
      specs: [
        'Decoupled MCP Workspace Routing',
        'Declarative State Tracking with YAML frontmatter',
        'Scenario-Specific Phases & automated validation gauntlets',
        'Flat directory of version-controlled Markdown files'
      ],
      impacts: [
        { icon: <CheckCircle className="h-5 w-5" />, text: '0% Conversational Drift' },
        { icon: <Zap className="h-5 w-5" />, text: 'Universal Framework Compatibility' },
        { icon: <Shield className="h-5 w-5" />, text: 'Impenetrable Audit Trails' }
      ]
    },
    {
      id: 'action-layer',
      icon: <Server className="h-7 w-7" />,
      badge: 'MODULE 2',
      title: 'The SUAD-Nexus-Action-Layer',
      subtitle: 'The Serverless, Scale-to-Zero GCP Execution Mesh',
      description: 'Transitions your execution infrastructure to serverless Google Cloud Run containers governed by strict Spin-Up-And-Die (SUAD) physics — baseline hosting fees drop to $0.00.',
      specs: [
        'Ephemeral micro-runtimes (<2s cold start, 2-min lifespan)',
        'GCS FUSE + OpenViking RAG amnesia mitigation',
        'Google Cloud Tasks 1-to-1 Command Bus',
        'Google Cloud Pub/Sub 1-to-Many Event Bus'
      ],
      impacts: [
        { icon: <Clock className="h-5 w-5" />, text: 'Up to 95.8% Infrastructure Cost Reduction' },
        { icon: <Zap className="h-5 w-5" />, text: 'Enterprise Concurrency with Auto-Scale' },
        { icon: <Shield className="h-5 w-5" />, text: 'Zero-Downtime Persona Hot-Swapping' }
      ]
    }
  ];

  const comparisonRows = [
    { vector: 'Baseline Idle Cost', legacy: 'High & Flat-Rate', aisscc: '$0.00 / Month' },
    { vector: 'Cognitive Alignment', legacy: 'None — agents wander off-task', aisscc: 'Enforced by NEXUS structured gates' },
    { vector: 'Cold-Start Deployment', legacy: 'Minutes to launch new VMs', aisscc: '<2 Seconds via Cloud Run' },
    { vector: 'Memory Architecture', legacy: 'Fragile local files / always-on DB', aisscc: 'Ephemeral GCS FUSE + OpenViking RAG' },
    { vector: 'API Gateways & Retries', legacy: 'Sleep-blocking loops', aisscc: 'Google Cloud Tasks with backoff & DLQs' },
    { vector: 'Enterprise Safety', legacy: 'Manual keys / high root-privilege risk', aisscc: 'OIDC Workload Identity Federation' }
  ];

  return (
    <section id="modular-companions" className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-brand-50/30 to-background">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-brand-500/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full filter blur-3xl" />
      
      <div className="container relative z-10">
        {/* Catchy Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The AI Startup That Engineered a Solution That Solved{" "}
            <span className="gradient-text">The Biggest Issues In AI Development To Date</span>
          </h2>
        </motion.div>

        {/* Catalog Intro */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            AISSC-Automated-Online-Empire: Modular Companion Product Catalog
          </h3>
          <p className="text-xl text-muted-foreground mb-4">
            Stop Bleeding Cash on Idle VPS Servers and Watching Your AI Agents Drift.
          </p>
          <p className="text-lg text-muted-foreground">
            Enterprise-Grade, GCP-Native Modular Companions for OpenClaw and Custom AI Frameworks.
          </p>
        </motion.div>

        {/* Problem Statement */}
        <motion.div 
          className="max-w-3xl mx-auto mb-16 p-6 bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-xl"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-muted-foreground leading-relaxed">
            Monolithic, always-on virtual private servers (VPS) are the hidden margin-killers of the autonomous agent revolution. Running multi-agent architectures on persistent servers results in <span className="font-semibold text-foreground">90%+ idle compute waste</span> and inevitable conversational drift during long-running tasks.
          </p>
        </motion.div>

        {/* Solution Statement */}
        <motion.div 
          className="max-w-3xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-muted-foreground">
            AISSC-Automated-Online-Empire solves this by releasing its core operational architecture as two independent, highly specialized companion modules. Engineered to plug directly into your existing OpenClaw or custom agent deployments, these tools instantly enforce <span className="font-semibold text-foreground">Spin-Up-And-Die (SUAD)</span> execution physics and structured, drift-free reasoning.
          </p>
        </motion.div>

        {/* Module Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {modules.map((module) => (
            <motion.div key={module.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden border-border/60 hover:border-brand-300/80 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-brand-500/20 to-teal-500/20 text-brand-600">
                      {module.icon}
                    </div>
                    <span className="px-3 py-1 text-xs font-bold tracking-wider rounded-full bg-brand-100 text-brand-700">
                      {module.badge}
                    </span>
                  </div>
                  
                  <h4 className="text-xl sm:text-2xl font-bold mb-2">{module.title}</h4>
                  <p className="text-sm font-semibold text-brand-600 mb-4">{module.subtitle}</p>
                  <p className="text-muted-foreground mb-6">{module.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Technical Specifications</h5>
                    <ul className="space-y-2">
                      {module.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto p-4 bg-gradient-to-r from-brand-50 to-teal-50 rounded-lg">
                    <h5 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Operational Impact</h5>
                    <div className="space-y-3">
                      {module.impacts.map((impact, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm font-medium text-foreground">
                          <div className="text-brand-600">{impact.icon}</div>
                          {impact.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Technical Comparison: Legacy VPS vs. AISSC Modular Stack</h3>
          
          <div className="overflow-x-auto rounded-xl border border-border/60 shadow-sm">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-gradient-to-r from-brand-500 to-teal-500 text-white">
                  <th className="px-6 py-4 text-left text-sm font-bold">Operational Vector</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Legacy Monolithic VPS</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">AISSC Modular Stack</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-background' : 'bg-brand-50/30'}>
                    <td className="px-6 py-4 text-sm font-semibold">{row.vector}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{row.legacy}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-brand-700">{row.aisscc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          className="text-center max-w-3xl mx-auto p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-brand-500 to-teal-500 text-white"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Package and Deploy Your First Modular Companion Today
          </h3>
          <p className="text-lg opacity-90 mb-8">
            Transform your unreliable, high-overhead chatbots into an industrialized, self-healing corporate workforce.
          </p>
          <p className="text-base opacity-80 mb-8">
            Start with the Independent Structured Thought Layer to bring order to your agent reasoning, and layer on the SUAD-Nexus-Action-Layer to deploy them at maximum scale and minimum cost.
          </p>
          <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100 h-12 px-8">
            Deploy Your Module <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModularCompanionCatalog;
