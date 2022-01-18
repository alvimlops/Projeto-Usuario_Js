class UserController {

    constructor(formId){

        this.formEl = document.getElementById(formId);

    }
    getValue(){

        let user = {};
        
        this.formEl.elements.forEach(function(field, index){

            if (field.name == "gender"){
                if (field.checked){
                    user[field.name] = field.value;
                }
            } else {
                user[field.name] = field.value;
            }

            

        });

         return new User(
            user.name,
            user.gender,
            user.birth,
            user.country,
            user.email,
            user.password,
            user.photo,
            user.admin
        );
            


    }

       








    




   
}
