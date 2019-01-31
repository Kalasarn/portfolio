import React, { Fragment } from "react"
import {Typography, ListItem, List, ListItemSecondaryAction, Dialog, DialogContent, DialogTitle, DialogContentText, IconButton} from '@material-ui/core'
import { Projects } from './Data'
import OpenInNewIcon from '@material-ui/icons/OpenInNewSharp';


class ProjectList extends React.Component
{
    constructor(props){
        super(props)
            this.state = {
                dialogOpen: false,
                dialogHeader: "",
                dialogText: ""
              };
            }

    openDialog = (project) => {

        this.setState({ dialogOpen: !this.state.dialogOpen, dialogHeader: project.title, dialogText: project.description });
    }

    closeDialog = () => {
        this.setState({dialogOpen: !this.state.dialogOpen});
    }

    render()
    {
    
        const whiteText=
        {
        color: 'white'           
        }

        let webProjects = Projects.map(project =>
             {if (project.category === "Web")
             return <ListItem key={project.id}><Typography variant="h6" style={whiteText}>{project.title}</Typography><ListItemSecondaryAction>
             <IconButton style={whiteText} onClick={this.openDialog.bind(this, project)}>
               <OpenInNewIcon />
             </IconButton>
           </ListItemSecondaryAction>
           </ListItem>
             else
             return ""
            })

        const nonWebProjects = Projects.map(project =>
                {if (project.category !== "Web")
                return <ListItem key={project.id}><Typography variant="h6" style={whiteText}>{project.title}</Typography><ListItemSecondaryAction>
                <IconButton style={whiteText} onClick={this.openDialog.bind(this, project)}>
                  <OpenInNewIcon />
                </IconButton>
              </ListItemSecondaryAction></ListItem>
                else
                return ""
               })
        
    return(
        <Fragment>

            <div className="projektWebDiv">
                <List subheader={<Typography variant="h5" style={whiteText}>Hemsida</Typography>}>    
                {webProjects}
                </List>
            </div>
            <div className="projektNonWebDiv">
                <List subheader={<Typography variant="h5" style={whiteText}>Övrigt</Typography>}>
                 {nonWebProjects}       
                </List>
            </div>
        
        <Dialog open={this.state.dialogOpen} onClose={this.closeDialog}>
        <div className="dialogDiv">
        <DialogTitle><Typography variant="h4" style={whiteText}>{this.state.dialogHeader}</Typography></DialogTitle>
        <DialogContent>
            <DialogContentText style={whiteText}>   
              {this.state.dialogText}
            </DialogContentText>
           
          </DialogContent>  
          </div>
        </Dialog>
        
        </Fragment>
    );
}
    
}

export default ProjectList