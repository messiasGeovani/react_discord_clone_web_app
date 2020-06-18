import React from 'react'

import { Grid } from './styles'

import ServerList from '../../components/ServerList'

const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
        </Grid>
    )
}

export default Layout