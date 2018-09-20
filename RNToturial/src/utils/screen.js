
import { 
    Dimensions, 
    PixelRatio,
} from 'react-native';

const win_width = Dimensions.get('window').width;
const win_height = Dimensions.get('window').height;

export const pt2px = pt=>PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px=>PixelRatio.roundToNearestPixel(px);

export default {
    width: win_width,
    height: win_height,
    onePixel: 1 / PixelRatio.get(),
    pageHeader: 50,
    fontScale: PixelRatio.getFontScale(),
    pixelRatio: PixelRatio.get(),
}

/**
 * 
 * @param {*} size 
 * 将一个布局尺寸(dp)转换为像素尺寸(px)
 */
  export function scaleSize(size) {  
    // size = PixelRatio.getPixelSizeForLayoutSize(size);
    size = PixelRatio.roundToNearestPixel(size);
    return size;
  }
  /**
 * 
 * @param {*} size 
 * 返回字体大小缩放比例
 */
  export function setSpText(size) {
    size = PixelRatio.getFontScale(size)
    return size;
  }