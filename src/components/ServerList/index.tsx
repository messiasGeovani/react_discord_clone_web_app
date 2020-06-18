import React from 'react'

import { 
    Container,
    Separator
} from './styles'

// components
import ServerButton from '../ServerButton'

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton />
            <ServerButton hasNotification />
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotification />
            <ServerButton />
            <ServerButton mentions={1} />
            <ServerButton />
            <ServerButton />
            <ServerButton />
        </Container>
    )
}

export default ServerList