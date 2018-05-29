import { createSelector } from 'reselect';
import { reshapeNewsData, filterNewsBySearchTerm } from '../util/dataTransformation';

const newsSelector = state => state.news;

// pass state.news to reshapeNewsData as input
const reshapeNewsSelector = createSelector(
  [newsSelector],
  reshapeNewsData
);

// reshapreNewsSelector as input to allNewsSelector
export const allNewsSelector = createSelector(
  [reshapeNewsSelector],
  newsItems => newsItems
);

/*------2nd commit-------*/
const searchTermSelector = state => state.searchTerm;

const caseInsensitiveSearchTermSelector = createSelector(
  searchTermSelector,
  searchTerm => searchTerm.toLowerCase()
);

export const searchNewsSelector = createSelector(
  [reshapeNewsSelector, caseInsensitiveSearchTermSelector],
  filterNewsBySearchTerm
);
