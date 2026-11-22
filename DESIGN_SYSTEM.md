# 🎨 DESIGN SYSTEM — Ashirwad Homestay

> Claude, read this file at the start of every session.
> Think like a **Senior UX/UI Designer** — not just a developer.
> Warm, homey, authentic mountain homestay. NOT a luxury hotel.

---

## 👤 About This Project

- **Business:** Ashirwad Homestay — Two independent 2-BHK sets
- **Hosts:** Ahin Pande & Divya Pande
- **Location:** Industrial Area, Bhimtal, Uttarakhand (near Gorakhpur Chauraha)
- **Contact:** +91-7906174040
- **Website:** ashirwadhomestay.in
- **Target audience:** Kainchi Dham pilgrims, 7 Taals lake explorers, weekend getaway travelers from Delhi NCR / Lucknow / Kanpur
- **Brand vibe:** Warm, homey, authentic Kumaoni mountain homestay
- **Core goal:** Generate WhatsApp/phone bookings

---

## 🎨 Color Palette (from tokens.css)

```
Forest (Primary):         #1A3A2A  — navbar, footer, dark CTAs
Forest Light:             #2A5A40  — hover states
Terracotta (CTA):         #D97B4A  — buttons, eyebrows, underlines
Terracotta Dark:          #C0672F  — hover on terracotta
Teal (Feature):           #2E7D8A  — trust bar icons, badges
Teal Light:               #3E9DAE  — teal hover
Marigold (Highlight):     #F2C46B  — hero eyebrow, brand accent, spiritual
Marigold Dark:            #D4A040  — marigold hover
Cream (Warm BG):          #F5F0E8  — warm sections
Cream Dark:               #EAE4D6  — cream hover
Off-white (Base):         #FAFAF7  — page background
Text Primary:             #1C1C1A
Text Secondary:           #6B6760
Text Muted:               #9B9890
Surface Card:             #FFFFFF
Surface Dark:             #1A3A2A  — footer
WhatsApp Green:           #25D366  — always use for WhatsApp CTAs
```

---

## 🔤 Typography (from tokens.css + Google Fonts)

```
Display / Headings:  'Playfair Display', Georgia, serif
Body:                'DM Sans', system-ui, sans-serif
Accent / Stamp:      'Bebas Neue', Impact, sans-serif

H1 (hero):     clamp(40px, 6vw, 72px) — Playfair Display, bold
H2 (section):  clamp(28px, 3.5vw, 48px) — Playfair Display
H3 (card):     22px — Playfair Display
Body:          16px / line-height 1.7 — DM Sans
Small:         14px
Eyebrow:       12px, 0.22em letter-spacing, UPPERCASE — terracotta color
```

---

## 📐 Layout & Spacing (from tokens.css)

```
Max content width:    1280px
Max text width:       780px
Section padding:      80px top/bottom (desktop), 48px (mobile)
Card border-radius:   16px
Button border-radius: 9999px (pill)
Grid gaps:            24px (desktop), 16px (mobile)
Nav height:           72px
Bottom bar height:    68px (mobile fixed)

Spacing scale (4px base):
--space-1: 4px   --space-2: 8px   --space-4: 16px  --space-6: 24px
--space-8: 32px  --space-10: 40px --space-12: 48px --space-16: 64px
--space-20: 80px --space-24: 96px
```

---

## 🖼️ Image Assets (in /images/ folder)

```
EXTERIOR:
ext-front-day-1.jpg        — Gate open, yellow flowers, mountains (HERO candidate)
ext-front-day-2.jpg        — With Ashirwad signboards
ext-front-night-1.jpg      — BEST: Illuminated night shot (PRIMARY HOMEPAGE HERO)
ext-front-night-2.jpg      — Night variant
ext-compound-garden.jpg    — Inside garden, pathway
ext-garden-roses.jpg       — Rose wall, colorful flowers
ext-garden-flowers.jpg     — Yellow/orange flowers close-up
ext-veranda-4chairs.jpg    — Covered veranda, 4 salmon chairs + table
ext-veranda-outdoor.jpg    — Veranda with door visible
ext-stairs-side.jpg        — Side stairs of property

ROOMS:
room-double-full.jpg       — BEST double room: bed + wardrobe + chairs (HERO)
room-double-tv.jpg         — TV panel + chairs angle
room-double-bed.jpg        — Double bed close-up
room-twin-full.jpg         — Both twin beds with curtains
room-twin-angle.jpg        — Twin beds angle 2
room-hall-chairs.jpg       — Hall seating: 2 pink chairs + table
room-hall-bathroom.jpg     — Hall opening toward bathroom
room-chairs-closeup.jpg    — Chairs close-up detail

KITCHEN:
kitchen-full-wide.jpg      — BEST: Full blue kitchen wide shot
kitchen-counter-top.jpg    — Countertop with all utensils
kitchen-sink-geyser.jpg    — Sink corner with geyser
kitchen-upper-cabinets.jpg — With upper cabinets visible
kitchen-corner.jpg         — Corner angle

BATHROOM:
bath-fancy-vanity.jpg      — Dandelion tile + navy vanity (USE THIS — more premium)
bath-classic-full.jpg      — Moroccan tile + toilet + shower

LOCATION (KEY USP EVIDENCE):
loc-kainchi-sign.jpg       — Official govt sign: "Kainchi Dham →" (USE ON EVERY LOCATION SECTION)
loc-kainchi-sign-2.jpg     — Sign with traffic in background
loc-kainchi-sign-3.jpg     — Sign with "1.5 Km away" notice board
loc-shuttle-vans.jpg       — Packed shuttle vans + mountains
loc-police-check.jpg       — Police barricade (proof of mandatory rule)
loc-shuttle-taxi.jpg       — Taxi queue at parking

BRAND:
brand-banner.jpg           — Ashirwad Homestay flex banner

TODO PHOTOS (placeholders — add when available):
TODO_photo_lake-bhimtal.jpg
TODO_photo_lake-sattal.jpg
TODO_photo_lake-naukuchiatal.jpg
TODO_photo_balcony.jpg
TODO_photo_food.jpg
TODO_photo_host.jpg
TODO_photo_morning-exterior.jpg
```

