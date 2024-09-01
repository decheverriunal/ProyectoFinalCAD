import testData from "./testData.js";

let firstNames = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan", "Abel", "Abhinav", "Abhisumant", "Abid", "Abir", "Abraham", "Abu", "Abubakar", "Ace", "Adain", "Adam", "Adam-James", "Addison", "Addisson", "Adegbola", "Adegbolahan", "Aden", "Adenn", "Adie", "Adil", "Aditya", "Adnan", "Adrian", "Adrien", "Aedan", "Aedin", "Aedyn", "Aeron", "Afonso", "Ahmad", "Ahmed", "Ahmed-Aziz", "Ahoua", "Ahtasham", "Aiadan", "Aidan", "Aiden", "Aiden-Jack", "Aiden-Vee", "Aidian", "Aidy", "Ailin", "Aiman", "Ainsley", "Ainslie", "Airen", "Airidas", "Airlie", "AJ", "Ajay", "A-Jay", "Ajayraj", "Akan", "Akram", "Al", "Ala", "Alan", "Alanas", "Alasdair", "Alastair", "Alber", "Albert", "Albie", "Aldred", "Alec", "Aled", "Aleem", "Aleksandar", "Aleksander", "Aleksandr", "Aleksandrs", "Alekzander", "Alessandro", "Alessio", "Alex", "Alexander", "Alexei", "Alexx", "Alexzander", "Alf", "Alfee", "Alfie", "Alfred", "Alfy", "Alhaji", "Al-Hassan", "Ali", "Aliekber", "Alieu", "Alihaider", "Alisdair", "Alishan", "Alistair", "Alistar", "Alister", "Aliyaan", "Allan", "Allan-Laiton", "Allen", "Allesandro", "Allister", "Ally", "Alphonse", "Altyiab", "Alum", "Alvern", "Alvin", "Alyas", "Amaan", "Aman", "Amani", "Ambanimoh", "Ameer", "Amgad", "Ami", "Amin", "Amir", "Ammaar", "Ammar", "Ammer", "Amolpreet", "Amos", "Amrinder", "Amrit", "Amro", "Anay", "Andrea", "Andreas", "Andrei", "Andrejs", "Andrew", "Andy", "Anees", "Anesu", "Angel", "Angelo", "Angus", "Anir", "Anis", "Anish", "Anmolpreet", "Annan", "Anndra", "Anselm", "Anthony", "Anthony-John", "Antoine", "Anton", "Antoni", "Antonio", "Antony", "Antonyo", "Anubhav", "Aodhan", "Aon", "Aonghus", "Apisai", "Arafat", "Aran", "Arandeep", "Arann", "Aray", "Arayan", "Archibald", "Archie", "Arda", "Ardal", "Ardeshir", "Areeb", "Areez", "Aref", "Arfin", "Argyle", "Argyll", "Ari", "Aria", "Arian", "Arihant", "Aristomenis", "Aristotelis", "Arjuna", "Arlo", "Armaan", "Arman", "Armen", "Arnab", "Arnav", "Arnold", "Aron", "Aronas", "Arran", "Arrham", "Arron", "Arryn", "Arsalan", "Artem"]
let lastNames = ["Aaberg", "Aaby", "Aadland", "Aagaard", "Aakre", "Aaland", "Aalbers", "Aalderink", "Aalund", "Aamodt", "Aamot", "Aanderud", "Aanenson", "Aanerud", "Aarant", "Aardema", "Aarestad", "Aarhus", "Aaron", "Aarons", "Aaronson", "Aarsvold", "Aas", "Aasby", "Aase", "Aasen", "Aavang", "Abad", "Abadi", "Abadie", "Abair", "Abaja", "Abajian", "Abalos", "Abaloz", "Abar", "Abarca", "Abare", "Abascal", "Abasta", "Abate", "Abati", "Abatiell", "Abato", "Abatti", "Abaunza", "Abaya", "Abbadessa", "Abbamonte", "Abbas", "Abbasi", "Abbassi", "Abbate", "Abbatiello", "Abbay", "Abbe", "Abbed", "Abbenante", "Abbey", "Abbinanti", "Abbington", "Abbitt", "Abbot", "Abbott", "Abboud", "Abbruzzese", "Abbs", "Abby", "Abdalla", "Abdallah", "Abdel", "Abdelal", "Abdelaziz", "Abdeldayen", "Abdelhamid", "Abdella", "Abdelmuti", "Abdelrahman", "Abdelwahed", "Abdi", "Abdin", "Abdo", "Abdon", "Abdool", "Abdou", "Abdul", "Abdula", "Abdulaziz", "Abdulkarim", "Abdulla", "Abdullah", "Abdullai", "Abdulmateen", "Abdulmuniem", "Abdur", "Abe", "Abeb", "Abed", "Abedelah", "Abedi", "Abee", "Abegg", "Abeita", "Abel", "Abela", "Abelar", "Abelardo", "Abele", "Abeles", "Abell", "Abella", "Abellera", "Abelman", "Abeln", "Abels", "Abelson", "Aben", "Abend", "Abendroth", "Aber", "Abercombie", "Abercrombie", "Aberle", "Abernatha", "Abernathy", "Abernethy", "Aberson", "Abes", "Abeta", "Abete", "Abetrani", "Abeyta", "Abide", "Abigantus", "Abila", "Abilay", "Abild", "Abilez", "Abina", "Abington", "Abitong", "Abke", "Abkemeier", "Ablang", "Ablao", "Able", "Ableman", "Abler", "Ables", "Ablin", "Abling", "Abner", "Abnet", "Abney", "Abo", "Abolafia", "Abolt", "Abood", "Aboshihata", "Aboud", "Aboudi", "Aboulahoud", "Aboulissan", "Abousaleh", "Aboytes", "Abplanalp", "Abrachinsky", "Abraham", "Abrahamian", "Abrahams", "Abrahamsen", "Abrahamson", "Abram", "Abramek", "Abramian", "Abramoff", "Abramov", "Abramovich", "Abramovitz", "Abramowitz", "Abramowski", "Abrams", "Abramson", "Abrantes", "Abreau", "Abrecht", "Abrego", "Abrell", "Abreo", "Abreu", "Abrev", "Abrew", "Abrey", "Abrial", "Abril", "Abriola", "Abrom", "Abron", "Abruzzese", "Abruzzino", "Abruzzo", "Absalon", "Abshear", "Absher", "Abshier", "Abshire", "Abson", "Abston", "Abt", "Abts", "Abu", "Abuaita", "Abubakr", "Abud", "Abuel", "Abugn", "Abuhl", "Abundis", "Abundiz", "Aburto", "Abusufait", "Acal", "Acampora", "Accala"]
let countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]

function randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function randomLowerWord(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function randomNumString(length) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function randomSentence(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 ';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

let id1
let fnames;
let lnames;
let alias;
let password;
let email;
let phoneNumber;
let country;

// for (let i = 1; i < 100; i++) {
//     id1 = randomString(16)
//     fnames = firstNames[Math.floor(Math.random()*firstNames.length)] + " " + firstNames[Math.floor(Math.random()*firstNames.length)]
//     lnames = lastNames[Math.floor(Math.random()*lastNames.length)] + " " + lastNames[Math.floor(Math.random()*lastNames.length)]
//     alias = randomString(Math.floor(Math.random()*22)+8)
//     password = randomString(Math.floor(Math.random()*22)+8)
//     email = randomString(Math.floor(Math.random()*16)+6) + "@" + randomLowerWord(Math.floor(Math.random()*6)+6) + "." + randomLowerWord(3)
//     phoneNumber = randomNumString(3) + "-" + randomNumString(3) + "-" + randomNumString(4)
//     country = countries[Math.floor(Math.random()*countries.length)]
//     console.log("{id: \""+ id1 + "\", names: \"" + fnames + "\", lastNames: \"" + lnames + "\", alias: \"" + alias + "\", password: \"" + password + "\", eMail: \"" + email + "\", phoneNumber: \"" + phoneNumber + "\", country: \"" + country + "\"},")
// }

let id2;
let iamURL;
let pdfURL;
let quotepdfURL;
let idUser;

// for (let i = 1; i < 200; i++) {
//     id2 = randomString(16)
//     iamURL = "https://" + randomLowerWord(Math.floor(Math.random()*10)+5) + "." + randomLowerWord(3) + "/" + randomString(Math.floor(Math.random()*3)+7)
//     pdfURL = "https://" + randomLowerWord(Math.floor(Math.random()*10)+5) + "." + randomLowerWord(3) + "/" + randomString(Math.floor(Math.random()*3)+7)
//     quotepdfURL = "https://" + randomLowerWord(Math.floor(Math.random()*10)+5) + "." + randomLowerWord(3) + "/" + randomString(Math.floor(Math.random()*3)+7)
//     idUser = testData.usersProfiles[Math.floor(Math.random()*testData.usersProfiles.length)].id
//     console.log("{id: \""+ id2 + "\", IAM_URL: \"" + iamURL + "\", PDF_URL: \"" + pdfURL + "\", QUOTE_PDF_URL: \"" + quotepdfURL + "\", idUser: \"" + idUser + "\"},")
// }

let statusStr;

// for (let i = 1; i <= 10; i++) {
//     statusStr = randomString(Math.floor(Math.random()*10)+10)
//     console.log("{id: \""+ i.toString() + "\",Status: \"" + statusStr + "\"},")
// }

let id3;
let idReqStatus;
let idReqUser;

// for (let i = 1; i < 200; i++) {
//     id3 = randomString(16)
//     idReqStatus = testData.requestTypes[Math.floor(Math.random()*testData.requestTypes.length)].id
//     idReqUser = testData.usersProfiles[Math.floor(Math.random()*testData.usersProfiles.length)].id
//     console.log("{id: \""+ id3 + "\", request_status: \"" + idReqStatus + "\", idUser: \"" + idReqUser + "\"},")
// }

let id4;
let usEmail;
let diameter;
let length;
let thickness;
let state;

for (let i = 1; i < 200; i++) {
  id4 = randomString(16)
  usEmail = randomString(Math.floor(Math.random()*16)+6) + "@" + randomLowerWord(Math.floor(Math.random()*6)+6) + "." + randomLowerWord(3)
  diameter = Math.random()*1100 + 700
  length = Math.random()*2500 + 1500
  thickness = Math.random()*150 + 50
  state = randomSentence(Math.floor(Math.random()*10)+10)
  console.log("{id: \""+ id4 + "\", user_email: \""+ usEmail + "\", diameter: "+ diameter + ", length: "+ length + ", thickness: "+ thickness + ", state: \""+ state + "\"},")
}