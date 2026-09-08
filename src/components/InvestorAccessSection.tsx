import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Lock, CalendarClock, ArrowRight } from "lucide-react";

const InvestorAccessSection = () => {
  useEffect(() => {
    const w = window as any;
    if (!w.Cal) {
      (function (C: any, A: string, L: string) {
        const p = (a: any, ar: any) => { a.q.push(ar); };
        const d = C.document;
        C.Cal = C.Cal || function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
    }

    const Cal = (window as any).Cal;
    Cal("init", "discovery-video-conference", { origin: "https://app.cal.com" });
    Cal.config = Cal.config || {};
    Cal.config.forwardQueryParams = true;
    Cal.ns["discovery-video-conference"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <section id="investors" className="py-20 bg-gradient-to-br from-brand-950 to-teal-900 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm mb-6">
            <Lock className="h-4 w-4" />
            Investor Members Only
          </div>
          <h2 className="text-4xl font-bold mb-4">Private Access to the Automated Online Empire</h2>
          <p className="text-lg opacity-90 mb-8">
            Full platform access, live execution logs, and the NEXUS-SUAD deployment stack are
            released exclusively to investor members. Book your discovery conference to invest now,
            before availability is gone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-700 hover:bg-gray-100"
              data-cal-link="ai-staffing-solution-consultants/discovery-video-conference"
              data-cal-namespace="discovery-video-conference"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              <CalendarClock className="mr-2 h-5 w-5" />
              Book to Invest
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="#platform">
                See the Platform <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <p className="text-sm opacity-75 mt-6">
            Limited allocation — memberships close once the current round is filled.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestorAccessSection;
