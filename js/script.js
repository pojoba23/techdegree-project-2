/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Powell Barrett
******************************************/



const studentsList = document.querySelectorAll("li"); //targets all the li's on the page.

const itemsPerPage = 10; //limits the amount of items that will appear on the page to 10.
   
//Display Page Function

const showPage = (list, page) => {
  let startIndex = (page * itemsPerPage) - itemsPerPage;
  let endIndex = (page * itemsPerPage)
  
  for (let i=1; i<list.length; i+=1){
    if (list[i] >= startIndex && list [i] <= endIndex)
      list [i].style.display = '';
  } else{
    list[i].style.display = 'none';
  }
};






/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/




