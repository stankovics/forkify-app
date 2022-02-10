import View from './View';
import icons from 'url:../../img/icons.svg';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
    }
    // Page 1, and there are NO other pages
    if (curPage === 1 && numPages === 1) {
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
    }
    //Other page
    if (curPage < numPages) {
    }
    // Page 1, and there are NO other pages
    return '';
  }
}
export default new PaginationView();
