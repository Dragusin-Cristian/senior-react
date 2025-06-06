import api from "./api";

export const fetchTopQuotes = () => {
  return api.get("top_quotes").then((res) => {
    const { quotes } = res.data;
    return quotes;
  });
};

export const postQuote = (quote) => api.post("", quote);

export const resetQuotes = () => api.post("reset", {});

export const fetchPaginatedQuotes = (page) =>
  api.get("", { params: { page } }).then((res) => res.data);
