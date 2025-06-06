 // NOTE:
 In this line the review indices are from 0 to 3 but the length is four
 therefore, when the currentReview increments and gets to four, there 
 is no such index as index 4 in our case. We subtract 1 from the reviews
 length to achieve three and if currentReview increments past 3 it is 
 taken back to 0, forming a loop or carousel


 currentReview++;
 if(currentReview > reviews.length-1){
      currentReview = 0;
    }


This is the reverse...

currentReview--;
    if(currentReview < 0){
      currentReview = reviews.length-1;
    }



This line waits for the structure of document to be complete for it 
to run the javascript that depends on the DOM

window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentReview);
    
});

In this case 

img.src = person.img;
author.textContent = person.name;

rely on;
 <img src="#" id="person-image" alt="image" />
          </div>
          <h4 id="author"> 
            <!-- author -->
          </h4>


If the browser executes JS before the DOM is loaded, the elements will
not be found hence it throws an error. JS may run too early, fail to find 
elements