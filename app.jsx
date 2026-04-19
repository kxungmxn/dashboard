import { useState, useEffect, useRef } from "react";

const SECTIONS = ["news", "sports", "jobs"];
const SECTION_LABELS = { news: "News", sports: "Sports", jobs: "Jobs" };

const SPORT_TABS = [
  { id: "f1", label: "F1" },
  { id: "tennis", label: "Tennis" },
  { id: "golf", label: "Golf" },
  { id: "nba", label: "NBA" },
  { id: "football", label: "Football" },
  { id: "highlights", label: "Highlights" },
];

const NEWS_TABS = [
  { id: "world", label: "World" },
  { id: "finance", label: "Finance" },
  { id: "ma", label: "M&A" },
  { id: "war", label: "Conflicts" },
  { id: "markets", label: "Markets" },
  { id: "korea", label: "Korea" },
];

export default function Dashboard() {
  return <div style={{ padding: 20, fontFamily: "system-ui" }}>
    <h1>Dashboard Ready!</h1>
    <p>Your dashboard is set up and ready to deploy.</p>
  </div>
}