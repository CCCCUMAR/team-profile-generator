class Engineer {
    constructor(name, id, email, github){
        this.name = name;
        this.id = id;
        this.email = email;
        this.git = github;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email
    }
    getGithub(){
        return this.git
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;