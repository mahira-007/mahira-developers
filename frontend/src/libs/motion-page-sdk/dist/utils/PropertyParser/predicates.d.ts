/**
 * PropertyParser predicates — classify a property by name and detect
 * color-like values.
 */
import type { PropertyValue } from './types';
/**
 * Check if a property is a transform property
 */
export declare function isTransformProp(prop: string): boolean;
/**
 * Check if a property is a color property
 */
export declare function isColorProp(prop: string): boolean;
/**
 * Check if a property is the filter property
 */
export declare function isFilterProp(prop: string): boolean;
/**
 * Check if a property is the drawSVG property
 */
export declare function isDrawSVGProp(prop: string): boolean;
/**
 * Check if a property is the path property (motion path)
 */
export declare function isPathProp(prop: string): boolean;
/**
 * Check if a property is the clip-path property (accepts both kebab and camel case)
 */
export declare function isClipPathProp(prop: string): boolean;
/**
 * Check if a property is a compound CSS string property (transform-origin,
 * background-position, …) that must be applied verbatim rather than parsed as
 * a single numeric scalar.
 */
export declare function isStringProp(prop: string): boolean;
/**
 * Check if a property is a discrete keyword property (pointer-events, visibility,
 * …) whose value is a non-numeric CSS keyword. These must be applied verbatim
 * (via the string renderer) rather than parsed as a numeric scalar, which would
 * turn `none`/`hidden` into `0` and have the browser ignore the invalid value.
 */
export declare function isKeywordProp(prop: string): boolean;
/**
 * Check if a property configures a transform's reference point (transform-origin,
 * perspective-origin). These are "set and hold": when only one endpoint specifies
 * them they stay constant for the whole tween instead of decaying to/from the
 * element's natural origin (which would move the transform pivot mid-tween).
 */
export declare function isTransformConfigProp(prop: string): boolean;
/**
 * Check if a property is a CSS variable (custom property)
 */
export declare function isCSSVariable(prop: string): boolean;
/**
 * Check if a value looks like a color (for CSS variable type detection)
 */
export declare function looksLikeColor(value: PropertyValue): boolean;
