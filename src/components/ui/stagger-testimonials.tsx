"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    tempId: 0,
    testimonial:
      "I experienced remarkable relief from chronic lower back pain that had persisted for years. Dr. Sajitha designed a personalized 7-day Abhyangam and herbal oil therapy that transformed my mobility.",
    by: "Fatima Al-Suwaidi",
    role: "Patient (Abhyangam & Spine Care)",
    location: "Abu Dhabi",
  },
  {
    tempId: 1,
    testimonial:
      "The Nasyam treatment at this center was highly effective for my chronic sinus issues and migraines. After completing my sessions, my breathing is clear and I feel completely rejuvenated.",
    by: "Zayed Al-Mansoori",
    role: "Patient (Nasyam Therapy)",
    location: "Khalidiya",
  },
  {
    tempId: 2,
    testimonial:
      "The Shirodhara treatment was the most profoundly calming experience of my life. After just three sessions, my chronic insomnia and anxiety had reduced noticeably. I now sleep deeply and wake refreshed.",
    by: "Aisha Al-Ali",
    role: "Patient (Shirodhara Therapy)",
    location: "Al Reem Island",
  },
  {
    tempId: 3,
    testimonial:
      "After struggling with knee pain for over five years and being advised surgery by multiple orthopedists, the herbal protocol and targeted Elakizhi therapy restored my mobility completely.",
    by: "Mohammed Al-Shehhi",
    role: "Patient (Joint Pain Management)",
    location: "Al Mushrif",
  },
  {
    tempId: 4,
    testimonial:
      "The hospitality, cleanliness, and expertise of the doctors at Kottakkal Arya Vaidyasala are unmatched. Truly a sanctuary for authentic Ayurvedic healing in Abu Dhabi.",
    by: "Meera Al-Mheiri",
    role: "Patient (Rejuvenation Care)",
    location: "Al Khalidiya",
  },
  {
    tempId: 5,
    testimonial:
      "I highly recommend their stress relief packages. The Indian head massage and customized therapies completely melted away my work fatigue and mental stress.",
    by: "Salem Al-Dhaheri",
    role: "Patient (Stress Management)",
    location: "Yas Island",
  },
];

interface TestimonialCardProps {
  position: number;
  testimonial: (typeof testimonials)[0];
  handleMove: (steps: number) => void;
  cardWidth: number;
  cardHeight: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardWidth,
  cardHeight,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute top-1/2 left-1/2 flex cursor-pointer flex-col justify-between rounded-2xl border-2 p-6 transition-all duration-500 ease-in-out select-none sm:p-8",
        isCenter
          ? "bg-brand-primary border-brand-gold z-10 scale-100 text-white opacity-100 shadow-2xl"
          : "text-brand-dark hover:border-brand-gold/50 pointer-events-none z-0 scale-90 border-gray-200 bg-white opacity-0 hover:opacity-75 sm:pointer-events-auto sm:opacity-40"
      )}
      style={{
        width: cardWidth,
        height: cardHeight,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardWidth / 1.3) * position}px)
          translateY(${isCenter ? -10 : position % 2 ? 10 : -10}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
      }}
    >
      <div>
        <div className="mb-4 flex items-center">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="fill-brand-gold text-brand-gold h-3.5 w-3.5"
              />
            ))}
          </div>
        </div>

        <div className="relative">
          <Quote
            className={cn(
              "absolute -top-2 -left-2 h-8 w-8 opacity-5",
              isCenter ? "text-white" : "text-brand-primary"
            )}
          />
          <h3
            className={cn(
              "relative z-10 mb-4 line-clamp-5 pl-4 text-xs leading-relaxed font-medium italic sm:line-clamp-none sm:text-base",
              isCenter ? "text-white" : "text-brand-dark"
            )}
          >
            "{testimonial.testimonial}"
          </h3>
        </div>
      </div>

      <div>
        <h4
          className={cn(
            "text-sm font-bold",
            isCenter ? "text-brand-gold" : "text-brand-primary"
          )}
        >
          {testimonial.by}
        </h4>
        <p
          className={cn(
            "text-[10px] sm:text-[11px]",
            isCenter ? "text-white/70" : "text-gray-500"
          )}
        >
          {testimonial.role} <span className="mx-1">•</span>{" "}
          {testimonial.location}
        </p>
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardWidth, setCardWidth] = useState(365);
  const [cardHeight, setCardHeight] = useState(320);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width >= 640) {
        setCardWidth(365);
        setCardHeight(320);
      } else {
        // Fluid width: screen width minus padding, clamped between 260px and 320px
        setCardWidth(Math.max(260, Math.min(width - 32, 320)));
        setCardHeight(280);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Swipe Gestures Support for Mobile Devices
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      handleMove(1);
    } else if (isRightSwipe) {
      handleMove(-1);
    }
  };

  // Auto-play slideshow logic (plays every 3.2 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      handleMove(1);
    }, 3200);
    return () => clearInterval(interval);
  }, [testimonialsList]);

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="bg-brand-cream/40 border-brand-gold/10 relative h-[320px] w-full overflow-hidden rounded-[2.5rem] border py-10 select-none sm:h-[380px]"
    >
      {/* Premium ambient gold backlighting glow behind active card */}
      <div className="bg-brand-gold/15 pointer-events-none absolute top-1/2 left-1/2 z-0 h-64 w-64 -translate-x-1/2 -translate-y-[60%] rounded-full blur-[70px] filter" />

      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2
            ? index - (testimonialsList.length - 1) / 2
            : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
          />
        );
      })}
    </div>
  );
};