---

## 🧩 Existing Pages

| Page | File | Status |
|------|------|--------|
| Home | index.html | Rebuilt |
| Rooms & Rates | rooms.html | Rebuilt |
| Location | location.html | Rebuilt |
| Gallery | gallery.html | Updated |
| Food | food.html | NEW |
| Amenities | amenities.html | Updated |
| About | about.html | Updated |
| Book Now | book.html | Updated |

---

## 💰 Pricing

```
Single Set (A or B):     ₹4,000/night weekday | ₹4,500/night weekend + peak
Both Sets together:      ₹7,500/night weekday | ₹8,000/night peak
Long Stay (3+ nights):   10% discount
Pilgrim Day-Use:         ₹700 (freshen up + luggage storage, 6AM–8PM, no overnight)
```

**Value framing copy:**
"A single hotel room in Bhimtal costs ₹1,300–₹2,500 in peak season.
Ashirwad gives you a full 2-BHK — 2 rooms + kitchen + bathroom — for ₹4,000.
For a family of 4, that's just ₹1,000 per person per night."

---

## ✨ Design Principles

### 1. Feel, Don't Just Look
Every section creates an emotion — warmth, trust, peace, spiritual connection.

### 2. Visual Hierarchy is Everything
Kainchi Dham shuttle (200m) = #1 message. Never bury it.

### 3. Whitespace = Breathing Room
Mountain feel = open, airy, uncluttered.

### 4. Micro-interactions Build Trust
Hover lifts, scroll reveals, smooth transitions.

### 5. Mobile is Primary
Most pilgrim/tourist traffic comes on mobile phones. Design 375px first.

### 6. WhatsApp is the Booking Engine
Every page must have a visible WhatsApp CTA. It is the primary conversion action.

### 7. Real Photos = Real Trust
Use actual property photos everywhere. Never use stock or gradient placeholders in hero sections.

---

## 🚀 Animation Guidelines

```css
/* Standard transition */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Hover lift */
transform: translateY(-4px);
box-shadow: 0 20px 40px rgba(26,58,42,0.14);

/* Scroll reveal */
opacity: 0 → 1, translateY(20px) → translateY(0)
duration: 0.6s, stagger 0.1s per element
```

**Allowed:** Scroll fade/slide, hover states, subtle parallax, Ken Burns on hero
**Avoid:** Auto-playing carousels, delays >0.5s, flashy distracting animations

---

## 🃏 Component Patterns

### Buttons
- `.btn--primary` — Terracotta filled, pill shape, hover lift -2px
- `.btn--outline` — White border, transparent
- `.btn--outline-dark` — Forest border, fills on hover
- `.btn--whatsapp` — #25D366, always visible, pill shape

### Cards
- 16px radius, shadow-md, hover lift -4px + shadow-lg
- Never flat and static

### Navigation
- Sticky, glassmorphic blur on scroll
- Transparent (`.navbar--hero`) on hero pages
- Mobile: hamburger + slide-in drawer + bottom bar with price

### Eyebrow Text
- `.eyebrow` — 12px, 0.22em tracking, uppercase, terracotta color
- Always precedes section headlines

### Badges
- `.badge--forest` — Cream bg, forest text
- `.badge--teal` — Teal bg, teal text
- `.badge--marigold` — Marigold bg, orange text

---

## ⚠️ Rules Claude Must Never Break

1. Always show 200m shuttle proximity prominently — it's the #1 conversion point
2. WhatsApp CTA must be visible on every page (floating button + section CTAs)
3. Never use Lorem Ipsum — use real Ashirwad content
4. Never remove existing working functionality
5. Always test at 375px, 768px, 1280px
6. Contact number is always: +91-7906174040
7. WhatsApp pre-fill message: "Hello! I'd like to book Ashirwad Homestay, Bhimtal. Please share availability."
8. TODO_photo_* items = placeholder div with descriptive label, NOT broken img tags
