import React, { useRef, useEffect } from 'react'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'
import { Mention } from '../ChannelMessage'

// components
import ChannelMessage from '../ChannelMessage'

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const div = messagesRef.current

        if (div) div.scrollTop = div.scrollHeight
    }, [])

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage 
                        key={n}
                        author="Messias Geovani"
                        date="21/05/2020"
                        content="Feliz ano novo"
                    />
                ))}

                <ChannelMessage 
                    author="Unknow"
                    date="10/03/2020"
                    content={
                        <>
                            <Mention>Messias Geovani</Mention> poderia comparecer na sede da interpol na segunda por favor?
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />

                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData