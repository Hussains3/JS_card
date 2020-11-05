var myDatabase = [
    {name:'Sabbir hussain',email:'email@mail.com',age:25},
    {name:'Tanvir hussain',email:'alom@mail.com',age:24},
    {name:'Jenny',email:'bitic@mail.com',age:23},
];
(function Avatars(db){
    var init  = function (){
        generateList();
        userForm();
    };
    var generateList = function (){
        var parentAvater = document.querySelector('#parentAvater');
        var template = '';

        for(var i=0; i<db.length; i++){
            
            template += '<div class="col-sm-4">'
            template += '<div class="card">'
            template += '<div class="card-delete" data-card="'+[i]+'">x</div>'
            template += '<div class="card-block">'
            template += '<h3 class="card-title">'+db[i].name+'</h3>'
            template += '<p class="card-text"><strong>Email:</strong><span>'+db[i].email+'</span></p>'
            template += '<p class="card-text"><strong>Age:</strong><span>'+db[i].age+'</span></p>'
            template += '</div>'
            template += '</div>'
            template += '</div>'

            parentAvater.innerHTML= '';
            parentAvater.insertAdjacentHTML('afterbegin',template);
            deleteCard();

        }
    };
    var userForm = function (){
        function grabUser(params) {
            var name = document.querySelector('#user_name').value;
            var email = document.querySelector('#user_email').value;
            var age = document.querySelector('#user_age').value;
            var newUser = [name,email,age];
            if (validateUser(newUser)) {
                //add card
                document.querySelector('#myForm').reset();
                db.push({name:name,email:email,age:age});
                generateList();
            } else {
                //show error
                document.querySelector('#error').style.display = 'block';
                setTimeout(() => {
                    document.querySelector('#error').style.display = 'none';
                }, 3000);
            }
        }
        document.querySelector('#myForm').addEventListener("submit", function (event) {
            event.preventDefault();
            grabUser();
        });
    };
    var validateUser = function(newUser){
        for (let i = 0; i < newUser.length; i++) {
            if (newUser[i] == "") {
                return false;
            }
            
        };
        return true;
    };
    var deleteCard = function () {
        var button = document.querySelectorAll('.card-delete');
        function deleteThis(elemant) {
            var obj = parseInt(elemant.getAttribute('data-card'));
            db.splice(obj,1);
            generateList();
        };
        for (var i = 0; i < button.length; i++) {
            button[i].addEventListener('click', function (e) {
                deleteThis(this);
            });
            
        }
    };
    init();
}(myDatabase))