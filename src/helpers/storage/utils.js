/**
 * Abstract interface to serialize and deserialize data in the different HTML5 APIs
 * It is currently implemented with support for localStorage and sessionStorage.
 *
 * @note values are internally serialised in the storage, meaning that only object properties would be kept after deserialisation.
 *
 * @throw in case the provided HTML5 API is not available (most likely because the browser is incompatible or a polyfill is missing)
 */
export const defineStorageInterface = provider => {
  // Ensure "provider" has all the required methods, such as:
  // - window.localStorage
  // - window.sessionStorage
  if (
    typeof provider !== 'object' ||
    !('getItem' in provider) ||
    !('setItem' in provider) ||
    !('hasOwnProperty' in provider) ||
    !('removeItem' in provider) ||
    !('clear' in provider)
  ) {
    throw new Error('The storage provider is either unavailable or invalid.');
  }

  /**
   * Safely get a value by key (string, boolean, object...) or undefined
   *
   * @param string key
   *
   * @return mixed
   */
  const get = key => {
    let value = undefined;

    try {
      value = JSON.parse(provider.getItem(key));
    } catch (error) {} /* eslint-disable-line no-empty */

    return value;
  };

  /**
   * Safely store a value (string, boolean, object...) by key
   *
   * @param string key
   * @param mixed value
   */
  const set = (key, value) => {
    provider.setItem(key, JSON.stringify(value));
  };

  /**
   * Check if a value is stored for the given key
   *
   * @param string key
   *
   * @return boolean
   */
  const has = key => {
    // return provider.hasOwnProperty(key);
    return Boolean(get(key));
  };

  /**
   * Remove an item by key
   *
   * @param string key
   */
  const remove = key => {
    provider.removeItem(key);
  };

  /**
   * Clear all items in the provider (to be used carefully!)
   */
  const clear = () => {
    provider.clear();
  };

  return {
    get,
    set,
    has,
    remove,
    clear
  };
};
