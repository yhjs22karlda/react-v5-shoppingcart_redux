export const addProduct = (id) => {
    return {
        type: "add",
        payload: id
    }
}

export const removeProduct = (id) => {
    return {
        type: "remove",
        payload: id
    }
}