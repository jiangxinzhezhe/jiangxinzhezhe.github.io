import React from "react";
// index.jsx / App.jsx
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/game/ech8" element={<GameDetail id="ech8" />} />
          <Route
            path="/game/witchalchemy"
            element={<GameDetail id="witchalchemy" />}
          />
          <Route path="/game/cryrec" element={<GameDetail id="cryrec" />} />
          <Route
            path="/game/planetwars"
            element={<GameDetail id="planetwars" />}
          />
          <Route path="/website" element={<Website />} />
          <Route path="/documentary" element={<Documentary />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
      <style>{globalCss}</style>
    </HashRouter>
  );
}

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/game" element={<Game />} />
//           <Route path="/game/ech8" element={<GameDetail id="ech8" />} />
//           <Route
//             path="/game/witchalchemy"
//             element={<GameDetail id="witchalchemy" />}
//           />
//           <Route path="/game/cryrec" element={<GameDetail id="cryrec" />} />
//           <Route
//             path="/game/planetwars"
//             element={<GameDetail id="planetwars" />}
//           />
//           <Route path="/website" element={<Website />} />
//           <Route path="/documentary" element={<Documentary />} />
//           <Route path="/playground" element={<Playground />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </Layout>
//       <style>{globalCss}</style>
//     </BrowserRouter>
//   );
// }

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={styles.page}>
      <aside style={styles.nav}>
        <Nav to="/" label="Home" bold />
        <Nav to="/game" label="Game" />
        <Nav to="/website" label="Website" />
        <Nav to="/documentary" label="Documentary" />
        <Nav to="/playground" label="Playground" />
        <Nav to="/about" label="About" />
      </aside>
      <main style={styles.main}>{children}</main>
    </div>
  );
}

function Nav({
  to,
  label,
  bold = false,
}: {
  to: string;
  label: string;
  bold?: boolean;
}) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...styles.navItem,
        fontWeight: bold || isActive ? 700 : 400,
        textDecoration: isActive ? "underline" : "none",
        transform: hovered ? "scale(1.08)" : "scale(1)",
        transition: "transform 0.2s ease",
      })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      end
    >
      {label}
    </NavLink>
  );
}

function Home() {
  return (
    <section style={{ padding: "56px 48px 96px" }}>
      <h1 style={styles.h1}>
        <span>Xinzhe</span>
        <br />
        <span>Jiang</span>
      </h1>
      <p style={styles.tagline}>
        Hi, I am Xinzhe. A cross-disciplinary developer and designer passionate
        about creating immersive digital experiences that could inspire and
        connect people and bring positive impact to the world.
      </p>
      <footer style={{ textAlign: "center", marginTop: 48 }}>
        <div>Contact Me</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            marginTop: 12,
          }}
        >
          <a href="tel:+19199490347" style={styles.iconBox}>
            <img
              src="/images/tel.png"
              alt="Phone"
              style={{ width: 35, height: 35, objectFit: "contain" }}
            />
          </a>
          <a href="mailto:jiangxinzhezhe@outlook.com" style={styles.iconBox}>
            <img
              src="/images/email.png"
              alt="Email"
              style={{ width: 35, height: 35, objectFit: "contain" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/xinzhejiang/"
            target="_blank"
            rel="noreferrer"
            style={styles.iconBox}
          >
            <img
              src="/images/linkedin.png"
              alt="LinkedIn"
              style={{ width: 35, height: 35, objectFit: "contain" }}
            />
          </a>
        </div>
      </footer>
    </section>
  );
}

