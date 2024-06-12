
export function filterData(SearchText, restaurants) {
    console.log(restaurants)
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase()?.includes(SearchText?.toLowerCase())
    )

    return filterData;
}