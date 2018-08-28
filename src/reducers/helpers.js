export const toggleProperty = (posts, postId, property) => {
    return {
        ...posts,
        [postId]: {
            ...posts[postId],
            [property]: !posts[postId][property]
        }
    }
}

export const setPropertyValueOnCollection = (byId, postIds, property, value) => {
    const newById = postIds.reduce((byId, postId) => {
        const newById = setPropertyValue(byId, postId, property, value)
        return newById
    }, byId)

    return newById;
}

export const setPropertyValue = (collection, id, property, value) => {
    return {
        ...collection,
        [id]: {
            ...collection[id],
            [property]: value
        }
    }
}
export const updateRecordOnCollection = (collection, record) => {
    return {
        allIds: collection.allIds,
        byId: {
            ...collection.byId,
            [record.guid]: record
        }
    }
}


export const normalizeById = (collection) => {
    const allIds = collection.map(item => item.guid);
    const byId = collection.reduce((result, record) => {
        result[record.guid] = record;
        return result
    }, {});
    return{
        allIds: allIds,
        byId: byId
    }
}

export const addItemToCollection = (collection, item) => {
    return {
        allIds: [item.guid, ...collection.allIds],
        byId: {
            [item.guid]: item,
            ...collection.byId
        }
    }
}