export async function fetchCards() {
    const headers = {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST
    }

    // @ts-ignore
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
        headers: headers,
    });

    return await response.json();
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export default calculateCarRent;