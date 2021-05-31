import Vue from 'vue'
import VueRouter from 'vue-router'
import ExampleComponent from './components/ExampleComponent.vue'
import ContactsIndex from './views/ContactsIndex.vue'
import ContactsCreate from './views/ContactsCreate.vue'
import ContactsShow from './views/ContactsShow.vue'
import ContactsEdit from './views/ContactsEdit.vue'
import BirthdaysIndex from './views/BirthdaysIndex.vue'
import Logout from './Actions/Logout.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', component: ExampleComponent,
    meta: { title: 'Welcome' }
  },
  {
    path: '/contacts', component: ContactsIndex,
    meta: { title: 'Contacts' }
  },
  {
    path: '/contacts/create', component: ContactsCreate,
    meta: { title: 'Add New Contact' }
  },
  {
    path: '/contacts/:id', component: ContactsShow,
    meta: { title: 'Details for Contact' }
  },
  {
    path: '/contacts/:id/edit', component: ContactsEdit,
    meta: { title: 'Edit Contact' }
  },

  {
    path: '/birthdays', component: BirthdaysIndex,
    meta: { title: 'This Month\'s Birthdays' }
  },

  {
    path: '/logout', component: Logout,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router