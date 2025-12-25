const name = ["Taylor", "Donald", "Natasha"];

const announcements = name.map(member => {
    return member + ' joined the contest.';
});

console.log(announcements);