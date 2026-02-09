"Apps Web Tutorials" 


### Found Errors Tutorial #2

1. The attribute named "Category" had a Capital "C" when declared on the Model, because of that, on the show.ejs the category was not being shown on the description on the book. Changed to lower case "c".

2.  I'm not sure if it's an error, but the method of the controller name of main point it's in a weird Upper Case snake case. Knowing that the other methods are lower case, Changed it to just snake case.  

3. Not an error, but would make it better. There's not an attribute of description, so the description is just hardcoded text, making it horrible to be scalable. It's kinda not an important bother right now because we have 3 books and they are created here on the code. However, if we were to inject data onto the program, it would be really anyone and not functional to right each and everyone one of them onto the code. Didn't solve it

4. The controller main_point was returning a string, and the ejs was waiting an object "books". Changed it to = books.
