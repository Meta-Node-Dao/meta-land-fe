// src/obj.ts
function omitObject(obj, ...keys) {
  const result = {};
  Object.keys(obj).forEach((key) => {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  });
  return result;
}

export {
  omitObject
};
