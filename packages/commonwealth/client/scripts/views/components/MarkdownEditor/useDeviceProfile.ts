export type DeviceProfile = 'mobile' | 'desktop';

export type DeviceOrientation = 'vertical' | 'horizontal';

function useDeviceOrientation(): DeviceOrientation {
  return [0, 180].includes(window.screen.orientation.angle)
    ? 'vertical'
    : 'horizontal';
}

/**
 * Depending on orientation, use the width/height to determine if we're mobile.
 */
function useDeviceCutoff() {
  const orientation = useDeviceOrientation();

  switch (orientation) {
    case 'vertical':
      return window.screen.width;
    case 'horizontal':
      return window.screen.height;
  }
}

const CUTOFF = 768;

export function useDeviceProfile(): DeviceProfile {
  const deviceCutoff = useDeviceCutoff();
  return deviceCutoff <= CUTOFF ? 'mobile' : 'desktop';
}
