"use client";

import { useEffect, useRef, useState } from "react";
import { Car, Users, CalendarCheck, Star } from "lucide-react";

const stats = [
  { icon: Car, value: 12500, suffix: "+", label: "Araç İncelendi" },
  { icon: Users, value: 2400, suffix: "+", label: "Mutlu Müşteri" },
  { icon: CalendarCheck, value: 8, suffix: "+", label: "Yıl Deneyim" },
  { icon: Star, value: 4.9, suffix: "/5", label: "Google Puanı", decimals: 1 },
];

function useCountUp(end: number, duration = 2000, decimals = 0, shouldStart = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, decimals, shouldStart]);

  return count;
}

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  decimals = 0,
  inView,
}: {
  icon: typeof Car;
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  inView: boolean;
}) {
  const count = useCountUp(value, 2000, decimals, inView);

  return (
    <div className="text-center">
      <Icon className="h-8 w-8 text-accent mx-auto mb-3" />
      <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        {suffix}
      </div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section ref={ref} className="py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
