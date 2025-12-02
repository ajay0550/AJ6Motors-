import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import "./Reviews.css";

const Marquee = ({ children, direction = "left", speed = 50 }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth);
    }
  }, [children]);

  return (
    <div className="marquee-container">
      <div
        className="marquee-track"
        style={{
          animation: `scroll-${direction} ${width / speed}s linear infinite`,
        }}
      >
        <div ref={ref} className="marquee-group">
          {children}
        </div>
        <div className="marquee-group">{children}</div>
      </div>
    </div>
  );
};

const ReviewCard = ({ avatar, name, rating, review }) => (
  <div className="review-card">
    <div className="review-top">
      <img src={avatar} alt={name} className="review-avatar" />

      <div>
        <h3 className="review-name">{name}</h3>

        <div className="review-stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              color={i < rating ? "#facc15" : "#999"}
              fill={i < rating ? "#facc15" : "none"}
            />
          ))}
        </div>
      </div>
    </div>

    <p className="review-text">{review}</p>
  </div>
);

export default function ReviewSection() {
  const reviews = [
    {
      id: 1,
      name: "Nagella Vihari",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      rating: 5,
      review:
        "Very good experience with this service Center. Owner is well experienced and knowledgeable. Did thorough checks before and after the service & repair works. Transparent prices and upfront communication on the costs associated with repairs.",
    },
    {
      id: 2,
      name: "Rocky Rowzani",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 5,
      review:
        "Wonderful experience, they did a video showed the oil change, car filter, diesel filter, and everything I would recommend each and everyone to come and have a best experience. Thank you.",
    },
    {
      id: 3,
      name: "Garima Deka",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      rating: 5,
      review:
        "I gave my car for general service and I must say Mr. Srinivas and his team did a very good job. We are really satisfied with the work they did.",
    },
    {
      id: 4,
      name: "Burry Venkateshwar Rao",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 5,
      review:
        "Mr. Srinivas is a very good person. Professionally and personally he is one of the best. His technical knowledge is exceptional and  he deals every vehicle with utmost care. Service charges also reasonable.",
    },
  ];

  return (
    <div className="review-section-wrapper">
      <h2 className="review-title">What Our Customers Say</h2>

      <Marquee direction="left" speed={30}>
        {reviews.map((r) => (
          <ReviewCard key={r.id} {...r} />
        ))}
      </Marquee>
      <a 
      href="https://www.google.com/maps/place/AJ6+Motors+Car+Service+Centre/@17.5382904,78.4884428,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb85997367c6e5:0x4f7d4c41f6767345!8m2!3d17.5382904!4d78.4908958!16s%2Fg%2F11vd8wsszy?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      >
      <button>Read more here</button>
      </a>
    </div>
  );
}
