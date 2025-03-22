export interface ProjectTypes {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  imageUrl?: string | null;
  videoUrl?: string | null;
  status?: "ongoing" | "recent" | "legacy";
}
