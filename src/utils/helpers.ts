// Helper function to capitalize first letter
export const capitalizeFirst = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Helper function to truncate text to a max length
export const truncateText = (str: string, max: number) => {
  if (!str) return "";
  return str.length > max ? str.slice(0, max) + "…" : str;
}; 