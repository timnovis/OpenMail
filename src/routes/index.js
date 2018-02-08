import Dashboard from '../components/views/Dashboard';
import Campaigns from '../components/views/Campaigns';
import NewCampaign from '../components/views/Campaigns/New';
import Lists from '../components/views/Lists';

const Routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    exact: true,
  },
  {
    path: '/campaigns',
    name: 'campaigns',
    exact: true,
    component: Campaigns,
  },
  {
    path: '/campaigns/new',
    name: 'newCampaign',
    exact: true,
    component: NewCampaign,
  },
  {
    path: '/lists',
    name: 'lists',
    component: Lists,
    exact: true,
  },
];

export default Routes;
