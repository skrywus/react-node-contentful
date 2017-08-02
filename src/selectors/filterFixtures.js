const filterFixtures = (league, filter, isLoaded) => {

    if(isLoaded) {
        filter = filter.toLowerCase().trim();
        return league.fields.fixtures.filter(fixture => {
            const homePlayer = fixture.fields.homePlayer.fields.name.toLowerCase();
            const awayPlayer = fixture.fields.awayPlayer.fields.name.toLowerCase();

            return homePlayer.indexOf(filter) !== -1 || awayPlayer.indexOf(filter) !== -1;
        });
    }
    return league;
};

export default filterFixtures;