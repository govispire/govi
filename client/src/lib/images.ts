// Stock images for the website
// These URLs reference actual images from Unsplash

// Luxury brand photography
const luxuryBrandImages = [
  "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Bamboo architecture
  "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Luxury interior
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Fashion model
  "https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Luxury product
  "https://images.unsplash.com/photo-1625929679350-30eb7ddcc9e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Fashion item
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Product arrangement
];

// Creative video production scenes
const videoProductionImages = [
  "https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Brand_visual_Identity_Luxury_22.webp", // Video camera setup
  "https://images.unsplash.com/photo-1573164574230-db1d5e960238?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Video production
  "https://images.unsplash.com/photo-1585388434272-8e931380ffe4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Editing studio
  "https://images.unsplash.com/photo-1599240211563-782e8e0e5360?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Film equipment
];

// Modern design portfolio samples
const designPortfolioImages = [
  "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Design sample
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Graphic design
  "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Portfolio piece
  "https://images.unsplash.com/photo-1496151446382-86a30e8d5517?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Creative workspace
];

// Commercial photography examples
const commercialPhotographyImages = [
  "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-fields-2-scaled.webp", // Product photography
  "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-5.1.webp", // Brand photoshoot
  "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-4.1-scaled.webp", // Commercial photo
  "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-4.3-scaled.webp", // Content creation
  "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-4.5-scaled.webp", // Portfolio image
  "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-fields-6.webp", // Marketing photo
];

// Product photography specific images
const productPhotographyImages = [
  "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-5.3-scaled.webp", // Product closeup
  "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-5.2-scaled.webp", // Jewelry product
  "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-5.6-scaled.webp", // Product arrangement
  "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-6.5-scaled.webp", // E-commerce style
  "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-6.4-scaled.webp", // Product collection
];

// Gallery showcase images
const galleryImages = [
  "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-4.1-scaled.webp", // Portfolio sample
  "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-4.3-scaled.webp", // Portfolio sample
];

// Service section gallery images
const possibilitiesImages = [
  "https://vieoproductions.com/wp-content/uploads/2025/03/home-reveal-2.webp",
  "https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Brand_Visual_Identity_Eco_1.webp",
  "https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Brand_Visual_Identity_Eco_19.webp",
  "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-5.1.webp",
  "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-5.2-scaled.webp",
  "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-5.3-scaled.webp",
  "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-5.6-scaled.webp",
  "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-4.5-scaled.webp",
  "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-6.5-scaled.webp"
];

// Combined portfolio showcase
const portfolioShowcase = [
  commercialPhotographyImages[4],
  commercialPhotographyImages[5],
  designPortfolioImages[2],
  commercialPhotographyImages[3],
  galleryImages[0]
];

//Example of where the change might be applied.  This is an assumption.
const contentTypes = [
    {
      title: "Strategic Brand Content",
      description: "Thought leadership articles, blog posts, and other content designed to position your brand as an authority in your industry.",
      icon: "fa-file-alt",
      image: "https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Brand_visual_Identity_Luxury_32-2048x1366.webp"
    },
    {
      title: "Video Content",
      description: "Compelling video narratives that tell your brand story and engage audiences on a deeper emotional level.",
      icon: "fa-film",
      image: videoProductionImages[1]
    }
  ];

export {
  luxuryBrandImages,
  videoProductionImages,
  designPortfolioImages,
  commercialPhotographyImages,
  productPhotographyImages,
  galleryImages,
  possibilitiesImages,
  portfolioShowcase,
  contentTypes
};