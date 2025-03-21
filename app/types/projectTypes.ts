export interface ProjectTypes {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  imageUrl?: string;
  videoUrl?: string;
  status?: "ongoing" | "recent" | "legacy";
}
