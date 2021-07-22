'use strict'

var permission = 0, client = {};

function register(){
    alert("Rozpoczyna się procedura rejestracji. ");

    client.firstName = prompt("Wprowadź swoje imię. ");
    client.secondName = prompt("Wprowadź swoje drugie imię (opcjonalnie): ");
    client.surname = prompt("Wprowadź swoje nazwisko: ");
    client.email = prompt("Wprowadź adres email: ");
    client.password = prompt("Wprowadź nowe hasło: ");
    client.pin = prompt("Wprowadź nowy numer PIN: ");

    alert("Rejestracja przebiegła pomyślnie. ");
    return;
}

function enterPIN(){
    var pinInput = prompt("Wprowadź numer PIN: ");
    if(pinInput === client.pin){
        return true;
    }
    else{
        return false;
    }
}

function debtReminder(){
    if(client.balance < 0)
        alert(`Uwaga! Jesteś dłużnikiem. Wisisz mi ${Math.abs(client.balance)}. Spłać albo będziesz miał kłopoty.`);
};

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

    if(amount > 0 || amount){}else
    {
        alert("Wprowadzona kwota jest nieprawidłowa.");
        return;
    }

    if(confirm(`Numer konta: ${code}, Tytuł przelewu: ${title}, Kwota: ${amount}.`) === false){
        alert("Przelew anulowano.");
        return;
    }

    if(enterPIN() === false){
        alert("Wprowadzony numer PIN jest nieprawidłowy.")
    }

    client.balance = client.balance - Math.abs(amount);
    alert("Pomyślnie dokonano przelewu! ");
    
    debtReminder();
    return;
}

function credit(){
    if(permission === 0){
        alert("Odmowa dostępu. ");
        return;
    }

    var revenue = Number(prompt("Ile zarabiasz?"));
    
    if(revenue < 500)
    {
        alert("Za mało zarabiasz. ");
        return;
    }
    
    if(revenue > 10000)
    {
        alert("Przepraszamy, ale ta usługa obecnie nie jest dostępna.");
        return;
    }
    
    var amount = Number(prompt("Ile chcesz dostać?"));
    var description = prompt("Na co chcesz przelew?");
    
    if(amount > 0 || amount){}else
    {
        alert("Wprowadzona kwota jest nieprawidłowa.");
        return;
    }

    if(confirm(`Opis: ${description}, Kwota: ${amount}.`) === false){
        alert("Kredyt anulowano.");
        return;
    }

    if(enterPIN() === false){
        alert("Wprowadzony numer PIN jest nieprawidłowy.")
    }

    client.balance = client.balance + Math.abs(amount);
    alert(`Dokonano kredytu na ${amount}. Pamiętaj by go spłacić w czasie. Obecnie saldo konta wynosi ${client.balance}.`);
    debtReminder();
    return;

}


