export const loadData = (url) => {
        const response = fetch(url); 
        const data = response.json(); 
        return data; 
    }
    