export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Tour {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  images: string[];
  price: number;
  duration: string;
  groupSize: string;
  languages: string[];
  type: string;
  overview: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: ItineraryDay[];
  cancellationPolicy: string;
}

export const tours: Tour[] = [
  {
    id: 1,
    slug: "golden-sahara-trek",
    title: "The Golden Desert Trek",
    subtitle: "Experience the magic of the desert under the stars.",
    images: [
      "/images/hero-1.png",
      "/images/hero-2.png",
      "/images/hero-3.png",
      "/images/hero-1.png",
      "/images/hero-2.png",
    ],
    price: 350,
    duration: "3 Days",
    groupSize: "Up to 12 Guests",
    languages: ["English", "French", "Spanish"],
    type: "Adventure / Nature",
    overview:
      "Embark on a transformative 3-day journey into the heart of the Sahara Desert. This trek offers a perfect blend of adventure and tranquility, taking you away from the hustle of modern life. You will ride camels across rolling dunes, sleep in traditional Berber tents under a canopy of stars, and witness breathtaking sunrises and sunsets. Our expert local guides will share the rich history and culture of the desert, making this an unforgettable experience.",
    highlights: [
      "Camel trekking across the Erg Chebbi dunes",
      "Overnight stay in a luxury Berber camp",
      "Traditional music and drumming around the campfire",
      "Stargazing in one of the darkest places on Earth",
      "Visiting a authentic nomad family",
    ],
    included: [
      "Private transportation in 4x4",
      "Expert multilingual guide",
      "Accommodation in luxury camp",
      "All meals (Breakfast, Lunch, Dinner)",
      "Camel ride",
    ],
    excluded: [
      "Flights",
      "Travel insurance",
      "Personal expenses",
      "Tips for guide and driver",
    ],
    itinerary: [
      {
        day: 1,
        title: "Merzouga to the Dunes",
        description:
          "Depart from Merzouga village in the late afternoon. Meet your camel caravan and trek into the dunes as the sun sets, painting the sky in shades of orange and pink. Arrive at camp, enjoy a welcome tea, and settle into your tent.",
      },
      {
        day: 2,
        title: "Deep Desert Exploration",
        description:
          "Wake up early for sunrise. After breakfast, trek deeper into the black desert. Visit a hidden oasis and share lunch with a nomad family. Return to camp for a sunset drum circle.",
      },
      {
        day: 3,
        title: "Return to Civilization",
        description:
          "Enjoy a final breakfast in the dunes before a short camel ride back to Merzouga. Transfer to your hotel or onward transport.",
      },
    ],
    cancellationPolicy:
      "Free cancellation up to 48 hours before the tour start date. Cancellations within 48 hours are non-refundable.",
  },
  {
    id: 2,
    slug: "imperial-cities-tour",
    title: "Imperial Cities Tour",
    subtitle:
      "Discover the history of Fez, Marrakech, Rabat, and Meknes in this comprehensive cultural tour.",
    images: [
      "/images/hero-2.png",
      "/images/hero-3.png",
      "/images/hero-1.png",
      "/images/hero-2.png",
    ],
    price: 550,
    duration: "7 Days",
    groupSize: "Max 20 Guests",
    languages: ["English", "French", "German"],
    type: "Cultural / Historical",
    overview:
      "Step back in time and explore the four Imperial Cities of Morocco: Fez, Marrakech, Rabat, and Meknes. This 7-day comprehensive tour is designed for history buffs and culture seekers. Wander through ancient medinas, marvel at intricate Islamic architecture, and soak up the vibrant atmosphere of traditional souks.",
    highlights: [
      "Guided tour of the Fez Medina (UNESCO site)",
      "Visit the Hassan II Mosque in Casablanca",
      "Explore the Djemaa el-Fna square in Marrakech",
      "Discover the Roman ruins of Volubilis",
      "See the Royal Palace in Rabat",
    ],
    included: [
      "Air-conditioned transportation",
      "Professional tour leader",
      "6 nights hotel accommodation",
      "Daily breakfast",
      "Entrance fees to monuments",
    ],
    excluded: ["Lunches and Dinners", "Flights", "Optional activities"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Casablanca",
        description:
          "Welcome to Morocco! Airport transfer and check-in. Visit the Hassan II Mosque if time permits.",
      },
      {
        day: 2,
        title: "Casablanca to Rabat to Meknes",
        description:
          "Travel to the capital, Rabat, to see the Hassan Tower. Continue to the imperial city of Meknes.",
      },
      {
        day: 3,
        title: "Meknes to Fez",
        description:
          "Short drive to Volubilis for Roman ruins, then onto Fez, the spiritual capital.",
      },
      {
        day: 4,
        title: "Fez Exploration",
        description:
          "Full day dedicated to the labyrinthine Medina of Fez. Tanneries, madrasas, and souks.",
      },
      {
        day: 5,
        title: "Fez to Marrakech",
        description:
          "A scenic long drive crossing the Middle Atlas mountains, passing Ifrane and Beni Mellal.",
      },
      {
        day: 6,
        title: "Marrakech History",
        description:
          "Explore the Red City: Bahia Palace, Koutoubia Mosque, and the Saadian Tombs.",
      },
      {
        day: 7,
        title: "Departure",
        description: "Transfer to Marrakech airport for your flight home.",
      },
    ],
    cancellationPolicy:
      "Free cancellation up to 7 days before. 50% refund if cancelled between 7 days and 48 hours. No refund within 48 hours.",
  },
  {
    id: 3,
    slug: "atlas-mountains-escape",
    title: "Atlas Mountains Escape",
    subtitle:
      "Hike through the stunning Atlas Mountains and visit traditional Berber villages.",
    images: ["/images/hero-3.png", "/images/hero-1.png", "/images/hero-2.png"],
    price: 150,
    duration: "2 Days",
    groupSize: "Small Group (max 8)",
    languages: ["English", "French"],
    type: "Hiking / Nature",
    overview:
      "Escape the city heat and retreat to the cool, fresh air of the High Atlas Mountains. This 2-day hike is suitable for moderate fitness levels and offers stunning panoramic views.",
    highlights: [
      "Toubkal National Park",
      "Traditional Berber lunch",
      "Waterfall visit",
      "Mountain pass views",
    ],
    included: [
      "Mountain guide",
      "Mule support for bags",
      "Gite accommodation",
      "All meals",
    ],
    excluded: ["Hiking boots", "Personal snacks"],
    itinerary: [
      {
        day: 1,
        title: "Imlil to Refuge",
        description: "Hike from Imlil village up to the mountain refuge.",
      },
      {
        day: 2,
        title: "Refuge to Summit (Optional) & Return",
        description: "Optional sunrise summit or relax before descending.",
      },
    ],
    cancellationPolicy: "Full refund 24 hours prior.",
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug);
}
