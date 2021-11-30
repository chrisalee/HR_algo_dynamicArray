/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

const dynamicArray = (n, queries) => {
    let results = [];
    let lastAnswer = 0;
    let sequencies = [];

    for (let i = 0; i < n; i++) {
        sequencies.push([]);
    }

    queries.forEach(function (query) {
        const index = (query[1] ^ lastAnswer) % n;
        const targetSequence = sequencies[index];

        if (query[0] === 1) {
            targetSequence.push(query[2]);
        }

        if (query[0] === 2) {
            lastAnswer = targetSequence[(query[2] % targetSequence.length)];
            results.push(lastAnswer);
        }
    });

    return results;
}

////////////////////////////////////////////////////////////////////////////////
const dynamicArray = (n, queries) => {
    let arr = [...new Array(n)].map(x => []);
    let lastAnswer = 0;
    let ans = [];
    queries.forEach(v => {
        let idx = (v[1] ^ lastAnswer) % n;
        switch (v[0]) {
            case 1:
                arr[idx].push(v[2]);
                break;
            case 2: lastAnswer = arr[idx][v[2] % arr[idx].length];
                ans.push(lastAnswer);
                break;
            default:
        }
    });
    return ans;
}
