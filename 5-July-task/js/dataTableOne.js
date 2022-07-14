var dataSet = [
    {"id":"1","name":"Gray","phone":"01 54 36 02 31","email":"euismod.est@aol.ca","salary":"89482","country":"Belgium"},
    {"id":"2","name":"Jolene","phone":"07 26 94 89 17","email":"tincidunt.nunc.ac@aol.com","salary":"95982","country":"Peru"},
    {"id":"3","name":"Tad","phone":"03 46 80 56 46","email":"amet.ultricies@hotmail.net","salary":"39618","country":"Singapore"},
    {"id":"4","name":"Anthony","phone":"04 25 09 14 38","email":"sem.pellentesque@yahoo.edu","salary":"28265","country":"Costa Rica"},
    {"id":"5","name":"Keane","phone":"06 83 77 06 66","email":"sodales.nisi@hotmail.org","salary":"22465","country":"United States"},
    {"id":"6","name":"Yvonne","phone":"06 61 34 44 15","email":"vitae.risus@google.com","salary":"29468","country":"Colombia"},
    {"id":"7","name":"Lavinia","phone":"03 58 32 22 14","email":"mauris@outlook.net","salary":"49811","country":"Costa Rica"},
    {"id":"8","name":"Armand","phone":"04 34 73 43 97","email":"nunc.id.enim@yahoo.com","salary":"98939","country":"Ireland"},
    {"id":"9","name":"Timon","phone":"03 02 23 56 73","email":"diam.duis.mi@hotmail.edu","salary":"26334","country":"Vietnam"},
    {"id":"10","name":"Althea","phone":"03 06 87 16 56","email":"magna@outlook.couk","salary":"53698","country":"Colombia"},
    {"id":"11","name":"Moana","phone":"05 62 49 83 38","email":"cum.sociis@protonmail.org","salary":"40321","country":"Italy"},
    {"id":"12","name":"Arsenio","phone":"07 41 62 83 07","email":"fusce.aliquam.enim@hotmail.com","salary":"10201","country":"China"},
    {"id":"13","name":"Veda","phone":"02 45 28 52 88","email":"ipsum@outlook.couk","salary":"33058","country":"India"},
    {"id":"14","name":"Rebecca","phone":"03 35 44 31 51","email":"proin.non@hotmail.net","salary":"45186","country":"Australia"},
    {"id":"15","name":"Claudia","phone":"04 50 22 18 42","email":"magna.suspendisse@outlook.com","salary":"89136","country":"Italy"},
    {"id":"16","name":"Dennis","phone":"02 31 31 39 61","email":"aliquam@icloud.edu","salary":"91723","country":"Philippines"},
    {"id":"17","name":"Rahim","phone":"02 31 73 86 03","email":"congue.a.aliquet@aol.couk","salary":"21937","country":"Austria"},
    {"id":"18","name":"Odysseus","phone":"02 97 45 32 83","email":"sapien.imperdiet@aol.ca","salary":"79685","country":"Philippines"},
    {"id":"19","name":"Natalie","phone":"06 21 64 52 66","email":"ut@icloud.edu","salary":"47789","country":"Australia"},
    {"id":"20","name":"Galvin","phone":"01 28 34 44 39","email":"eget.mollis.lectus@protonmail.edu","salary":"73240","country":"Austria"},
    {"id":"21","name":"Uriel","phone":"09 58 50 04 98","email":"id.enim.curabitur@hotmail.com","salary":"62877","country":"Australia"},
    {"id":"22","name":"Colleen","phone":"04 34 47 15 31","email":"elit.etiam.laoreet@google.net","salary":"65995","country":"Turkey"},
    {"id":"23","name":"Kareem","phone":"08 68 15 80 07","email":"donec@hotmail.couk","salary":"46918","country":"Pakistan"},
    {"id":"24","name":"MacKensie","phone":"05 89 01 82 69","email":"sed@hotmail.couk","salary":"48277","country":"Canada"},
    {"id":"25","name":"Destiny","phone":"05 32 63 14 19","email":"sed.dictum@hotmail.net","salary":"40604","country":"Australia"},
    {"id":"26","name":"Jerry","phone":"04 32 42 11 33","email":"vivamus@aol.org","salary":"86864","country":"Belgium"},
    {"id":"27","name":"Wynne","phone":"02 11 82 93 49","email":"lobortis.mauris.suspendisse@hotmail.edu","salary":"19219","country":"Norway"},
    {"id":"28","name":"Sopoline","phone":"08 57 33 43 75","email":"ultrices@protonmail.ca","salary":"31021","country":"Netherlands"},
    {"id":"29","name":"Dylan","phone":"09 64 61 39 52","email":"aliquam.vulputate@icloud.net","salary":"63687","country":"Canada"},
    {"id":"30","name":"Nolan","phone":"08 88 53 88 52","email":"iaculis.lacus@hotmail.edu","salary":"49608","country":"New Zealand"},
    {"id":"31","name":"Iona","phone":"07 89 95 81 13","email":"nisi.sem@protonmail.com","salary":"67330","country":"Costa Rica"},
    {"id":"32","name":"Jessamine","phone":"06 81 53 47 27","email":"mus@hotmail.org","salary":"76786","country":"South Africa"},
    {"id":"33","name":"Martena","phone":"05 48 00 24 51","email":"libero@icloud.org","salary":"46455","country":"Philippines"},
    {"id":"34","name":"Lyle","phone":"08 57 51 25 92","email":"nam.porttitor.scelerisque@protonmail.com","salary":"57497","country":"Netherlands"},
    {"id":"35","name":"Reece","phone":"03 11 95 47 86","email":"odio.nam@protonmail.com","salary":"15694","country":"India"},
    {"id":"36","name":"Michael","phone":"04 65 12 64 84","email":"nunc.commodo@hotmail.net","salary":"21543","country":"Mexico"},
    {"id":"37","name":"Noah","phone":"04 72 13 61 30","email":"felis.adipiscing.fringilla@yahoo.ca","salary":"80494","country":"Philippines"},
    {"id":"38","name":"Frances","phone":"09 29 20 16 36","email":"morbi.accumsan.laoreet@protonmail.couk","salary":"50314","country":"Austria"},
    {"id":"39","name":"Desirae","phone":"02 88 90 87 93","email":"lacus.etiam@hotmail.edu","salary":"62786","country":"Russian Federation"},
    {"id":"40","name":"Bo","phone":"06 90 76 32 58","email":"felis@yahoo.ca","salary":"95661","country":"Vietnam"},
    {"id":"41","name":"Calista","phone":"07 87 12 18 23","email":"lacus@yahoo.com","salary":"39972","country":"Ireland"},
    {"id":"42","name":"Camden","phone":"02 41 74 88 56","email":"a.auctor@icloud.com","salary":"58590","country":"Costa Rica"},
    {"id":"43","name":"Rae","phone":"02 26 64 10 64","email":"quis.massa@aol.ca","salary":"34604","country":"Spain"},
    {"id":"44","name":"Elton","phone":"05 65 60 84 58","email":"commodo.ipsum.suspendisse@google.org","salary":"10838","country":"Mexico"},
    {"id":"45","name":"Sophia","phone":"08 53 88 30 96","email":"nisl.sem@google.edu","salary":"85037","country":"Australia"},
    {"id":"46","name":"Evelyn","phone":"07 18 82 75 61","email":"aenean.sed@hotmail.net","salary":"39331","country":"Nigeria"},
    {"id":"47","name":"Serina","phone":"08 82 33 48 48","email":"morbi.sit@google.edu","salary":"38623","country":"Poland"},
    {"id":"48","name":"Leroy","phone":"01 26 63 90 33","email":"tempus.risus@yahoo.net","salary":"34601","country":"Chile"},
    {"id":"49","name":"Willow","phone":"03 12 77 17 02","email":"molestie.dapibus@outlook.couk","salary":"98307","country":"Chile"},
    {"id":"50","name":"Signe","phone":"09 60 18 50 26","email":"eu.ultrices@yahoo.ca","salary":"75079","country":"United Kingdom"}

];

console.log(dataSet);

$(document).ready(function () {
    $('#demo').DataTable({
        data: dataSet,
        columns: [
            { title: "ID" || "id", data: "id" },
            { title: "Name" || "name", data: "name" },
            { title: "Phone" || "phone", data: "phone" },
            { title: "Email" || "email", data: "email" },
            { title: "Salary" || "salary", data: "salary" },
            { title: "Country" || "country", data: "country" } 
        ],
    });
});