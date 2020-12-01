
export const GET_TOP_ARTICLES = 'GET_TOP_ARTICLES';
export const GET_MORE_ARTICLES = 'GET_MORE_ARTICLES';
export const GET_ARTICLES_DETAILS = 'GET_ARTICLES_DETAILS';
export const TOP_ARTICLES_ERROR = 'TOP_ARTICLES_ERROR';
export const GET_SEARCH_ARTICLES= 'GET_SEARCH_ARTICLES';
export const RESET_ARTICLES= ' RESET_ARTICLES';


// export const fetchArticles = (category, loadPage) => {
//     return async (dispatch, getState) => {
//       try {
//         let articlesList = [];
  
//         if (category === getState().Articles.category && loadPage > 1) {
//           articlesList = getState().Articles.articles;
//         }
//         console.log(articlesList.length);
//         for (let i = 1; i <= 2; i++) {
//           let response = await axios.get(
//             `articlesearch.json?q=${category}&page=${loadPage}`
//           );
//           articlesList = articlesList.concat(
//             response.data.response.docs.map(
//               (article) =>
//                 new Article(
//                   article._id,
//                   article.headline.main,
//                   article.snippet,
//                   article.lead_paragraph,
//                   article.multimedia.length > 0
//                     ? API_IMG_PREFIX + article.multimedia[0].url
//                     : null
//                 )
//             )
//           );
//           loadPage = loadPage + 1;
//         }
  
//         dispatch({
//           type: FETCH_ARTICLES,
//           category: category,
//           articles: articlesList,
//           page: loadPage,
//         });
//       } catch (error) {
//         console.log("error", error);
//       }
//     };
//   };