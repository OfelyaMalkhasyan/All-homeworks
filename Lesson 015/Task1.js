const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

const Pagination = {
  pageNumber: 1,
  pageSize: 0,
  array: [],

  init: (array, pageSize) => {
    Pagination.array = array;
    Pagination.pageSize = pageSize;
  },

  getPageItems: () => {
    console.log(
      Pagination.array.slice(
        (Pagination.pageNumber - 1) * Pagination.pageSize,
        Pagination.pageNumber * Pagination.pageSize
      )
    );
  },

  nextPage: () => {
    Pagination.pageNumber++;
    return Pagination;
  },

  prevPage: () => {
    if (Pagination.pageNumber !== 1) {
      Pagination.pageNumber--;
    }

    return Pagination;
  },

  firstPage: () => {
    Pagination.pageNumber = 1;
  },

  lastPage: () => {
    Pagination.pageNumber = Math.ceil(
      Pagination.array.length / Pagination.pageSize
    );
  },

  goToPage: (num) => {
    Pagination.pageNumber = num;
  },
};

Pagination.init(alphabetArray, 4);

Pagination.getPageItems();
Pagination.nextPage();
Pagination.getPageItems();
Pagination.nextPage().nextPage();
Pagination.goToPage(3);
