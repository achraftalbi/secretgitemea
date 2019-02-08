var people=[
    {name:'Judite', age:30,gender:'female'},
    {name:'Max', age:40,gender:'male'},
    {name:'Guillaume', age:50,gender:'male'},
    {name:'Joe', age:20,gender:'male'},
    {name:'Hind', age:35,gender:'female'},
    ];
    
    function groupGender(people){
        if(people && people.length>0){
            var groupGenderArray = {groupMale:[],groupFemale:[]};
            people.forEach(function(element) {
                if(element.age>=30 && element.age<=40){
                     if(element.gender=='male'){
                        groupGenderArray.groupMale.push(element);
                     }else{
                        groupGenderArray.groupFemale.push(element);
                     }
                }
            });
            return groupGenderArray;
        }
        return [];
    }
    
    console.log(groupGender(people));
