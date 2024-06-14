// Utility - flettern response from strapi cms by flatten attributes
export const flattenResponse = (data: any): any => {
    // Check - if data is a plain object; return as is if not
    if (typeof data !== "object" || data === null || data instanceof Date || typeof data === "function") {
        return data;
    }

    // Check - if data is an array, apply flattenAttributes to each element and return as array
    if (Array.isArray(data)) {
        return data.map((item) => flattenResponse(item));
    }

    // Define - initialize an object with an index signature for the flattened structure
    let flattened: { [key: string]: any } = {};

    // Handle - iterate over each key in the object
    for (let key in data) {
        // Check - skip inherited properties from the prototype chain
        if (!data.hasOwnProperty(key)) continue;

        // Check - if the key is 'attributes' or 'data', and its value is an object, merge their contents
        if ((key === "attributes" || key === "data") && typeof data[key] === "object" && !Array.isArray(data[key])) {
            Object.assign(flattened, flattenResponse(data[key]));
        } else {
            // Assign - for other keys, copy the value, applying flattenAttributes if it's an object
            flattened[key] = flattenResponse(data[key]);
        }
    }

    return flattened;
};
