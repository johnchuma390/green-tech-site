export interface Project {
  id: string;
  title: string;
  organization: string;
  thumbnail: string;
  tags: string[];
  summary: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Solar-Powered Water Purification System",
    organization: "CleanTech Labs",
    thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    tags: ["water", "solar", "purification"],
    summary: "An innovative portable water purification system powered entirely by solar energy, designed for remote communities."
  },
  {
    id: "2",
    title: "Biodegradable Packaging Solutions",
    organization: "EcoWrap Inc",
    thumbnail: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
    tags: ["packaging", "biodegradable", "recycling"],
    summary: "Revolutionary packaging materials made from agricultural waste that decompose within 90 days."
  },
  {
    id: "3",
    title: "Smart Grid Energy Management",
    organization: "PowerGrid Innovation",
    thumbnail: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
    tags: ["energy", "AI", "grid"],
    summary: "AI-powered system for optimizing renewable energy distribution across urban networks."
  },
  {
    id: "4",
    title: "Urban Vertical Farming Module",
    organization: "GreenCity Farms",
    thumbnail: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=400&fit=crop",
    tags: ["agriculture", "urban", "sustainability"],
    summary: "Modular vertical farming system for growing fresh produce in urban environments with minimal water usage."
  },
  {
    id: "5",
    title: "Ocean Plastic Recycling Robot",
    organization: "Marine Tech Solutions",
    thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    tags: ["ocean", "recycling", "robotics"],
    summary: "Autonomous underwater robot for collecting and processing ocean plastic waste into reusable materials."
  },
  {
    id: "6",
    title: "Carbon Capture Concrete",
    organization: "BuildGreen Materials",
    thumbnail: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&h=400&fit=crop",
    tags: ["construction", "carbon", "materials"],
    summary: "Next-generation concrete that actively captures CO2 during the curing process, reducing construction carbon footprint."
  },
  {
    id: "7",
    title: "Wind-Solar Hybrid Microgrid",
    organization: "Renewable Systems Co",
    thumbnail: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
    tags: ["wind", "solar", "microgrid"],
    summary: "Integrated wind-solar energy system optimized for small communities and remote installations."
  },
  {
    id: "8",
    title: "E-Waste Precious Metal Recovery",
    organization: "RecycleTech Labs",
    thumbnail: "https://images.unsplash.com/photo-1583396542959-cf6ad95b8f1a?w=600&h=400&fit=crop",
    tags: ["e-waste", "recycling", "metals"],
    summary: "Eco-friendly process for extracting valuable metals from electronic waste without harmful chemicals."
  },
  {
    id: "9",
    title: "Smart Water Irrigation System",
    organization: "AquaTech Innovations",
    thumbnail: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&h=400&fit=crop",
    tags: ["water", "agriculture", "IoT"],
    summary: "IoT-enabled irrigation system that reduces water consumption by 60% through precision targeting."
  }
];
