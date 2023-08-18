export class User{
    users = [{
        id : "user-1",
        name : 'Vinita',
        contact : 2145899847,
        password : 'vinita#123',
        role : 'student'
    }]

    read = (req,res) => res.send(this.users)
    login = (req,res) => {
        const user = res.send(this.users.find(u => u.contact === req.body.contact && u.password === req.body.password))
        if(user){
            res.status(200).send({
                bsuccess : true,
                authenticationToken : user.id,
                ...user
            })
        }else{
            res.status(401).send({
                bsuccess : false,
                message : 'Invalid Credentials'
            })
        }
    }
    add = (req,res) => {
        const user = this.users.find(u => u.contact === req.body.contact)
        if(user){
            res.status(409).send({
                bsuccess : false,
                message:"User already exist!!"
            })
        }
        else{
            this.users.push({
                id : `user-${this.users.length + 1}`,
                ...req.body
            })

            
            res.status(201).send({
                bsuccess : true,
                ...req.body
            })
        }
    }
    updateRole = (req,res) => {
        const userIndex = this.users.findIndex(u => u.id === req.params.id)
        this.users[userIndex]["role"] = req.body.role
        res.send(this.users[userIndex])
    }
}