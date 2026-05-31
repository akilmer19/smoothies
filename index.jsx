import { useState } from "react";
 
const SMOOTHIES = [
  {
    name: "Tropical Green",
    desc: "Mango and banana completely mask the spinach — creamy, tropical, and packed with greens.",
    protein: "~22g",
    cal: "~310",
    servings: 2,
    tags: ["Post-Workout", "High Protein"],
    color: "#4a7c59",
    ingredients: [
      "2 cups unsweetened almond milk",
      "2 scoops Vega One (vanilla)",
      "2 big handfuls fresh spinach",
      "1 cup frozen mango chunks",
      "1 frozen banana",
      "2 tsp wild raw honey",
    ],
    steps: [
      "Add almond milk and spinach to the blender first. Blend for 10–15 seconds until the spinach is fully broken down — no chunks.",
      "Add frozen mango, frozen banana, Vega One, and honey.",
      "Blend on high until completely smooth and creamy, about 30–45 seconds.",
      "Pour into two glasses and serve immediately.",
    ],
    tips: "Use frozen banana for a thick, milkshake-like texture. Fresh banana makes it thinner and less cold.",
  },
  {
    name: "Strawberry PB&J Vibe",
    desc: "Walnuts give it a nutty richness that plays off the strawberries almost like a PB&J.",
    protein: "~26g",
    cal: "~380",
    servings: 2,
    tags: ["High Protein", "Nutty"],
    color: "#b5434b",
    ingredients: [
      "2 cups unsweetened almond milk",
      "1 cup strawberries (fresh or frozen)",
      "1 frozen banana",
      "1/4 cup walnuts",
      "2 scoops Vega One (vanilla)",
      "2 tsp wild raw honey",
      "2 tbsp green non-fat plain yogurt (optional, for thickness)",
    ],
    steps: [
      "Add almond milk and walnuts to the blender. Blend for 10 seconds to break down the walnuts.",
      "Add strawberries, frozen banana, Vega One, and honey.",
      "Blend on high until smooth, about 30–45 seconds.",
      "If you want it thicker and tangier, add yogurt and blend another 10 seconds.",
      "Pour into two glasses and serve.",
    ],
    tips: "The walnuts add healthy fats and omega-3s. Blend them first so you don't get gritty chunks.",
  },
  {
    name: "Mango Lassi-ish",
    desc: "Tastes like a mango lassi without the heaviness. Yogurt carries the protein here — skip the Vega One.",
    protein: "~10g",
    cal: "~260",
    servings: 2,
    tags: ["Light", "Recovery"],
    color: "#d4913a",
    ingredients: [
      "1.5 cups unsweetened almond milk",
      "1/2 cup green non-fat plain yogurt",
      "1 cup frozen mango chunks",
      "1 fresh banana",
      "2 tsp wild raw honey",
      "2 tbsp coconut flakes (for topping)",
    ],
    steps: [
      "Add almond milk, yogurt, frozen mango, banana, and honey to the blender.",
      "Blend on high until completely smooth, about 30 seconds.",
      "Pour into two glasses.",
      "Sprinkle coconut flakes on top for crunch and serve.",
    ],
    tips: "No Vega One in this one — the yogurt keeps it lighter and the flavor cleaner. Great as a lighter option on rest days.",
  },
  {
    name: "Power Green",
    desc: "The densest of the bunch — almonds add texture and healthy fats, banana and honey keep it from tasting like lawn clippings.",
    protein: "~28g",
    cal: "~420",
    servings: 2,
    tags: ["Post-Workout", "High Protein", "Dense"],
    color: "#3d6b4f",
    ingredients: [
      "2 cups unsweetened almond milk",
      "2 scoops Vega One (vanilla)",
      "2 big handfuls fresh spinach",
      "1 frozen banana",
      "1/4 cup almonds",
      "4 tbsp green non-fat plain yogurt",
      "2 tsp wild raw honey",
    ],
    steps: [
      "Add almond milk, almonds, and spinach to the blender. Blend 15 seconds until spinach is broken down and almonds are pulverized.",
      "Add frozen banana, yogurt, Vega One, and honey.",
      "Blend on high until thick and smooth, about 45 seconds.",
      "Pour into two glasses and serve immediately.",
    ],
    tips: "This is the heaviest one — great after lifting. If it's too earthy from the Vega One, bump the honey up to 1 tbsp each.",
  },
];
 
