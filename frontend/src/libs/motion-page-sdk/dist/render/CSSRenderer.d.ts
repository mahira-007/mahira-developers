/**
 * CSSRenderer - Render CSS properties to DOM elements
 *
 * Handles:
 * - Transform properties (x, y, rotate, scale, etc.)
 * - Standard CSS properties (opacity, backgroundColor, etc.)
 * - Unit handling (px, %, deg, etc.)
 * - Auto-batching: queues during animation tick, writes immediately otherwise
 *
 * The render system automatically detects context:
 * - Inside Ticker tick → queue for batch flush at end of frame (performance)
 * - Outside tick → write immediately to DOM (responsiveness for seek/progress/etc.)
 */
import type { ParsedFilterFunction } from '../utils/FilterParser';
import type { ParsedClipPath } from '../utils/ClipPathParser';
/**
 * Set a CSS property value on an element
 * Automatically batches during animation tick, writes immediately otherwise
 */
export declare function setCSSProperty(element: Element, property: string, value: number, unit: string): void;
/**
 * Set a regular CSS property whose explicit start/end values use different
 * units. Endpoints are emitted as authored; intermediate frames use CSS calc()
 * so the browser resolves mixed units natively.
 */
export declare function setCSSMixedUnitProperty(element: Element, property: string, startValue: number, startUnit: string, endValue: number, endUnit: string, progress: number): void;
/**
 * Set a compound CSS string property (transform-origin, background-position, …)
 * verbatim. Unlike setCSSProperty, the value is a full multi-token CSS string
 * already assembled by the caller, so it's written as-is (no value+unit
 * concatenation). Batches during a tick, writes immediately otherwise.
 */
export declare function setCSSStringProperty(element: Element, property: string, value: string): void;
/**
 * Set a CSS color property value on an element
 * Takes RGBA values directly for performance (avoids string formatting in hot path)
 */
export declare function setCSSColorProperty(element: Element, property: string, r: number, g: number, b: number, a: number): void;
/**
 * Get computed value of a CSS property
 */
export declare function getCSSProperty(element: Element, property: string): string;
/**
 * Set a CSS filter property value on an element
 * Interpolates between start and end filter arrays at given progress
 */
export declare function setCSSFilterProperty(element: Element, startFilters: ParsedFilterFunction[], endFilters: ParsedFilterFunction[], progress: number): void;
/**
 * Set a CSS clip-path property by interpolating two parsed shape functions.
 *
 * Mirrors `setCSSFilterProperty`: looks up the (optional) ClipPathParser
 * through SDKRegistry, interpolates the components at the given progress,
 * serializes the result to a CSS string, then either queues the write or
 * applies it immediately depending on tick context.
 */
export declare function setCSSClipPathProperty(element: Element, property: string, startClipPath: ParsedClipPath, endClipPath: ParsedClipPath, progress: number): void;
