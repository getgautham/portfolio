/*
  The map diary. One entry per spot; the page builds everything else
  (pins, list, stats, share cards) from this array.

  id      URL slug, used for share links: gautham.live/map#<id>
  name    The spot itself
  city    Suburb or town it sits in
  country Country name, as you want it shown
  cc      Two-letter country code (sets the flag emoji)
  group   Heading it is listed under (optional; defaults to the country)
  lat/lng Coordinates. In Apple Maps: drop a pin, swipe up, copy them.
  kind    library | campus | eat | drink | view | nature | culture | stay | night
  emoji   What shows on the pin
  when    "YYYY-MM" you were there (optional)
  note    One line on why it's cool (optional)
*/
window.MAP_META = {
  title: "Places I've been",
  tagline: "Sydney's libraries and campuses, pinned."
};

window.PLACES = [
  /* ---------- City of Sydney Library: the nine core branches ---------- */
  {
    id: "customs-house-library", name: "Customs House Library", city: "Circular Quay",
    country: "Australia", cc: "AU", group: "City of Sydney Library",
    lat: -33.86155, lng: 151.21035, kind: "library", emoji: "⚓️",
    note: "Harbourside 1840s customs house. There's a model of the whole city under the glass floor in the foyer."
  },
  {
    id: "darling-square-library", name: "Darling Square Library", city: "Haymarket",
    country: "Australia", cc: "AU", group: "City of Sydney Library",
    lat: -33.87685, lng: 151.20225, kind: "library", emoji: "🪵",
    note: "Levels 1–2 of The Exchange, Kengo Kuma's round building wrapped in 20 km of timber ribbons. Makerspace inside."
  },
  {
    id: "glebe-library", name: "Glebe Library", city: "Glebe",
    country: "Australia", cc: "AU", group: "City of Sydney Library",
    lat: -33.87920, lng: 151.18620, kind: "library", emoji: "📚",
    note: "186 Glebe Point Road, in the middle of the cafés and bookshops."
  },
  {
    id: "green-square-library", name: "Green Square Library", city: "Zetland",
    country: "Australia", cc: "AU", group: "City of Sydney Library",
    lat: -33.90610, lng: 151.20400, kind: "library", emoji: "🌿",
    note: "Built mostly underground, with a sunken garden and a glass tower poking up out of the plaza."
  },
  {
    id: "kings-cross-library", name: "Kings Cross Library", city: "Potts Point",
    country: "Australia", cc: "AU", group: "City of Sydney Library",
    lat: -33.87400, lng: 151.22460, kind: "library", emoji: "🌃",
    note: "Darlinghurst Road, a short walk from the Coke sign and Fitzroy Gardens."
  },
  {
    id: "newtown-library", name: "Newtown Library", city: "Newtown",
    country: "Australia", cc: "AU", group: "City of Sydney Library",
    lat: -33.89700, lng: 151.17950, kind: "library", emoji: "📚",
    note: "8–10 Brown Street, just off King Street."
  },
  {
    id: "surry-hills-library", name: "Surry Hills Library", city: "Surry Hills",
    country: "Australia", cc: "AU", group: "City of Sydney Library",
    lat: -33.88700, lng: 151.21270, kind: "library", emoji: "🪟",
    note: "Crown Street eco-building. The glass front is lined with louvres that track the sun."
  },
  {
    id: "ultimo-library", name: "Ultimo Library", city: "Ultimo",
    country: "Australia", cc: "AU", group: "City of Sydney Library",
    lat: -33.87750, lng: 151.19750, kind: "library", emoji: "📚",
    note: "Level 1 of the Ultimo Community Centre on William Henry Street, a few minutes from UTS."
  },
  {
    id: "waterloo-library", name: "Waterloo Library", city: "Waterloo",
    country: "Australia", cc: "AU", group: "City of Sydney Library",
    lat: -33.89930, lng: 151.20800, kind: "library", emoji: "📚",
    note: "Neighbourhood branch at 770 Elizabeth Street."
  },

  /* ---------- Also in the City of Sydney area ---------- */
  {
    id: "state-library-nsw", name: "State Library of NSW", city: "Sydney",
    country: "Australia", cc: "AU", group: "State Library",
    lat: -33.86620, lng: 151.21310, kind: "library", emoji: "🏛️",
    note: "The Mitchell Reading Room: a glass ceiling over three tiers of books. Peak Sydney."
  },

  /* ---------- University of Sydney ---------- */
  {
    id: "usyd-campus", name: "University of Sydney", city: "Camperdown",
    country: "Australia", cc: "AU", group: "University of Sydney",
    lat: -33.88570, lng: 151.18910, kind: "campus", emoji: "🎓",
    note: "Camperdown/Darlington campus. The sandstone Quadrangle is the postcard."
  },
  {
    id: "fisher-library", name: "Fisher Library", city: "Camperdown",
    country: "Australia", cc: "AU", group: "University of Sydney",
    lat: -33.88660, lng: 151.18960, kind: "library", emoji: "📖",
    note: "The university's biggest library, on Eastern Avenue by Victoria Park."
  },
  {
    id: "usyd-law-library", name: "Law Library", city: "Camperdown",
    country: "Australia", cc: "AU", group: "University of Sydney",
    lat: -33.88800, lng: 151.18930, kind: "library", emoji: "⚖️",
    note: "Herbert Smith Freehills Law Library, in the New Law Building (F10)."
  },
  {
    id: "usyd-scitech-library", name: "SciTech Library", city: "Darlington",
    country: "Australia", cc: "AU", group: "University of Sydney",
    lat: -33.88890, lng: 151.19160, kind: "library", emoji: "🔬",
    note: "Jane Foss Russell Building. Architecture, engineering, maths and science under one roof."
  },
  {
    id: "usyd-swhb-library", name: "Susan Wakil Health Building Library", city: "Camperdown",
    country: "Australia", cc: "AU", group: "University of Sydney",
    lat: -33.88490, lng: 151.18460, kind: "library", emoji: "🩺",
    note: "Health sciences, nursing and midwifery, in one of the campus's newest buildings."
  },
  {
    id: "con-library", name: "Conservatorium Library", city: "Sydney",
    country: "Australia", cc: "AU", group: "University of Sydney",
    lat: -33.86300, lng: 151.21400, kind: "library", emoji: "🎻",
    note: "Inside the Sydney Conservatorium of Music on Macquarie Street, next to the Botanic Garden."
  },

  /* ---------- UTS ---------- */
  {
    id: "uts-library", name: "UTS Library", city: "Ultimo",
    country: "Australia", cc: "AU", group: "UTS",
    lat: -33.88360, lng: 151.20030, kind: "library", emoji: "📖",
    note: "Levels 7–9 of UTS Central (Building 2) on Broadway. Robots fetch books from a vault under Alumni Green."
  },
  {
    id: "uts-campus", name: "UTS City Campus", city: "Ultimo",
    country: "Australia", cc: "AU", group: "UTS",
    lat: -33.88300, lng: 151.20120, kind: "campus", emoji: "🎓",
    note: "The Tower, Alumni Green and a lot of very bold buildings along Broadway."
  },
  {
    id: "uts-chau-chak-wing", name: "Dr Chau Chak Wing Building", city: "Ultimo",
    country: "Australia", cc: "AU", group: "UTS",
    lat: -33.87950, lng: 151.20040, kind: "campus", emoji: "🟫",
    note: "Frank Gehry's 'crumpled paper bag' of hand-laid brick. Go inside for the oval timber classroom."
  },

  /* ---------- UNSW ---------- */
  {
    id: "unsw-campus", name: "UNSW Kensington", city: "Kensington",
    country: "Australia", cc: "AU", group: "UNSW",
    lat: -33.91750, lng: 151.23100, kind: "campus", emoji: "🎓",
    note: "Main campus, up the hill from Anzac Parade."
  },
  {
    id: "unsw-main-library", name: "UNSW Main Library", city: "Kensington",
    country: "Australia", cc: "AU", group: "UNSW",
    lat: -33.91735, lng: 151.23345, kind: "library", emoji: "📖",
    note: "Upper campus, on the Library Lawn."
  },
  {
    id: "unsw-law-library", name: "UNSW Law Library", city: "Kensington",
    country: "Australia", cc: "AU", group: "UNSW",
    lat: -33.91700, lng: 151.22760, kind: "library", emoji: "⚖️",
    note: "Lower campus, in the Law Building."
  },
  {
    id: "unsw-paddington", name: "UNSW Paddington Library", city: "Paddington",
    country: "Australia", cc: "AU", group: "UNSW",
    lat: -33.88380, lng: 151.22640, kind: "library", emoji: "🎨",
    note: "Art & Design campus on Oxford Street. Art, design and media arts collection, ground floor of Block D."
  }
];
