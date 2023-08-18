export class Team{
    teams = [{
        id : 'team-1',
        title : 'coders',
        order : 2145899847,
        members : [{
            id : 'member-1',
            name : 'vinita',
            title : 'coder-1',
            description : "i am coder",
            order : 327197985,
            photourl : "https./photo"
        },{
            id : 'member-2',
            name : 'shreya',
            title : 'coder-2',
            description : "i am coder",
            order : 327656785,
            photourl : "https./photo"
        }]
    }]

    read = (req,res) => res.send(this.teams)
    find = (req,res) => res.send(this.teams.find(t => t.id === req.params.id))
    add = (req,res) => {
        const team = this.teams.find(t => t.id === req.params.id)
        if(team){
            res.status(409).send({
                bsuccess : false,
                message:"team already exist!!"
            })
        }
        else{
            this.teams.push({
                id : `team-$(this.teams.length + 1)`,
                ...req.body
            })

            
            res.status(201).send({
                bsuccess : true,
                name : req.body.name,
                role : req.body.role
            })
        }
    }
    // updateRole = (req,res) => {
    //     const teamIndex = this.teams.findIndex(u => u.id === req.params.id)
    //     this.teams[teamIndex]["role"] = req.body.role
    //     res.send(this.teams[teamIndex])
    // }
}