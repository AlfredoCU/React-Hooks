export const quotesBb = async (id) => {
  try {
    const url = `https://breakingbadapi.com/api/quotes/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("QUOTEST_BB_ERROR: ", error);
  }
};

// export const AllQuotesBb = async () => {
//   try {
//     const url = "https://breakingbadapi.com/api/quotes";
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("COUNT_QUOTES_BB_ERROR: ", error);
//   }
// };
