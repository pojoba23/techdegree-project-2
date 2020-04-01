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
  const page_list = Math.ceil(list.length / students_per_page);
    const page_div = document.querySelector('.page');
    const new_div = document.createElement('div');
    const ul = document.createElement('ul');
    new_div.className = 'pagination';
    page_div.appendChild(new_div);
    new_div.appendChild(ul);
}
  for(let i = 0; i < page_list; i++){
    let li = document.createElement('li');
    let anchor = document.createElement('a');
    anchor.setAttribute('href', '#');
    anchor.textContent = i + 1;
    li.appendChild(anchor);
    ul.appendChild(li);
    if(i === 0){
      anchor.className = 'active';
    }}

    anchor.addEventListener('click', (e) => {
      const li_active = document.querySelectorAll('.pagination a');

      for(let j = 0; j < li_active.length; j++){
         li_active[j].classList.remove('active');
      } 
      e.target.className = 'active';
      show_page(student_list, e.target.textContent);
      e.preventDefault();
    });
    showPage (studentsList, 1)
    appendPageLinks (studentsList)
