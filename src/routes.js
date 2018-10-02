import Projects from './Projects.vue'
import Maintenance from './Maintenance.vue'
import About from './About.vue'
import Services from './Services.vue'
import Contacts from './Contacts.vue'
import Main from './Main.vue'

export const routes = [
  //wtf
  {path: '/maintenance', component: Maintenance},
  {path: '/projects', component: Projects},
  {path: '/contacts', component: Contacts},
  {path: '/about', component: About},
  {path: '/services', component: Services},
  {path: '/', component: Main},
];
