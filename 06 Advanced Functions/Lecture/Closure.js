function constructor(){
    let privateProperty = 'Nasko';
    let changePrivateProperty = setter();
    console.log(privateProperty);

    function setter(){
        let publicProperty = 'Petrenski';
        console.log(`in setter change ${privateProperty} to Petrenski`)
        privateProperty = publicProperty;
    }

    return getter;

    function getter(){
        let greating = 'Hi!'
        console.log(greating, privateProperty, changePrivateProperty);
    }
}

const funcSpeak = constructor();

funcSpeak();