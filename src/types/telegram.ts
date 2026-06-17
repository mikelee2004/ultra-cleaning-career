export interface VKPostResponse {
  posts: VkPost[];
  cachedAt: string | null;
}

export interface VkPost {
  id: number;
  text: string;
  date: string; // ISO 8601
  media?: PostMedia[];
  linkToOriginal: string;
}

export interface PostMedia {
  type: 'photo' | 'video';
  url: string;
  thumbnail?: string;
  width?: number;
  height?: number;
}
