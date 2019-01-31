import React from 'react'
import { List, ListItem, Typography } from '@material-ui/core'
import { Techniques } from './Data'


const whoText=
{
    color: 'white'
}

const techList = Techniques.map(tech => <ListItem key={tech.id}><Typography variant="h6" style={whoText}>{tech.title}</Typography></ListItem>) 

const listStyle =
{
    columnCount: 3,
    columnGap: 2
}


function Techs()
{

    return(
        
            <div className="techDiv">
                <List style={listStyle}>
                {techList}
                </List>
                </div>

    )
}

export default Techs