function SmoothieCard({ s, isOpen, toggle }) {
  return (
    <div
      style={{
        background: "#faf8f4",
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid #ece7df",
        transition: "box-shadow 0.2s",
        boxShadow: isOpen ? "0 4px 20px rgba(45,42,38,0.08)" : "0 1px 4px rgba(45,42,38,0.04)",
      }}
    >
      <div
        onClick={toggle}
        style={{
          padding: "18px 20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 14,
          userSelect: "none",
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: s.color,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 3h14l-1.5 15a2 2 0 01-2 1.8H8.5a2 2 0 01-2-1.8L5 3z"
              stroke="#faf8f4"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M8 3V2M12 3V1M16 3V2" stroke="#faf8f4" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M9 8c1 2 5 2 6 0" stroke="#faf8f4" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 16,
              color: "#2d2a26",
              lineHeight: 1.3,
            }}
          >
            {s.name}
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "#8a8278",
              lineHeight: 1.4,
              marginTop: 2,
            }}
          >
            {s.desc}
          </div>
        </div>
        <span
          style={{
            fontSize: 14,
            color: "#b5ab9a",
            transition: "transform 0.2s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
            flexShrink: 0,
          }}
        >
          {"\u25BC"}
        </span>
      </div>
 
      {/* Badges */}
      <div style={{ padding: "0 20px 14px", display: "flex", gap: 8, flexWrap: "wrap" }}>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11.5,
            fontWeight: 600,
            color: "#4a7c59",
            background: "#e8f0ea",
            padding: "3px 10px",
            borderRadius: 20,
          }}
        >
          {s.protein} protein / person
        </span>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11.5,
            fontWeight: 600,
            color: "#8a7248",
            background: "#f5efe4",
            padding: "3px 10px",
            borderRadius: 20,
          }}
        >
          {s.cal} / person
        </span>
        {s.tags.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 500,
              color: "#7a7570",
              background: "#f0ece6",
              padding: "3px 9px",
              borderRadius: 20,
            }}
          >
            {t}
          </span>
        ))}
      </div>
 
      {/* Expandable content */}
      {isOpen && (
        <div
          style={{
            padding: "0 20px 20px",
            borderTop: "1px solid #ece7df",
            marginTop: 0,
          }}
        >
          {/* Servings */}
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              color: "#8a8278",
              fontWeight: 600,
              marginTop: 16,
              marginBottom: 6,
              textTransform: "uppercase",
              letterSpacing: 0.8,
            }}
          >
            Makes {s.servings} servings
          </div>
 
          {/* Ingredients */}
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              color: "#2d2a26",
              marginTop: 14,
              marginBottom: 8,
            }}
          >
            Ingredients
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {s.ingredients.map((ing, i) => (
              <div
                key={i}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: "#4a4540",
                  lineHeight: 1.5,
                  paddingLeft: 14,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 7,
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: s.color,
                    opacity: 0.5,
                  }}
                />
                {ing}
              </div>
            ))}
          </div>
 
          {/* Steps */}
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              color: "#2d2a26",
              marginTop: 18,
              marginBottom: 8,
            }}
          >
            Steps
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {s.steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 7,
                    background: s.color,
                    color: "#faf8f4",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  {i + 1}
                </div>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "#4a4540",
                    lineHeight: 1.5,
                  }}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
 
          {/* Tip */}
          {s.tips && (
            <div
              style={{
                marginTop: 16,
                padding: "12px 14px",
                background: "#f5f2ec",
                borderRadius: 10,
                borderLeft: `3px solid ${s.color}`,
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11.5,
                  fontWeight: 700,
                  color: "#6b6560",
                  textTransform: "uppercase",
                  letterSpacing: 0.6,
                }}
              >
                Tip
              </span>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12.5,
                  color: "#5a554f",
                  lineHeight: 1.5,
                  marginTop: 4,
                }}
              >
                {s.tips}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
 
export default function SmoothieRecipes() {
  const [openIdx, setOpenIdx] = useState(null);
 
  return (
    <div
      style={{
        maxWidth: 540,
        margin: "0 auto",
        padding: "28px 16px",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div style={{ marginBottom: 24 }}>
        <h1
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 26,
            fontWeight: 800,
            color: "#2d2a26",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Smoothie Recipes
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            color: "#8a8278",
            margin: "6px 0 0",
            lineHeight: 1.5,
          }}
        >
          4 rotations using what you have on hand. Tap any card to see the full recipe. All servings are for 2 people.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {SMOOTHIES.map((s, i) => (
          <SmoothieCard
            key={s.name}
            s={s}
            isOpen={openIdx === i}
            toggle={() => setOpenIdx(openIdx === i ? null : i)}
          />
        ))}
      </div>
    </div>
  );
}
