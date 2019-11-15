import styled from 'styled-components'
import { colors } from 'styles'

import { Box as GrommetBox, BoxProps } from 'grommet'

// const BoxLabel =  styled.span`
//     font-size: 1rem;
//     font-weight: bold;
//     color: ${colors.green};
//     text-deconration: italic;
// `

interface ContainerProps extends BoxProps {
    selected?: boolean
    transparent?: boolean
    noPadding?: boolean
}

const Box = styled(GrommetBox)`
    background-color: 
        ${(props : ContainerProps) => 
            !!props.selected ? 
                colors.selectedGreen 
            : 
            !!props.transparent ?
                'transparent'
            :
                colors.gray 
        };
    ${ props => !!props.noPadding && 'padding: 0' }
    ${ props => !props.width && "width: 100%;" }
    ${ props => !props.height && "height: 100%;" }
    ${ props => !props.direction && "flex-direction: row;" }
    ${ props => !props.justify && "justify-content: space-between;" }
    ${ props => !props.align && "align-items: center;" }

    a.large {
        width: 100%;
        height: 100%;
        margin: 0;
        justify-content: center;
    }

    .input,
    input {
        background-color: ${ colors.white }
        width: 180px;
    }

    b {
        color: ${ colors.green };
        margin: 0 0.5em;
    }
`

// const Box : = (props: BoxProps) => {
//     const { gridArea } = props
//     return (
//         <BoxContainer gridArea={gridArea}>
//             <BoxLabel>text</BoxLabel>
//         </BoxContainer>
//     )
// }

export default Box