function productFib(prod) {
    let a = 0;
    let b = 1;
    
    [a, b].forEach(() => {
        const next = a + b;
        if (a * b === prod) {
            return [a, b, true];
        }
        a = b;
        b = next;
    });
    
    return [a, b, a * b === prod];
}

