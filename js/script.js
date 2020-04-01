/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Powell Barrett
******************************************/



const studentsList = document.querySelectorAll("li"); //targets all the li's on the page.

const itemsPerPage = 10; //limits the amount of items that will appear on the page to 10.
   
//Display Page Function

const showPage = (list, display) => {
  list= itemsPerPage;
  studentsPerPage = 10
  pagesPerStudents = itemsPerPage / 10;
  for (let i = 0; i < list.length; i++) {
    if (i >= studentsPerPage) {
      list[i].style.dipslay = "none";
    }
  }
  return showPage
};
console.log (showPage)

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
  

}



