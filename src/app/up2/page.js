"use client";

const glowKeyframes = `
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
`;

export default function MalePresencePage() {
  return (
    <>
      <style>{glowKeyframes}</style>
      <div style={styles.wrapper}>

        {/* Header */}
        <div style={styles.header}>
          <span style={styles.headerText}>I HAVE AN ADDITIONAL OPTION FOR YOU</span>
          <div style={styles.headerLine} />
        </div>

        {/* Main Content */}
        <div style={styles.card}>

          <p style={styles.thankYou}>Thank you for continuing.</p>

          <p style={styles.introText}>
            To complement your main purchase, I want to introduce an optional educational
            program focused on male confidence, presence, and relationship dynamics.
          </p>

          {/* Title */}
          <h2 style={styles.productTitle}>
            <span style={styles.bookEmoji}>📘</span>
            <span style={styles.productTitleText}>INTRODUCING: MALE PRESENCE SYSTEM</span>
          </h2>

          <p style={styles.bodyText}>
            This program was created to help men develop a stronger sense of confidence,
            awareness, and connection in intimate relationships — without pressure,
            performance anxiety, or confusion.
          </p>

          {/* Inside label */}
          <p style={styles.insideLabel}>Inside this program, you will find:</p>

          <ul style={styles.list}>
            <li style={styles.listItem}>✓ Techniques to improve self-confidence and emotional control</li>
            <li style={styles.listItem}>✓ Practical guidance on presence, attention, and communication</li>
            <li style={styles.listItem}>✓ Daily routines that support energy, focus, and consistency</li>
            <li style={styles.listItem}>✓ Strategies to feel calmer, more grounded, and more self-assured</li>
            <li style={styles.listItem}>✓ Relationship insights that help build trust and connection</li>
          </ul>

          <p style={styles.bodyText}>
            This content is designed to be simple, practical, and easy to apply in everyday life.
          </p>

          <p style={styles.bodyText}>
            You can go through the material at your own pace and use it as a complement to
            what you've already purchased.
          </p>

          {/* CTA */}
          <p style={styles.ctaLabel}>ADD THE MALE PRESENCE SYSTEM TODAY FOR $49</p>

          {/* Buttons area — empty, widgets will be added later */}
          <div style={styles.buttonsArea} />

          <p style={styles.disclaimer}>
            This is an optional add-on purchase.
            <br />
            Your original order will not be affected.
          </p>

        </div>
      </div>
    </>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    backgroundColor: "#080808",
    backgroundImage:
      "radial-gradient(ellipse at 50% 100%, #3a0a0a 0%, #1a0505 40%, #080808 75%)",
    fontFamily: "'Arial', 'Helvetica Neue', sans-serif",
    color: "#ffffff",
    padding: "0 0 60px 0",
  },
  header: {
    padding: "18px 20px 0 20px",
    textAlign: "center",
  },
  headerText: {
    color: "#d4a017",
    fontFamily: "'Arial Black', 'Arial', sans-serif",
    fontSize: "clamp(12px, 3.2vw, 15px)",
    fontWeight: "900",
    letterSpacing: "0.08em",
    textShadow:
      "0 0 10px rgba(212, 160, 23, 0.5), 0 0 22px rgba(212, 160, 23, 0.18)",
    display: "block",
    marginBottom: "14px",
  },
  headerLine: {
    width: "100%",
    height: "1px",
    backgroundColor: "#d4a017",
    opacity: 0.3,
  },
  card: {
    maxWidth: "720px",
    margin: "36px auto 0 auto",
    padding: "clamp(16px, 5vw, 40px) clamp(16px, 5vw, 48px)",
  },
  thankYou: {
    fontSize: "clamp(14px, 3.2vw, 16px)",
    color: "#e0e0e0",
    marginBottom: "18px",
    fontWeight: "400",
  },
  introText: {
    fontSize: "clamp(14px, 3.2vw, 16px)",
    lineHeight: "1.75",
    color: "#e0e0e0",
    marginBottom: "28px",
  },
  productTitle: {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontWeight: "900",
  fontFamily: "'Arial Black', 'Arial', sans-serif",
  fontSize: "clamp(17px, 4vw, 22px)",
  marginBottom: "18px",
  lineHeight: "1.3",
  flexWrap: "wrap",
},
productTitleText: {
  letterSpacing: "0.08em",
  background: "linear-gradient(90deg, #d4a017 20%, #fff5cc 45%, #ffe066 50%, #fff5cc 55%, #d4a017 80%)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: "shimmer 2.8s linear infinite",
},
  bookEmoji: {
    fontSize: "clamp(18px, 4vw, 24px)",
    flexShrink: 0,
  },
  bodyText: {
    fontSize: "clamp(14px, 3.2vw, 16px)",
    lineHeight: "1.75",
    color: "#e0e0e0",
    marginBottom: "18px",
  },
  insideLabel: {
    fontSize: "clamp(14px, 3.2vw, 16px)",
    color: "#e05555",
    fontWeight: "700",
    fontStyle: "italic",
    marginBottom: "14px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 24px 0",
  },
  listItem: {
    fontSize: "clamp(13px, 3vw, 15px)",
    lineHeight: "1.7",
    color: "#e0e0e0",
    fontWeight: "700",
    marginBottom: "10px",
    paddingLeft: "4px",
  },
  ctaLabel: {
    textAlign: "center",
    fontFamily: "'Arial Black', 'Arial', sans-serif",
    fontSize: "clamp(14px, 3.5vw, 18px)",
    fontWeight: "900",
    letterSpacing: "0.04em",
    marginBottom: "22px",
    marginTop: "32px",
    background:
      "linear-gradient(90deg, #d4a017 20%, #fff5cc 45%, #ffe066 50%, #fff5cc 55%, #d4a017 80%)",
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
    color: "#888",
    lineHeight: "1.6",
    marginTop: "16px",
  },
};
