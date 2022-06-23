// VARIABLE:

// var email = "azharanowar@gmail.com";    // We won't declare a variable by var keyword anymore.
// console.log(email);
//
// let firstName = "Azhar";        // We will declare variable by let keyword always in javascript.
// let lastName = "Anowar";
// console.log( firstName, lastName );
//
// const pi = 3.1415;              // If variable value is constent then we use const keyword instead var or const.
// console.log(pi);




// CONDITIONAL STATEMENTS:


// IF Statement:

// let a = 20;
// let b = 10;
// if ( a > b ) {
//     console.log( "A is the learger then B" );
// }


// IF ELSE Statement:

// let a = 10;
// let b = 20;
// if ( a < b ) {
//     console.log( "A is learger than B" );
// } else {
//     console.log( "B is learger than A" );
// }


// IF ELSE IF Statement:

// let a = 10;
// let b = 20;
// if ( a > b ) {
//     console.log( "A is learger than B" );
// } else if ( a == b ) {
//     console.log( "A and B are equal" );
// } else {
//     console.log( "B is learger than A" );
// }


// SWITCH Statement:

// let randomNumber = 10;
// switch ( randomNumber ) {
//     case 1 :
//         console.log( 'One' );
//         break;
//     case 2 :
//         console.log( 'Two' );
//         break;
//     case 5 :
//         console.log( 'Five' );
//         break;
//     case 10 :
//         console.log( 'Teen' );
//         break;
//     case 20 :
//         console.log( 'Tweenty' );
//         break;
//     default :
//         console.log( 'Not Found' );
//         break;
// }




// LOOPS:

// We will use FOR loop when we known our loop starting, ending number and range. Example:
// for ( let i = 1; i <= 100; i++ ) {
//     console.log( i );
// }

// We will use WHILE loop when our loop ending number and range is unknown. Exaple:
// while ( true ) {
//     let num = Math.ceil( Math.random() * 100 );
//     console.log( num );
//     if ( num === 99 ) {
//         break;
//     }
// }

// We will use DO WHILE loop when we need minimum run loop statment minimum 1 time without any condition. Example:

// do {
//     console.log( "Run one time even the condition is fales!" );
// } while ( false );





// ARRAY:

// let studentInfo = [ "Azhar", "Anowar", "contact@azharanowar.com", 22, true ];
// console.log( studentInfo[0] );



// FUNCTION:

// function sendEmail( email ) {
//     console.log( "Email send to:", email );
// }

// sendEmail( "azhar@gmail.com" );




// OBJECT:

// let studentInfo =
//     {
//         firstName: "Azhar",
//         lastName: "Anowar",
//         email: "azharanowar@gmail.com",
//         age: 22,
//         attendence: true,
//     };
//
// console.log( studentInfo.firstName, studentInfo.lastName );




let studentsInfo = [
    {
        firstName: "Azhar",
        lastName: "Anowar",
        email: "azharanowar@gmail.com",
        age: 22,
        attendence: true,
    },
    {
        firstName: "Fozle",
        lastName: "Arafat",
        email: "fozlearafat21@gmail.com",
        age: 22,
        attendence: true,
    },
    {
        firstName: "Sorip",
        lastName: "Rahman",
        email: "arshorip@gmail.com",
        age: 21,
        attendence: false,
    },
    {
        firstName: "Ai",
        lastName: "Nihad",
        email: "ainihad@gmail.com",
        age: 22,
        attendence: true,
    },
    {
        firstName: "Asiful",
        lastName: "Islam",
        email: "asifulislamrefat@gmail.com",
        age: 20,
        attendence: false,
    }
]

function sendEmail( email ) {
    console.log( "Email send to:", email );
}


// for ( let i = 0; i < studentsInfo.length; i++ ) {
//     let email = studentsInfo[i].email;
//     console.log( "Email send to:", email );
// }


// studentsInfo.forEach( (item)  => console.log( item.firstName, item.lastName ) );
// studentsInfo.forEach( (item)  => console.log( item.email ) );






