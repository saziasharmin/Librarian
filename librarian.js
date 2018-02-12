var library = [
  { title: "Norse Mythology", year: "2017", author: "Neil Gaiman", publisher: "W. W. Norton & Company" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },
  { title: "Mythos: A Retelling of the Myths of Ancient Greece", year: "1981", author: "Stephen Fry", publisher: "Penguin" },
  { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
  { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Harry F. Jordan", publisher: "The Pragmatic Bookshelf" },
  { title: "Computer Systems Design and Architecture", year: "2004", author: "Vincent P. Heuring and Harry F. Jordan", publisher: "Pearson/Prentice Hall" }
];

/* Task 1 */
function getBookTitle( index ){
  return library[index].title;
}

console.log(getBookTitle(3));

/* Task 3 */
function addBook( book ){
  library.push(book);
    return library;
}

var newBook = {title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons"};
console.log(addBook(newBook));

/* Task 4 */
function bookByAuthor(){
    
var byAuthor = library.slice(0);
    byAuthor.sort(function(a,b) {
        
        var x = a.author.toLowerCase();
        var y = b.author.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
        
    });
    console.log('Sorted by author:');
    
  return byAuthor;
}

console.log(bookByAuthor());

/* Task 5 */
function findByTitle( title ){
  //add code
    var pattern=new RegExp(""+title,"i");
    var x=[];
    for ( i in library)
        {
            var st=library[i].title;
            if(st.search(pattern)!=-1)
            {
                x.push(library[i]);
            }
        }
    //console.log(x);
    return x;
}

console.log(findByTitle("man"));
console.log(findByTitle("myth"));
