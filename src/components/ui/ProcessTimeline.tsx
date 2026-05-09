interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  title?: string;
  steps: ProcessStep[];
}

export default function ProcessTimeline({ title, steps }: ProcessTimelineProps) {
  return (
    <div className="w-full">
      {title && (
        <h2 className="text-h2 text-center mb-10" style={{ color: "var(--color-green-900)" }}>
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {/* Connector line for desktop */}
        <div 
          className="hidden lg:block absolute top-6 left-0 right-0 h-px" 
          style={{ background: "var(--color-green-200)", zIndex: 0 }} 
        />
        
        {steps.map((step, index) => (
          <div key={index} className="relative z-10 flex flex-col gap-4">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg"
              style={{ 
                background: "var(--color-green-100)", 
                color: "var(--color-green-800)",
                border: "2px solid white",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
              }}
            >
              {index + 1}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--color-gold-600)" }}>
                {step.step}
              </p>
              <h3 className="text-base font-semibold mb-2 leading-snug" style={{ color: "var(--color-green-900)" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-green-700)" }}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
