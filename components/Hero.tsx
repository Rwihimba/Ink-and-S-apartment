import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 640,
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <Image
          src="/assets/hero-sunset.jpg"
          alt="Ink & S Apartment at sunset in Kigali"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            animation: "kenburns 18s ease-out forwards",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(15,32,40,.55) 0%, rgba(15,32,40,.28) 42%, rgba(15,32,40,.62) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          boxShadow: "inset 0 0 220px 60px rgba(10,22,28,.7)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 clamp(24px,6vw,120px)",
          maxWidth: 1100,
        }}
      >
        <h1
          style={{
            opacity: 0,
            animation: "heroUp 1.1s cubic-bezier(.16,1,.3,1) .45s forwards",
            fontFamily: "'Lexend',sans-serif",
            fontWeight: 500,
            color: "#fff",
            fontSize: "clamp(44px,6.4vw,92px)",
            lineHeight: 1.02,
            letterSpacing: "-.01em",
            textWrap: "balance",
            maxWidth: "16ch",
          }}
        >
          Your Home Away From Home in Kigali
        </h1>
        <p
          style={{
            opacity: 0,
            animation: "heroUp 1.1s cubic-bezier(.16,1,.3,1) .6s forwards",
            color: "rgba(243,236,224,.92)",
            fontSize: "clamp(16px,1.35vw,20px)",
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: "52ch",
            marginTop: 26,
          }}
        >
          Wake to panoramic city views, work from calm, light-filled spaces, and
          unwind in quiet luxury. Thoughtfully furnished apartments made for
          business and leisure alike.
        </p>
        <div
          style={{
            opacity: 0,
            animation: "heroUp 1.1s cubic-bezier(.16,1,.3,1) .75s forwards",
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            marginTop: 40,
          }}
        >
          <a
            href="#book"
            className="btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#A0561F",
              color: "#fff",
              padding: "17px 34px",
              borderRadius: 100,
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: ".02em",
              boxShadow: "0 14px 40px rgba(217,138,78,.4)",
            }}
          >
            Book Your Stay
          </a>
          <a
            href="#apartments"
            className="btn-ghost"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(255,255,255,.1)",
              color: "#fff",
              padding: "17px 34px",
              borderRadius: 100,
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: ".02em",
              border: "1px solid rgba(255,255,255,.5)",
              backdropFilter: "blur(6px)",
            }}
          >
            View Apartments
          </a>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 34,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          opacity: 0,
          animation: "fadeIn 1s ease 1.4s forwards",
        }}
      >
        <span
          style={{
            color: "rgba(243,236,224,.75)",
            fontSize: 10,
            letterSpacing: ".28em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 46,
            background:
              "linear-gradient(rgba(243,236,224,.8),rgba(243,236,224,0))",
          }}
        />
      </div>
    </section>
  );
}
