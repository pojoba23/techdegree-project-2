/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Powell Barrett
******************************************/

//Global Variables

const studentsList = document.querySelectorAll("li"); //targets all the li's on the page.

const itemsPerPage = 10; //limits the amount of items that will appear on the page to 10.
   
//Display Page Function

const showPage = (list, page) => {
  const startIndex= (page * itemsPerPage) - itemsPerPage;
  const endIndex = (page * itemsPerPage) - 1;
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i <= endIndex) {
      list[i].style.dipslay = "";
    } else {
      list[i].style.diplay = 'none';

    }
  }
};

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
  

}