function Game() {
  return (
    <ArticlePage
      title="Game Development"
      desc="I always believe that game should go beyond entertainment, serving as a powerful medium for storytelling, emotional connection, and personal growth."
      items={[
        {
          title: "Ech8",
          img: "/images/ech8.jpg",
          text: "Language-based puzzle…",
          link: "/game/ech8",
        },
        {
          title: "Witch Kitchen",
          img: "/images/witchalchemy.jpg",
          text: "Tarot-inspired alchemy…",
          link: "/game/witchalchemy",
          side: "right",
        },
        {
          title: "Tarot Cards",
          img: "/images/cryrec.jpg",
          text: "Emotional journaling app…",
          link: "/game/cryrec",
        },
        {
          title: "Planet Wars Agent",
          img: "/images/planetwars.jpg",
          text: "Kotlin greedy agent…",
          link: "/game/planetwars",
        },
        {
          title: "The Dinner",
          img: "/images/cryrec.jpg",
          text: "Emotional journaling app…",
          link: "/game/cryrec",
        },
        {
          title: "Bubble Tea",
          img: "/images/cryrec.jpg",
          text: "Emotional journaling app…",
          link: "/game/cryrec",
        },
      ]}
    />
  );
}

function Website() {
  return (
    <ArticlePage
      title="Website Development"
      desc="An OLD form of digital medium that connects people worldwide. I still find it facinating, for the endless creations in the past and future."
      items={[
        {
          title: "This World Abandoned Me",
          img: "/images/thisworld.png",
          text: "Language-based puzzle…",
          link: "/thiswordabandonedme/index.html",
        },
        {
          title: "Wu Xing",
          img: "/images/wuxing.png",
          text: "Tarot-inspired alchemy…",
          link: "/JS_Xinzhe/index.html",
          side: "right",
        },
        {
          title: "Haizi's Poetry",
          img: "/images/haizi.png",
          text: "Emotional journaling app…",
          link: "/firstassign/index.html",
        },
        {
          title: "Laying out Layouts",
          img: "/images/layin.png",
          text: "Kotlin greedy agent…",
          link: "/LayingOutLayouts/index.html",
        },
      ]}
    />
  );
}

function Documentary() {
  return (
    <ArticlePage
      title="Documentary"
      desc="Audio-visual coupling is my favorite definition of documentary. It is more a way of expression for the person that holding the camera. But will the audienced be directed to feel the same as the one behind the camera?"
      items={[
        {
          title: "Rural Christian",
          img: "/images/rural.png",
          text: "Language-based puzzle…",
          link: "https://youtu.be/JzAs_COIm_4",
        },
        {
          title: "Tangsong",
          img: "/images/tangsong.png",
          text: "Tarot-inspired alchemy…",
          link: "https://youtu.be/dEAsleSQfuI",
          side: "right",
        },
        {
          title: "Suzhou LiveScene",
          img: "/images/suzhou.png",
          text: "Emotional journaling app…",
          link: "https://youtu.be/zxNuqzcTB-I",
        },
        {
          title: "Dark Knight-UE5 Cinematics",
          img: "/images/darkknight.png",
          text: "Kotlin greedy agent…",
          link: "https://youtu.be/AHPl2Plrmww",
        },
        {
          title: "Jazz Documentary Trailer",
          img: "/images/jazz.png",
          text: "Kotlin greedy agent…",
          link: "https://youtu.be/sr3oCPKbob8",
        },
      ]}
    />
  );
}

