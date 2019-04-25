import {adminName} from './admin.ts';
import './../style.scss';

const root = document.createElement('div');
root.innerHTML = `<p class="greeting">Hello admin ${adminName}.</p>`;
document.body.appendChild(root);
