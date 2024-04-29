export interface ApiError extends Error {
  status?: number;
  title?: string;
  detail?: string;
}