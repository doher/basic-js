module.exports = function createDreamTeam(members) {
  const firstLetters = [];

  if (!Array.isArray(members)) return false;

  members.forEach(element => {
    if (typeof element === 'string') {
      firstLetters.push(element.trim()[0].toUpperCase());
    }
  });

  return firstLetters.sort().join('');
};