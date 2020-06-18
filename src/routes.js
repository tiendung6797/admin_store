import React from 'react';

import StoreListPage from './Pages/StorePage/StoreListPage';
import StoreActionPage from './Pages/StorePage/StoreActionPage';

const routes = [

    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    {
        path: '/store-list',
        exact: false,
        main: () => <StoreListPage />
    },
    {
        path: '/store/add',
        exact: false,
        main: ({history}) => <StoreActionPage history={history}/>
    },
    {
        path: '/store/:id/edit',
        exact: false,
        main: ({ match, history }) => <StoreActionPage match={match} history={history} />
    }
   

]
export default routes;