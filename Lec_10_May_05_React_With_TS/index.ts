// type USER_TYPE={
//     name:string,
//     age:number,
//     isActive?:boolean
// }

// const user1:USER_TYPE={
//     name:'john',
//     age:21,
// }
// // user1.

// // Diff-1
// //interfaces can extent
// interface IAnimal{
//     barks:boolean
// }
// interface IAnimal{
//     name:string
// }
// // const animal:IAnimal={

// // }

// type AnimalType={
//     name:string
// }
// type AnimalType2={
//     barks:boolean
// }

// type FinalType=AnimalType &AnimalType2
// const MyPet:FinalType={
//     name:'sdfa',barks:false
// }


// let x:number=4 //define type on initialisation,one liner initialiser 

// type NameType=string
// let username:NameType='peter'


function sum(a:number,b:number):number{
    return a+b
}
console.log(sum(1,2)) //string 12