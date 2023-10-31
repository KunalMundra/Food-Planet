
export function filterData(SearchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase()?.includes(SearchText)
    )

    return filterData;
}