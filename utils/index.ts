import { CarProps, FilterProps } from "@/types";

export async function fetchCards(filters: FilterProps): Promise<any> {
    const { manufacturer, year, fuel, limit , model} = filters;

    const headers = {
        'X-RapidAPI-Key': '8da6b193eemshad77e71c3250f00p144e52jsnde05d61f0f78',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers,
    });

    return await response.json();
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay: number = 50;
    const mileageFactor: number = 0.1;
    const ageFactor: number = 0.05;

    const mileageRate: number = city_mpg * mileageFactor;
    const ageRate: number = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay: number = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(2);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);

    return `${window.location.pathname}?${searchParams.toString()}`;
}

export default calculateCarRent;