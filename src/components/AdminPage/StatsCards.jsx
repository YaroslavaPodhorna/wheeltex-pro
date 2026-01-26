import React from "react";
import css from "../../components/AdminPage/StatsCards.module.css";

const icons = {
  total: "📅",
  pending: "⏳",
  confirmed: "✅",
  completed: "🎉",
};

export default function StatsCards({ appointments }) {
  const stats = {
    total: appointments.length,
    pending: appointments.filter((a) => a.status === "pending").length,
    confirmed: appointments.filter((a) => a.status === "confirmed").length,
    completed: appointments.filter((a) => a.status === "completed").length,
  };

  const cards = [
    {
      key: "total",
      label: "Total Appointments",
      value: stats.total,
      color: "blue",
      icon: icons.total,
    },
    {
      key: "pending",
      label: "Pending",
      value: stats.pending,
      color: "yellow",
      icon: icons.pending,
    },
    {
      key: "confirmed",
      label: "Confirmed",
      value: stats.confirmed,
      color: "blue",
      icon: icons.confirmed,
    },
    {
      key: "completed",
      label: "Completed",
      value: stats.completed,
      color: "green",
      icon: icons.completed,
    },
  ];

  return (
    <div className={css.statsContainer}>
      {cards.map((card) => (
        <div key={card.key} className={`${css.card} ${css[card.color]}`}>
          <div className={css.cardContent}>
            <div className={css.cardText}>
              <p className={css.label}>{card.label}</p>
              <p className={css.value}>{card.value}</p>
            </div>
            <div className={css.iconContainer}>
              <span className={css.icon}>{card.icon}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
