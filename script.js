'use strict'

var permission = 0, client;

function register(){
    alert("Rozpoczyna się procedura rejestracji. ");

    var firstName = prompt("Wprowadź swoje imię. ");
    var secondName = prompt("Wprowadź swoje drugie imię (opcjonalnie): ");
    var surname = prompt("Wprowadź swoje nazwisko: ");
    var email = prompt("Wprowadź adres email: ");
    var password = prompt("Wprowadź nowe hasło");

    alert("Rejestracja przebiegła pomyślnie. ");

    return {
        firstName: firstName,
        secondName: secondName,
        surname: surname,
        email: email,
        password: password,
        balance: 0,
    }
}

function login(){
    if(permission === 1){
        alert("Jesteś już zalogowany.");
        return;
    }

    alert("Rozpoczyna się procedura logowania. ");
    var email = prompt("Wprowadź adres email: ");
    var password = prompt("Wprowadź hasło: ");

    if(email === client.email && password === client.password){
        permission = 1;
        alert(`Pomyślnie się zalogowano! Witaj ${client.firstName} ${client.secondName} ${client.surname} `);
    }
    else{
        alert("Wprowadzone dane są nieprawidłowe. ");
    }
    return;
}

function logout(){
    if(permission === 0){
        alert("Nie jesteś zalogowany");
        return;
    }
    permission = 0;
    alert("Pomyślnie wylogowano. ");
    return;
}

function transfer(){
    if(permission === 0){
        alert("Odmowa dostępu. ");
        return;
    }

    var code = Number(prompt("Wprowadź numer konta: "));
    var title = prompt("Wprowadź tytuł przelewu: ");
    var amount = Number(prompt("Wprowadź kwotę przelewu: "));

    if(confirm(`Numer konta: ${code}, Tytuł przelewu: ${title}, Kwota: ${amount}.`) === false){
        alert("Przelew anulowano.");
        return;
    }

    client.balance = client.balance - amount;
    alert("Pomyślnie dokonano przelewu! ");
    
    if(client.balance < 0)
        alert(`Uwaga! Jesteś dłużnikiem. Wisisz mi ${Math.abs(client.balance)}. Spłać albo będziesz miał kłopoty.`);
    return;
}

alert("Witaj w banku! Za chwilę rozpocznie się procedura rejestracji. "); 
client = register();
alert("Zaloguj się!");
login(); 
alert("Dokonaj przelewu! ");
transfer();
alert("No to się zalogowałeś. ");
logout();



