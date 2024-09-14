1. npm i @angular/cli
2. ng new projectname
3. go to your project and from command prompt .. go to  vs code

4. Install  ag grid: npm install ag-grid-angular 
(This will by default install latest version, for older angular versions, you  need to check compatible ag - grid versions.)

5. Import these in your components :

import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community';

6. Import these in style.css:
/* Core Data Grid CSS */
@import 'ag-grid-community/styles/ag-grid.css';
/* Quartz Theme Specific CSS */
@import 'ag-grid-community/styles/ag-theme-quartz.css';

7. Import these default ag-grid built in css and theme:
into styles[] in angular.json:

"ag-grid-community/styles/ag-grid.css",
 "ag-grid-community/styles/ag-theme-quartz.css"
        

-------That;s it for setup of angular grid ------------------------

If you want to use Bootstrap, 

1) In index.html (refer my index.html)

 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
