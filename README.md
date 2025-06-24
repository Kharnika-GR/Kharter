# Kharter — Peer-to-Peer Skill Barter Platform

A full-stack web app where users **exchange skills instead of money**. Learn what you want by teaching what you know. Whether it’s graphic design for Python, or French for guitar — **Kharter** connects people to grow together, without a price tag.

> ✨ The name “Kharter” = Kharnika + Barter

---

## Features

- **Authentication**
  - Secure JWT-based Login/Register
  - Scalable for future Google/GitHub social login
- **Skill Profile Management**
  - Users add skills they can **teach** and **want to learn**
  - Availability and preferences support
- **Smart Matchmaking**
  - Auto-pairs compatible users based on skill barter
  - E.g., Alice wants to learn React, Bob can teach it & wants Figma
- **Chat & Scheduling**
  - In-app chat system with scheduling
  - WebRTC or Zoom-ready integration scope
- **Reputation System**
  - Post-session feedback & reporting
  - Trust-based skill exchange
- **User Dashboard**
  - Track barter stats, completed sessions, top learners
- **Gamification (Planned)**
  - Badges, XP, progress tracker

---

## Tech Stack

| Layer      | Tech                         | Purpose                                |
|------------|------------------------------|----------------------------------------|
| Frontend   | Angular (Standalone)         | Modern UI, routing, reactive forms     |
| Backend    | Node.js + Express            | API layer & authentication             |
| Database   | PostgreSQL                   | Stores users, skills, match history    |
| Auth       | JWT (JSON Web Tokens)        | Stateless, secure sessions             |
| Styling    | CSS3, Angular Animations     | Clean, responsive user experience      |

---

## 🖼Screenshots

| Register | Match Dashboard |
|----------|-----------------|
| ![](https://i.imgur.com/your-register.png) | ![](https://i.imgur.com/your-dashboard.png) |

---

## Getting Started

### 🔧 Clone the Project
```bash
git clone https://github.com/yourusername/kharter.git
cd kharter