function Playground() {
  return (
    <main style={{ padding: "28px 0 64px" }}>
      {/* Section 1: Street */}
      <PhotoSection
        title="Street"
        desc="French Concession Street in Shanghai, one of my favorite places. When the lights come on at night, will you also hear the phonograph playing as me?"
        images={[
          "/images/StreetSH/street_1.jpg",
          "/images/StreetSH/street_2.jpg",
          "/images/StreetSH/street_3.jpg",
          "/images/StreetSH/street_4.jpg",
          "/images/StreetSH/street_5.jpg",
          "/images/StreetSH/street_6.jpg",
          "/images/StreetSH/street_7.jpg",
          "/images/StreetSH/street_8.jpg",
          "/images/StreetSH/street_9.jpg",
          "/images/StreetSH/street_10.jpg",
          "/images/StreetSH/street_11.jpg",
        ]}
      />

      {/* Section 2: Builder */}
      <PhotoSection
        title="Builder"
        desc="In only half a century, China has already built numerous skyscrapers that reshape the urban landscape. As a passerby, I seldom noticed those people working in those sites. Then one day I walked in and heard their stories."
        images={[
          "/images/Builder_1/builder_1.jpg",
          "/images/Builder_2/Builder_1.jpg",
          "/images/Builder_1/builder_2.jpg",
          "/images/Builder_2/Builder_2.jpg",
          "/images/Builder_1/builder_3.jpg",
          "/images/Builder_2/Builder_3.jpg",
          "/images/Builder_1/builder_4.jpg",
          "/images/Builder_2/Builder_4.jpg",
          "/images/Builder_1/builder_5.jpg",
          "/images/Builder_2/Builder_5.jpg",
          "/images/Builder_1/builder_6.jpg",
          "/images/Builder_2/Builder_6.jpg",
          "/images/Builder_1/builder_7.jpg",
          "/images/Builder_2/Builder_7.jpg",
          "/images/Builder_1/builder_8.jpg",
          "/images/Builder_2/Builder_8.jpg",
          "/images/Builder_1/builder_9.jpg",
          "/images/Builder_2/Builder_9.jpg",
          "/images/Builder_1/builder_10.jpg",
          "/images/Builder_2/Builder_10.jpg",
          "/images/Builder_1/builder_11.jpg",
          "/images/Builder_2/Builder_11.jpg",
          "/images/Builder_1/builder_12.jpg",
          "/images/Builder_2/Builder_12.jpg",
          "/images/Builder_1/builder_13.jpg",
          "/images/Builder_2/Builder_13.jpg",
          "/images/Builder_1/builder_14.jpg",
          "/images/Builder_2/Builder_14.jpg",
          "/images/Builder_1/builder_15.jpg",
          "/images/Builder_2/Builder_15.jpg",
          "/images/Builder_1/builder_16.jpg",
          "/images/Builder_2/Builder_16.jpg",
          "/images/Builder_1/builder_17.jpg",
          "/images/Builder_2/Builder_17.jpg",
          "/images/Builder_1/builder_18.jpg",
          "/images/Builder_1/builder_19.jpg",
          "/images/Builder_1/builder_20.jpg",
          "/images/Builder_1/builder_21.jpg",
          "/images/Builder_1/builder_22.jpg",
          "/images/Builder_1/builder_23.jpg",
          "/images/Builder_1/builder_24.jpg",
        ]}
      />
      <footer style={{ textAlign: "center", marginTop: 48 }}>
        <div>Contact Me</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            marginTop: 12,
          }}
        >
          <a href="tel:+19199490347" style={styles.iconBox}>
            <img
              src="/images/tel.png"
              alt="Phone"
              style={{ width: 35, height: 35, objectFit: "contain" }}
            />
          </a>
          <a href="mailto:jiangxinzhezhe@outlook.com" style={styles.iconBox}>
            <img
              src="/images/email.png"
              alt="Email"
              style={{ width: 35, height: 35, objectFit: "contain" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/xinzhejiang/"
            target="_blank"
            rel="noreferrer"
            style={styles.iconBox}
          >
            <img
              src="/images/linkedin.png"
              alt="LinkedIn"
              style={{ width: 35, height: 35, objectFit: "contain" }}
            />
          </a>
        </div>
      </footer>
    </main>
  );
}

