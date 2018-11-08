'use strict';

module.exports.lorem = async (event, context) => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },
    body: "<html>Pommy ipsum fish fingers and custard flip flops plum pudding eton mess flog a dead horse naff off baffled, nigh ask your mother if Sonic Screwdriver collywobbles teacakes give you a bell 'ar kid, come hither knee high to a grasshopper i'll be a monkey's uncle half-inch it fish and chips working class brainbox blummin'. Lass tallywhacker marvelous could murder a pint tip-top, sod's law barmy indeed. Scrubber apple and pears flabbergasted ey up crisps, what a load of cobblers a tenner tallywhacker tally-ho lost her marbles, chin up what a load of guff scatterbrained. Man and his whippet it's spitting what a load of cobblers meat and two veg, spiffing not some sort of dosshouse.</html>"
  };
};
