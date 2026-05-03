function CardContent({ card }) {
  return (
    <>
      <div style={{ background: "#F8F7F5", borderBottom: "1px solid #EBEBEB", padding: "10px 18px", display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#0D0D0D" }}>Positioning Option {card.number}:</span>
        <span style={{ fontSize: 12, fontWeight: 400, color: "#777" }}>{card.description}</span>
      </div>
      <div style={{ display: "flex", minHeight: 210 }}>
        <div style={{ width: 128, flexShrink: 0, borderRight: "1px solid #EBEBEB", padding: "18px 14px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 10 }}>
          {card.tags.map(tag => (
            <div key={tag.label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: tag.color, flexShrink: 0 }} />
              <span style={{ fontSize: 11, color: "#6B6B6B", fontWeight: 500 }}>{tag.label}</span>
            </div>
          ))}
        </div>
        <div style={{ flex: 1, borderRight: "1px solid #EBEBEB", padding: "16px 22px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <span style={{ fontSize: 8, fontWeight: 800, letterSpacing: "0.1em", color: "#C0C0C0", textTransform: "uppercase" }}>LOGO</span>
            <div style={{ display: "flex", gap: 5 }}>
              <div style={{ width: 36, height: 10, borderRadius: 3, background: "#EBEBEB" }} />
              <div style={{ width: 26, height: 10, borderRadius: 3, background: "#EBEBEB" }} />
            </div>
          </div>
          <div style={{ marginBottom: 9 }}>
            {card.headlineLines.map((line, i) => (
              <div key={i} style={{ fontSize: 16, fontWeight: 800, lineHeight: 1.18, color: line.color, letterSpacing: "-0.025em" }}>{line.text}</div>
            ))}
          </div>
          <div style={{ fontSize: 10, color: "#999", lineHeight: 1.6, marginBottom: 13, maxWidth: 420 }}>{card.sub}</div>
          <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
            <div style={{ background: "#08608f", color: "white", fontSize: 9, fontWeight: 700, padding: "5px 11px", borderRadius: 2 }}>Reserve your sprint</div>
            <div style={{ border: "1px solid #D5D5D5", color: "#999", fontSize: 9, fontWeight: 500, padding: "4px 10px", borderRadius: 2 }}>See past work →</div>
          </div>
        </div>
        <div style={{ width: 206, flexShrink: 0, padding: "16px 15px" }}>
          <div style={{ display: "inline-block", background: card.badge.bg, color: card.badge.color, fontSize: 8.5, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 9px", borderRadius: 10, marginBottom: 11 }}>{card.badge.label}</div>
          <div style={{ fontSize: 10.5, fontWeight: 700, color: "#0D0D0D", marginBottom: 5 }}>Thesis</div>
          <ul style={{ paddingLeft: 12, margin: "0 0 11px 0", listStyle: "disc" }}>
            {card.thesis.map((t, i) => (<li key={i} style={{ fontSize: 9.5, color: "#777", lineHeight: 1.55, marginBottom: 3 }}>{t}</li>))}
          </ul>
          <div style={{ fontSize: 10.5, fontWeight: 700, color: "#0D0D0D", marginBottom: 5 }}>Risks</div>
          <ul style={{ paddingLeft: 12, margin: 0, listStyle: "disc" }}>
            {card.risks.map((r, i) => (<li key={i} style={{ fontSize: 9.5, color: "#777", lineHeight: 1.55, marginBottom: 3 }}>{r}</li>))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default function PositioningOptions() {
  const cards = [
    {
      number: 1, description: "Position as the hyper-local suburb specialist",
      tags: [{ color: "#F59E0B", label: "Use Case" }, { color: "#8B5CF6", label: "Category" }, { color: "#EF4444", label: "Problem" }, { color: "#3B82F6", label: "Differentiation" }],
      headlineLines: [{ text: "The easiest way to", color: "#E8A838" }, { text: "stand out in your suburb.", color: "#E8A838" }],
      sub: "Unlike generic real estate marketers, Soubh & Co. builds positioning around your specific patch, your vendors, and your results — so you stop sounding like every other agency.",
      badge: { label: "SAFE", bg: "#FEF3C7", color: "#92400E" },
      thesis: ["Boutique agencies invisible because they serve every vendor", "Hyper-local creates a reason to exist franchises can't copy", "Compounds in credibility with each local listing win"],
      risks: ["Limits referral geography to one suburb cluster", "Requires committing to one area upfront", "Competitors in same suburb may copy fast"],
    },
    {
      number: 2, description: "Position as the anti-franchise agency",
      tags: [{ color: "#1D9E75", label: "Alternative" }, { color: "#F59E0B", label: "Use Case" }],
      headlineLines: [{ text: "You don't need a franchise.", color: "#1D9E75" }, { text: "You just need the right agent.", color: "#3B82F6" }],
      sub: "Big-brand agencies give you a logo, a script, and a junior agent. We give your vendor our principal, our process, and our full attention — every single time.",
      badge: { label: "STRETCH", bg: "#D1FAE5", color: "#065F46" },
      thesis: ["Vendors burned by franchises are a growing segment", "Anti-franchise positioning creates strong tribal loyalty", "Principal-led agencies can own this angle authentically"],
      risks: ["Alienates vendors still loyal to franchise brands", "Requires bold, consistent public voice", "Principal must be comfortable as the face"],
    },
    {
      number: 3, description: "Position as the off-market specialists",
      tags: [{ color: "#F59E0B", label: "Use Case" }, { color: "#EF4444", label: "Problem" }],
      headlineLines: [{ text: "The off-market agency.", color: "#08608f" }, { text: "Better results. Less noise.", color: "#08608f" }],
      sub: "While other agencies compete on REA and Domain, we build vendor relationships before a listing exists — so your property sells faster, quieter, and at a premium.",
      badge: { label: "BOLD", bg: "#FEE2E2", color: "#991B1B" },
      thesis: ["Off-market is a growing segment premium vendors actively seek", "No competitor owns this angle in Australian boutiques yet", "Defensible high-GCI niche with compounding referrals"],
      risks: ["Requires genuine off-market track record to claim it", "Limits total addressable vendor pool", "Need hard proof before going public"],
    },
  ];

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: "#F5F4F0", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 40px" }}>
      <div style={{ width: "100%", maxWidth: 1080 }}>
        <div style={{ marginBottom: 40, textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ width: 28, height: 1.5, background: "#08608f" }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#08608f" }}>Deliverable 1</span>
            <div style={{ width: 28, height: 1.5, background: "#08608f" }} />
          </div>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#0D0D0D", letterSpacing: "-0.02em" }}>3–4 positioning strategies, ranked by risk</div>
          <div style={{ fontSize: 12, color: "#999", marginTop: 5 }}>Each option is labelled Safe, Stretch, or Bold — with a breakdown of what you'd gain and what you'd give up.</div>
        </div>

        <div style={{ position: "relative", paddingTop: 52 }}>
          {/* Card 3 — back */}
          <div style={{ position: "absolute", top: 4, left: 12, right: 12, zIndex: 1, background: "#FAFAFA", border: "1.5px solid #E8E8E8", borderRadius: 7, overflow: "hidden", opacity: 0.55 }}>
            <CardContent card={cards[2]} />
          </div>
          {/* Card 2 — middle */}
          <div style={{ position: "absolute", top: 26, left: 6, right: 6, zIndex: 2, background: "#FDFDFD", border: "1.5px solid #E4E4E4", borderRadius: 7, overflow: "hidden", opacity: 0.78 }}>
            <CardContent card={cards[1]} />
          </div>
          {/* Card 1 — front */}
          <div style={{ position: "relative", zIndex: 3, background: "#FFFFFF", border: "1.5px solid #D8D8D8", borderRadius: 7, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.14)" }}>
            <CardContent card={cards[0]} />
          </div>
        </div>

      </div>
    </div>
  );
}