function About() {
  return (
    <section style={{ padding: "40px 48px 80px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr .8fr",
          gap: 28,
          marginBottom: 28,
        }}
      >
        <div>
          <p style={{ ...styles.bodyText, whiteSpace: "pre-line" }}>
            Born at the beginning of the 21st century, I have witnessed the
            rapid evolution of technology and its profound impact on society.
            From Television to computer, medium is becoming an integral part of
            human experience, shaping how we perceive and interact with the
            world.
            {"\n"}
            During my undergraduate, I have immersed myself in the world of
            computationa media, exploring different medium's impact to people,
            especially in the fields like emotional design and interactive
            storytelling. Where I discovered my passion for creating meaningful
            immersive digital experiences that could inspire and connect people.
            {"\n"}
            That's the reason I turned to game development — a field that
            perfectly blends creativity, technology, and human experience.
            {"\n"}I enjoy building projects that merge art and feelings, whether
            through Unreal Engine or Unity.
            {"\n"}I believe in crafting digital worlds that are not only
            visually engaging but also emotionally resonant and human-centered.
          </p>

          <div style={{ display: "flex", gap: 16, marginTop: 18 }}>
            <a
              href="/images/XinzheJiang_Resume_SWE.pdf"
              style={styles.resumeBtn}
            >
              Resume
            </a>
            <div style={styles.iconBox} />
            <div style={styles.iconBox} />
            <div style={styles.iconBox} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              width: 220,
              height: 220,
              borderRadius: 6,
              backgroundImage: "url('/images/MyPhoto25.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>

      <CvSection title="Education">
        <CvRow
          left="Duke University"
          right="May 2026"
          body="MEng in Game Design, Development & Innovation"
        />
        <CvRow
          //left="Duke University"
          right="May 2024\Durham, NC, USA"
          body="BA in Media Arts & Communication"
        />
      </CvSection>

      <CvSection title="Skills">
        <div style={{ ...styles.cvBody, whiteSpace: "pre-line" }}>
          <strong>Technical Skills:</strong> Python, Java, C++, C#, JavaScript
          (TypeScript, React, Next.js), SQL, MySQL, R, Unity, Unreal Engine 5
          (Blueprint & C++)
          {"\n"}
          <strong>Tools & Platforms:</strong> Git/GitHub, Linux, Jira, Tableau,
          Figma, Adobe Creative Suite, Maya, Fusion 360, A/B Testing, Data
          Visualization, Agile, UX/UI Design
        </div>
      </CvSection>

      <CvSection title="Professional Experience">
        <CvRow
          left="Tencent"
          right="May 2025-Jul. 2025\Guangzhou, China"
          position="Software Development Intern"
          body="▪ Launched a modular social SDK using JavaScript and WeChat APIs, with reusable components and UI templates that enabled 200+ studios to integrate PvP/co-op features, reducing average launch time by two weeks
          ▪ Built automated ETL pipelines with Python and SQL to process player behavior data, created interactive Tableau dashboards for DAU/ROI analysis, identified key engagement patterns that improved retention by 25%
          ▪ Developed 3 game products with Unity and JavaScript, with the help across frontend and backend teams using Git, Jira, Agile workflows, successfully published for inner group testing"
        />
        <CvRow
          left="Game Square"
          right="May 2024-Aug. 2024\Durham, NC, USA"
          position="Software Development Intern"
          body="▪	Designed and implemented 3 exercise-based educational Unity levels in C#, combining motion-tracking game-play with interactive puzzles to help children explore mathematical patterns through physical movements
          ▪	Built analytics scripts in Python and SQL to track activity engagement across 450+ beta testers, optimized game mechanics and level design based on data-driven insights and tester feedback, resulting in 50% increase in DAU
          ▪	Taught project-based game development classes for 20+ K-12 students, introducing computational thinking and hands-on coding sessions to build foundational technical skills in an engaging learning environment"
        />
        <CvRow
          left="RED Note (Xiaohongshu)"
          right="Apr. 2023-Jun. 2023\Shanghai, China"
          position="Data Engineering and Analytics Intern"
          body="▪	Processed and aggregated multi-channel advertising data from 15+ brands through Python and SQL, generated key performance metrics (CTR, CPE, ROI) and created dashboards to improve budget allocation efficiency
          ▪	Designed and executed A/B testing framework for ad performance optimization, conducted statistical analysis to validate hypotheses, achieving 25% increase in CTR and 20% reduction in CPE across campaigns
          ▪	Optimized MySQL database queries and worked with backend engineers to improve API response times for real-time analytics endpoints, reducing dashboard load times by 40%"
        />
      </CvSection>

      <CvSection title="Academic Experience">
        <CvRow
          left="Duke University"
          right="Aug. 2026-Present\Durham, NC, USA"
          position="Critical Analysis of Video Games | Teaching Assistant"
          body="▪	Guided graduate students through analysis of game systems, interaction design, and player psychology
          ▪	Supported assignments in UE5 and data analysis, connecting design critique with engineering implementation"
        />
      </CvSection>

      <CvSection title="Projects">
        <CvRow
          left="Climate Fiction Educational Story Archive Web | React, MySQL, Figma"
          right="Aug. 2026-Present"
          position="Web Designer & Developer"
          body="▪	Developed full-stack educational web platform for environmental story exploration with React frontend and Py-thon/Flask backend, supporting advanced search and categorization by age, grade level, and theme 
          ▪	Designed normalized database schema and RESTful APIs for efficient story indexing, retrieval, content man-agement 
          ▪	Partnered with K-12 educators to deploy pilot version for classroom, incorporating feedback into development cycles"
        />
        <CvRow
          left="Ech8 - Language Based Puzzle Game | Unreal Engine 5, C++, Blueprints"
          right="Oct. 2025-Present"
          position="Gameplay Engineer"
          body="▪	Implemented 2 core gameplay mechanics using hybrid C++/Blueprint architecture, featuring context-sensitive grammar systems and dynamic rule evaluation with real-time player input processing
          ▪	Collaborated through design iteration cycles, implementing rapid prototyping workflows in Blueprints before C++ optimization, reducing iteration time by 40% and accelerating feature deployment
          ▪	Collaborated with cross-functional teams to integrate narrative and UI feedback loops for adaptive puzzle diffi-culty"
        />
        <CvRow
          left="Duke University Game Jam 2024 – Winner | Unity, C#, UX/UI"
          right="Oct. 2025"
          position="Gameplay Engineer"
          body="▪	Designed and built cooperative gameplay systems in C#, implementing reactive mechanics, real-time player feedback, and dynamic difficulty scaling through data-driven parameter tuning"
        />
      </CvSection>

      <footer style={{ textAlign: "center", marginTop: 48 }}>
        <div>Contact Me</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            marginTop: 12,
          }}
        >
          <a href="tel:+19199490347" style={styles.iconBox}>
            <img
              src="/images/tel.png"
              alt="Phone"
              style={{ width: 35, height: 35, objectFit: "contain" }}
            />
          </a>
          <a href="mailto:jiangxinzhezhe@outlook.com" style={styles.iconBox}>
            <img
              src="/images/email.png"
              alt="Email"
              style={{ width: 35, height: 35, objectFit: "contain" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/xinzhejiang/"
            target="_blank"
            rel="noreferrer"
            style={styles.iconBox}
          >
            <img
              src="/images/linkedin.png"
              alt="LinkedIn"
              style={{ width: 35, height: 35, objectFit: "contain" }}
            />
          </a>
        </div>
      </footer>
    </section>
  );
}

