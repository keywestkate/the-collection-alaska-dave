# The Last Frontier Collection
## Website Architecture — Site Map & Structure

---

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                    THE LAST FRONTIER COLLECTION                                  ║
║                    lastfrontiercollection.com   [MAIN HUB]                       ║
║                                                                                  ║
║   HOME  |  THE CIRCUIT  |  FISHING  |  LODGING  |  SHOP ★  |  ABOUT  |  BOOK   ║
╚══════════════════════════════════════════════════════════════════════════════════╝
                          ★ SHOP lives exclusively here
                    All 3 stop sites link back to this shop
                               |
          ┌────────────────────┼────────────────────┐
          │                    │                    │
          ▼                    ▼                    ▼
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│   STOP 1        │  │   STOP 2        │  │   STOP 3        │
│  COOPER LANDING │  │ SOLDOTNA /      │  │    HOMER        │
│   [The Hub]     │  │  STERLING       │  │  [The Terminus] │
│                 │  │ [The Corridor]  │  │                 │
│ cooperlanding   │  │  soldotna       │  │  homer          │
│ .lastfrontier   │  │  .lastfrontier  │  │  .lastfrontier  │
│ collection.com  │  │  collection.com │  │  collection.com │
└────────┬────────┘  └────────┬────────┘  └────────┬────────┘
         │                    │                    │
    ┌────┴─────┐          ┌───┴──────┐        ┌───┴──────┐
    │ SECTIONS │          │ SECTIONS │        │ SECTIONS │
    ├──────────┤          ├──────────┤        ├──────────┤
    │ STAY     │          │ STAY     │        │ STAY     │
    │ FISH     │          │ FISH     │        │ FISH     │
    │ EAT      │          │ EAT      │        │ EAT      │
    │ DO       │          │ DO       │        │ DO       │
    │ WELLNESS │          │ WELLNESS │        │ WELLNESS │
    │ SHOPPING │          │ SHOPPING │        │ SHOPPING │
    │ → Shop ★ │          │ → Shop ★ │        │ → Shop ★ │
    └──────────┘          └──────────┘        └──────────┘
```

---

## Main Site — lastfrontiercollection.com

### Pages
| Page | Purpose |
|---|---|
| Home | The Alaska Circuit overview — all 3 stops, the guide, the vision |
| The Circuit | Full itinerary package — book all 3 stops as one trip |
| Fishing | Dave Lisi guide overview — all fishing types, rates, FareHarbor booking |
| Lodging | All 12 properties listed by node |
| **Shop** ★ | Apparel + gear — Elite Angler & Lifestyle collections (WooCommerce) |
| About | Dave Lisi bio, credentials, YouTube, team |
| Contact | Unified contact + booking inquiry |
| Book Now | FareHarbor unified booking |

---

## Stop 1 — Cooper Landing
**Domain:** cooperlanding.lastfrontiercollection.com (or cooperlanding-lfc.com)

### Properties at this stop:
- Alaska Heavenly Lodge (Flagship) — alaskaheavenly.com
- Heavenly Duplexes
- 4 Acre Flats (Foraker Flats)
- Scotch Run
- Salmon Run Lodge

### Site Sections:
| Section | Content |
|---|---|
| **STAY** | All 5 lodge/cabin properties, rates, availability, FareHarbor booking |
| **FISH** | Upper Kenai River trout fishing, Dave Lisi guided trips, trophy rainbow trout |
| **EAT** | Local Cooper Landing restaurants, dining recommendations |
| **DO** | Activities — wildlife viewing, hiking, weddings, kayaking, float trips |
| **WELLNESS** | Hot tub, sauna at Alaska Heavenly Lodge; nature/recovery experiences |
| **SHOPPING** | Link → lastfrontiercollection.com/shop |

---

## Stop 2 — Soldotna / Sterling
**Domain:** soldotna.lastfrontiercollection.com (or soldotna-lfc.com)

### Properties at this stop:
- Alaska Moose & Spruce / Keen Eye (7 cabins + 1 house)
- Kenai Adventure Cabins
- Kenai Kuik Cabins

### Site Sections:
| Section | Content |
|---|---|
| **STAY** | All 3 cabin properties, direct booking (off Airbnb/VRBO), FareHarbor |
| **FISH** | Lower Kenai River salmon guiding — King, Sockeye, Silver; Kasilof River |
| **EAT** | Soldotna/Sterling local dining guide |
| **DO** | River excursions, wildlife, ATV trails, Kenai National Wildlife Refuge |
| **WELLNESS** | Keen Eye active recovery program; nature wellness |
| **SHOPPING** | Link → lastfrontiercollection.com/shop |

---

## Stop 3 — Homer
**Domain:** homer.lastfrontiercollection.com (or homer-lfc.com)

### Properties at this stop:
- Jellyfish / Ocean Bluff (Clam Gulch) — 3BR/2BA boutique
- Baycrest Lodge — baycrestlodge.com
- Driftwood Inn & Lodges — thedriftwoodinn.com
- Flat Fish Lodge (halibut/salmon charters)

### Site Sections:
| Section | Content |
|---|---|
| **STAY** | All 4 Homer properties, rates, availability, booking |
| **FISH** | Pacific halibut charters, Kachemak Bay salmon, Flat Fish Lodge trips |
| **EAT** | Homer local dining — Spit restaurants, waterfront, local favorites |
| **DO** | Whale watching, Kachemak Bay State Park, art galleries, boat tours, flyouts |
| **WELLNESS** | Kachemak Bay views, spa, coastal walks, recovery stays |
| **SHOPPING** | Link → lastfrontiercollection.com/shop |

---

## How the Sites Connect

```
Every stop site has:
  ├── Header nav with "The Last Frontier Collection" logo → links to main site
  ├── "Shop" nav item → links to lastfrontiercollection.com/shop
  ├── "Book The Full Circuit" CTA → links to lastfrontiercollection.com/the-circuit
  └── Footer with links to all 3 stops + main site
```

---

## Build Order (Recommended)

| Phase | What | Why |
|---|---|---|
| 1 | Main site (lastfrontiercollection.com) | Hub must exist first — shop, booking, brand |
| 2 | Stop 1 — Cooper Landing | Most content exists (alaskaheavenly.com) |
| 3 | Stop 2 — Soldotna | kenaicabinrentals.com content available |
| 4 | Stop 3 — Homer | Built from scratch (most new content needed) |

---

*Architecture — The Last Frontier Collection · April 2026*
