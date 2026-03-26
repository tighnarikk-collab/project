import Script from "next/script";

export default function Home() {
  return (
    <>
      <main className="landing">
        <section className="hero">
          <div className="videoShell">
            <vturb-smartplayer
              id="vid-69c1d163596c6131b743f92c"
              style={{ display: "block", margin: "0 auto", width: "100%", maxWidth: "400px" }}
            ></vturb-smartplayer>
          </div>

          <div className="soundNotice">
            <span className="soundIcon" aria-hidden="true">
              🔊
            </span>
            <span>Make sure your sound is on</span>
          </div>
        </section>

        <footer className="footer">
          <p>Copyright 2025 ®</p>
          <p>All Rights Reserved</p>
        </footer>
      </main>

      <Script
        src="https://scripts.converteai.net/f681fa7b-726c-4f96-a26a-16ecd38a7871/players/69c1d163596c6131b743f92c/v4/player.js"
        strategy="afterInteractive"
      />
    </>
  );
}