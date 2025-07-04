const cakes = [
  {
    id: 1,
    imgSrc: "/images/yemekler/y0.jpg",
    title: "Siyah Tino Burger",
    tags: ["Hamburger", "Patates", "Et"],
    cakeLink: "#",
    price: 165,
  },
  {
    id: 2,
    imgSrc: "/images/pastalar/p1.jpg",
    title: "Şeker Hamurlu Çikolatalı Pasta",
    tags: ["Çikolata", "Yoğun", "Klasik"],
    cakeLink: "#",
    price: 380,
  },
  {
    id: 3,
    imgSrc: "/images/yemekler/y1.jpg",
    title: "Et Stick",
    tags: ["Et", "Püre"],
    cakeLink: "#",
    price: 190,
  },
  {
    id: 4,
    imgSrc: "/images/kahvaltı/tekkisilik.png",
    title: "Tek Kişilik Kahvaltı",
    tags: ["Kahvaltı", "Lezzetli", "Hızlı"],
    cakeLink: "#",
    price: 120,
  },
  {
    id: 5,
    imgSrc: "/images/yemekler/y2.jpg",
    title: "Bolonez Soslu Makarna",
    tags: ["Makarna", "Maydonoz"],
    cakeLink: "#",
    price: 150,
  },
  {
    id: 6,
    imgSrc: "/images/pastalar/p2.jpg",
    title: "Şeker Hamurlu Meyveli",
    tags: ["ŞekerHamuru", "Vanilya", "İskelet"],
    cakeLink: "#",
    price: 400,
  },
  {
    id: 7,
    imgSrc: "/images/yemekler/y3.jpg",
    title: "Susamlı Çıtır Tavuklu Salata",
    tags: ["Çıtır", "Salata"],
    cakeLink: "#",
    price: 140,
  },
  {
    id: 8,
    imgSrc: "/images/pastalar/p3.jpg",
    title: "Özel Tasarım",
    tags: ["Kişiye Özel", "3D", "Şeker Hamuru"],
    cakeLink: "#",
    price: 450,
  },
  {
    id: 9,
    imgSrc: "/images/yemekler/y4.jpg",
    title: "Tavuk Şinitzel",
    tags: ["Tavuk", "Salata", "Patates"],
    cakeLink: "#",
    price: 155,
  },
  {
    id: 10,
    imgSrc: "/images/tatlılar/mag.jpg",
    title: "Çilekli Magnolia",
    tags: ["Çilek", "Günlük"],
    cakeLink: "#",
    price: 85,
  },
  {
    id: 11,
    imgSrc: "/images/kurabiyeler/cesit1.jpg",
    title: "Günlük Kurabiye",
    tags: ["Çikolata", "Kurabiye", "Günlük"],
    cakeLink: "#",
    price: 45,
  },
  {
    id: 12,
    imgSrc: "/images/yemekler/y5.jpg",
    title: "Tavuklu Noodle",
    tags: ["Noodle", "Tavuk"],
    cakeLink: "#",
    price: 150,
  },
  {
    id: 13,
    imgSrc: "/images/pogacalar/pogaca.jpg",
    title: "Günlük En lezzetli Poğaçalar",
    tags: ["Kaşar", "Zeytin", "Günlük"],
    cakeLink: "#",
    price: 35,
  },
  {
    id: 14,
    imgSrc: "/images/pastalar/p4.jpg",
    title: "Özel Tasarım",
    tags: ["Kişiye Özel", "Ceylan", "Figür"],
    cakeLink: "#",
    price: 430,
  },
  {
    id: 15,
    imgSrc: "/images/yemekler/y6.jpg",
    title: "Dağ Mantarlı Fettuccine",
    tags: ["Mantar", "Makarna"],
    cakeLink: "#",
    price: 160,
  },
  {
    id: 16,
    imgSrc: "/images/pastalar/p5.jpg",
    title: "Özel Tasarım",
    tags: ["HarryPotter", "Sihir", "Pelerin"],
    cakeLink: "#",
    price: 470,
  },
  {
    id: 17,
    imgSrc: "/images/yemekler/y9.jpg",
    title: "Etli Noodle",
    tags: ["Et", "Noodle"],
    cakeLink: "#",
    price: 175,
  },
  {
    id: 18,
    imgSrc: "/images/pastalar/p6.jpg",
    title: "Özel Tasarım",
    tags: ["Okey", "Masa", "Şeker Hamuru"],
    cakeLink: "#",
    price: 390,
  },
  {
    id: 19,
    imgSrc: "/images/kurabiyeler/cesit2.jpg",
    title: "Günlük Kurabiye",
    tags: ["Galeta", "Kurabiye", "Günlük"],
    cakeLink: "#",
    price: 40,
  },
  {
    id: 20,
    imgSrc: "/images/tatlılar/magnolia1.jpg",
    title: "Günlük Kurabiye",
    tags: ["Galeta", "Kurabiye", "Günlük"],
    cakeLink: "#",
    price: 40,
  },
  {
    id: 21,
    imgSrc: "/images/pastalar/p7.jpg",
    title: "Özel Tasarım",
    tags: ["Nargile", "Para", "Dolar"],
    cakeLink: "#",
    price: 460,
  },
  {
    id: 22,
    imgSrc: "/images/pastalar/p8.jpg",
    title: "Özel Tasarım",
    tags: ["Uçak", "Türk Hava Yolları"],
    cakeLink: "#",
    price: 480,
  },
  {
    id: 23,
    imgSrc: "/images/pastalar/p9.jpg",
    title: "Özel Tasarım",
    tags: ["Kebap", "Mangal", "Şiş"],
    cakeLink: "#",
    price: 490,
  },
  {
    id: 24,
    imgSrc: "/images/pastalar/p10.jpg",
    title: "Klasik Çikolatalı Pasta",
    tags: ["Çikolata", "Kahve"],
    cakeLink: "#",
    price: 370,
  },
  {
    id: 25,
    imgSrc: "/images/pastalar/p12.jpg",
    title: "Klasik Çilekli Pasta",
    tags: ["Çilek", "Kremalı", "Taze"],
    cakeLink: "#",
    price: 360,
  },
  {
    id: 26,
    imgSrc: "/images/pastalar/p13.jpg",
    title: "Konuşan Pasta",
    tags: ["Gökkuşağı", "Çocuk", "Taze"],
    cakeLink: "#",
    price: 390,
  },
  {
    id: 27,
    imgSrc: "/images/pastalar/p14.jpg",
    title: "Özel Tasarım",
    tags: ["İsim", "Kek", "Makaron"],
    cakeLink: "#",
    price: 440,
  },
  {
    id: 28,
    imgSrc: "/images/pastalar/p18.jpg",
    title: "Özel Tasarım",
    tags: ["Tekboynuzlu", "Rengarenk"],
    cakeLink: "#",
    price: 460,
  },
  {
    id: 29,
    imgSrc: "/images/pastalar/p20.jpg",
    title: "Özel Tasarım",
    tags: ["Beşiktaş", "Özel", "Takımlı"],
    cakeLink: "#",
    price: 450,
  },
];

export default cakes;
