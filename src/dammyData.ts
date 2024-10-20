export const countries = [
  {
    name: { en: "Italy", ka: "იტალია" },
    population: 58.94,
    capital: { en: "Rome", ka: "რომი" },
    about: {
      en: `Italy's wine culture is a rich tapestry of history, tradition, and passion.
             With diverse regions, indigenous grapes, and time-honored
             winemaking methods, it offers a unique and unforgettable
             experience.`,
      ka: `იტალიის ღვინის კულტურა წარმოადგენს ისტორიის, ტრადიციების და ვნების მდიდარ ქსელს.
             მისი მრავალფეროვანი რეგიონები, ადგილობრივი ვაზის ჯიშები და ტრადიციული
             ღვინის დამზადების მეთოდები უნიკალურ და დაუვიწყარ გამოცდილებას გთავაზობთ.`,
    },
    image: "vineyards-italy.jpg",
    id: "1",
    like: 10,
  },
  {
    name: { en: "France", ka: "საფრანგეთი" },
    population: 67.97,
    capital: { en: "Paris", ka: "პარიზი" },
    about: {
      en: `France's wine culture is renowned for its rich history, 
             diverse regions, and world-class vineyards. From Bordeaux to Burgundy, 
             it celebrates tradition, craftsmanship, and the art of winemaking.`,
      ka: `საფრანგეთის ღვინის კულტურა ცნობილია თავისი მდიდარი ისტორიით,
             მრავალფეროვანი რეგიონებით და უმაღლესი დონის ვენახებით. ბორდოდან ბურგუნდემდე, 
             იგი ზეიმობს ტრადიციას, ხელობას და ღვინის დამზადების ხელოვნებას.`,
    },
    image: "vineyards-France.jpg",
    id: "2",
    like: 16,
  },
  {
    name: { en: "Georgia", ka: "საქართველო" },
    population: 3.713,
    capital: { en: "Tbilisi", ka: "თბილისი" },
    about: {
      en: `Georgia, the birthplace of wine, boasts an 8,000-year-old tradition 
           with unique qvevri winemaking. Its rich culture blends ancient techniques, 
           diverse grape varieties, and vibrant wine festivals.`,
      ka: `საქართველო, ღვინის სამშობლო, მოიცავს 8,000-წლოვანი ტრადიციას 
           უნიკალური ქვევრის ღვინის დამზადებით. მისი მდიდარი კულტურა აერთიანებს უძველეს ტექნიკებს, 
           მრავალფეროვან ვაზის ჯიშებს და მძლავრ ღვინის ფესტივალებს.`,
    },
    image: "vineyards-georgia.jpg",
    id: "3",
    like: 90,
  },
];

export const aboutUs = {
  title: "About Us",
  text: `At WineWander, our goal is to inspire and connect travelers with
                the world’s finest wine regions. We aim to provide authentic,
                enriching experiences that celebrate both the culture and
                craftsmanship of winemaking. Through curated tours, we strive to
                create unforgettable memories, foster a love for wine, and
                promote sustainable tourism in each region we visit.`,
  image: "company-staff.jpg",
};
export const aboutCompany = [
  {
    name: "Our Mission",
    text: `At WineWander, our goal is to inspire and connect travelers with
                the world’s finest wine regions. We aim to provide authentic,
                enriching experiences that celebrate both the culture and
                craftsmanship of winemaking. Through curated tours, we strive to
                create unforgettable memories, foster a love for wine, and
                promote sustainable tourism in each region we visit.`,
    image: "vineyard.jpg",
  },
  {
    name: "Our Story",
    text: `WineWander was born out of a shared passion for wine, travel,
                and culture. What started as a few friends exploring vineyards
                has grown into a global journey of discovery. Inspired by the
                rich traditions and unique flavors of each region, we set out to
                create curated wine tours that blend exploration, education, and
                unforgettable experiences for fellow wine lovers.`,
    image: "marani.jpg",
  },
];

export const translateHeader: Record<
  "en" | "ka",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { travel: any; about: any; contact: any; lang: any }
> = {
  en: {
    travel: "Travel",
    about: "About Us",
    contact: "Contact",
    lang: "ქარ",
  },
  ka: {
    travel: "მოგზაურობა",
    about: "ჩვენს შესახებ",
    contact: "კონტაქტი",
    lang: "Eng",
  },
};
