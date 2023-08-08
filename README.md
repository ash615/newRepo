1. start running this from index.html

2. when any delete, add product, update request happens it internally works as it is fake api,
   but the UI actually not updates that doesn't mean that it is incorrect.
   Adding a new product will not add it into the server.
   It will simulate a POST request and will return the new created product with a new id
   Deleting a product will not delete it into the server.
   It will simulate a DELETE request and will return deleted product with "isDeleted" & "deletedOn" keys

3. Major focus was on UI Designing part. 

4. All the pages are created using HTML, CSS and Javacsript from scratch.

5. No any library even bootstrap, axios nothing used.

6. Modal, Header, Card for Product all are built using native Vanilla CSS, Javascript.

7. I have not maintained sperate folders for each of html, css, js because of it might cause issue while
   deploying this site to netlify for getting demo live url, so all files are kept in same folder only.
   But name of file is enough to get on its own purpose.

8. 