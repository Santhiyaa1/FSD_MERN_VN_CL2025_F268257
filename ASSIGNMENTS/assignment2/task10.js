function charge(choice){
    let msg;

    switch (choice){
        case 1:
            msg='Data pack';
            break;
        case 2:
            msg='talktime';
            break;
        case 3:
            msg='Validity Recharge';
            break;
        default:
            msg='Invalid Choice';
            break;
    }
    console.log(`Choice ${choice} results in: ${msg}`);
}
charge(3)