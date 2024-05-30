const KEY = 'a2cfdd1572ba1d32fadeeb0dfe6b5b80';

const getData = async (city) => {
    const base = 'https://api.openweathermap.org/data/2.5/weather';
    const query = `?q=${city}&appid=${KEY}&units=metric`;
    loader(true);
    try {
        const response = await fetch(base + query);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        loader(false);
    }
};