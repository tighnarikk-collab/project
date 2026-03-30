"use client";
import Script from "next/script";

const glowKeyframes = `
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
`;

export default function BullModePage() {
  return (
    <>
      <style>{glowKeyframes}</style>
      <div style={styles.wrapper}>
      {/* Header */}
      <div style={styles.header}>
        <span style={styles.headerText}>I HAVE A NEW OFFER FOR YOU</span>
      </div>

      {/* Main Content Card */}
      <div style={styles.card}>
        {/* Thank you */}
        <div style={styles.thankYouRow}>
          <span style={styles.checkmark}>✅</span>
          <span style={styles.thankYouText}>Thank you for your order.</span>
        </div>

        <p style={styles.introText}>
          Before you continue, I want to show you an optional add-on that many customers
          choose to include, because it helps them stay consistent and get more value from
          what they already purchased.
        </p>

        {/* Quote Box */}
        <div style={styles.quoteBox}>
          <p style={styles.quoteText}>"Small daily actions create big results over time."</p>
        </div>

        {/* Description */}
        <p style={styles.bodyText}>
          <strong>BULL MODE</strong> is a complementary program designed to support male
          vitality, energy, and performance through practical routines and clear guidance.
        </p>

        <p style={styles.bodyText}>
          It's straightforward, easy to follow, and built to work alongside your main
          purchase.
        </p>

        <p style={styles.bodyTextBold}>Inside, you will get:</p>

        <ul style={styles.list}>
          <li style={styles.listItem}>Simple techniques to support vigor, stamina, and daily drive</li>
          <li style={styles.listItem}>Practical routines to help you feel better and more focused during the day</li>
          <li style={styles.listItem}>A structured 7-day routine aimed at supporting natural testosterone production</li>
          <li style={styles.listItem}>Guidance on habits that support circulation, recovery, and overall performance</li>
          <li style={styles.listItem}>Step-by-step suggestions to improve consistency and momentum (without complicated rules)</li>
          <li style={styles.listItem}>A clear plan you can follow at your own pace</li>
        </ul>

        {/* Price anchor */}
        <p style={styles.priceAnchor}>
          💰 <strong>This program has previously been offered for $79 in a private setting.</strong>
        </p>

        <p style={styles.bodyText}>
          But today as a one-time add-on you can include <strong>BULL MODE</strong> for just{" "}
          <strong>$59</strong>.
        </p>

        {/* Guarantee */}
        <p style={styles.guarantee}>
          🛡️ <strong>60-day guarantee:</strong>
          <br />
          Try it risk-free. If you don't feel it added real value for you, you can request a refund.
        </p>

        {/* CTA */}
        <p style={styles.ctaHint}>👇</p>
        <p style={styles.ctaSubtext}>If you want to add this optional program, use the purchase button below.</p>

        <p style={styles.ctaLabel}>ADD BULL MODE TODAY FOR $17</p>

        <div style={styles.hotmartWrap}>
          <div id="hotmart-sales-funnel" style={styles.hotmartContainer}></div>
        </div>

        <p style={styles.disclaimer}>
          This is an optional add-on purchase.
          <br />
          You will keep your main order either way.
        </p>
      </div>

      <Script
        src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && window.checkoutElements) {
            window.checkoutElements.init("salesFunnel").mount("#hotmart-sales-funnel");
          }
        }}
      />
    </div>
    </>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    backgroundColor: "#0a0a1a",
    backgroundImage: "radial-gradient(ellipse at 50% 0%, #1a1a3e 0%, #0a0a1a 70%)",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    color: "#ffffff",
    padding: "0 0 60px 0",
  },
  header: {
    backgroundColor: "#0d0d1f",
    borderBottom: "1px solid #2a2a4a",
    padding: "18px 20px",
    textAlign: "center",
  },
  headerText: {
    color: "#d4a017",
    fontFamily: "'Arial Black', 'Arial', sans-serif",
    fontSize: "clamp(13px, 3.5vw, 16px)",
    fontWeight: "900",
    letterSpacing: "0.08em",
    textShadow: "0 0 10px rgba(212, 160, 23, 0.5), 0 0 22px rgba(212, 160, 23, 0.18)",
  },
  card: {
    maxWidth: "680px",
    margin: "30px auto",
    backgroundColor: "#111128",
    border: "1px solid #2a2a4a",
    borderRadius: "12px",
    padding: "clamp(20px, 5vw, 40px)",
  },
  thankYouRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  checkmark: {
    fontSize: "20px",
  },
  thankYouText: {
    fontSize: "clamp(15px, 3.5vw, 17px)",
    fontWeight: "700",
    color: "#ffffff",
    fontFamily: "'Arial', sans-serif",
  },
  introText: {
    fontSize: "clamp(14px, 3.2vw, 16px)",
    lineHeight: "1.7",
    color: "#e0e0e0",
    fontFamily: "'Arial', sans-serif",
    fontWeight: "700",
    marginBottom: "24px",
  },
  quoteBox: {
    backgroundColor: "#0d1a3a",
    border: "1px solid #2a4a6a",
    borderRadius: "8px",
    padding: "20px 24px",
    marginBottom: "24px",
    textAlign: "center",
  },
 quoteText: {
  fontSize: "clamp(15px, 3.5vw, 18px)",
  fontStyle: "italic",
  fontWeight: "700",
  fontFamily: "'Arial', 'Helvetica Neue', sans-serif",
  margin: 0,
  background: "linear-gradient(90deg, #d4a017 20%, #fff5cc 45%, #ffe066 50%, #fff5cc 55%, #d4a017 80%)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: "shimmer 2.8s linear infinite",
},
  bodyText: {
    fontSize: "clamp(14px, 3.2vw, 16px)",
    lineHeight: "1.7",
    color: "#e0e0e0",
    fontFamily: "'Arial', sans-serif",
    marginBottom: "16px",
  },
  bodyTextBold: {
    fontSize: "clamp(14px, 3.2vw, 16px)",
    lineHeight: "1.7",
    color: "#ffffff",
    fontFamily: "'Arial', sans-serif",
    fontWeight: "700",
    marginBottom: "12px",
  },
  list: {
    paddingLeft: "20px",
    marginBottom: "24px",
  },
  listItem: {
    fontSize: "clamp(13px, 3vw, 15px)",
    lineHeight: "1.7",
    color: "#e0e0e0",
    fontFamily: "'Arial', sans-serif",
    marginBottom: "8px",
  },
  priceAnchor: {
    fontSize: "clamp(14px, 3.2vw, 16px)",
    lineHeight: "1.7",
    color: "#e0e0e0",
    fontFamily: "'Arial', sans-serif",
    marginBottom: "16px",
  },
  guarantee: {
    fontSize: "clamp(14px, 3.2vw, 16px)",
    lineHeight: "1.7",
    color: "#e0e0e0",
    fontFamily: "'Arial', sans-serif",
    marginBottom: "24px",
    backgroundColor: "rgba(255,255,255,0.04)",
    padding: "16px",
    borderRadius: "8px",
    borderLeft: "3px solid #3a7bd5",
  },
  ctaHint: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "8px",
  },
  ctaSubtext: {
    textAlign: "center",
    fontSize: "clamp(13px, 3vw, 15px)",
    color: "#e0e0e0",
    fontFamily: "'Arial', sans-serif",
    marginBottom: "16px",
  },
  ctaLabel: {
    textAlign: "center",
    color: "#d4a017",
    fontFamily: "'Arial Black', 'Arial', sans-serif",
    fontSize: "clamp(15px, 3.5vw, 18px)",
    fontWeight: "900",
    letterSpacing: "0.05em",
    marginBottom: "16px",
    textShadow: "0 0 10px rgba(212, 160, 23, 0.5), 0 0 22px rgba(212, 160, 23, 0.18)",
  },
  hotmartWrap: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "18px",
  },
  hotmartContainer: {
    width: "100%",
    maxWidth: "440px",
    minHeight: "72px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "16px",
    boxShadow: "0 0 30px rgba(0, 255, 133, 0.28)",
  },
  disclaimer: {
    textAlign: "center",
    fontSize: "clamp(11px, 2.5vw, 13px)",
    color: "#888",
    fontFamily: "'Arial', sans-serif",
    lineHeight: "1.6",
    marginTop: "10px",
  },
};
