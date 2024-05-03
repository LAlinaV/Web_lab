import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, switchMap } from 'rxjs/operators';

const addButton = document.getElementById('add-btn');
const deleteButton = document.getElementById('delete-btn');
const menu = document.getElementById('menu');

fromEvent(addButton, 'click')
  .pipe(
    switchMap(() => ajax.getJSON('info.json')),
    map(data => {
      const div = document.createElement('div');
      div.textContent = JSON.stringify(data);
      return div;
    })
  )
  .subscribe(div => menu.appendChild(div));

fromEvent(deleteButton, 'click')
  .pipe(
    map(() => menu.lastChild),
    map(child => menu.removeChild(child))
  )
  .subscribe();