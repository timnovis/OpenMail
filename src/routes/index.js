import Login from '../components/views/Login';
import Dashboard from '../components/views/Dashboard';
import Campaigns from '../components/views/Campaigns';
import NewCampaign from '../components/views/Campaigns/New';
import Lists from '../components/views/Lists';
import List from '../components/views/Lists/List';
import Settings from '../components/views/Settings';

const Routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    forceRedirect: true,
  },
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    exact: true,
    protected: true,
  },
  {
    path: '/campaigns',
    name: 'campaigns',
    exact: true,
    component: Campaigns,
    protected: true,
  },
  {
    path: '/campaigns/new',
    name: 'newCampaign',
    exact: true,
    component: NewCampaign,
    protected: true,
  },
  {
    path: '/lists',
    name: 'lists',
    component: Lists,
    exact: true,
    protected: true,
  },
  {
    path: '/lists/:id',
    name: 'list',
    component: List,
    exact: true,
    protected: true,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
    exact: true,
    protected: true,
  },
];

export default Routes;
