import './style.scss';

const root = document.createElement('div');
root.innerHTML = `<p class="greeting">Hello Webpack. I am common file. 
Go to the ../user/user.html or to ../admin/admin.html</p>`;
document.body.appendChild(root);
