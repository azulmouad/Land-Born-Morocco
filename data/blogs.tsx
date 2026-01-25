import Image from "next/image";

// --- Mock Data (Ideally moved to a separate file in a real app) ---
export const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Reasons Why You Need to Visit the Sahara Desert",
    slug: "reasons-to-visit-sahara",
    image: "/images/hero-1.png",
    excerpt:
      "The silence of the dunes, the star-filled luxury camps, and the hospitality of the Berber people make it a must-do.",
    date: "Oct 15, 2025",
    author: "Omar",
    category: "Travel Tips",
    readTime: "5 min read",
    content: (
      <>
        <p className="lead text-2xl text-gray-600 mb-8 font-serif leading-relaxed">
          The Sahara Desert is more than just a vast expanse of sand; it's a
          place of profound silence and beauty that touches the soul. Visiting
          the Sahara is a transformative experience, offering a stark contrast
          to the bustle of modern life.
        </p>

        <h3 className="text-3xl font-heading font-bold text-deep-blue mt-12 mb-6">
          1. The Starry Nights
        </h3>
        <p className="mb-6 text-lg text-gray-700 leading-8">
          Without light pollution, the Sahara offers one of the best stargazing
          experiences on Earth. The Milky Way stretches across the sky in a
          dazzling display that you have to see to believe. Imagine lying back
          on a Berber rug, tea in hand, looking up at a universe that feels
          close enough to touch.
        </p>

        <div className="my-10 relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/hero-3.png"
            alt="Starry Night"
            fill
            className="object-cover"
          />
        </div>

        <h3 className="text-3xl font-heading font-bold text-deep-blue mt-12 mb-6">
          2. The Golden Dunes
        </h3>
        <p className="mb-6 text-lg text-gray-700 leading-8">
          The dunes of Merzouga change color with the sun, shifting from gold to
          pink to deep orange. Walking barefoot on the warm sand is a grounding
          experience that connects you directly with nature. The silence is
          absolute, broken only by the soft sound of wind shifting the sands.
        </p>
        <p className="mb-6 text-lg text-gray-700 leading-8">
          Whether you choose a camel trek at sunset or a 4x4 adventure, the
          landscape is mesmerizing and offers endless photo opportunities.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "A Foodie’s Guide to Marrakech Street Food",
    slug: "marrakech-food-guide",
    image: "/images/blog-1.png",
    excerpt:
      "From tagine to snails, discover the best flavors in Jemaa el-Fnaa square and hidden alleyways.",
    date: "Sep 28, 2025",
    author: "Fatima",
    category: "Food & Culture",
    readTime: "8 min read",
    content: (
      <>
        <p className="lead text-2xl text-gray-600 mb-8 font-serif italic leading-relaxed">
          "Marrakech is a feast for the senses, and nowhere is this more
          apparent than in its vibrant street food scene."
        </p>

        <p className="mb-6 text-lg text-gray-700 leading-8">
          Walking through the winding alleyways of the Medina, the scent of
          cumin, saffron, and grilling meat is inescapable. Jemaa el-Fnaa, the
          city's main square, transforms every night into a massive open-air
          dining room. Here is your ultimate guide to navigating the delicious
          chaos.
        </p>
        <hr className="border-gray-200 my-10" />

        <h3 className="text-3xl font-heading font-bold text-deep-blue mt-12 mb-6">
          Must-Try Delicacies
        </h3>

        <h4 className="text-2xl font-bold text-clay mt-8 mb-4">
          1. The Iconic Tagine
        </h4>
        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden mb-8 shadow-md">
          <Image
            src="/images/blog-1.png"
            alt="Tagine"
            fill
            className="object-cover"
          />
        </div>
        <p className="mb-6 text-lg text-gray-700 leading-8">
          Slow-cooked to perfection in conical clay pots, Tagine is the staple
          of Moroccan cuisine. Whether it's Lamb with Prunes or Chicken with
          Preserved Lemons, the meat is incredibly tender. Look for stalls where
          the clay pots are simmering on charcoal braziers.
        </p>
        <blockquote className="border-l-4 border-clay pl-6 py-2 my-8 bg-sand/10 rounded-r-lg italic text-gray-700 text-lg">
          "The best tagine is the one that has been cooking slowly all day,
          absorbing every ounce of flavor from the spices."
        </blockquote>

        <h4 className="text-2xl font-bold text-clay mt-8 mb-4">
          2. Bessara (Fava Bean Soup)
        </h4>
        <p className="mb-6 text-lg text-gray-700 leading-8">
          A popular breakfast dish, this rich fava bean soup is topped with a
          generous pour of olive oil and a sprinkle of cumin. It's hearty,
          cheap, and absolutely delicious, usually served with fresh bread for
          dipping.
        </p>

        <h4 className="text-2xl font-bold text-clay mt-8 mb-4">
          3. Snail Soup (Babbouche)
        </h4>
        <p className="mb-6 text-lg text-gray-700 leading-8">
          For the adventurous, a bowl of snail soup is a local favorite. The
          broth is a peppery, herbal concoction believed to have medicinal
          properties. The snails are small and are eaten with a toothpick.
        </p>

        <h3 className="text-3xl font-heading font-bold text-deep-blue mt-12 mb-6">
          Tips for Eating Street Food
        </h3>
        <ul className="list-disc pl-6 mb-8 space-y-3 text-lg text-gray-700">
          <li>
            <strong>Follow the Locals:</strong> If a stall is packed with
            locals, the food is likely fresh and good.
          </li>
          <li>
            <strong>Wash Your Hands:</strong> Use the communal sinks or bring
            hand sanitizer. eating with your hands (using bread) is common.
          </li>
          <li>
            <strong>Drink Bottled Water:</strong> Stick to bottled water to
            avoid any stomach upsets.
          </li>
        </ul>

        <p className="mb-6 text-lg text-gray-700 leading-8">
          Marrakech's food scene is an adventure waiting to happen. Be bold, try
          new things, and enjoy the incredible hospitality of the Moroccan
          people.
        </p>
      </>
    ),
  },
  // ... placeholders for other posts would go here to avoid errors if navigated to
  {
    id: 3,
    title: "Hidden Gems in the Old Medina of Fez",
    slug: "hidden-gems-fez",
    image: "/images/hero-2.png",
    excerpt: "Get lost in the world's largest car-free urban area.",
    date: "Sep 10, 2025",
    author: "Omar",
    category: "City Guides",
    readTime: "6 min read",
    content: <p>Full article about Fez...</p>,
  },
  {
    id: 4,
    title: "Surfing in Taghazout: A Complete Guide",
    slug: "surfing-taghazout",
    image: "/images/hero-3.png",
    excerpt: "The best spots to catch waves.",
    date: "Aug 22, 2025",
    author: "Hassan",
    category: "Adventure",
    readTime: "7 min read",
    content: <p>Full article about Taghazout...</p>,
  },
];
