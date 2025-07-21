// Dữ liệu mẫu cho các bài viết
export interface Post {
  id: number;
  title: string;
  snippet: string;
  author: string;
  avatar: string; // Có thể là chữ cái đầu hoặc link ảnh
  date: string;
  readTime: string;
  image: string; // Ảnh chính của bài viết
  content: string; // Nội dung đầy đủ (có thể là HTML)
}

export const blogPosts: Post[] = [
  {
    id: 1,
    title: "Mister King International 2024 Coronation Night Highlights",
    snippet: "Manilla, Philippines – September 5, 2024 – The Mister King International organization is thrilled to announce that the 2nd edition of Mister King International...",
    author: "Ms Lin",
    avatar: "M",
    date: "Jun 10",
    readTime: "2 min read",
    image: "/Copy of IG25.jpg", // TODO: Thay bằng ảnh của bạn trong thư mục /public
    content: `
      <p>Manilla, Philippines – September 5, 2024 – The Mister King International organization is thrilled to announce that the 2nd edition of Mister King International will be held in the vibrant city of Manila, Philippines. With representatives from over 40 countries, this year’s competition promises to be the most exciting and diverse yet. The grand finale is scheduled for September 22, 2025, with the national delegates scheduled to depart on September 25, 2025.</p>
      <p>Participants will arrive in Manila on September 7, 2025 (and will spend over two weeks exploring the Philippines’ rich cultural heritage, stunning landscapes, and iconic tourist destinations. Throughout their stay, they will participate in various activities organized by local sponsors, providing unique opportunities to connect with the Filipino people and culture. These experiences will be extensively documented through photoshoots and video content, offering a glimpse into the beauty and hospitality of the host country.</p>
      <p>In an exciting development, Mister King International 2023 has expanded its age eligibility; welcoming candidates aged 18 to 35, reflecting the organisation’s commitment to inclusion and diversity.</p>
      <p>The event will culminate in a spectacular live stream on the Mister King International YouTube channel, where viewers around the world can tune in to witness the crowning of Mister King International 2023.</p>
      <p>For more information, including ticketing details and how to watch the live stream, Visit www.misterkingInternational.org</p>
      <h4>About Mister King International</h4>
      <p>Mister King International is one of the world’s most prestigious male beauty pageants, celebrating excellence, leadership and cultural diversity. The competition provides a global platform for young men to showcase their talents, intelligence and commitment to making a positive impact on their communities.</p>
    `
  },
  {
    id: 2,
    title: "Mister King International Ecology and Climate Action.",
    snippet: "In its Global awareness program on issues related to the Sustainable Development Goals (SDGs) adopted by the United Nations, as a global organization of human rights activists...",
    author: "John Doe",
    avatar: "J",
    date: "Jun 12",
    readTime: "4 min read",
    image: "/Copy of I26.jpg", // TODO: Thay bằng ảnh của bạn trong thư mục /public
    content: `
      <p>In its Global awareness program on issues related to the Sustainable Development Goals (SDGs) adopted by the United Nations, as a global organization of human rights activists; it is our duty to make our contributions to changing the lives of the most vulnerable populations, exposed to natural disasters.
      <br>
      We are at the peak of the global ecology of the planet; the competition will take place in West Asia in the Philippines with the aim of stimulating multiculturalism that will focus on environmental and climate issues.
      <br>
      To this end, national delegates must be able to propose a project on the fight against global warming, environmental protection and the preservation of global ecology in reflection with the clauses and resolutions taken at the 28th Conference of the Parties on Climate Change (COP28) Organized by the United Arab Emirates (UAE), mandatory for the preliminary phases of the competition.
      <br>
      The best projects on ecology, environment and climate change will benefit from financial support of up to $34,000 at the launch of the said project and will be presented to government institutions in charge of issues related to the future of the planet.
      </p>
      <p>
      One planet, one change, one action
      <br>
      #ecologie #ecology #ClimateAction #ClimateActionNow
      <br>
      #ClimateActionChallenge #ClimateChallenge #ecofriendly
      <br>
      #EcoFriendlyBeauty #enviromentallyfriendly #savetheplanet #protectnature
      <br>
      #ProtectOurPlanet
      </p>
    `
  },
  {
    id: 3,
    title: "OFFICIAL ANNOUNCEMENT",
    snippet: "The Mister King International organization is pleased to inform you that Mrs. Maria Margaret Indriago Felixmena is the exclusive owner of the organizational...",
    author: "John Doe",
    avatar: "J",
    date: "Jun 12",
    readTime: "4 min read",
    image: "/Copy of IG26.jpg", // TODO: Thay bằng ảnh của bạn trong thư mục /public
    content: `
      <p>
      The Mister King International organization is pleased to inform you that Mrs. Maria Margaret Indriago Felixmena is the exclusive owner of the organizational property rights of the 2nd edition of the Mister King International competition scheduled for September 25, 2025.
      <br>
      Therefore, the procedures for obtaining franchise license rights from national organizations are open for the current year.
      <br>
      We ask national directors and agents to send us the official schedule of the national pre-selection phases 2 months before the national final of their competitions and the presentation of the national delegates no later than the last week of July 2025.
      </p>
      <p>
      THANK YOU MANAGEMENT MISTER KING INTERNATIONAL
      </p>
      <p>
      #nationaldirector #internationalpageant #Eventologie #PageantryMoments
      <br>
      #pageantmakeupartist #pageantry #MissUniverse #misterio #Mister
      <br>
      #MisterInternational2023 #MisteriosDelMundo #misterkinginternational
      </p>
    `
  },
  // Thêm các bài viết khác vào đây
];