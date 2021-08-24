export const idMasking = id => {
  const count = parseInt(id.length / 2);
  const changeId = id.slice(0, count + 1);
  return changeId + '*'.repeat(count);
};
