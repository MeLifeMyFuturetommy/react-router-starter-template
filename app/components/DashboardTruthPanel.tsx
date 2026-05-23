// app/components/DashboardTruthPanel.tsx

const PANEL_METADATA = {
  surface: "Melife Dashboard Prototype",
  status: "ACTIVE",
  scope: "STARTER_ROUTE_ACTIVE",
  lastChecked: "2026-05-24 AEST",
};

const STATE_LADDER = ["VERIFIED", "ACTIVE", "INFERRED", "BLOCKED", "ARCHIVED"] as const;

export function DashboardTruthPanel() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 font-mono text-sm text-slate-100">
      <div className="mx-auto max-w-4xl space-y-6">
        <header className="flex flex-col gap-4 border-b border-slate-800 pb-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-lg font-bold tracking-wider text-emerald-400">
              MELIFE // TRUTH_PANEL
            </h1>
            <p className="text-xs text-slate-400">
              Surface: {PANEL_METADATA.surface} ({PANEL_METADATA.scope})
            </p>
            <p className="text-[11px] text-slate-600">
              Last checked: {PANEL_METADATA.lastChecked}
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded border border-slate-700 bg-slate-900 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-bold text-emerald-400">PROTOTYPE_ACTIVE</span>
          </div>
        </header>

        <section className="rounded border border-slate-800 bg-slate-900 p-4">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
            Universal State Ladder
          </h2>
          <div className="grid grid-cols-1 gap-2 text-center text-xs sm:grid-cols-5">
            {STATE_LADDER.map((step) => {
              const isCurrent = step === PANEL_METADATA.status;
              return (
                <div
                  key={step}
                  className={`rounded border py-2 font-bold ${
                    isCurrent
                      ? "border-emerald-500 bg-emerald-950/50 text-emerald-400"
                      : "border-slate-800 bg-slate-950/40 text-slate-600"
                  }`}
                >
                  {step} {isCurrent ? "✓" : ""}
                </div>
              );
            })}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Tri-Layer Command Lanes
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <CommandLane
              command="C1: Thomas"
              role="COMMAND"
              tone="sky"
              body="Initiated replacement of starter route surface. Current focus: establishing bedrock baseline."
            />
            <CommandLane
              command="C2: Bucko"
              role="EXECUTION"
              tone="amber"
              body="Guardrails active. Enforcing anti-creep limits. Monitoring structural delta against repo state."
            />
            <CommandLane
              command="C3: Adam"
              role="VERIFICATION"
              tone="purple"
              body="Lane bounded. Awaiting expanded framework evidence. No NOC promotion without proof."
            />
          </div>
        </section>

        <section className="space-y-3 rounded border border-slate-800 bg-slate-950 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
              System Logs & Governance
            </h2>
            <span className="text-[10px] text-slate-600">F1_F2_COMPLIANT</span>
          </div>

          <div className="space-y-1.5 text-xs text-slate-400">
            <p>
              <span className="text-slate-600">[F1_GOV]</span>{" "}
              <span className="text-amber-500/80">WARN:</span> No external telemetry evidence detected. Verification downgrade applied. Status: ACTIVE.
            </p>
            <p>
              <span className="text-slate-600">[F2_LOG]</span>{" "}
              <span className="text-blue-400">INIT:</span> App entry routing mapped to <code className="text-slate-200">app/routes.ts</code>.
            </p>
            <p>
              <span className="text-slate-600">[F2_LOG]</span>{" "}
              <span className="text-emerald-400">DELTA:</span> Replaced <code className="text-slate-200">&lt;Welcome /&gt;</code> in <code className="text-slate-200">routes/home.tsx</code> with <code className="text-slate-200">&lt;DashboardTruthPanel /&gt;</code>.
            </p>
            <p>
              <span className="text-slate-600">[F2_LOG]</span>{" "}
              <span className="text-purple-400">STATE:</span> <span className="text-slate-200">STARTER_ROUTE_ACTIVE</span> confirmation flag set to true.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

type CommandLaneProps = {
  command: string;
  role: string;
  tone: "sky" | "amber" | "purple";
  body: string;
};

function CommandLane({ command, role, tone, body }: CommandLaneProps) {
  const toneClasses = {
    sky: "text-sky-400 bg-sky-950 border-sky-800",
    amber: "text-amber-400 bg-amber-950 border-amber-800",
    purple: "text-purple-400 bg-purple-950 border-purple-800",
  }[tone];

  const titleClass = {
    sky: "text-sky-400",
    amber: "text-amber-400",
    purple: "text-purple-400",
  }[tone];

  return (
    <article className="space-y-2 rounded border border-slate-800 bg-slate-900 p-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-1">
        <span className={`font-bold ${titleClass}`}>{command}</span>
        <span className={`rounded border px-1.5 py-0.5 text-[10px] ${toneClasses}`}>
          {role}
        </span>
      </div>
      <p className="text-xs text-slate-300">{body}</p>
    </article>
  );
}
