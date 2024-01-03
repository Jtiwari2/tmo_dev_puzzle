
This is an application for user who wants to read the books. User can search for the books wish to read and can mark as "Want to read".
The book will be in reading list section.

Inside the "Book-search" user can search the book by using search option in which they use Formbuilder to get the value which type by
user and the same time the api(/api/books/search?q=ad) will be call to get the result when user click over seach icon and display the result in for the user and save it using "Store" (NgRx). Here the loop will work and show all the result and also will be a button to add the book in  the reading list if user wants to read so user can add book by "Want to read" button.

This will add all book deatils in seperte function which adds the particular book only and calls the reading list api(/api/reading-list) to 
add the book in reading section and also will save the item locally. 

Here , In the reading list section we have an option to remove the book which user does not want to read buy clicking over the remove icon 
when use clicks over remove icon, the DELETE api(api/reading-list/vWaNBwAAQBAJ) will be tiggered with book ID and remove the item and also any locally
item saved will also removed.

There is also have badges to show the total number of books are in reading list which counts based on how many books are being added to that section 
by user.


List the some minor improvment:- 

1) In the book-search.components.ts we should have mutable store observale like this inside the ngOnInit() function.
2) In the book-search.component.ts we have formatDate whihc is not useful as we can use pipe date function in that place.
3) We have empty ngOnInit() function in total-count.component.ts which is not useful.



Issue found by Lighthouse :-
1) Accessiable name in search bar button so add the accessiable name in mate-icon for search icon in book-search.compnent.html
2) Low contraint color of text which make user to difficult to read in book-search.component.html


Manually check issue found item:-
1) Add focus to search bar in book-search.component.html
2) Added new fucntionality by which user can switch to other element using TAB in book-search.component.scss
3) Whenever we add new item in the page will be highlighted in reading-list.component.html