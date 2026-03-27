"use client";

const glowKeyframes = `
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes dotMove {
    0%   { background-position: 0 0; }
    100% { background-position: 40px 40px; }
  }
`;

export default function PersonalPresencePage() {
  return (
    <>
      <style>{glowKeyframes}</style>
      <div style={styles.wrapper}>

        {/* Header */}
        <div style={styles.header}>
          <span style={styles.headerText}>I HAVE AN ADDITIONAL OPTION AVAILABLE FOR YOU</span>
        </div>

        {/* Outer animated dot background */}
        <div style={styles.outerArea}>

          {/* Card */}
          <div style={styles.card}>

            {/* Title */}
            <h1 style={styles.title}>
              <span style={styles.titleSparkle}>✦</span>
              <span style={styles.titleText}>Personal Presence Method</span>
              <span style={styles.titleSparkle}>✦</span>
            </h1>

            <p style={styles.bodyText}>
              This optional add-on was designed for men who want to improve how they show up
              in everyday life — socially, professionally, and personally.
            </p>

            <p style={styles.bodyText}>
              Many people focus only on physical habits, but overlook something essential:{" "}
              <span style={styles.highlight}>presence.</span>
            </p>

            <p style={styles.bodyText}>
              Presence is how others perceive you before you even speak.
            </p>

            <p style={styles.bodyText}>
              <span style={styles.highlight}>The Personal Presence Method</span> is a
              structured educational guide that helps you develop calm confidence,
              self-assurance, and natural influence in daily interactions.
            </p>

            <p style={styles.insideLabel}>Inside this method, you'll learn:</p>

            <ul style={styles.list}>
              <li style={styles.listItem}>✓ How to project calm confidence in social environments</li>
              <li style={styles.listItem}>✓ Simple routines to improve posture, breathing, and composure</li>
              <li style={styles.listItem}>✓ Techniques to reduce anxiety and overthinking</li>
              <li style={styles.listItem}>✓ How to feel more grounded and comfortable around others</li>
              <li style={styles.listItem}>✓ Daily habits that support long-term confidence and presence</li>
            </ul>

            <p style={styles.bodyText}>
              This guide complements what you've already purchased and focuses on mindset,
              habits, and behavioral patterns.
            </p>

            <p style={styles.bodyText}>
              Everything is presented in a clear, practical format that you can apply immediately.
            </p>

            {/* CTA */}
            <p style={styles.ctaLabel}>ADD THE PERSONAL PRESENCE METHOD FOR $39</p>

            {/* Buttons area — widgets added later */}
            <div style={styles.buttonsArea} />

            <p style={styles.disclaimer}>
              This is an optional educational add-on.
              <br />
              Your original order will remain unchanged.
            </p>

          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    backgroundColor: "#0e0a0e",
    fontFamily: "'Arial', 'Helvetica Neue', sans-serif",
    color: "#ffffff",
    padding: "0 0 60px 0",
  },
  header: {
    padding: "16px 20px",
    textAlign: "center",
  },
  headerText: {
    color: "#c49a2a",
    fontFamily: "'Arial', sans-serif",
    fontSize: "clamp(11px, 2.8vw, 14px)",
    fontWeight: "700",
    letterSpacing: "0.06em",
    textShadow: "0 0 10px rgba(196, 154, 42, 0.4)",
  },
  outerArea: {
    backgroundImage: `
      radial-gradient(ellipse at 15% 50%, rgba(80, 10, 80, 0.6) 0%, transparent 50%),
      radial-gradient(ellipse at 85% 50%, rgba(10, 30, 80, 0.6) 0%, transparent 50%),
      radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)
    `,
    backgroundSize: "100% 100%, 100% 100%, 20px 20px",
    animation: "dotMove 10s linear infinite",
    padding: "20px 16px 40px 16px",
  },
  card: {
    maxWidth: "720px",
    margin: "0 auto",
    backgroundColor: "#1a1520",
    border: "1px solid #3a2a3a",
    borderRadius: "12px",
    padding: "clamp(20px, 5vw, 44px)",
  },
  title: {
    textAlign: "center",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    fontSize: "clamp(20px, 5vw, 28px)",
    fontWeight: "700",
    marginBottom: "28px",
    lineHeight: "1.3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  titleSparkle: {
    color: "#d4a017",
    textShadow: "0 0 12px rgba(212,160,23,0.5)",
    WebkitTextFillColor: "unset",
  },
  titleText: {
    background: "linear-gradient(90deg, #d4a017 20%, #fff5cc 45%, #ffe066 50%, #fff5cc 55%, #d4a017 80%)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    animation: "shimmer 2.8s linear infinite",
  },
  bodyText: {
    fontSize: "clamp(14px, 3.2vw, 16px)",
    lineHeight: "1.75",
    color: "#d0d0d0",
    marginBottom: "18px",
  },
  highlight: {
    color: "#d4a017",
    fontWeight: "700",
  },
  insideLabel: {
    fontSize: "clamp(14px, 3.2vw, 16px)",
    color: "#d4a017",
    fontWeight: "700",
    fontStyle: "italic",
    marginBottom: "14px",
  },
  list: {
    listStyle: "none",
    padding: "0 0 0 clamp(0px, 3vw, 40px)",
    margin: "0 0 24px 0",
  },
  listItem: {
    fontSize: "clamp(13px, 3vw, 15px)",
    lineHeight: "1.7",
    color: "#d0d0d0",
    fontWeight: "700",
    marginBottom: "10px",
  },
  ctaLabel: {
    textAlign: "center",
    fontFamily: "'Arial Black', 'Arial', sans-serif",
    fontSize: "clamp(14px, 3.5vw, 18px)",
    fontWeight: "900",
    letterSpacing: "0.04em",
    marginBottom: "22px",
    marginTop: "32px",
    background: "linear-gradient(90deg, #d4a017 20%, #fff5cc 45%, #ffe066 50%, #fff5cc 55%, #d4a017 80%)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    animation: "shimmer 2.8s linear infinite",
  },
  buttonsArea: {
    height: "120px",
  },
  disclaimer: {
    textAlign: "center",
    fontSize: "clamp(11px, 2.5vw, 13px)",
    color: "#777",
    lineHeight: "1.6",
    marginTop: "10px",
  },
};