type Item = {
  img: string; // 图片地址（支持 /public 本地文件）
  text: string; // 说明文案
  title?: string; // 可选小标题
  link?: string; // 可选跳转链接（作品或仓库）
  linkLabel?: string; // 可选链接文字，默认 "View →"
  span?: "full"; // 设为 "full" 就会横跨两列
  side?: "left" | "right"; // 控制图片在左还是右（默认交替）
};

// 2) ArticlePage 的 props 使用 Item[]
function ArticlePage({
  title,
  desc,
  items,
}: {
  title: string;
  desc: string;
  items: Item[];
}) {
  return (
    <section style={{ padding: "40px 48px 80px" }}>
      <h2 style={styles.pageTitle}>{title}</h2>
      <p
        style={{
          ...styles.bodyText,
          textAlign: "center",
          margin: "8px auto 32px",
          maxWidth: 560,
        }}
      >
        {desc}
      </p>

      <div style={styles.gallery}>
        {items.map((it, i) => {
          const figure = (
            <div style={styles.placeholder}>
              <img
                src={it.img}
                alt={it.title || `${title} ${i + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  border: "none",
                  boxShadow: "none",
                  borderRadius: 6,
                }}
              />
            </div>
          );

          const caption = (
            <div style={{ alignSelf: "center" }}>
              {it.title && (
                <div style={{ fontWeight: 600, marginBottom: 6 }}>
                  {it.title}
                </div>
              )}

              {/* 文本一行 */}
              <p style={styles.bodyText}>{it.text}</p>

              {/* 链接单独一行 */}
              {it.link && (
                <a
                  href={it.link}
                  target={it.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noreferrer"
                  style={{ display: "inline-block", marginTop: 6 }}
                >
                  View →
                </a>
              )}
            </div>
          );

          // 全宽：只渲染一条横跨两列
          if (it.span === "full") {
            return (
              <div key={i} style={{ gridColumn: "1 / -1" }}>
                {figure}
                {caption}
              </div>
            );
          }

          // 左右顺序：默认偶数项图在左、奇数项图在右；也可用 side 强制
          const imgFirst = it.side ? it.side === "left" : i % 2 === 0;
          return imgFirst ? (
            <React.Fragment key={i}>
              {figure}
              {caption}
            </React.Fragment>
          ) : (
            <React.Fragment key={i}>
              {caption}
              {figure}
            </React.Fragment>
          );
        })}
      </div>

      <footer style={{ textAlign: "center", marginTop: 48 }}>
        <div>Contact Me</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            marginTop: 12,
          }}
        >
          <a href="tel:+19199490347" style={styles.iconBox}>
            <img
              src="/images/tel.png"
              alt="Phone"
              style={{ width: 35, height: 35, objectFit: "contain" }}
            />
          </a>
          <a href="mailto:jiangxinzhezhe@outlook.com" style={styles.iconBox}>
            <img
              src="/images/email.png"
              alt="Email"
              style={{ width: 35, height: 35, objectFit: "contain" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/xinzhejiang/"
            target="_blank"
            rel="noreferrer"
            style={styles.iconBox}
          >
            <img
              src="/images/linkedin.png"
              alt="LinkedIn"
              style={{ width: 35, height: 35, objectFit: "contain" }}
            />
          </a>
        </div>
      </footer>
    </section>
  );
}

function Block(props: { style?: React.CSSProperties }) {
  return <div style={{ ...styles.placeholder, height: 180, ...props.style }} />;
}
function TextBlock() {
  return <p style={{ ...styles.bodyText, alignSelf: "center" }}>hi.</p>;
}
function TextBlock2() {
  return <p style={{ ...styles.bodyText, alignSelf: "center" }}>but</p>;
}
function CvSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginTop: 28 }}>
      <h3 style={styles.cvH3}>{title}</h3>
      {children}
    </section>
  );
}

function CvRow({
  left,
  right,
  position,
  body,
}: {
  left?: string;
  right?: string;
  position?: string;
  body?: string;
}) {
  let date = "";
  let location = "";
  if (right) {
    const normalized = right.replace(/\r/g, "");
    const [d, loc] = normalized.split(/\\|\n/);
    date = d || "";
    location = loc || "";
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 220px",
        gap: 18,
        marginTop: 10,
      }}
    >
      <div>
        {/* 公司 */}
        <div style={styles.cvLeft}>{left}</div>

        {/* 职位 */}
        {position && (
          <div
            style={{
              fontStyle: "italic",
              marginTop: 4,
              color: "#444",
            }}
          >
            {position}
          </div>
        )}

        {/* 内容支持换行 */}
        {body && (
          <div
            style={{
              ...styles.cvBody,
              whiteSpace: "pre-line",
              marginTop: 6,
            }}
          >
            {body}
          </div>
        )}
      </div>

      {/* 日期 + 地点 */}
      <div style={{ textAlign: "right" }}>
        <div>{date}</div>
        {location && <div style={{ marginTop: 4 }}>{location}</div>}
      </div>
    </div>
  );
}

function PhotoSection({
  title,
  desc,
  images,
  bg,
}: {
  title: string;
  desc?: string;
  images: string[];
  bg?: string;
}) {
  return (
    <section
      style={{
        padding: "40px 48px 64px",
        borderRadius: 12,
        background: bg || "transparent",
        marginBottom: 36,
      }}
    >
      <h2 style={{ ...styles.pageTitle, textAlign: "left", marginBottom: 8 }}>
        {title}
      </h2>
      {desc && (
        <p
          style={{
            ...styles.bodyText,
            color: "#f333333",
            maxWidth: 980,
            margin: "0 0 20px",
          }}
        >
          {desc}
        </p>
      )}
      <div className="masonry">
        {images.map((src, i) => (
          <div className="masonry-item" key={i}>
            <img src={src} alt={`${title} ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
function GameDetail({ id }: { id: string }) {
  const gameData: Record<string, any> = {
    ech8: {
      title: "Ech8 – Language-Based Puzzle Game",
      desc: "Ech8 is a scifi based puzzle game developed in Unreal Engine 5 that explores communication through symbolic grammar. The player learns an alien language through puzzles and decipher alien civilization. Developed using a hybrid of C++ and Blueprints.",
      steps: [
        {
          text: "Concept & Narrative Design — Built a symbolic language system inspired by linguistics and semiotics. Each puzzle reveals a new layer of communication.",
          img: "/images/ech8_dev/ech8_concept.jpg",
        },
        {
          text: "2️⃣ **Mechanic Prototyping** — Implemented dynamic grammar parsing and response logic using Blueprint + C++ hybrid scripts.",
          img: "/images/ech8_dev/ech8_blueprint.jpg",
        },
        {
          text: "3️⃣ **UI & Dialogue System** — Designed modular UI components for lexicon visualization and contextual feedback.",
          img: "/images/ech8_dev/ech8_ui.jpg",
        },
      ],
    },
    witchalchemy: {
      title: "Witch Kitchen - Cooking Alchemy Game",
      desc: "Witch Kitchen is a mystical alchemy game where players combine different ingredients to cook courses in the witch world. Developed with UE5 and C++, the game features an enchanting art style and immersive gameplay.",
      steps: [
        {
          text: "🔮 **Card System Design** — Created a modular tarot card system with unique attributes and effects.",
          img: "/images/witchalchemy_dev/witchalchemy_cards.jpg",
        },
        {
          text: "⚗️ **Alchemy Mechanics** — Developed potion crafting mechanics using C# scripts, allowing for dynamic combinations and outcomes.",
          img: "/images/witchalchemy_dev/witchalchemy_mechanics.jpg",
        },
      ],
    },
    cryrec: {
      title: "CryRec – Emotional Journaling App",
      desc: "CryRec is a mobile app that encourages emotional expression through daily journaling prompts and mood tracking. Developed with React Native and Firebase backend.",
      steps: [
        {
          text: "📱 Developed cross-platform mobile app with React Native.",
          img: "/images/cryrec_dev/cryrec_app.jpg",
        },
        {
          text: "🗄️ Built Firebase backend for secure data storage and user authentication.",
          img: "/images/cryrec_dev/cryrec_firebase.jpg",
        },
      ],
    },
    planetwars: {
      title: "Planet Wars Agent – Kotlin Greedy Agent",
      desc: "A competitive AI agent for the Planet Wars game, implemented in Kotlin. The agent uses greedy algorithms to optimize resource allocation and expansion strategies.",
      steps: [
        {
          text: "🤖 Designed greedy algorithm for resource management and expansion.",
          img: "/images/planetwars_dev/pw_algorithm.jpg",
        },
        {
          text: "💻 Implemented agent logic in Kotlin with efficient data structures.",
          img: "/images/planetwars_dev/pw_kotlin.jpg",
        },
      ],
    },
  };

  const game = gameData[id];
  if (!game) return <div style={{ padding: 48 }}>Game not found.</div>;

  return (
    <section style={{ padding: "40px 48px 80px" }}>
      <h2 style={styles.pageTitle}>{game.title}</h2>
      <p
        style={{ ...styles.bodyText, maxWidth: 800, margin: "16px auto 40px" }}
      >
        {game.desc}
      </p>

      {game.steps.map((s: any, i: number) => (
        <div key={i} style={{ marginBottom: 48 }}>
          <p
            style={{
              ...styles.bodyText,
              maxWidth: 800,
              margin: "0 auto 16px",
              lineHeight: 1.7,
            }}
            dangerouslySetInnerHTML={{ __html: s.text }}
          />
          {s.img && (
            <img
              src={s.img}
              alt={`Step ${i + 1}`}
              style={{
                width: "100%",
                maxWidth: 900,
                display: "block",
                margin: "0 auto",
                border: "none",
                borderRadius: 0,
                boxShadow: "none",
              }}
            />
          )}
        </div>
      ))}

      <div style={{ textAlign: "center", marginTop: 48 }}>
        <NavLink to="/game" style={{ textDecoration: "underline" }}>
          ← Back to Game
        </NavLink>
      </div>
    </section>
  );
}

const styles: { [k: string]: React.CSSProperties } = {
  page: {
    display: "grid",
    gridTemplateColumns: "180px 1fr",
    minHeight: "100vh",
    background: "#efe6e2",
    color: "#262626",
    fontFamily:
      "'Ibarra Real Nova', 'Playfair Display', Georgia, 'Times New Roman', serif",
  },
  nav: {
    alignSelf: "start",
    padding: "28px 20px",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    position: "sticky",
    top: 0,
  },
  navItem: {
    color: "#333",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 1.4,
  },
  main: {
    minHeight: "100vh",
  },
  h1: {
    fontSize: 124,
    margin: 0,
    fontWeight: 500,
  },
  tagline: {
    maxWidth: 760,
    marginTop: 28,
    fontSize: 16,
    lineHeight: 1.7,
    color: "#4a4a4a",
  },
  pageTitle: {
    fontSize: 48,
    fontWeight: 400,
    textAlign: "center",
    margin: 0,
  },
  bodyText: {
    color: "#3f3f3f",
    maxWidth: 700,
    // allow embedded newlines ("\n") in strings to render as line breaks
    whiteSpace: "pre-line",
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
    marginTop: 24,
    alignItems: "start",
  },
  placeholder: {
    background: "transparent",
    borderRadius: 6,
    boxShadow: "none",
    border: "none",
  },
  resumeBtn: {
    display: "inline-block",
    border: "1px solid #000",
    borderRadius: 6,
    padding: "8px 14px",
    textDecoration: "none",
    color: "#000",
  },
  iconBox: {
    width: 35,
    height: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    background: "none",
    padding: 0,
  },

  cvH3: {
    fontWeight: 400,
    fontSize: 20,
    margin: "16px 0 8px",
  },
  cvLeft: { fontWeight: 600 },
  cvRight: { textAlign: "right", whiteSpace: "pre-line" },
  cvBody: { color: "#333", marginTop: 6 },
};

const globalCss = `
  @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@400;500;600&display=swap');
  html { scroll-behavior: smooth; }
  a { text-decoration: none; }
  a:hover { text-decoration: underline; }

  /* === Masonry gallery === */
  /* === Masonry gallery === */
.masonry{ column-count:3; column-gap:24px; }
@media (max-width:1100px){ .masonry{ column-count:2; } }
@media (max-width:700px){ .masonry{ column-count:1; } }

.masonry-item{
  break-inside: avoid;
  margin-bottom:24px;
  overflow:hidden;
  border-radius:0 !important; 
  box-shadow:none !important; 
  border:none !important;    
}
.masonry-item img{
  width:100%;
  display:block;
  height:auto;
  border:none !important;
  box-shadow:none !important;
  border-radius:0 !important;   
}

`;
