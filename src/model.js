var helloData = [];

export async function parseCSV(url) {
    try {
        console.log('parseCSV start');
        const response = await fetch(url);
        console.log('parseCSV middle');
        helloData = JSON.parse(await response.text());
        console.log('helloData:', helloData);

        return helloData;
    } catch (error) {
        console.error('Error fetching or parsing CSV:', error);
        throw error; // Rethrow the error if you want to handle it outside
    }
}

export function concatenateHelloValues(zipCode) {
    // Filter rows by zip code and exclude 'NA'

    console.log("helloData ",  helloData);

    const filteredRows = helloData.filter(row => row.Zipcode === zipCode && row.Hello !== 'NA');

    // Extract the 'hello' values
    const helloValues = filteredRows.map(row => row.Hello);

    // Concatenate with '|'
    const concatenatedValues = helloValues.join('|');

    console.log("concatenatedValues: ", concatenatedValues);

    return concatenatedValues;
} 