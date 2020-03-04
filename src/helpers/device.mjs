/**
 * Check the User-Agent and returns true if it looks like iOS
 *
 * @return boolean
 */
export const isDeviceIOS = (
  userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined
) => userAgent && /iphone|ipad|ipod/gi.test(userAgent);

/**
 * Check the User-Agent and returns true if it looks like a mobile device
 *
 * @return boolean
 */
export const isDeviceMobile = (
  userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined
) => userAgent && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/gi.test(userAgent);

/**
 * Check if the device is standalone
 *
 * @return boolean
 */
export const isDeviceStandalone = (
  standalone = typeof navigator !== 'undefined' ? navigator.standalone : false,
  matchMedia = typeof window !== 'undefined' ? window.matchMedia : undefined
) =>
  standalone ||
  (typeof matchMedia === 'function' && matchMedia('(display-mode: standalone)').matches);
