# Todo UI

ng new todo-ui --routing --style=scss
cd todo-ui
npm install
ng s -o

ng add @angular/material

ng generate module modules/material --flat

npm install --save bootstrap

ng g c components/home --module=app --spec=false
ng g c components/about --module=app --spec=false
