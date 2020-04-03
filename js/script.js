/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Powell Barrett
******************************************/

//Global Variables

const studentsList = document.querySelectorAll("li"); //targets all the li's on the page.

const studentsPerPage = 10; //limits the amount of items that will appear on the page to 10.

let pageNumber = 1
   
//Display Page Function

const showPage = (list, page, studentsList) => {
  const startIndex= (page * studentsPerPage) - studentsPerPage;
  const endIndex = (page * studentsPerPage) - 1;
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i <= endIndex) {
      list[i].style.display = "";
    } else {
      list[i].style.display = 'none';
    }
  }
};

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
  const pageCount = list.length / studentsPerPage;
  const page = document.getElementsByClassName("page") [0];
  const wrapper = document.createElement("ul");
  const div = document.createElement("div");
  div.classList.add ("pagination");
  page.appendChild (div);
  div.appendChild (wrapper);
  for (let i = 0; i < pageCount; i++) {
    const item = document.createElement ("li");
    wrapper.appendChild(item)
    const a = document.createElement ("a")
    a.innerHTML = i+1
    item.appendChild(a)
    a.addEventListener("click" ,() => {
      pageNumber = i+1
      showPage (list, pageNumber)
    })
  }
  
}
showPage(studentsList, pageNumber);
appendPageLinks(studentsList);


