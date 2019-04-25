import {userName} from './user.ts';
import './../style.scss';

const root = document.createElement('div');
root.innerHTML = `<p class="greeting">Hello user ${userName}.</p>`;
document.body.appendChild(root);
